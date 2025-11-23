import { GoogleGenAI } from "@google/genai";
import { FarcasterUser, Cast } from "@/types";

// In Next.js, client-side env vars must be prefixed with NEXT_PUBLIC_
const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

const ai = new GoogleGenAI({ apiKey });

// Helper to fetch image and convert to base64
async function urlToBase64(url: string): Promise<{ data: string; mimeType: string }> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch image");
    
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const base64Data = base64String.split(',')[1];
        resolve({ data: base64Data, mimeType: blob.type });
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Image fetch error:", error);
    throw new Error("Could not access profile picture for meme generation.");
  }
}

export const generateRoast = async (user: FarcasterUser, recentCasts: Cast[]): Promise<string> => {
  try {
    const castTexts = recentCasts.map(c => `- "${c.text}" (Likes: ${c.reactions.likes_count})`).join('\n');
    
    const prompt = `
      Identify: Farcaster User @${user.username} (${user.display_name})
      Bio: "${user.profile.bio.text}"
      Followers: ${user.follower_count}
      Following: ${user.following_count}

      Recent Activity:
      ${castTexts}

      Task: Roast this user.
      
      Guidelines:
      - Length: Keep it under 50 words.
      - Flow: Write a single, cohesive, witty, and savage paragraph. Ensure the sentences connect naturally. Do not just list insults be brutal.
      - Content: Use specific details from their bio and their casts to mock them.
      - scan up to three months backward
      - Tone: Like a ruthless stand-up comedian addressing a heckler.
      - No hashtags. No labels like "Roast:".
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a savage roast master and brutal. You speak in a flowing, witty, and devastating manner.",
        temperature: 1,
      }
    });

    return response.text || "You're too boring to roast.";
  } catch (error) {
    console.error("Gemini Roast Error:", error);
    throw new Error("Failed to generate roast. The TeeRoast might be down.");
  }
};

export const generateMeme = async (user: FarcasterUser, roast: string): Promise<string | null> => {
  try {
    const imagePart = await urlToBase64(user.pfp_url);

    const prompt = `
      This is the profile picture of a user I just roasted.
      The roast was: "${roast}"
      
      Task: Create a "Roasted" meme visual.
      
      Actions:
      1. Use the provided profile picture as the base.
      2. Apply a heavy visual distortion or filter (like deep fried, clown makeup, tears, fire, or melting) that fits the roast.
      3. Do NOT add text. The app will add the text overlay separately.
      4. Output aspect ratio: 1:1 (Square).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: imagePart },
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.warn("Meme generation failed:", error);
    return null;
  }
};