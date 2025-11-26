'use client';

import React, { useState, useEffect } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';

interface AddMiniAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  appName?: string;
  appIcon?: string;
}

export function AddMiniAppDrawer({ 
  isOpen, 
  onClose,
  onSuccess,
  appName = "Roasted",
  appIcon = "/roasted-logo.png"
}: AddMiniAppDrawerProps) {
  const [isAddingApp, setIsAddingApp] = useState(false);
  const [hasAddedApp, setHasAddedApp] = useState(false);

  const handleAddMiniApp = async () => {
    setIsAddingApp(true);
    try {
      await sdk.actions.addMiniApp();
      setHasAddedApp(true);
      console.log('✅ Mini app successfully added!');
      onSuccess?.();
      
      // Close drawer after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error: any) {
      const errorMsg = error?.message || '';
      
      if (errorMsg.includes('RejectedByUser')) {
        console.log('User declined to add the app');
        // Close drawer if user rejected
        onClose();
      } else if (errorMsg.includes('InvalidDomainManifestJson')) {
        console.error('⚠️ Invalid manifest or domain mismatch:', error);
      } else {
        console.error('Error adding mini app:', error);
      }
    } finally {
      setIsAddingApp(false);
    }
  };

  const handleNotNow = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-40 animate-fade-in"
        onClick={handleNotNow}
      />

      {/* Bottom Drawer - Farcaster Style */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="bg-[#1a1a1a] rounded-t-3xl shadow-2xl px-6 pt-3 pb-8 max-w-2xl mx-auto">
          
          {/* Handle bar */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-1 bg-white/20 rounded-full"></div>
          </div>

          {!hasAddedApp ? (
            <>
              {/* App Icon with Plus Badge */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-full h-full  rounded-[20px] shadow-xl">
                    <div className="w-full h-full  rounded-[18px] flex items-center justify-center">
                      <img 
                        src={appIcon} 
                        alt={appName}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>
                  {/* Plus badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#8B5CF6" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-white text-2xl font-semibold text-center mb-10">
                Add {appName} to Farcaster
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {/* Add to Farcaster */}
                <button
                  onClick={handleAddMiniApp}
                  disabled={isAddingApp}
                  className="w-full bg-[#2a2a2a] hover:bg-[#333333] rounded-2xl p-5 flex items-center gap-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">
                    {isAddingApp ? 'Adding...' : 'Add to Farcaster'}
                  </span>
                </button>

                {/* Enable notifications */}
                <div className="w-full bg-[#2a2a2a] rounded-2xl p-5 flex items-center gap-4 opacity-60">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-medium">Enable notifications</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleNotNow}
                  className="flex-1 bg-transparent border-2 border-white/20 hover:border-white/30 text-white rounded-full py-4 px-6 text-lg font-semibold transition-colors"
                >
                  Not now
                </button>
                <button
                  onClick={handleAddMiniApp}
                  disabled={isAddingApp}
                  className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-full py-4 px-6 text-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAddingApp ? 'Adding...' : 'Add'}
                </button>
              </div>
            </>
          ) : (
            // Success State
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Successfully Added!
              </h3>
              <p className="text-white/60 text-lg">
                {appName} is now in your Farcaster apps
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}