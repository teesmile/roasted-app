'use client';

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

// Mascot Logo - Updated to new file
const LOGO_DATA_URI = "/roasted-logo.png";

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
      // Narrow the 2D context to a non-null type for use inside async callbacks
      const ctx2: CanvasRenderingContext2D = ctx;

      const styles = getComputedStyle(document.body);
      const chewyFont = styles.getPropertyValue('--font-chewy') || 'cursive'; 
      const robotoFont = styles.getPropertyValue('--font-roboto') || 'Roboto, sans-serif';

      const width = 1080;
      const height = 1080;
      canvas.width = width;
      canvas.height = height;

      // 1. Background - #280b51 Theme
  const gradient = ctx2.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#280b51'); 
  gradient.addColorStop(1, '#0f0e17');
  ctx2.fillStyle = gradient;
  ctx2.fillRect(0, 0, width, height);

      // 2. Header
  ctx2.fillStyle = '#f15a24';
  ctx2.fillRect(0, 0, width, 100);
      
  ctx2.fillStyle = '#ffffff';
  ctx2.font = `50px ${chewyFont}`;
  ctx2.textAlign = 'center';
  ctx2.textBaseline = 'middle';
  ctx2.fillText('⚠️ EMOTIONAL DAMAGE DETECTED ⚠️', width / 2, 50);

      // 3. Draw Content Function
      const drawContent = (memeImg?: HTMLImageElement) => {
        ctx2.textAlign = 'center'; 
        const footerTextX = width - 120; 

        // Footer Text
        ctx2.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx2.font = '24px Inter, sans-serif';
        ctx2.fillText('Roasted Analysis', footerTextX, height - 65);
        
        ctx2.font = 'italic 20px Inter, sans-serif';
        ctx2.fillStyle = 'rgba(255, 255, 255, 0.5)'; 
        ctx2.fillText('teesmile', footerTextX, height - 35);

        // Draw Logo next to footer text
        const logoImg = new Image();
        logoImg.onload = () => {
          // Draw logo on top (transparent PNG)
          ctx2.drawImage(logoImg, footerTextX - 140, height - 80, 50, 50);
          finalize();
        };
        logoImg.onerror = finalize; // Proceed if logo fails
        logoImg.src = LOGO_DATA_URI;
        
        function finalize() {
          // User Handle
          ctx2.fillStyle = '#ffffff';
          ctx2.font = 'bold 32px Inter, sans-serif';
          ctx2.textAlign = 'left';
          // Ensure backticks are used here
          ctx2.fillText(`@${user.username}`, 50, height - 40);
          
          // Roast Text - Roboto
          ctx2.fillStyle = '#ffffff';
          // Ensure backticks are used here
          ctx2.font = `36px ${robotoFont}`; 
          ctx2.textAlign = 'center';
          
          const imgSize = 320;
          const textX = width / 2;
          const textY = memeImg ? (150 + imgSize + 60) : 300; 
          const maxWidth = 950;
          const lineHeight = 70; 
          
          const words = roast.split(' ');
          let line = '';
          let y = textY;
          
          ctx2.textBaseline = 'alphabetic';

          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx2.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
              ctx2.fillText(line, textX, y);
              line = words[n] + ' ';
              y += lineHeight;
            } else {
              line = testLine;
            }
          }
          ctx2.fillText(line, textX, y);

          canvas.toBlob((blob) => {
            resolve(blob);
          }, 'image/png');
        }
      };

      if (memeUrl) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const imgSize = 320;
          const cx = width / 2;
          const cy = 150 + (imgSize / 2);

          ctx2.save();
          ctx2.translate(cx, cy);
          ctx2.rotate(-5 * Math.PI / 180);
          
          ctx2.shadowColor = '#f15a24';
          ctx2.shadowBlur = 40;
          
          ctx2.drawImage(img, -imgSize/2, -imgSize/2, imgSize, imgSize);
          
          ctx2.shadowBlur = 0; 
          ctx2.strokeStyle = '#374151';
          ctx2.lineWidth = 4;
          ctx2.strokeRect(-imgSize/2, -imgSize/2, imgSize, imgSize);
          ctx2.restore(); 

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
        setStatusMessage("Image Copied");
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
        setStatusMessage("⬇️ Image Saved! Attach it manually.");
      }

      await new Promise(r => setTimeout(r, 1500));

      const shareText = `I just got roasted by the roast whiz😂.\n\nCheck yours:`;
      const currentHost = window.location.hostname;
      const appUrl = (currentHost === 'localhost' || currentHost === '127.0.0.1')
        ? 'https://castroast.vercel.app' 
        : window.location.href; 
      
      const shareUrl = `https://farcaster.xyz/~/compose?text=${encodeURIComponent(shareText)}&embeds[]=${encodeURIComponent(appUrl)}`;
      
      window.open(shareUrl, '_blank');
      
      setIsGeneratingImage(false);
      setTimeout(() => setStatusMessage(null), 10000);

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

  // Inline Logo Component for UI
  const LogoIcon = () => (
    <img src={LOGO_DATA_URI} alt="Roasted Logo" className="w-10 h-10 object-contain rounded-lg shadow-sm" />
  );

  return (
    <div className="w-full max-w-2xl animate-slide-up pb-12">
      <div className="bg-[#280b51] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative flex flex-col">
        
        {/* Header */}
        <div className="bg-brand-500 p-2 text-center shadow-lg z-10">
             <h3 className="text-white text-lg sm:text-xl uppercase tracking-widest m-0 animate-pulse font-chewy">
               ⚠️ Emotional Damage Detected ⚠️
             </h3>
        </div>

        {/* Content Body - Background #280b51 */}
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-[#280b51]">
          <div className="flex-1 order-2 md:order-1 w-full">
            <div 
              // Roboto Font
              className="text-lg sm:text-2xl leading-loose text-center md:text-left text-white drop-shadow-md prose prose-invert max-w-none font-normal"
              style={{ fontFamily: 'var(--font-roboto)' }}
            >
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
          {/* Footer Right Side - Added Logo */}
          <div className="flex items-center gap-4">
            <LogoIcon />
            <div className="text-gray-500 text-xs flex flex-col items-center">
               <p>Roasted Analysis</p>
               <p className="text-gray-500 italic">teesmile</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0e17] p-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-end border-t border-gray-900">
          {statusMessage && (
             <div className="text-brand-400 text-sm font-bold self-center animate-pulse text-center">
               {statusMessage}
             </div>
          )}
          <Button variant="outline" onClick={handleRoastAnother} className="text-sm px-4 py-2">
            Roast Another
          </Button>
          <Button onClick={handleShare} isLoading={isGeneratingImage} className="text-sm px-4 py-2">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};