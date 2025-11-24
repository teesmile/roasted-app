'use server';

import { GoogleGenAI } from "@google/genai";
import { Buffer } from "buffer";

// --- Types ---
export interface FarcasterUser {
  fid: number;
  username: string;
  display_name: string;
  pfp_url: string;
  profile: { bio: { text: string } };
  follower_count: number;
  following_count: number;
}

export interface Cast {
  hash: string;
  text: string;
  parent_hash: string | null;
  timestamp: string;
  reactions: { likes_count: number; recasts_count: number };
}

// --- Configuration ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY || "";
const NEYNAR_API_URL = process.env.NEYNAR_API_URL || "https://api.neynar.com/v2/farcaster";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// --- ACTION 1: Get User & Generate Roast ---
export async function roastUserAction(username: string): Promise<{
  success: boolean;
  user?: FarcasterUser;
  roast?: string;
  error?: string;
}> {
  try {
    if (!GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY in .env.local");
    if (!NEYNAR_API_KEY) throw new Error("Missing NEYNAR_API_KEY in .env.local");

    const cleanUsername = username.replace(/^@/, '').trim().toLowerCase();

    // 1. Fetch User
    const userRes = await fetch(
      `${NEYNAR_API_URL}/user/by_username?username=${cleanUsername}&viewer_fid=3`,
      { headers: { 'accept': 'application/json', 'api_key': NEYNAR_API_KEY }, cache: 'no-store' }
    );

    if (!userRes.ok) {
      if (userRes.status === 404) throw new Error(`User @${cleanUsername} not found.`);
      if (userRes.status === 429) throw new Error("Neynar Rate limit hit. Wait a minute.");
      throw new Error("Failed to fetch user profile.");
    }
    
    const userData = await userRes.json();
    const user = userData.user as FarcasterUser;

    // 2. Fetch Casts (Increased limit and INCLUDED replies for the audit)
    const castsRes = await fetch(
      `${NEYNAR_API_URL}/feed/user/casts?fid=${user.fid}&limit=30&include_replies=true&include_recasts=false`,
      { headers: { 'accept': 'application/json', 'api_key': NEYNAR_API_KEY }, cache: 'no-store' }
    );

    let castTexts = "";
    let replyTexts = "";

    if (castsRes.ok) {
      const castsData = await castsRes.json();
      const allCasts = (castsData.casts || []) as Cast[];
      
      // Separate primary casts from replies
      const primaryCasts = allCasts.filter(c => !c.parent_hash);
      const replies = allCasts.filter(c => c.parent_hash);

      castTexts = primaryCasts.slice(0, 10).map(c => `- ${c.text} (Likes: ${c.reactions.likes_count})`).join('\n');
      replyTexts = replies.slice(0, 10).map(c => `- ${c.text}`).join('\n');
    }

    // 3. Generate Roast - PSYCHOLOGICAL MIND READER PROMPT
    const ratio = user.follower_count > 0 
      ? (user.following_count / user.follower_count * 100).toFixed(0) 
      : "0";

    const prompt = `
      TARGET: @${user.username} (${user.display_name})
      Bio: "${user.profile.bio.text}"
      Stats: ${user.follower_count} followers vs ${user.following_count} following (${ratio}% ratio).

      DATA DUMP (Their recent thoughts):
      ${castTexts}
      ${replyTexts || 'NO REPLIES (ghost account vibes)'}

      CRINGE AUDIT PARAMETERS:
      - Bio Cringe: Tryhard keywords, emoji spam, humblebrags.
      - Content Patterns: Crypto zombie slang, engagement farming, self-quotes.
      - Personality Flaws: Desperation, arrogance, boredom.

      TASK: Deliver a STAND-UP COMEDIAN HECKLER ROAST (Max 60 words).
      
      STRICT RULES:
      1. **NO QUOTES**: Do not quote their posts. Do not say "You said...".
      2. **NO DASHES/LISTS**: Write a cohesive paragraph.
      3. **MIND READER STYLE**: Look into their soul and describe their pathetic reality with additional savage.
      4. **BE BRUTAL**: Attack their specific insecurities revealed by the data (like, last 100 casts and replies).
      
      Example of Desired Style:
      be creative, brutal, and specific. be unpredictable too
    `;

    const roastRes = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a brutal, psychic roast master. You do not quote people; you analyze their soul and destroy them directly.",
        temperature: 1,
      }
    });

    const roast = roastRes.text || "You're too boring to roast.";

    return { success: true, user, roast };

  } catch (error: any) {
    console.error('Roast Action Error:', error);
    return { success: false, error: error.message || 'Server error' };
  }
}

// --- ACTION 2: Generate Meme (Progressive Loading) ---
export async function generateMemeAction(user: FarcasterUser, roast: string): Promise<{
  success: boolean;
  memeUrl?: string;
  error?: string;
}> {
  try {
    if (!GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY");

    // Helper to fetch image buffer
    async function urlToBase64(url: string) {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch image");
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return {
        data: buffer.toString('base64'),
        mimeType: response.headers.get('content-type') || 'image/png'
      };
    }

    const imagePart = await urlToBase64(user.pfp_url);

    // Prompt: Focus on VISUAL DISTORTION ONLY. No text inside the image.
    const memePrompt = `
      This is the profile picture of a user who just got roasted.
      Roast context: "${roast}"
      
      TASK: Apply a heavy, funny visual filter/distortion to this face.
      Styles: Deep fried, clown makeup, melting, high contrast, or glitch art.
      
      IMPORTANT:
      - OUTPUT ASPECT RATIO MUST BE 1:1.
      - DO NOT ADD ANY TEXT TO THE IMAGE.
      - Keep the face recognizable but ridiculed.
    `;

    const memeRes = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: imagePart },
          { text: memePrompt }
        ]
      },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });

    let memeUrl = null;
    for (const part of memeRes.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        memeUrl = `data:image/png;base64,${part.inlineData.data}`;
        break;
      }
    }

    if (!memeUrl) throw new Error("No image generated");

    return { success: true, memeUrl };

  } catch (error: any) {
    // Graceful handling for Rate Limits (429) so the app doesn't crash
    if (error.status === 429 || error.message?.includes('429')) {
      console.warn("Meme generation rate limited (local). Skipping.");
      return { success: false, error: "Rate limit hit (Meme skipped)" };
    }
    console.error("Meme Action Error:", error);
    return { success: false, error: "Failed to generate meme" };
  }
}