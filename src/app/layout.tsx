
import React from 'react';
import type { Metadata } from "next";
import { Inter, Chewy, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const chewy = Chewy({ weight: "400", subsets: ["latin"], variable: "--font-chewy" });
const roboto = Roboto({ weight: "400", subsets: ["latin"], variable: "--font-roboto" });

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://castroast.vercel.app";
// Updated OG Image URL from GitHub
const ogImageUrl = "https://github.com/teesmile/roasted-app/blob/917c3d500f28979f41dc24d93d298e0fc440ede7/public/og-roasted.png?raw=true";

export const metadata: Metadata = {
  title: "Roasted",
  description: "Check your roast or roast your frens on farcaster.",
  openGraph: {
    title: "Roasted",
    description: "Check your roast or roast your frens and share on farcaster.",
    images: ["https://castroast.vercel.app/og-roasted.png"], 
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://castroast.vercel.app/og-roasted.png",
    "fc:frame:button:1": "Roast Me",
    "fc:frame:button:1:action": "launch_frame",
    "fc:frame:button:1:name": "Roasted",
    "fc:frame:button:1:url": "https://castroast.vercel.app",
    "fc:frame:button:1:splash_image_url": "https://castroast.vercel.app/roasted.png",
    "fc:frame:button:1:splash_background_color": "#3b1078",
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