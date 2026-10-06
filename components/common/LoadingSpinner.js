// 'use client';

// import { useEffect, useState } from 'react';

// export default function LoadingSpinner({ 
//   fullScreen = false, 
//   size = 'md', 
//   timeout = 10000,
//   message = 'Loading...',
//   showProgress = true
// }) {
//   const [showTimeout, setShowTimeout] = useState(false);
//   const [progress, setProgress] = useState(0);
  
//   useEffect(() => {
//     if (!showProgress) return;
    
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 90) return prev;
//         return prev + 10;
//       });
//     }, 500);
    
//     return () => clearInterval(interval);
//   }, [showProgress]);
  
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowTimeout(true);
//       setProgress(100);
//     }, timeout);
    
//     return () => clearTimeout(timer);
//   }, [timeout]);
  
//   const sizeClasses = {
//     sm: 'w-12 h-12',
//     md: 'w-16 h-16',
//     lg: 'w-24 h-24',
//     xl: 'w-32 h-32'
//   };

//   // Simple rotating spinner
//   const SimpleSpinner = () => (
//     <div className="relative">
//       <div className={`${sizeClasses[size]} rounded-full border-4 border-gray-200`}></div>
//       <div className={`${sizeClasses[size]} rounded-full border-4 border-t-[#041367] border-r-[#041367] border-b-transparent border-l-transparent animate-spin absolute top-0 left-0`}></div>
//     </div>
//   );

//   if (fullScreen) {
//     return (
//       <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[9999] flex items-center justify-center">
//         <div className="bg-white rounded-2xl shadow-xl p-8 min-w-[300px] text-center">
//           {/* Spinner */}
//           <div className="flex justify-center mb-6">
//             <SimpleSpinner />
//           </div>
          
//           {/* Progress Bar */}
//           {showProgress && (
//             <div className="mt-4 w-full bg-gray-100 rounded-full h-1 overflow-hidden">
//               <div 
//                 className="bg-[#041367] h-full rounded-full transition-all duration-300"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           )}
          
//           {/* Message */}
//           <p className="mt-4 text-gray-600">
//             {showTimeout ? 'Taking longer than expected...' : message}
//           </p>
          
//           {/* Reload Button */}
//           {showTimeout && (
//             <button 
//               onClick={() => window.location.reload()}
//               className="mt-6 px-6 py-2 bg-[#041367] text-white rounded-lg hover:bg-[#041367]/90 transition-all"
//             >
//               Try Again
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return <SimpleSpinner />;
// }

'use client';

const sizes = {
  sm: 64,
  md: 96,
  lg: 128,
  xl: 168,
};

export default function LoadingSpinner({
  fullScreen = false,
  size = 'md',
  message = 'Thai Shipping',
  subMessage = '', // e.g. "Loading..." or "กำลังค้นหาพัสดุของคุณ"
  showRoute = true,
}) {
  const px = sizes[size] || sizes.md;
  const badge = Math.round(px * 0.56);

  const spinner = (
    <div
      role="status"
      aria-live="polite"
      aria-label={subMessage ? `${message} ${subMessage}` : message}
      className="flex flex-col items-center gap-5"
    >
      {/* Emblem */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: px, height: px }}
        aria-hidden="true"
      >
        {/* Radar ripples */}
        <span className="ts-ripple absolute inset-0 rounded-full border border-blue-500/40" />
        <span
          className="ts-ripple absolute inset-0 rounded-full border border-blue-500/40"
          style={{ animationDelay: '1.1s' }}
        />

        {/* Spinning conic ring */}
        <span className="ts-ring absolute inset-0 rounded-full" />

        {/* Orbiting courier dot */}
        <span className="ts-orbit absolute inset-0">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 shadow-[0_0_14px_3px_rgba(251,191,36,0.55)]" />
        </span>

        {/* Parcel badge */}
        <div
          className="ts-float relative flex items-center justify-center rounded-[28%] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-xl shadow-blue-900/30 ring-1 ring-white/20"
          style={{ width: badge, height: badge }}
        >
          <span className="ts-sheen absolute inset-0 overflow-hidden rounded-[28%]" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: badge * 0.52, height: badge * 0.52 }}
          >
            <path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2Z" />
            <path d="M4.3 7.2 12 11.4l7.7-4.2" />
            <path d="M12 11.4v9.6" />
            <path d="m8 4.9 7.8 4.2" stroke="#fbbf24" />
          </svg>
        </div>
      </div>

      {/* Brand + message */}
      <div className="text-center">
        <p className="ts-shimmer text-base font-semibold tracking-[0.04em]">
          {message}
        </p>
        {subMessage && (
          <p className="mt-1 text-xs text-slate-500">{subMessage}</p>
        )}
      </div>

      {/* Route progress */}
      {showRoute && (
        <div className="flex w-40 items-center gap-2" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-700" />
          <span className="relative h-px flex-1 overflow-hidden bg-slate-200">
            <span className="ts-route absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
          </span>
          <span className="ts-dest h-1.5 w-1.5 rounded-full bg-amber-400" />
        </div>
      )}

      <style>{`
        @keyframes ts-spin { to { transform: rotate(360deg); } }
        @keyframes ts-ripple {
          0% { transform: scale(0.55); opacity: 0.7; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @keyframes ts-float {
          0%, 100% { transform: translateY(2px) rotate(-1.5deg); }
          50% { transform: translateY(-3px) rotate(1.5deg); }
        }
        @keyframes ts-sheen {
          0% { transform: translateX(-120%) skewX(-20deg); }
          60%, 100% { transform: translateX(220%) skewX(-20deg); }
        }
        @keyframes ts-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes ts-route {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes ts-dest {
          0%, 70%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(251,191,36,0); }
          85% { transform: scale(1.5); box-shadow: 0 0 0 5px rgba(251,191,36,0.25); }
        }

        .ts-ripple { animation: ts-ripple 2.2s cubic-bezier(0.2, 0.6, 0.3, 1) infinite; }
        .ts-ring {
          background: conic-gradient(from 0deg, transparent 0 55%, #1e3a8a 70%, #2563eb 88%, #38bdf8 100%);
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
                  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
          animation: ts-spin 1.6s linear infinite;
        }
        .ts-orbit { animation: ts-spin 1.6s linear infinite; }
        .ts-float { animation: ts-float 2.4s ease-in-out infinite; }
        .ts-sheen::after {
          content: '';
          position: absolute; inset: 0;
          width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: ts-sheen 2.4s ease-in-out infinite;
        }
        .ts-shimmer {
          background: linear-gradient(90deg, #0f172a 35%, #2563eb 50%, #0f172a 65%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
                  background-clip: text;
          -webkit-text-fill-color: transparent;
                  color: transparent;
          animation: ts-shimmer 2.8s linear infinite;
        }
        .ts-route { animation: ts-route 1.6s ease-in-out infinite; }
        .ts-dest { animation: ts-dest 1.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ts-ripple, .ts-float, .ts-shimmer, .ts-dest, .ts-sheen::after { animation: none; }
          .ts-ripple { opacity: 0; }
          .ts-shimmer { background: none; -webkit-text-fill-color: #0f172a; color: #0f172a; }
          .ts-ring, .ts-orbit { animation-duration: 5s; }
          .ts-route { animation-duration: 4s; }
        }
      `}</style>
    </div>
  );

  if (!fullScreen) {
    return <div className="flex w-full justify-center py-4">{spinner}</div>;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-md">
      <div className="rounded-3xl border border-white/60 bg-white/90 px-12 py-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        {spinner}
      </div>
    </div>
  );
}