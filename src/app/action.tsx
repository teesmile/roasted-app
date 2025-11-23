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

    // 2. Fetch Casts
    const castsRes = await fetch(
      `${NEYNAR_API_URL}/feed/user/casts?fid=${user.fid}&limit=15&include_replies=false&include_recasts=false`,
      { headers: { 'accept': 'application/json', 'api_key': NEYNAR_API_KEY }, cache: 'no-store' }
    );

    let castTexts = "";
    if (castsRes.ok) {
      const castsData = await castsRes.json();
      const casts = (castsData.casts || []) as Cast[];
      castTexts = casts.map(c => `- "${c.text}" (Likes: ${c.reactions.likes_count})`).join('\n');
    }

    // 3. Generate Roast
    const prompt = `
      Identify: Farcaster User @${user.username} (${user.display_name})
      Bio: "${user.profile.bio.text}"
      Followers: ${user.follower_count}
      Following: ${user.following_count}
      
      Recent Activity:
      ${castTexts}
      
      Task: Roast this user.
      Guidelines:
      - Length: Under 50 words.
      - Style: Savage, witty, direct. Stand-up comedian roasting a heckler.
      - No hashtags.
    `;

    const aiRes = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { temperature: 1 }
    });

    const roast = aiRes.text || "You are too boring to roast.";

    return { success: true, user, roast };

  } catch (error: any) {
    console.error("Roast Action Error:", error);
    return { success: false, error: error.message || "Something went wrong." };
  }
}

// --- ACTION 2: Generate Meme ---
export async function generateMemeAction(user: FarcasterUser, roast: string): Promise<{
  success: boolean;
  memeUrl?: string;
  error?: string;
}> {
  try {
    if (!GEMINI_API_KEY) return { success: false, error: "API Key Missing" };

    // 1. Fetch PFP
    const imgRes = await fetch(user.pfp_url);
    if (!imgRes.ok) throw new Error("Failed to access profile picture.");
    
    const arrayBuffer = await imgRes.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString('base64');
    const mimeType = imgRes.headers.get('content-type') || 'image/png';

    // 2. Generate Meme
    const prompt = `
      Context: Profile picture of a roasted user.
      Roast: "${roast}"
      Task: Create a distorted "meme" version of this image.
      Style: Deep fried, glitch, melting, or clown makeup. 
      IMPORTANT: NO TEXT. Pure visual distortion.
      Output: 1:1 Aspect Ratio.
    `;

    try {
      const aiRes = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { mimeType, data: base64Data } },
            { text: prompt }
          ]
        },
        config: { imageConfig: { aspectRatio: "1:1" } }
      });

      for (const part of aiRes.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return { 
            success: true, 
            memeUrl: `data:image/png;base64,${part.inlineData.data}` 
          };
        }
      }
      return { success: false, error: "AI generated no image." };
      
    } catch (apiError: any) {
      // Handle Specific 429 Quota Error specifically for images
      if (apiError.status === 429 || (apiError.message && apiError.message.includes("429"))) {
        console.warn("Meme Generation Quota Exceeded (Local Env):", apiError.message);
        return { success: false, error: "Quota exceeded. Image generation unavailable in this region/tier." };
      }
      throw apiError;
    }

  } catch (error: any) {
    console.error("Meme Action Error:", error);
    return { success: false, error: error.message };
  }
}