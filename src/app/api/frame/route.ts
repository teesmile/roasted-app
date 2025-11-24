import { NextRequest } from "next/server";

interface FrameButton {
  label: string;
  action: {
    type: string;
    url: string;
  };
}

interface FrameResponse {
  version: string;
  title: string;
  buttons: FrameButton[];
  image: string;
}

// Handle POST (for Farcaster Frames)
export async function POST(req: NextRequest) {
  // Optionally parse request body:
  // const body = await req.json();

  const frameResponse: FrameResponse = {
    version: "v2",
    title: "Welcome to Roasted😂",
    buttons: [
      {
        label: "Roast me 🔥",
        action: { type: "post", url: "https://castroast.vercel.app/api/frame" }
      }
    ],
    image: "https://castroast.vercel.app/icon.svg"
  };

  return new Response(JSON.stringify(frameResponse), {
    headers: { "Content-Type": "application/json" }
  });
}

// Optionally handle GET (for browser visits)
export function GET() {
  return new Response(
    "Roasted Frame API is live! Send a POST request to use the Frame.",
    { status: 200 }
  );
}