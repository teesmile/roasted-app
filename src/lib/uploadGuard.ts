import { createHash, createHmac, randomBytes, timingSafeEqual } from "crypto";

// Server-only helpers for protecting the share-image upload.
// Imported only from src/app/actions.tsx ('use server'), never from client code.
if (typeof window !== "undefined") {
  throw new Error("uploadGuard must only be imported on the server");
}

// --- Limits ---
export const MAX_UPLOAD_BYTES = 3 * 1024 * 1024; // 3 MB
export const ALLOWED_MIME_TYPES = new Set(["image/png"]);
export const ROAST_IMAGE_WIDTH = 1080;
export const ROAST_IMAGE_HEIGHT = 1080;
const TOKEN_TTL_MS = 30 * 60 * 1000; // a roast can be shared for 30 minutes
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5; // uploads per IP per window

// --- Upload tokens ---
// generateRoastAction issues a signed, short-lived, single-use token bound to the
// roasted username and roast text. uploadImageAction only accepts uploads that
// carry a valid token, so only images for a roast this server generated get in.

interface TokenPayload {
  u: string; // username (lowercase)
  r: string; // sha256 of the roast text
  e: number; // expiry, ms since epoch
  n: string; // nonce
}

function getSecret(): string {
  const secret = process.env.ROAST_UPLOAD_SECRET || "";
  if (secret.length < 32) {
    throw new Error("ROAST_UPLOAD_SECRET is missing or shorter than 32 characters");
  }
  return secret;
}

function sign(data: string): string {
  return createHmac("sha256", getSecret()).update(data).digest("base64url");
}

export function hashRoast(roast: string): string {
  return createHash("sha256").update(roast).digest("base64url");
}

export function issueUploadToken(username: string, roast: string): string {
  const payload: TokenPayload = {
    u: username.toLowerCase(),
    r: hashRoast(roast),
    e: Date.now() + TOKEN_TTL_MS,
    n: randomBytes(16).toString("base64url"),
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body)}`;
}

// Nonces already used on this instance (best effort; see note on rate limiting).
const usedNonces = new Map<string, number>();

export function verifyUploadToken(token: string): TokenPayload {
  const [body, sig] = token.split(".");
  if (!body || !sig) throw new UploadRejected("Invalid upload token");

  const expected = Buffer.from(sign(body));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
    throw new UploadRejected("Invalid upload token");
  }

  let payload: TokenPayload;
  try {
    payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    throw new UploadRejected("Invalid upload token");
  }
  if (typeof payload.e !== "number" || payload.e < Date.now()) {
    throw new UploadRejected("Upload token expired, roast again to share");
  }

  if (usedNonces.has(payload.n)) throw new UploadRejected("Upload token already used");
  return payload;
}

/** Marks a verified token as used. Call only once every other check has passed. */
export function consumeUploadToken(payload: TokenPayload): void {
  const now = Date.now();
  for (const [n, exp] of usedNonces) if (exp < now) usedNonces.delete(n);
  if (usedNonces.has(payload.n)) throw new UploadRejected("Upload token already used");
  usedNonces.set(payload.n, payload.e);
}

// --- File validation ---
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/** Checks the bytes are a PNG with the exact dimensions the roast card renders. */
export function assertRoastPng(bytes: Buffer): void {
  // signature (8) + IHDR length (4) + "IHDR" (4) + width (4) + height (4)
  if (bytes.length < 24 || !bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new UploadRejected("File is not a PNG image");
  }
  if (bytes.toString("ascii", 12, 16) !== "IHDR") {
    throw new UploadRejected("File is not a valid PNG image");
  }
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width !== ROAST_IMAGE_WIDTH || height !== ROAST_IMAGE_HEIGHT) {
    throw new UploadRejected("Image is not a roast card");
  }
}

// --- Rate limiting ---
// In-memory sliding window per client IP. On serverless this is per instance,
// so it slows abuse rather than enforcing a hard global cap.
const hits = new Map<string, number[]>();

export function checkRateLimit(key: string): void {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(key, recent);
    throw new UploadRejected("Too many uploads, wait a minute and try again");
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 10_000) {
    for (const [k, ts] of hits) if (!ts.some((t) => now - t < RATE_LIMIT_WINDOW_MS)) hits.delete(k);
  }
}

export function clientIpFrom(h: Headers): string {
  return (
    h.get("x-real-ip") ||
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

/** Errors whose message is safe to show to the user. */
export class UploadRejected extends Error {}
