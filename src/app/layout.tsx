import React from 'react';
import type { Metadata } from "next";
import { Inter, Chewy, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const chewy = Chewy({ weight: "400", subsets: ["latin"], variable: "--font-chewy" });
const roboto = Roboto({ weight: "400", subsets: ["latin"], variable: "--font-roboto" });

const APP_URL = "https://castroast.vercel.app";
// Bump this version number (v=7) to force Farcaster to refresh your image
const IMG_URL = `${APP_URL}/og-roasted.png?v=8`; 

// Define the Mini App Config JSON object
const frameEmbed = {
  version: "1",
  imageUrl: IMG_URL, // Must be 3:2 aspect ratio
  button: {
    title: "Roast Me",
    action: {
      type: "launch_frame",
      name: "Roasted",
      url: APP_URL,
      splashImageUrl: `${APP_URL}/roasted.png`,
      splashBackgroundColor: "#3b1078",
    },
  },
};

export const metadata: Metadata = {
  title: "Roasted",
  description: "Check your roast or roast your frens on Farcaster.",
  openGraph: {
    title: "Roasted",
    description: "Check your roast or roast your frens on Farcaster.",
    url: APP_URL,
    images: [
      {
        url: IMG_URL,
        width: 1200,
        height: 630,
        alt: "Roasted App Preview",
      },
    ],
  },
   // ✅ ADD THIS FOR TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Roasted",
    description: "Check your roast or roast your frens on Farcaster.",
    images: [`${APP_URL}/og-roasted.png?v=8`], // Must match the version above
    creator: "@teesmilex", // Optional: Your twitter or farcaster handle
  },

  other: {
    // ✅ NEW STANDARD: Stringified JSON in 'fc:miniapp'
    "fc:miniapp": JSON.stringify(frameEmbed),
    
    // ✅ BACKWARD COMPATIBILITY: Same JSON in 'fc:frame'
    "fc:frame": JSON.stringify(frameEmbed),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${chewy.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}