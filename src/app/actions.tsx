'use server';

import { GoogleGenAI } from "@google/genai";
import { put } from "@vercel/blob";
import Replicate from "replicate";

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
// Note: In Server Actions, process.env vars (without NEXT_PUBLIC) are secure.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY || "";
const NEYNAR_API_URL = process.env.NEYNAR_API_URL || "https://api.neynar.com/v2/farcaster";

// --- ACTION 1: Fetch User Data (Neynar) ---
export async function fetchUserDataAction(username: string): Promise<{
  success: boolean;
  user?: FarcasterUser;
  castTexts?: string;
  replyTexts?: string;
  error?: string;
}> {
  try {
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

    // 2. Fetch Casts (Limit 30, include replies)
    const castsRes = await fetch(
      `${NEYNAR_API_URL}/feed/user/casts?fid=${user.fid}&limit=30&include_replies=true&include_recasts=false`,
      { headers: { 'accept': 'application/json', 'api_key': NEYNAR_API_KEY }, cache: 'no-store' }
    );

    let castTexts = "";
    let replyTexts = "";

    if (castsRes.ok) {
      const castsData = await castsRes.json();
      const allCasts = (castsData.casts || []) as Cast[];
      
      const primaryCasts = allCasts.filter(c => !c.parent_hash);
      const replies = allCasts.filter(c => c.parent_hash);

      castTexts = primaryCasts.slice(0, 15).map(c => `- ${c.text} (Likes: ${c.reactions.likes_count})`).join('\n');
      replyTexts = replies.slice(0, 15).map(c => `- ${c.text}`).join('\n');
    }

    return { success: true, user, castTexts, replyTexts };

  } catch (error: any) {
    console.error('Fetch User Error:', error);
    return { success: false, error: error.message || 'Server error' };
  }
}

// --- ACTION 2: Generate Roast (Gemini) ---
export async function generateRoastAction(
  user: FarcasterUser, 
  castTexts: string, 
  replyTexts: string
): Promise<{ success: boolean; roast?: string; error?: string }> {
  try {
    if (!GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY in .env.local");
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const ratio = user.follower_count > 0 
      ? (user.following_count / user.follower_count * 100).toFixed(0) 
      : "0";

    const prompt = `
      ROAST TARGET: Farcaster User @${user.username} (${user.display_name})
      Bio: "${user.profile.bio.text}"
      Followers: ${user.follower_count} | Following: ${user.following_count} (${ratio}% ratio 💀)

      RECENT 90-DAY ACTIVITY (casts + ALL replies - dig for self-owns):
      ${castTexts}
      ${replyTexts ? `\nTHEIR REPLIES (Expose these):\n${replyTexts}` : '\nNO REPLIES (ghost account vibes)'}

      CRINGE AUDIT - EXPOSE THESE FIRST:
      1. **Bio Cringe**: Tryhard keywords, emoji spam, humblebrags, "DM for collabs"
      2. **Follower Ratio**: <10% = desperate followback farmer. >200% = spammer
      3. **Content Patterns**: 
         - "gm/fren/wagmi" count >3 = braindead crypto zombie
         - Replybegging ("LFG @vitalik 👀", ratio replies > casts)
         - Self-quotes, "just minted" spam, "who's building?" virtue signals
         - Copy-paste thought-leader diarrhea
      4. **Engagement Whoring**: Likes-begging, "drop below", dead threads

      TASK: Deliver STAND-UP COMEDIAN HECKLER ROAST (60 words max)
      - Savage. Personal. Hit their deepest insecurity.
      - Structure: Opening punch → Cringe expose → Brutal closer
      - Voice: Don Rickles meets @basedjester
      - NO hashtags, disclaimers, mercy.
    `;

    const roastRes = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a savage, ruthless roast master. You speak in a flowing, witty, and devastating manner. You do not list points, you weave them into a single brutal paragraph.",
        temperature: 1.1,
      }
    });

    const roast = roastRes.text || "You're too boring to roast.";
    return { success: true, roast };

  } catch (error: any) {
    console.error('Roast Gen Error:', error);
    return { success: false, error: error.message || 'Server error' };
  }
}



// --- ACTION 3: Generate Meme (Using Replicate) ---
export async function generateMemeAction(user: FarcasterUser, roast: string): Promise<{
  success: boolean;
  memeUrl?: string;
  error?: string;
}> {
  try {
    if (!process.env.REPLICATE_API_TOKEN) {
      throw new Error("Missing REPLICATE_API_TOKEN");
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    console.log("Distorting PFP using Instruct-Pix2Pix:", user.username);

    // Prompt: Instructions for how to change the face
    const prompt = `
      Turn this person into a crying clown. 
      Apply a deep fried meme filter. 
      Make the face look devastated, melting, and roasted.
      Context: ${roast.slice(0, 30)}
    `;

    // MODEL: Instruct-Pix2Pix
    // This is the ONLY fast model that reliably edits faces instead of replacing them.
    const output = await replicate.run(
      "timothybrooks/instruct-pix2pix:30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f",
      {
        input: {
          image: user.pfp_url,    // ✅ The PFP goes here
          prompt: prompt,         // ✅ The command goes here
          image_guidance_scale: 1.5, // 1.5 = Keep face shape, but change texture
          num_inference_steps: 20,
        }
      }
    );

    const memeUrl = Array.isArray(output) ? String(output[0]) : String(output);

    return { success: true, memeUrl };

  } catch (error: any) {
    console.error("Replicate Error:", error);
    return { success: true, memeUrl: user.pfp_url }; // Fallback to original PFP
  }
}

// --- ACTION 4: Upload Image to Vercel Blob ---
export async function uploadImageAction(formData: FormData): Promise<string> {
  const file = formData.get('file') as File;
  const filename = formData.get('filename') as string;

  if (!file) {
    throw new Error('No file provided');
  }

  // Upload to Vercel Blob
  const blob = await put(filename, file, {
    access: 'public',
  });

  return blob.url; // Returns the https://... public URL
}