'use client';

import React, { useState, useEffect, useRef } from 'react';
import { UserSearch } from '../components/UserSearch';
import { RoastCard } from '../components/RoastCard';
import { Button } from '../components/Button';
import { RoastState } from '../types';
import { roastUserAction, generateMemeAction } from './actions';

const LOADING_MUSIC_URL = "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3";
const SUCCESS_SFX_URL = "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.mp3";

const LOADING_MESSAGES = [
  "This dude seems to be hiding something...",
  "Scanning for cringe...",
  "Analyzing bad takes...",
  "Consulting the roast gods...",
  "Sharpening the knives...",
  "Hmm, I'm gonna find out real soon...",
  "Checking for degraded performance...",
  "Reading between the lines..."
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [state, setState] = useState<RoastState>({
    status: 'idle',
    user: null,
    roast: null,
    memeUrl: null,
    isMemeLoading: false,
    error: null,
  });
  
  const [loadingMessage, setLoadingMessage] = useState("Cooking up something spicy...");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const successAudioRef = useRef<HTMLAudioElement | null>(null);

  // Splash Screen Timer (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const startBackgroundMusic = () => {
    if (typeof window !== 'undefined') {
      if (!audioRef.current) {
        audioRef.current = new Audio(LOADING_MUSIC_URL);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;
        audioRef.current.crossOrigin = "anonymous";
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => console.warn("Autoplay blocked:", err));
    }
  };

  const stopBackgroundMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const isLoading = ['fetching_user', 'analyzing', 'generating_meme'].includes(state.status);
    let interval: any;

    if (isLoading) {
      setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
      interval = setInterval(() => {
        setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
      }, 2500);
    }

    return () => { if (interval) clearInterval(interval); };
  }, [state.status]);

  useEffect(() => {
    const isPlayingState = ['fetching_user', 'analyzing', 'generating_meme'].includes(state.status);
    if (!isPlayingState) {
      stopBackgroundMusic();
    }
  }, [state.status]);

  const handleSearch = async (username: string) => {
    try {
      startBackgroundMusic();
      
      if (typeof window !== 'undefined' && !successAudioRef.current) {
        successAudioRef.current = new Audio(SUCCESS_SFX_URL);
        successAudioRef.current.volume = 1.0;
        successAudioRef.current.crossOrigin = "anonymous";
      }

      setState(prev => ({ ...prev, status: 'fetching_user', error: null, memeUrl: null, isMemeLoading: false }));

      // 1. Call Server Action (Roast)
      const result = await roastUserAction(username);
      
      if (!result.success || !result.user || !result.roast) {
        throw new Error(result.error || "Failed to generate roast");
      }

      stopBackgroundMusic();
      
      setState(prev => ({ 
        ...prev, 
        status: 'complete', 
        user: result.user!,
        roast: result.roast!,
        memeUrl: null,
        isMemeLoading: true 
      }));

      // 2. Call Server Action (Meme)
      generateMemeAction(result.user, result.roast)
        .then((memeResult) => {
           if (memeResult.success && memeResult.memeUrl) {
             // Success Case
             if (successAudioRef.current) {
               successAudioRef.current.currentTime = 0;
               successAudioRef.current.play().catch(e => console.warn("Success SFX failed", e));
             }
             setState(prev => ({ 
               ...prev, 
               memeUrl: memeResult.memeUrl!, 
               isMemeLoading: false 
             }));
           } else {
             // Failure Case (e.g. Rate Limit)
             console.warn("Meme generation skipped:", memeResult.error);
             setState(prev => ({ 
               ...prev, 
               isMemeLoading: false,
             }));
           }
        })
        .catch(err => {
           console.warn("Meme generation failed", err);
           setState(prev => ({ ...prev, isMemeLoading: false }));
        });

    } catch (err: any) {
      console.error(err);
      stopBackgroundMusic();
      setState(prev => ({
        ...prev,
        status: 'error',
        error: err.message || "Something went wrong. Try again.",
        isMemeLoading: false
      }));
    }
  };

  const handleReset = () => {
    stopBackgroundMusic();
    setState({
      status: 'idle',
      user: null,
      roast: null,
      memeUrl: null,
      isMemeLoading: false,
      error: null
    });
  };

  const LogoSVG = () => (
    <img 
      src="/roasted-logo.png" 
      alt="Roasted Logo" 
      className="w-full h-full object-contain" 
    />
  );

  const LogoSVGHeader = () => (
    <img 
      src="/logo-header.svg" 
      alt="Roasted Header Logo" 
      className="w-full h-full object-contain" 
    />
  );
  // Splash Screen
  if (showSplash) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center z-50 fixed inset-0">
        <div className="w-56 h-56 rounded-2xl p-4 animate-scale-pulse drop-shadow-2xl">
          <LogoSVG />
        </div>
      </div>
    );
  }

  return (
    <div className=" custom-cursor min-h-screen animated-bg text-white flex flex-col">
      <header className="p-6 border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Header Logo: Added bg-brand-500 and increased size */}
            <div className="w-16 h-16  cursor-pointer p-1 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <LogoSVGHeader />
            </div>
            <h1 className="text-2xl font-bold tracking-tight drop-shadow-sm uppercase italic font-chewy">
              Roasted
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/80 hidden sm:block font-medium shadow-sm">Built by</span>
            <a 
              href="https://farcaster.xyz/teesmilex.base.eth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white rounded-full text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand-300">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Follow
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 pb-40 w-full max-w-5xl mx-auto">
        
        {state.status === 'idle' && (
          <UserSearch onSearch={handleSearch} isLoading={false} />
        )}

        {(state.status === 'fetching_user' || state.status === 'analyzing' || state.status === 'generating_meme') && (
           <div className="max-w-md w-full mx-auto animate-fade-in">
             <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-1 rounded-3xl shadow-2xl">
               <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-6 rounded-[1.4rem] flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center">
                 
                 {/* Generation Logo: Transparent (no background class), mimic splash screen style */}
                 <div className="w-56 h-56 rounded-2xl p-2 flex items-center justify-center transform animate-scale-pulse">
                    <LogoSVG />
                 </div>

                 <div className="space-y-3 w-full">
                   <h2 className="text-4xl text-white drop-shadow-lg tracking-wide font-chewy">
                     {state.status === 'fetching_user' && 'Locating Target'}
                     {(state.status === 'analyzing' || state.status === 'generating_meme') && 'Cooking you up real soon...'}
                   </h2>
                   <p className="text-white text-base sm:text-lg drop-shadow-md min-h-[3rem] max-w-[90%] mx-auto font-chewy truncate px-2">
                     {loadingMessage}
                   </p>
                 </div>
               </div>
             </div>
           </div>
        )}

        {state.status === 'complete' && state.user && state.roast && (
          <RoastCard 
            user={state.user} 
            roast={state.roast}
            memeUrl={state.memeUrl}
            isMemeLoading={state.isMemeLoading}
            onReset={handleReset} 
          />
        )}

        {state.status === 'error' && (
          <div className="max-w-md w-full bg-red-600/20 border border-red-400/50 backdrop-blur-md rounded-xl p-6 text-center shadow-xl">
             <div className="text-white text-5xl mb-4 drop-shadow-md">⚠️</div>
             <h3 className="text-xl font-bold text-white mb-2">Roast Failed</h3>
             <p className="text-white/90 mb-6">{state.error}</p>
             <Button onClick={handleReset} variant="secondary" className="w-full bg-white text-red-600 hover:bg-gray-100">
               Try Again
             </Button>
          </div>
        )}

        <footer className="mt-2 text-center text-white/50 text-xs font-medium drop-shadow-sm">
          <p>This is a fun app. Use at your own emotional risk.</p>
        </footer>

      </main>
    </div>
  );
}