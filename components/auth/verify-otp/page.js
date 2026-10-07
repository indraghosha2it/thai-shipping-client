



// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { verifyOTP, resendOTP } from '@/services/Authentication';

// // ==========================================================
// // BUTTON
// // ==========================================================
// const Button = ({
//   children,
//   type = 'button',
//   variant = 'primary',
//   size = 'md',
//   isLoading = false,
//   disabled = false,
//   onClick,
//   className = '',
// }) => {
//   const baseClasses =
//     'rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

//   const variants = {
//     primary:
//       'bg-[#073155] text-white hover:bg-[#0a4270] focus-visible:ring-[#073155] shadow-sm',
//     secondary:
//       'bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-400',
//     outline:
//       'border-2 border-[#073155] text-[#073155] hover:bg-[#073155] hover:text-white focus-visible:ring-[#073155]',
//   };

//   const sizes = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-5 py-2.5 text-base',
//     lg: 'px-6 py-3 text-base',
//   };

//   const variantClass = variants[variant] || variants.primary;
//   const sizeClass = sizes[size] || sizes.md;

//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variantClass} ${sizeClass} ${className} ${
//         disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''
//       }`}
//       disabled={disabled || isLoading}
//       onClick={onClick}
//     >
//       <span className="flex items-center justify-center gap-2">
//         {isLoading ? (
//           <>
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//                 fill="none"
//               />
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               />
//             </svg>
//             Verifying...
//           </>
//         ) : (
//           children
//         )}
//       </span>
//     </button>
//   );
// };

// // ==========================================================
// // OTP INPUT (single digit box)
// // ==========================================================
// const OtpBox = ({
//   id,
//   value,
//   onChange,
//   onKeyDown,
//   onPaste,
//   disabled,
//   hasError,
// }) => (
//   <input
//     id={id}
//     name={id}
//     type="text"
//     inputMode="numeric"
//     autoComplete="one-time-code"
//     value={value}
//     onChange={onChange}
//     onKeyDown={onKeyDown}
//     onPaste={onPaste}
//     placeholder=""
//     maxLength={1}
//     disabled={disabled}
//     className={`h-12 w-11 rounded-lg border-2 bg-white text-center text-xl font-bold text-[#073155] transition-all duration-200 outline-none sm:h-14 sm:w-12 sm:text-2xl
//       ${
//         hasError
//           ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
//           : 'border-slate-200 hover:border-[#073155]/40 focus:border-[#073155] focus:ring-4 focus:ring-[#073155]/10'
//       }
//       ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
//     `}
//   />
// );

// // ==========================================================
// // VERIFY OTP PAGE
// // ==========================================================
// export default function VerifyOTPPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const email = searchParams.get('email');

//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [canResend, setCanResend] = useState(false);
//   const [error, setError] = useState('');

//   // Redirect if no email
//   useEffect(() => {
//     if (!email) {
//       router.push('/auth/register');
//     }
//   }, [email, router]);

//   // Resend timer
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   // ============================
//   // OTP HANDLERS
//   // ============================
//   const handleOtpChange = (index, value) => {
//     if (value.length > 1) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError('');

//     if (value !== '' && index < 5) {
//       const nextInput = document.getElementById(`otp-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
//       const prevInput = document.getElementById(`otp-${index - 1}`);
//       if (prevInput) prevInput.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
//     if (/^\d+$/.test(pastedData)) {
//       const digits = pastedData.split('');
//       const newOtp = [...otp];
//       digits.forEach((digit, index) => {
//         if (index < 6) newOtp[index] = digit;
//       });
//       setOtp(newOtp);

//       const nextIndex = Math.min(digits.length, 5);
//       const nextInput = document.getElementById(`otp-${nextIndex}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const otpString = otp.join('');
//     if (otpString.length !== 6) {
//       setError('Please enter complete 6-digit OTP');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await verifyOTP(email, otpString);

//       if (response.success) {
//         toast.success(
//           'Email verified successfully! Redirecting to your profile...',
//           {
//             position: 'top-right',
//             autoClose: 3000,
//           }
//         );

