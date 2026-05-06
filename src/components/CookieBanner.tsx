"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cs_consent');
    if (!consent) {
      // Small delay so it animates in nicely
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cs_consent', 'all');
    // Set cookie logic would go here
    document.cookie = "cs_consent=all; path=/; max-age=31536000"; 
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cs_consent', 'essential');
    document.cookie = "cs_consent=essential; path=/; max-age=31536000";
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0F172A] z-50 text-white shadow-2xl p-4 sm:p-6 border-t border-white/10 transform transition-transform duration-500 ease-out">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative">
        
        <div className="flex-grow max-w-4xl text-sm md:text-base text-slate-300 leading-relaxed pr-8">
          We use cookies to improve your experience. Essential cookies only are required. Accepting analytics helps us improve ConvertSnap. 
          <Link href="/cookies" className="text-white hover:text-primary-light underline ml-2 whitespace-nowrap">Learn more</Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <button 
            onClick={handleReject}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Reject Non-Essential
          </button>
          
          <button 
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white font-bold transition-colors whitespace-nowrap"
          >
            Accept All
          </button>
        </div>
        
        {/* Close button for accessibility/convenience */}
        <button 
          onClick={handleReject} 
          className="absolute top-0 right-0 md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
