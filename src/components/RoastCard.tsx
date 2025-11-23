'use client'; // Client component due to Canvas/Audio usage

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FarcasterUser } from '../types';
import { Button } from './Button';

interface RoastCardProps {
  user: FarcasterUser;
  roast: string;
  memeUrl: string | null;
  isMemeLoading?: boolean;
  onReset: () => void;
}

const SFX = {
  WHOOSH: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3',
  BOING: 'https://commondatastorage.googleapis.com/codeskulptor-assets/jump.m4a'
};

export const RoastCard: React.FC<RoastCardProps> = ({ user, roast, memeUrl, isMemeLoading, onReset }) => {
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const playSound = (url: string, volume = 1.0, delay = 0) => {
    setTimeout(() => {
      try {
        const audio = new Audio(url);
        audio.volume = volume;
        audio.crossOrigin = "anonymous";
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => { /* Auto-play blocked */ });
        }
      } catch (e) {
        console.error("Audio error", e);
      }
    }, delay);
  };

  useEffect(() => {
    playSound(SFX.WHOOSH, 0.8);
  }, []);

  const generateCompositeImage = async (): Promise<Blob | null> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(null);
        return;
      }

      // Get correct font family names injected by Next.js
      const styles = getComputedStyle(document.body);
      // Fallback to generic names if variable not found
      const chewyFont = styles.getPropertyValue('--font-chewy') || 'cursive'; 
      const comicFont = styles.getPropertyValue('--font-comic') || 'Comic Sans MS';

      const width = 1080;
      const height = 1080;
      canvas.width = width;
      canvas.height = height;

      // 1. Background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#1a1625');
      gradient.addColorStop(1, '#0f0e17');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Header
      ctx.fillStyle = '#f15a24';
      ctx.fillRect(0, 0, width, 100);
      
      ctx.fillStyle = '#ffffff';
      // Use the actual font family name from CSS variable
      ctx.font = `50px ${chewyFont}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚠️ EMOTIONAL DAMAGE DETECTED ⚠️', width / 2, 50);

      // 3. Draw Content Function
      const drawContent = (memeImg?: HTMLImageElement) => {
        ctx.textAlign = 'center'; 
        const footerTextX = width - 120; 

        // Footer Text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = '24px Inter, sans-serif';
        ctx.fillText('Roasted Analysis', footerTextX, height - 65);
        
        ctx.font = 'italic 20px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; 
        ctx.fillText('teesmile', footerTextX, height - 35);
        
        // User Handle
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`@${user.username}`, 50, height - 40);
        
        // Roast Text
        ctx.fillStyle = '#ffffff';
        // Use correct font variable for Comic Sans
        ctx.font = `36px ${comicFont}`; 
        ctx.textAlign = 'center';
        
        const imgSize = 320;
        const textX = width / 2;
        const textY = memeImg ? (150 + imgSize + 60) : 300; 
        const maxWidth = 950;
        const lineHeight = 70; 
        
        const words = roast.split(' ');
        let line = '';
        let y = textY;
        
        ctx.textBaseline = 'alphabetic';

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + ' ';
          const metrics = ctx.measureText(testLine);
          const testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, textX, y);
            line = words[n] + ' ';
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, textX, y);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/png');
      };

      if (memeUrl) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const imgSize = 320;
          const cx = width / 2;
          const cy = 150 + (imgSize / 2);

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(-5 * Math.PI / 180);
          
          ctx.shadowColor = '#f15a24';
          ctx.shadowBlur = 40;
          
          ctx.drawImage(img, -imgSize/2, -imgSize/2, imgSize, imgSize);
          
          ctx.shadowBlur = 0; 
          ctx.strokeStyle = '#374151';
          ctx.lineWidth = 4;
          ctx.strokeRect(-imgSize/2, -imgSize/2, imgSize, imgSize);
          ctx.restore(); 

          drawContent(img);
        };
        img.onerror = () => { drawContent(); };
        img.src = memeUrl;
      } else {
        drawContent();
      }
    });
  };

  const handleShare = async () => {
    setIsGeneratingImage(true);
    setStatusMessage("Generating image...");

    try {
      const imageBlob = await generateCompositeImage();
      if (!imageBlob) throw new Error("Failed to generate image");

      try {
        await navigator.clipboard.write([
          new ClipboardItem({ [imageBlob.type]: imageBlob })
        ]);
        setStatusMessage("Image copied to clipboard!");
      } catch (err) {
        console.warn("Clipboard failed, downloading", err);
        const url = URL.createObjectURL(imageBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `roasted-${user.username}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setStatusMessage("Image downloaded! Attach it to your cast.");
      }

      // REMOVED TIMEOUT: This fixes the popup blocker issue
      const shareText = `I just got roasted by Roasted.\n\nCheck yours:`;
      
      // Use Production URL if sharing from Localhost (so the embed works for others)
      const currentHost = window.location.hostname;
      const appUrl = (currentHost === 'localhost' || currentHost === '127.0.0.1')
        ? 'https://castroast.vercel.app' 
        : window.location.href; 
      
      const shareUrl = `https://farcaster.xyz/~/compose?text=${encodeURIComponent(shareText)}&embeds[]=${encodeURIComponent(appUrl)}`;
      
      // Open immediately to preserve user gesture
      window.open(shareUrl, '_blank');
      
      setIsGeneratingImage(false);
      // Don't clear status message immediately so user sees "Copied"
      setTimeout(() => setStatusMessage(null), 3000);

    } catch (error) {
      console.error("Share failed", error);
      setIsGeneratingImage(false);
      setStatusMessage("Error generating image");
    }
  };

  const handleRoastAnother = () => {
    playSound(SFX.BOING, 1.0);
    setTimeout(() => onReset(), 150);
  };

  return (
    <div className="w-full max-w-2xl animate-slide-up pb-12">
      <div className="bg-[#1a1625] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative flex flex-col">
        
        {/* Header */}
        <div className="bg-brand-500 p-2 text-center shadow-lg z-10">
             <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest m-0 animate-pulse font-chewy">
               ⚠️ Emotional Damage Detected ⚠️
             </h3>
        </div>

        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-[#1a1625]">
          <div className="flex-1 order-2 md:order-1 w-full">
            <div className="text-lg sm:text-2xl leading-loose text-center md:text-left text-white drop-shadow-md prose prose-invert max-w-none font-normal font-comic">
               <ReactMarkdown>{roast}</ReactMarkdown>
            </div>
          </div>

          <div className="flex-shrink-0 order-1 md:order-2 flex flex-col items-center gap-2">
            {isMemeLoading ? (
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl bg-gray-800 border-2 border-gray-700 animate-pulse flex items-center justify-center">
                 <svg className="animate-spin h-8 w-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
              </div>
            ) : memeUrl ? (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-red-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <img 
                  src={memeUrl} 
                  alt="Distorted Profile" 
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border-2 border-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="bg-[#13111a] p-4 flex items-center justify-between border-t border-gray-800 backdrop-blur-sm">
          <div className="flex items-center gap-3">
             <img src={user.pfp_url} alt={user.username} className="w-10 h-10 rounded-full border border-gray-600 grayscale hover:grayscale-0 transition-all" />
            <div className="text-sm">
              <p className="text-gray-200 font-bold">@{user.username}</p>
              <p className="text-gray-500 text-xs">FID: {user.fid}</p>
            </div>
          </div>
          <div className="text-gray-500 text-xs flex flex-col items-center">
             <p>Roasted Analysis</p>
             <p className="text-gray-500 italic">teesmile</p>
          </div>
        </div>

        <div className="bg-[#0f0e17] p-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-end border-t border-gray-900">
          {statusMessage && (
             <div className="text-brand-400 text-sm font-bold self-center animate-pulse">{statusMessage}</div>
          )}
          <Button variant="outline" onClick={handleRoastAnother} className="text-sm px-4 py-2">
            Roast Another
          </Button>
          <Button onClick={handleShare} isLoading={isGeneratingImage} className="text-sm px-4 py-2">
            Share Link
          </Button>
        </div>
      </div>
    </div>
  );
};