//         setTimeout(() => {
//           router.push('/profile');
//         }, 3000);
//       }
//     } catch (error) {
//       toast.error(error.message || 'Invalid OTP. Please try again.', {
//         position: 'top-right',
//         autoClose: 5000,
//       });
//       setOtp(['', '', '', '', '', '']);
//       document.getElementById('otp-0')?.focus();
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOTP = async () => {
//     if (!canResend) return;

//     setResendLoading(true);
//     try {
//       await resendOTP(email);

//       toast.success('New OTP sent to your email!', {
//         position: 'top-right',
//         autoClose: 3000,
//       });

//       setTimeLeft(60);
//       setCanResend(false);
//       setOtp(['', '', '', '', '', '']);

//       setTimeout(() => {
//         document.getElementById('otp-0')?.focus();
//       }, 100);
//     } catch (error) {
//       toast.error(error.message || 'Failed to resend OTP. Please try again.', {
//         position: 'top-right',
//         autoClose: 5000,
//       });
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   // If no email, show redirect spinner
//   if (!email) {
//     return (
//       <div className="flex min-h-[70vh] items-center justify-center bg-[#F7F9FB]">
//         <div className="text-center">
//           <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#073155]/20 border-t-[#073155]" />
//           <p className="text-sm text-[#5A6B7B]">Redirecting...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />

//       <main className="flex min-h-[80vh] items-center justify-center bg-[#F7F9FB] px-4 py-8 sm:py-10 -mt-6">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           className="w-full max-w-[460px]"
//         >
//           {/* Main card */}
//           <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(7,49,85,0.08)] sm:p-8">
//             {/* Icon badge */}
//             <div className="mb-5 flex justify-center">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E96C35] shadow-lg shadow-[#E96C35]/25">
//                 <svg
//                   className="h-5 w-5 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             {/* Header */}
//             <div className="mb-5 text-center">
//               <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
//                 Email Verification
//               </p>
//               <h1 className="text-xl font-semibold tracking-tight text-[#073155] sm:text-2xl">
//                 Verify your email
//               </h1>
//               <p className="mx-auto mt-2 max-w-xs text-[13px] leading-5 text-[#5A6B7B]">
//                 We&apos;ve sent a 6-digit verification code to your email.
//               </p>
//             </div>

//             {/* Email pill */}
//             <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-[#E5E9EF] bg-[#F8FAFC] px-3.5 py-2.5">
//               <svg
//                 className="h-4 w-4 shrink-0 text-[#E96C35]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.8"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//               <div className="min-w-0 flex-1">
//                 <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
//                   Code sent to
//                 </p>
//                 <p className="mt-0.5 truncate text-[12.5px] font-semibold text-[#073155]">
//                   {email}
//                 </p>
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="mb-3 block text-center text-[12px] font-medium text-[#073155]">
//                   Enter the 6-digit code
//                 </label>

//                 <div className="flex items-center justify-center gap-2 sm:gap-2.5">
//                   {otp.map((digit, index) => (
//                     <OtpBox
//                       key={index}
//                       id={`otp-${index}`}
//                       value={digit}
//                       onChange={(e) =>
//                         handleOtpChange(
//                           index,
//                           e.target.value.replace(/\D/g, '')
//                         )
//                       }
//                       onKeyDown={(e) => handleKeyDown(index, e)}
//                       onPaste={index === 0 ? handlePaste : undefined}
//                       disabled={loading || resendLoading}
//                       hasError={!!error}
//                     />
//                   ))}
//                 </div>

//                 {error && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -4 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-3 flex items-center justify-center gap-1.5 text-[12px] font-medium text-red-500"
//                   >
//                     <svg
//                       className="h-3.5 w-3.5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     {error}
//                   </motion.p>
//                 )}
//               </div>

//               <Button
//                 type="submit"
//                 variant="primary"
//                 size="lg"
//                 isLoading={loading}
//                 disabled={resendLoading}
//                 className="!mt-5 w-full"
//               >
//                 Verify Email
//                 <svg
//                   className="h-4 w-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   />
//                 </svg>
//               </Button>

//               {/* Resend */}
//               <div className="text-center">
//                 <p className="text-[12.5px] text-[#5A6B7B]">
//                   Didn&apos;t receive the code?{' '}
//                   <button
//                     type="button"
//                     onClick={handleResendOTP}
//                     disabled={!canResend || resendLoading}
//                     className={`font-semibold transition-colors ${
//                       canResend && !resendLoading
//                         ? 'text-[#E96C35] hover:text-[#d55f2b] hover:underline underline-offset-4'
//                         : 'cursor-not-allowed text-[#8A94A6]'
//                     }`}
//                   >
//                     {resendLoading ? (
//                       <span className="inline-flex items-center justify-center gap-1">
//                         <svg
//                           className="h-3 w-3 animate-spin"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                             fill="none"
//                           />
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           />
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : (
//                       `Resend code ${!canResend ? `(${timeLeft}s)` : ''}`
//                     )}
//                   </button>
//                 </p>
//               </div>

//               <div className="text-center">
//                 <Link
//                   href="/auth/register"
//                   className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#5A6B7B] transition-colors hover:text-[#073155]"
//                 >
//                   <svg
//                     className="h-3.5 w-3.5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 19l-7-7 7-7"
//                     />
//                   </svg>
//                   Back to Registration
//                 </Link>
//               </div>
//             </form>

//             {/* Help note */}
//             <div className="mt-5 rounded-xl border border-[#E96C35]/20 bg-[#FFF6F1] p-3.5">
//               <div className="flex items-start gap-2.5">
//                 <svg
//                   className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E96C35]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 <div className="text-[11px] leading-4 text-[#073155]">
//                   <p className="font-semibold">Having trouble?</p>
//                   <p className="mt-0.5 text-[#5A6B7B]">
//                     Check your spam folder or click &quot;Resend code&quot;.
//                     The code expires in 10 minutes.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <p className="mt-5 text-center text-[11px] text-[#8A94A6]">
//             © 2006 Thai Shipping (Thailand) Co., Ltd. All rights reserved.
//           </p>
//         </motion.div>
//       </main>
//     </>
//   );
// }




'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { verifyOTP, resendOTP } from '@/services/Authentication';

// ==========================================================
// BUTTON
// ==========================================================
const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-[#073155] text-white hover:bg-[#0a4270] focus-visible:ring-[#073155] shadow-sm',
    secondary:
      'bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-400',
    outline:
      'border-2 border-[#073155] text-[#073155] hover:bg-[#073155] hover:text-white focus-visible:ring-[#073155]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-base',
  };

  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className} ${
        disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Verifying...
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
};

// ==========================================================
// OTP INPUT (single digit box)
// ==========================================================
const OtpBox = ({
  id,
  value,
  onChange,
  onKeyDown,
  onPaste,
  disabled,
  hasError,
}) => (
  <input
    id={id}
    name={id}
    type="text"
    inputMode="numeric"
    autoComplete="one-time-code"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    onPaste={onPaste}
    placeholder=""
    maxLength={1}
    disabled={disabled}
    className={`h-12 w-11 rounded-lg border-2 bg-white text-center text-xl font-bold text-[#073155] transition-all duration-200 outline-none sm:h-14 sm:w-12 sm:text-2xl
      ${
        hasError
          ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
          : 'border-slate-200 hover:border-[#073155]/40 focus:border-[#073155] focus:ring-4 focus:ring-[#073155]/10'
      }
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
  />
);

// ==========================================================
// VERIFY OTP PAGE
// ==========================================================
export default function VerifyOTPPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState('');

  // Redirect if no email
  useEffect(() => {
    if (!email) {
      router.push('/auth/register');
    }
  }, [email, router]);

  // Resend timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // ============================
  // OTP HANDLERS
  // ============================
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value !== '' && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split('');
      const newOtp = [...otp];
      digits.forEach((digit, index) => {
        if (index < 6) newOtp[index] = digit;
      });
      setOtp(newOtp);

      const nextIndex = Math.min(digits.length, 5);
      const nextInput = document.getElementById(`otp-${nextIndex}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter complete 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const response = await verifyOTP(email, otpString);

      if (response.success) {
        toast.success(
          'Email verified successfully! Redirecting to your profile...',
          {
            position: 'top-right',
            autoClose: 3000,
          }
        );

        setTimeout(() => {
          router.push('/profile');
        }, 3000);
      }
    } catch (error) {
      toast.error(error.message || 'Invalid OTP. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      });
      setOtp(['', '', '', '', '', '']);
      document.getElementById('otp-0')?.focus();
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;

    setResendLoading(true);
    try {
      await resendOTP(email);

      toast.success('New OTP sent to your email!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setTimeLeft(60);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);

      setTimeout(() => {
        document.getElementById('otp-0')?.focus();
      }, 100);
    } catch (error) {
      toast.error(error.message || 'Failed to resend OTP. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setResendLoading(false);
    }
  };

  // If no email, show redirect spinner
  if (!email) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#F7F9FB]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#073155]/20 border-t-[#073155]" />
          <p className="text-sm text-[#5A6B7B]">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <main className="flex min-h-[80vh] items-center justify-center bg-[#F7F9FB] px-4 py-8 sm:py-10 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-[460px]"
        >
          {/* Main card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(7,49,85,0.08)] sm:p-8">
            {/* Icon badge */}
            <div className="mb-5 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E96C35] shadow-lg shadow-[#E96C35]/25">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="mb-5 text-center">
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
                Email Verification
              </p>
              <h1 className="text-xl font-semibold tracking-tight text-[#073155] sm:text-2xl">
                Verify your email
              </h1>
              <p className="mx-auto mt-2 max-w-xs text-[13px] leading-5 text-[#5A6B7B]">
                We&apos;ve sent a 6-digit verification code to your email.
              </p>
            </div>

            {/* Email pill */}
            <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-[#E5E9EF] bg-[#F8FAFC] px-3.5 py-2.5">
              <svg
                className="h-4 w-4 shrink-0 text-[#E96C35]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#8A94A6]">
                  Code sent to
                </p>
                <p className="mt-0.5 truncate text-[12.5px] font-semibold text-[#073155]">
                  {email}
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-3 block text-center text-[12px] font-medium text-[#073155]">
                  Enter the 6-digit code
                </label>

                <div className="flex items-center justify-center gap-2 sm:gap-2.5">
                  {otp.map((digit, index) => (
                    <OtpBox
                      key={index}
                      id={`otp-${index}`}
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(
                          index,
                          e.target.value.replace(/\D/g, '')
                        )
                      }
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      disabled={loading || resendLoading}
                      hasError={!!error}
                    />
                  ))}
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 flex items-center justify-center gap-1.5 text-[12px] font-medium text-red-500"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {error}
                  </motion.p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={loading}
                disabled={resendLoading}
                className="!mt-5 w-full"
              >
                Verify Email
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>

              {/* Resend */}
              <div className="text-center">
                <p className="text-[12.5px] text-[#5A6B7B]">
                  Didn&apos;t receive the code?{' '}
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={!canResend || resendLoading}
                    className={`font-semibold transition-colors ${
                      canResend && !resendLoading
                        ? 'text-[#E96C35] hover:text-[#d55f2b] hover:underline underline-offset-4'
                        : 'cursor-not-allowed text-[#8A94A6]'
                    }`}
                  >
                    {resendLoading ? (
                      <span className="inline-flex items-center justify-center gap-1">
                        <svg
                          className="h-3 w-3 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      `Resend code ${!canResend ? `(${timeLeft}s)` : ''}`
                    )}
                  </button>
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="/auth/register"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#5A6B7B] transition-colors hover:text-[#073155]"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Registration
                </Link>
              </div>
            </form>

            {/* Help note */}
            <div className="mt-5 rounded-xl border border-[#E96C35]/20 bg-[#FFF6F1] p-3.5">
              <div className="flex items-start gap-2.5">
                <svg
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E96C35]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-[11px] leading-4 text-[#073155]">
                  <p className="font-semibold">Having trouble?</p>
                  <p className="mt-0.5 text-[#5A6B7B]">
                    Check your spam folder or click &quot;Resend code&quot;.
                    The code expires in 10 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-[11px] text-[#8A94A6]">
            © 2006 Thai Shipping (Thailand) Co., Ltd. All rights reserved.
          </p>
        </motion.div>
      </main>
    </>
  );
}