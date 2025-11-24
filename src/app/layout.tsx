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
  title: "Roasted - Get Your Farcaster Profile Roasted",
  description: "AI-powered roasts for your Farcaster profile. Can you handle the heat?",
  openGraph: {
    title: "Roasted - Get Your Farcaster Profile Roasted",
    description: "AI-powered roasts for your Farcaster profile",
    images: [ogImageUrl],
    url: appUrl,
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": ogImageUrl,
    "fc:frame:button:1": "Get Roasted",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": appUrl,
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