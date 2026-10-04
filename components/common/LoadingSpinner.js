'use client';

import { useEffect, useState } from 'react';

export default function LoadingSpinner({ 
  fullScreen = false, 
  size = 'md', 
  timeout = 10000,
  message = 'Loading...',
  showProgress = true
}) {
  const [showTimeout, setShowTimeout] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (!showProgress) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + 10;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, [showProgress]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimeout(true);
      setProgress(100);
    }, timeout);
    
    return () => clearTimeout(timer);
  }, [timeout]);
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  // Simple rotating spinner
  const SimpleSpinner = () => (
    <div className="relative">
      <div className={`${sizeClasses[size]} rounded-full border-4 border-gray-200`}></div>
      <div className={`${sizeClasses[size]} rounded-full border-4 border-t-[#041367] border-r-[#041367] border-b-transparent border-l-transparent animate-spin absolute top-0 left-0`}></div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[9999] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 min-w-[300px] text-center">
          {/* Spinner */}
          <div className="flex justify-center mb-6">
            <SimpleSpinner />
          </div>
          
          {/* Progress Bar */}
          {showProgress && (
            <div className="mt-4 w-full bg-gray-100 rounded-full h-1 overflow-hidden">
              <div 
                className="bg-[#041367] h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          
          {/* Message */}
          <p className="mt-4 text-gray-600">
            {showTimeout ? 'Taking longer than expected...' : message}
          </p>
          
          {/* Reload Button */}
          {showTimeout && (
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-[#041367] text-white rounded-lg hover:bg-[#041367]/90 transition-all"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  return <SimpleSpinner />;
}