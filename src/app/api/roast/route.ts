import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

const NEYNAR_API_URL = "https://api.neynar.com/v2/farcaster";
const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY!;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Helper to fetch image and convert to base64
async function urlToBase64(url: string): Promise<{ data: string; mimeType: string }> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch image");
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Data = buffer.toString('base64');
    
    const contentType = response.headers.get('content-type') || 'image/png';
    
    return { data: base64Data, mimeType: contentType };
  } catch (error) {
    console.error("Image fetch error:", error);
    throw new Error("Could not access profile picture for meme generation.");
  }
}

export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json();

    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    // 1. Fetch user from Neynar
    const cleanUsername = username.replace(/^@/, '').trim().toLowerCase();
    
    const userResponse = await fetch(
      `${NEYNAR_API_URL}/user/by_username?username=${cleanUsername}&viewer_fid=3`,
      {
        headers: {
          'accept': 'application/json',
          'api_key': NEYNAR_API_KEY
        }
      }
    );

    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        return NextResponse.json({ error: `User @${cleanUsername} does not exist` }, { status: 404 });
      }
      return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }

    const userData = await userResponse.json();
    const user = userData.user;

    // 2. Fetch user casts
    const castsResponse = await fetch(
      `${NEYNAR_API_URL}/feed/user/casts?fid=${user.fid}&limit=15&include_replies=false&include_recasts=false`,
      {
        headers: {
          'accept': 'application/json',
          'api_key': NEYNAR_API_KEY
        }
      }
    );

    if (!castsResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch casts' }, { status: 500 });
    }

    const castsData = await castsResponse.json();
    const casts = castsData.casts || [];

    // 3. Generate roast with Gemini
    const castTexts = casts.map((c: any) => 
      `- "${c.text}" (Likes: ${c.reactions.likes_count})`
    ).join('\n');
    
    const roastPrompt = `
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

    const roastResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: roastPrompt,
      config: {
        systemInstruction: "You are a savage roast master and brutal. You speak in a flowing, witty, and devastating manner.",
        temperature: 1,
      }
    });

    const roast = roastResponse.text || "You're too boring to roast.";

    // 4. Generate meme (optional, can fail gracefully)
    let memeUrl = null;
    try {
      const imagePart = await urlToBase64(user.pfp_url);

      const memePrompt = `
        This is the profile picture of a user I just roasted.
        The roast was: "${roast}"
        
        Task: Create a "Roasted" meme visual.
        
        Actions:
        1. Use the provided profile picture as the base.
        2. Apply a heavy visual distortion or filter (like deep fried, clown makeup, tears, fire, or melting) that fits the roast.
        3. Do NOT add text. The app will add the text overlay separately.
        4. Output aspect ratio: 1:1 (Square).
      `;

      const memeResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: imagePart },
            { text: memePrompt }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      for (const part of memeResponse.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          memeUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }
    } catch (memeError) {
      console.warn("Meme generation failed:", memeError);
      // Continue without meme
    }

    return NextResponse.json({
      user,
      roast,
      memeUrl
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}