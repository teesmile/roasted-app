
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { UserSearch } from '../components/UserSearch';
import { RoastCard } from '../components/RoastCard';
import { Button } from '../components/Button';
import { RoastState } from '../types';
import { generateRoastAction, fetchUserDataAction, generateMemeAction } from './actions';
import { sdk } from "@farcaster/miniapp-sdk"; 

// ✅ Local Files
const LOADING_MUSIC_URL = "/sounds/loading.mp3"; 
const SUCCESS_SFX_URL = "/sounds/success.mp3";

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
  const [isReady, setIsReady] = useState(false);
  const [context, setContext] = useState<any>(); 
  
  const [loadingMessage, setLoadingMessage] = useState("Cooking up something spicy...");
  
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const successAudioRef = useRef<HTMLAudioElement | null>(null);

  // --- 1. Initialize SDK ---
  useEffect(() => {
    const load = async () => {
      try {
        const frameContext = await sdk.context;
        setContext(frameContext);
        await sdk.actions.ready();
        setIsReady(true);

        // ✅ REMOVED: await sdk.actions.addMiniApp();
        // The drawer will handle this

      } catch (err) {
        console.warn("SDK Context failed", err);
        setIsReady(true);
      }
    };
    if (!isReady) load();
  }, [isReady]);

 useEffect(() => {
  if (!showSplash && isReady) {
    const timer = setTimeout(async () => {
      try {
        await sdk.actions.addMiniApp();
        console.log('✅ App successfully added!');
      } catch (error: any) {
        const errorMsg = error?.message || '';
        if (errorMsg.includes('RejectedByUser')) {
          console.log('User declined to add the app');
        } else if (errorMsg.includes('InvalidDomainManifestJson')) {
          console.error('⚠️ Invalid manifest or domain mismatch:', error);
        } else {
          console.error('Error adding mini app:', error);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }
}, [showSplash, isReady]);

  // --- 2. Initialize Audio & Autoplay ---
  useEffect(() => {
    // Setup Audio Objects
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(LOADING_MUSIC_URL);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;

      successAudioRef.current = new Audio(SUCCESS_SFX_URL);
      successAudioRef.current.volume = 1.0;

      // Try Autoplay immediately
      const attemptPlay = async () => {
        try {
          await audioRef.current?.play();
        } catch (e) {
          // If blocked, add a one-time click listener to start it
          const startOnInteraction = () => {
             audioRef.current?.play().catch(() => {});
             document.removeEventListener('click', startOnInteraction);
          };
          document.addEventListener('click', startOnInteraction);
        }
      };
      
      // Only attempt play if not already complete/error
      if (state.status === 'idle') {
        attemptPlay();
      }
    }

    return () => {
      // stopBackgroundMusic();
    };
  }, []);

  // Splash Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const stopBackgroundMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Loading Messages Cycler
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

  const handleSearch = async (username: string) => {
    try {
      // Ensure music is playing if it wasn't already
      if (audioRef.current?.paused) {
         audioRef.current.play().catch(() => {});
      }

      setState(prev => ({ ...prev, status: 'fetching_user', error: null, memeUrl: null, isMemeLoading: false }));

      const fetchResult = await fetchUserDataAction(username);
      
      if (!fetchResult.success || !fetchResult.user) {
        throw new Error(fetchResult.error || "Failed to find user");
      }

      setState(prev => ({ ...prev, status: 'analyzing', user: fetchResult.user! }));

      const roastResult = await generateRoastAction(
        fetchResult.user, 
        fetchResult.castTexts || "", 
        fetchResult.replyTexts || ""
      );

      if (!roastResult.success || !roastResult.roast) {
        throw new Error(roastResult.error || "Failed to generate roast");
      }

      // Success! Stop music, play SFX
      // stopBackgroundMusic();
      if (successAudioRef.current) {
         successAudioRef.current.currentTime = 0;
         successAudioRef.current.play().catch(() => {});
      }

      setState(prev => ({ 
        ...prev, 
        status: 'complete', 
        roast: roastResult.roast!,
        memeUrl: null,
        isMemeLoading: true 
      }));

      generateMemeAction(fetchResult.user, roastResult.roast!)
        .then((memeResult) => {
           if (memeResult.success && memeResult.memeUrl) {
             setState(prev => ({ ...prev, memeUrl: memeResult.memeUrl!, isMemeLoading: false }));
           } else {
             setState(prev => ({ ...prev, isMemeLoading: false }));
           }
        })
        .catch(err => {
           setState(prev => ({ ...prev, isMemeLoading: false }));
        });

    } catch (err: any) {
      console.error(err);
      // stopBackgroundMusic();
      setState(prev => ({
        ...prev,
        status: 'error',
        error: err.message || "Something went wrong. Try again.",
        isMemeLoading: false
      }));
    }
  };

  const handleReset = () => {
    // Restart music on reset
    if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
    }
    setState({
      status: 'idle',
      user: null,
      roast: null,
      memeUrl: null,
      isMemeLoading: false,
      error: null
    });
  };

  // ✅ YOUR ORIGINAL SVGs
  const LogoSVG = () => (
    <img src="/roasted-logo.png" alt="Roasted Logo" className="w-full h-full object-contain" />
  );

  const LogoSVGHeader = () => (
    <img src="/logo-header.svg" alt="Roasted Header Logo" className="w-full h-full object-contain" />
  );

  const openFollowLink = () => {
    sdk.actions.openUrl("https://farcaster.xyz/teesmilex.base.eth");
  };

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
    <div className="custom-cursor min-h-screen animated-bg text-white flex flex-col">
      <header className="p-6 border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 cursor-pointer p-1 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <LogoSVGHeader />
            </div>
            <h1 className="text-2xl font-bold tracking-tight drop-shadow-sm uppercase italic font-chewy">
              Roasted
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/80 hidden sm:block font-medium shadow-sm">Built by</span>
            <button 
              onClick={openFollowLink}
              className="px-5 py-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white rounded-full text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand-300">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Follow
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 pb-40 w-full max-w-5xl mx-auto">
        
        {state.status === 'idle' && (
          <UserSearch 
            onSearch={handleSearch} 
            isLoading={false}
            initialUsername={context?.user?.username} 
          />
        )}

        {(state.status === 'fetching_user' || state.status === 'analyzing' || state.status === 'generating_meme') && (
           // ✅ YOUR ORIGINAL GRADIENT CONTAINER STRUCTURE
           <div className="max-w-md w-full mx-auto animate-fade-in">
             <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-1 rounded-3xl shadow-2xl">
               <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-6 rounded-[1.4rem] flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center">
                 
                 <div className="w-56 h-56 rounded-2xl p-2 flex items-center justify-center transform animate-scale-pulse">
                    <LogoSVG />
                 </div>

                 <div className="space-y-3 w-full">
                   <h2 className="text-2xl text-white drop-shadow-lg tracking-wide font-chewy">
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
            viewerUsername={context?.user?.username}
            onReset={handleReset}
            // ✅ Pass stop function to the card
            onStopMusic={stopBackgroundMusic} 
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