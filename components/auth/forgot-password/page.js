

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import { forgotPassword, verifyOTP, resetPassword } from '@/services/Authentication';

// import { 
//   forgotPassword, 
//   verifyResetOTP,  // Change from verifyOTP to verifyResetOTP
//   resendResetOTP,  // Change from resendOTP to resendResetOTP
//   resetPassword 
// } from '@/services/Authentication';

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
//   const baseClasses = 'rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group';
  
//   const variants = {
//     primary: 'bg-gradient-to-r from-[#041367] via-[#0f2b6e] to-[#041367] text-white hover:shadow-xl hover:scale-[1.02] focus:ring-[#041367]',
//     secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500',
//     outline: 'border-2 border-[#041367] text-[#041367] hover:bg-[#041367] hover:text-white focus:ring-[#041367]'
//   };

//   const sizes = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-5 py-2.5 text-base',
//     lg: 'px-6 py-3 text-lg'
//   };

//   const variantClass = variants[variant] || variants.primary;
//   const sizeClass = sizes[size] || sizes.md;

//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variantClass} ${sizeClass} ${className} ${(disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
//       disabled={disabled || isLoading}
//       onClick={onClick}
//     >
//       <span className="relative z-10 flex items-center justify-center gap-2">
//         {isLoading ? (
//           <>
//             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//             </svg>
//             Processing...
//           </>
//         ) : (
//           children
//         )}
//       </span>
//       {variant === 'primary' && (
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//           initial={{ x: '-100%' }}
//           whileHover={{ x: '100%' }}
//           transition={{ duration: 0.6 }}
//         />
//       )}
//     </button>
//   );
// };

// const Input = ({
//   label,
//   type = 'text',
//   name,
//   value,
//   onChange,
//   onBlur,
//   placeholder,
//   error,
//   required = false,
//   disabled = false,
//   icon,
//   className = '',
//   ...props
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div className="mb-4">
//       {label && (
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           {label}
//           {required && <span className="text-red-500 ml-1">*</span>}
//         </label>
//       )}
//       <div className="relative group">
//         {icon && (
//           <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-300 ${isFocused ? 'text-[#041367]' : 'text-gray-400'}`}>
//             {icon}
//           </div>
//         )}
//         <input
//           type={type}
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           onBlur={(e) => {
//             setIsFocused(false);
//             onBlur && onBlur(e);
//           }}
//           onFocus={() => setIsFocused(true)}
//           placeholder={placeholder}
//           disabled={disabled}
//           className={`w-full px-4 py-3 border-2 rounded-xl shadow-sm bg-white transition-all duration-300 focus:outline-none ${
//             error 
//               ? 'border-red-500 bg-red-50 focus:ring-red-500' 
//               : isFocused 
//                 ? 'border-[#041367] ring-4 ring-[#041367]/10' 
//                 : 'border-gray-200 hover:border-[#041367]/50'
//           } ${icon ? 'pl-10' : ''} ${className}`}
//           {...props}
//         />
//       </div>
//       {error && (
//         <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-sm text-red-500 flex items-center gap-1">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           {error}
//         </motion.p>
//       )}
//     </div>
//   );
// };

// // Animated Text Overlay Component for Right Side Image
// const AnimatedImageOverlay = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const messages = [
//     { title: "Global Shipping Excellence", description: "Connecting Thailand to the world with reliable ocean freight services across Asia, America, and Europe." },
//     { title: "30+ Years of Trust", description: "Serving the global community with excellence, recognized as Ocean Carrier of the Year for four consecutive years." },
//     { title: "Advanced Fleet", description: "Modern container fleet with real-time tracking and temperature-controlled solutions for all cargo types." },
//     { title: "24/7 Customer Support", description: "Dedicated support team available round the clock for all your shipping needs." },
//     { title: "Global Network", description: "200+ overseas branch offices and 50+ countries connected through our comprehensive network." }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % messages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-10">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-4"
//         >
//           <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
//             <span className="text-white text-sm font-medium">✦ Since 1988</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
//             {messages[currentIndex].title}
//           </h2>
//           <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-md">
//             {messages[currentIndex].description}
//           </p>
//           <div className="flex items-center gap-2 pt-4">
//             <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
//             <span className="text-white/60 text-sm">Hanjin Shipping Thailand</span>
//           </div>
//         </motion.div>
//       </AnimatePresence>
      
//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {messages.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`transition-all duration-300 rounded-full ${
//               currentIndex === idx 
//                 ? 'w-8 h-1.5 bg-white' 
//                 : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const OtpInput = ({
//   index,
//   value,
//   onChange,
//   onKeyDown,
//   onPaste,
//   error
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <input
//       id={`otp-${index}`}
//       type="text"
//       value={value}
//       onChange={onChange}
//       onKeyDown={onKeyDown}
//       onFocus={() => setIsFocused(true)}
//       onBlur={() => setIsFocused(false)}
//       onPaste={index === 0 ? onPaste : undefined}
//       placeholder="0"
//       maxLength={1}
//       required
//       className={`w-12 md:w-14 h-12 md:h-14 text-center text-xl font-bold border-2 rounded-xl shadow-sm bg-white transition-all duration-300 focus:outline-none ${
//         error 
//           ? 'border-red-500 bg-red-50 focus:ring-red-500' 
//           : isFocused 
//             ? 'border-[#041367] ring-4 ring-[#041367]/10' 
//             : 'border-gray-200 hover:border-[#041367]/50'
//       }`}
//     />
//   );
// };

// export default function ForgotPasswordPage() {
//   const router = useRouter();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [canResend, setCanResend] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [passwordStrength, setPasswordStrength] = useState(0);

//   // Timer for resend OTP
//   useEffect(() => {
//     if (currentStep === 2 && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0) {
//       setCanResend(true);
//     }
//   }, [timeLeft, currentStep]);

//   // Password strength checker
//   useEffect(() => {
//     calculatePasswordStrength(newPassword);
//   }, [newPassword]);

//   const calculatePasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 8) strength += 25;
//     if (password.match(/[a-z]+/)) strength += 25;
//     if (password.match(/[A-Z]+/)) strength += 25;
//     if (password.match(/[0-9]+/) || password.match(/[$@#&!]+/)) strength += 25;
//     setPasswordStrength(strength);
//   };

//   const getPasswordStrengthColor = () => {
//     if (passwordStrength <= 25) return 'bg-red-500';
//     if (passwordStrength <= 50) return 'bg-orange-500';
//     if (passwordStrength <= 75) return 'bg-yellow-500';
//     return 'bg-green-500';
//   };

//   const getPasswordStrengthText = () => {
//     if (passwordStrength <= 25) return 'Weak';
//     if (passwordStrength <= 50) return 'Fair';
//     if (passwordStrength <= 75) return 'Good';
//     return 'Strong';
//   };

//   const validateEmail = () => {
//     const newErrors = {};
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     return newErrors;
//   };

//   const validateOtp = () => {
//     const newErrors = {};
//     const otpString = otp.join('');
//     if (otpString.length !== 6) {
//       newErrors.otp = 'Please enter complete 6-digit OTP';
//     }
//     return newErrors;
//   };

//   const validatePassword = () => {
//     const newErrors = {};
//     if (!newPassword) {
//       newErrors.newPassword = 'New password is required';
//     } else if (newPassword.length < 6) {
//       newErrors.newPassword = 'Password must be at least 6 characters';
//     }

//     if (!confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (newPassword !== confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     return newErrors;
//   };

//   const handleEmailSubmit = async (e) => {
//     e.preventDefault();
//     const emailErrors = validateEmail();
    
//     if (Object.keys(emailErrors).length === 0) {
//       setLoading(true);
//       try {
//         await forgotPassword(email);
        
//         toast.success('Reset code sent to your email!', {
//           position: 'top-right',
//           autoClose: 5000,
//         });
        
//         setCurrentStep(2);
//         setTimeLeft(60);
//         setCanResend(false);
//       } catch (error) {
//         toast.error(error.message || 'Failed to send reset code. Please try again.', {
//           position: 'top-right',
//           autoClose: 5000,
//         });
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setErrors(emailErrors);
//       setTouched({ email: true });
//     }
//   };

//   // const handleOtpSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const otpErrors = validateOtp();
    
//   //   if (Object.keys(otpErrors).length === 0) {
//   //     setLoading(true);
//   //     try {
//   //       const otpString = otp.join('');
//   //       await verifyOTP(email, otpString);
        
//   //       toast.success('OTP verified successfully!', {
//   //         position: 'top-right',
//   //         autoClose: 3000,
//   //       });
        
//   //       setCurrentStep(3);
//   //     } catch (error) {
//   //       toast.error(error.message || 'Invalid OTP. Please try again.', {
//   //         position: 'top-right',
//   //         autoClose: 5000,
//   //       });
//   //       setOtp(['', '', '', '', '', '']);
//   //       document.getElementById('otp-0')?.focus();
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   } else {
//   //     setErrors(otpErrors);
//   //   }
//   // };


//  const handleOtpSubmit = async (e) => {
//   e.preventDefault();
//   const otpErrors = validateOtp();
  
//   if (Object.keys(otpErrors).length === 0) {
//     setLoading(true);
//     try {
//       const otpString = otp.join('');
//       // Use verifyResetOTP instead of verifyOTP
//       await verifyResetOTP(email, otpString);
      
//       toast.success('OTP verified successfully!', {
//         position: 'top-right',
//         autoClose: 3000,
//       });
      
//       setCurrentStep(3);
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
//   } else {
//     setErrors(otpErrors);
//   }
// };

//   const handlePasswordSubmit = async (e) => {
//     e.preventDefault();
//     const passwordErrors = validatePassword();
    
//     if (Object.keys(passwordErrors).length === 0) {
//       setLoading(true);
//       try {
//         const otpString = otp.join('');
//         await resetPassword(email, otpString, newPassword);
        
//         toast.success('Password reset successfully! Redirecting to login...', {
//           position: 'top-right',
//           autoClose: 3000,
//         });
        
//         setTimeout(() => {
//           router.push('/auth/login');
//         }, 3000);
//       } catch (error) {
//         toast.error(error.message || 'Failed to reset password. Please try again.', {
//           position: 'top-right',
//           autoClose: 5000,
//         });
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setErrors(passwordErrors);
//       Object.keys(passwordErrors).forEach(field => {
//         setTouched(prev => ({ ...prev, [field]: true }));
//       });
//     }
//   };

//   // const handleResendOTP = async () => {
//   //   if (!canResend) return;
    
//   //   setLoading(true);
//   //   try {
//   //     await forgotPassword(email);
      
//   //     toast.info('New reset code sent to your email!', {
//   //       position: 'top-right',
//   //       autoClose: 3000,
//   //     });
      
//   //     setTimeLeft(60);
//   //     setCanResend(false);
//   //     setOtp(['', '', '', '', '', '']);
//   //   } catch (error) {
//   //     toast.error('Failed to resend code. Please try again.', {
//   //       position: 'top-right',
//   //       autoClose: 5000,
//   //     });
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleResendOTP = async () => {
//   if (!canResend) return;
  
//   setLoading(true);
//   try {
//     // Use resendResetOTP instead of forgotPassword
//     await resendResetOTP(email);
    
//     toast.info('New reset code sent to your email!', {
//       position: 'top-right',
//       autoClose: 3000,
//     });
    
//     setTimeLeft(60);
//     setCanResend(false);
//     setOtp(['', '', '', '', '', '']);
//   } catch (error) {
//     toast.error('Failed to resend code. Please try again.', {
//       position: 'top-right',
//       autoClose: 5000,
//     });
//   } finally {
//     setLoading(false);
//   }
// };

//   const handleOtpChange = (index, value) => {
//     if (value.length > 1) return;
    
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setErrors({});

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

//   const renderIcon = (type) => {
//     switch(type) {
//       case 'email':
//         return (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         );
//       case 'password':
//         return (
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      
//       <div className="min-h-screen bg-white">
    

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
//           <div className="grid lg:grid-cols-2 gap-6 items-stretch min-h-[500px]">
            
//             {/* Left Side - Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center"
//             >
//               <div className="w-full bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//                 {/* Header */}
//                 <div className="text-center mb-6">
//                   <div className="w-14 h-14 bg-gradient-to-br from-[#041367] to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
//                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7.5a2.25 2.25 0 01.617 1.463 3.75 3.75 0 01-1.784 4.14A2.25 2.25 0 0112 15.75H8.25a2.25 2.25 0 01-2.25-2.25v-4.5a2.25 2.25 0 011.84-2.214 2.25 2.25 0 01.41-.036h4.5c.14 0 .277.011.41.036z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 10.5h2.25a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-2.25" />
//                     </svg>
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     {currentStep === 1 && 'Forgot Password?'}
//                     {currentStep === 2 && 'Verify Code'}
//                     {currentStep === 3 && 'Create New Password'}
//                   </h2>
//                   <p className="text-gray-500 text-sm mt-2">
//                     {currentStep === 1 && "Enter your email to receive a verification code"}
//                     {currentStep === 2 && `We've sent a code to ${email}`}
//                     {currentStep === 3 && "Enter your new password below"}
//                   </p>
//                 </div>

//                 {/* Progress Steps */}
//                 <div className="mb-6">
//                   <div className="flex items-center justify-between gap-2">
//                     {[1, 2, 3].map((step) => (
//                       <React.Fragment key={step}>
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
//                           currentStep >= step ? 'bg-[#041367] text-white' : 'bg-gray-200 text-gray-600'
//                         }`}>
//                           {step}
//                         </div>
//                         {step < 3 && (
//                           <div className={`flex-1 h-0.5 rounded ${
//                             currentStep > step ? 'bg-[#041367]' : 'bg-gray-200'
//                           }`} />
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </div>
//                   <div className="flex justify-between mt-2 text-xs text-gray-500">
//                     <span>Email</span>
//                     <span>Verify</span>
//                     <span>Reset</span>
//                   </div>
//                 </div>

//                 {/* Step 1: Email Form */}
//                 {currentStep === 1 && (
//                   <form onSubmit={handleEmailSubmit} className="space-y-5">
//                     <Input
//                       label="Email Address"
//                       type="email"
//                       name="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       onBlur={() => setTouched({ ...touched, email: true })}
//                       placeholder="customer@hanjin.com"
//                       error={touched.email && errors.email}
//                       required
//                       icon={renderIcon('email')}
//                     />

//                     <Button
//                       type="submit"
//                       variant="primary"
//                       size="lg"
//                       isLoading={loading}
//                       className="w-full"
//                     >
//                       Send Reset Code
//                       <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Button>

//                     <Link
//                       href="/auth/login"
//                       className="block text-center text-sm text-gray-500 hover:text-[#041367] transition-colors"
//                     >
//                       ← Back to Login
//                     </Link>
//                   </form>
//                 )}

//                 {/* Step 2: OTP Form */}
//                 {currentStep === 2 && (
//                   <form onSubmit={handleOtpSubmit} className="space-y-6">
//                     <div className="space-y-4">
//                       <label className="block text-sm font-medium text-gray-700 text-center">
//                         Enter 6-digit verification code
//                       </label>
                      
//                       <div className="flex justify-center gap-2 md:gap-3">
//                         {otp.map((digit, index) => (
//                           <OtpInput
//                             key={index}
//                             index={index}
//                             value={digit}
//                             onChange={(e) => handleOtpChange(index, e.target.value)}
//                             onKeyDown={(e) => handleKeyDown(index, e)}
//                             onPaste={handlePaste}
//                             error={errors.otp}
//                           />
//                         ))}
//                       </div>

//                       {errors.otp && (
//                         <p className="text-center text-sm text-red-500 animate-pulse">
//                           {errors.otp}
//                         </p>
//                       )}

//                       <div className="text-center">
//                         <p className="text-sm text-gray-600">
//                           Didn't receive the code?{' '}
//                           <button
//                             type="button"
//                             onClick={handleResendOTP}
//                             disabled={!canResend || loading}
//                             className={`font-semibold ${
//                               canResend && !loading 
//                                 ? 'text-[#041367] hover:underline' 
//                                 : 'text-gray-400 cursor-not-allowed'
//                             }`}
//                           >
//                             {!canResend ? `Resend OTP (${timeLeft}s)` : 'Resend OTP'}
//                           </button>
//                         </p>
//                       </div>
//                     </div>

//                     <Button
//                       type="submit"
//                       variant="primary"
//                       size="lg"
//                       isLoading={loading}
//                       className="w-full"
//                     >
//                       Verify Code
//                       <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </Button>

//                     <button
//                       type="button"
//                       onClick={() => setCurrentStep(1)}
//                       className="block w-full text-center text-sm text-gray-500 hover:text-[#041367] transition-colors"
//                     >
//                       ← Use different email
//                     </button>
//                   </form>
//                 )}

//                 {/* Step 3: New Password Form */}
//                 {currentStep === 3 && (
//                   <form onSubmit={handlePasswordSubmit} className="space-y-5">
//                     <div className="relative">
//                       <Input
//                         label="New Password"
//                         type={showPassword ? 'text' : 'password'}
//                         name="newPassword"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         onBlur={() => setTouched({ ...touched, newPassword: true })}
//                         placeholder="Enter new password"
//                         error={touched.newPassword && errors.newPassword}
//                         required
//                         icon={renderIcon('password')}
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-[46px] text-gray-400 hover:text-[#041367] transition-colors"
//                       >
//                         {showPassword ? (
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                           </svg>
//                         ) : (
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                           </svg>
//                         )}
//                       </button>
//                     </div>

//                     {/* Password Strength Meter */}
//                     {newPassword && (
//                       <div className="space-y-1 -mt-2">
//                         <div className="flex items-center gap-2">
//                           <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
//                             <div
//                               className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
//                               style={{ width: `${passwordStrength}%` }}
//                             />
//                           </div>
//                           <span className="text-xs font-medium text-gray-600">{getPasswordStrengthText()}</span>
//                         </div>
//                       </div>
//                     )}

//                     <div className="relative">
//                       <Input
//                         label="Confirm New Password"
//                         type={showConfirmPassword ? 'text' : 'password'}
//                         name="confirmPassword"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         onBlur={() => setTouched({ ...touched, confirmPassword: true })}
//                         placeholder="Confirm your password"
//                         error={touched.confirmPassword && errors.confirmPassword}
//                         required
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         className="absolute right-3 top-[46px] text-gray-400 hover:text-[#041367] transition-colors"
//                       >
//                         {showConfirmPassword ? (
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                           </svg>
//                         ) : (
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                           </svg>
//                         )}
//                       </button>
//                     </div>

//                     {/* Password Requirements */}
//                     <div className="bg-gray-50 rounded-xl p-4">
//                       <p className="text-sm font-medium text-gray-700 mb-2">Password requirements:</p>
//                       <ul className="text-xs text-gray-500 space-y-1">
//                         <li className="flex items-center gap-2">
//                           <span className={newPassword.length >= 8 ? 'text-green-500' : 'text-gray-400'}>
//                             {newPassword.length >= 8 ? '✓' : '○'}
//                           </span>
//                           At least 8 characters
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <span className={/([a-z])/.test(newPassword) ? 'text-green-500' : 'text-gray-400'}>
//                             {/([a-z])/.test(newPassword) ? '✓' : '○'}
//                           </span>
//                           Contains lowercase letter
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <span className={/([A-Z])/.test(newPassword) ? 'text-green-500' : 'text-gray-400'}>
//                             {/([A-Z])/.test(newPassword) ? '✓' : '○'}
//                           </span>
//                           Contains uppercase letter
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <span className={/([0-9!@#$%^&*])/.test(newPassword) ? 'text-green-500' : 'text-gray-400'}>
//                             {/([0-9!@#$%^&*])/.test(newPassword) ? '✓' : '○'}
//                           </span>
//                           Contains number or special character
//                         </li>
//                       </ul>
//                     </div>

//                     <Button
//                       type="submit"
//                       variant="primary"
//                       size="lg"
//                       isLoading={loading}
//                       className="w-full"
//                     >
//                       Reset Password
//                       <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </Button>

//                     <button
//                       type="button"
//                       onClick={() => setCurrentStep(2)}
//                       className="block w-full text-center text-sm text-gray-500 hover:text-[#041367] transition-colors"
//                     >
//                       ← Back to verification
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </motion.div>

//             {/* Right Side - Image with Animated Text Overlay */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative rounded-2xl overflow-hidden shadow-xl min-h-[500px]"
//             >
//               <Image
//                 src="/images/building.avif"
//                 alt="Hanjin Shipping"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
//               <AnimatedImageOverlay />
//             </motion.div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center py-6 border-t border-gray-100 mt-8">
//           <p className="text-xs text-gray-400">© 2006 Hanjin Shipping (Thailand) Co., Ltd. All rights reserved.</p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.25s ease-out forwards;
//         }
//       `}</style>
//     </>
//   );
// }




'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  forgotPassword,
  verifyResetOTP,
  resendResetOTP,
  resetPassword,
} from '@/services/Authentication';

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
      'bg-[#073155] text-white hover:bg-[#0a4270] focus-visible:ring-[#073155] shadow-[0_4px_14px_rgba(7,49,85,0.15)] hover:shadow-[0_6px_20px_rgba(7,49,85,0.25)]',
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
            Processing...
          </>
        ) : (
          children
        )}
      </span>
    </button>
  );
};

// ==========================================================
// INPUT
// ==========================================================
const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required = false,
  disabled = false,
  icon,
  rightElement,
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      {label && (
        <label className="mb-2 block text-[13px] font-medium text-[#073155]">
          {label}
          {required && <span className="ml-1 text-[#E96C35]">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 transition-colors duration-200 ${
              isFocused ? 'text-[#073155]' : 'text-[#8A94A6]'
            }`}
          >
            {icon}
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full rounded-xl border-2 bg-white py-3 text-[13.5px] text-[#073155] shadow-sm outline-none transition-all duration-300 placeholder:text-[#A5AFB5]
            ${
              error
                ? 'border-red-400 bg-red-50 focus:ring-4 focus:ring-red-500/10'
                : isFocused
                  ? 'border-[#073155] ring-4 ring-[#073155]/10'
                  : 'border-slate-200 hover:border-[#073155]/40'
            }
            ${icon ? 'pl-10' : 'pl-4'} ${rightElement ? 'pr-11' : 'pr-4'} ${className}`}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 flex items-center gap-1 text-[12px] text-red-500"
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
  );
};

// ==========================================================
// OTP INPUT
// ==========================================================
const OtpInput = ({ index, value, onChange, onKeyDown, onPaste, error }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFilled = !!value;

  return (
    <input
      id={`otp-${index}`}
      type="text"
      inputMode="numeric"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onPaste={index === 0 ? onPaste : undefined}
      placeholder=""
      maxLength={1}
      required
      className={`h-14 w-11 rounded-xl border-2 bg-white text-center text-xl font-bold outline-none transition-all duration-200 sm:h-16 sm:w-12 sm:text-2xl
        ${
          error
            ? 'border-red-400 bg-red-50 text-red-500 focus:ring-4 focus:ring-red-500/10'
            : isFocused
              ? 'border-[#073155] ring-4 ring-[#073155]/10'
              : isFilled
                ? 'border-[#E96C35] bg-[#FFF6F1] text-[#E96C35]'
                : 'border-slate-200 text-[#073155] hover:border-[#073155]/40'
        }`}
    />
  );
};

// ==========================================================
// MAIN FORGOT PASSWORD PAGE
// ==========================================================
export default function ForgotPasswordPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Resend timer (only active on step 2)
  useEffect(() => {
    if (currentStep === 2 && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [timeLeft, currentStep]);

  // Password strength
  useEffect(() => {
    calculatePasswordStrength(newPassword);
  }, [newPassword]);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]+/)) strength += 25;
    if (password.match(/[A-Z]+/)) strength += 25;
    if (password.match(/[0-9]+/) || password.match(/[$@#&!]+/)) strength += 25;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-[#E96C35]';
    if (passwordStrength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  const validateEmail = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    return newErrors;
  };

  const validateOtp = () => {
    const newErrors = {};
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      newErrors.otp = 'Please enter the complete 6-digit code';
    }
    return newErrors;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (newPassword.length < 6) {
      newErrors.newPassword = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  // ==========================================================
  // STEP 1 — EMAIL SUBMIT
  // ==========================================================
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const emailErrors = validateEmail();

    if (Object.keys(emailErrors).length === 0) {
      setLoading(true);
      try {
        await forgotPassword(email);

        toast.success('Reset code sent to your email!', {
          position: 'top-right',
          autoClose: 5000,
        });

        setCurrentStep(2);
        setTimeLeft(60);
        setCanResend(false);
      } catch (error) {
        toast.error(
          error.message || 'Failed to send reset code. Please try again.',
          {
            position: 'top-right',
            autoClose: 5000,
          }
        );
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(emailErrors);
      setTouched({ email: true });
    }
  };

  // ==========================================================
  // STEP 2 — OTP SUBMIT
  // ==========================================================
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpErrors = validateOtp();

    if (Object.keys(otpErrors).length === 0) {
      setLoading(true);
      try {
        const otpString = otp.join('');
        await verifyResetOTP(email, otpString);

        toast.success('OTP verified successfully!', {
          position: 'top-right',
          autoClose: 3000,
        });

        setCurrentStep(3);
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
    } else {
      setErrors(otpErrors);
    }
  };

  // ==========================================================
  // STEP 3 — PASSWORD SUBMIT
  // ==========================================================
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const passwordErrors = validatePassword();

    if (Object.keys(passwordErrors).length === 0) {
      setLoading(true);
      try {
        const otpString = otp.join('');
        await resetPassword(email, otpString, newPassword);

        toast.success(
          'Password reset successfully! Redirecting to login...',
          {
            position: 'top-right',
            autoClose: 3000,
          }
        );

        setTimeout(() => {
          router.push('/auth/login');
        }, 3000);
      } catch (error) {
        toast.error(
          error.message || 'Failed to reset password. Please try again.',
          {
            position: 'top-right',
            autoClose: 5000,
          }
        );
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(passwordErrors);
      Object.keys(passwordErrors).forEach((field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
      });
    }
  };

  // ==========================================================
  // RESEND OTP
  // ==========================================================
  const handleResendOTP = async () => {
    if (!canResend) return;

    setLoading(true);
    try {
      await resendResetOTP(email);

      toast.info('New reset code sent to your email!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setTimeLeft(60);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
    } catch (error) {
      toast.error('Failed to resend code. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // ==========================================================
  // OTP HANDLERS
  // ==========================================================
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setErrors({});

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

  // ==========================================================
  // ICONS
  // ==========================================================
  const renderIcon = (type) => {
    switch (type) {
      case 'email':
        return (
          <svg
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.6" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
            />
          </svg>
        );
      case 'password':
        return (
          <svg
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect
              x="4"
              y="10"
              width="16"
              height="11"
              rx="2"
              strokeWidth="1.6"
            />
            <path
              strokeLinecap="round"
              strokeWidth="1.6"
              d="M8 10V7a4 4 0 018 0v3"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const EyeButton = ({ isVisible, onToggle }) => (
    <button
      type="button"
      onClick={onToggle}
      className="p-2 text-[#8A94A6] transition-colors hover:text-[#073155] focus:outline-none"
      aria-label={isVisible ? 'Hide password' : 'Show password'}
    >
      {isVisible ? (
        <svg
          className="h-[17px] w-[17px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      ) : (
        <svg
          className="h-[17px] w-[17px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      )}
    </button>
  );

  // ==========================================================
  // STEP META
  // ==========================================================
  const stepMeta = {
    1: {
      eyebrow: 'Password Recovery',
      title: 'Forgot your password?',
      description:
        "Enter your registered email address and we'll send you a verification code to reset it.",
    },
    2: {
      eyebrow: 'Email Verification',
      title: 'Verify your email',
      description: `Enter the 6-digit code we sent to your email to continue.`,
    },
    3: {
      eyebrow: 'New Password',
      title: 'Create a new password',
      description:
        'Choose a strong password to secure your account. It should be easy for you to remember but hard for others to guess.',
    },
  };

  const meta = stepMeta[currentStep];

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
          className="w-full max-w-[480px]"
        >
          {/* MAIN CARD */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(7,49,85,0.08)]">
            {/* ==================================================
                NAVY HEADER
            ================================================== */}
            <div className="relative bg-[#073155] px-6 py-7 sm:px-8 sm:py-8">
              {/* Decorative */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E96C35]/15 blur-3xl" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Icon badge */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E96C35] shadow-lg shadow-[#E96C35]/30">
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
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F2A57C]">
                  {meta.eyebrow}
                </p>

                <h1 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {meta.title}
                </h1>

                <p className="mt-2 max-w-xs text-[12.5px] leading-5 text-white/70">
                  {meta.description}
                </p>

                {/* Progress steps */}
                <div className="mt-5 flex w-full max-w-[240px] items-center justify-between gap-1.5">
                  {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${
                          currentStep >= step
                            ? 'bg-[#E96C35] text-white'
                            : 'bg-white/15 text-white/60 ring-1 ring-white/20'
                        }`}
                      >
                        {currentStep > step ? (
                          <svg
                            className="h-3.5 w-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          step
                        )}
                      </div>
                      {step < 3 && (
                        <div
                          className={`h-0.5 flex-1 rounded-full transition-colors ${
                            currentStep > step
                              ? 'bg-[#E96C35]'
                              : 'bg-white/20'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* ==================================================
                FORM BODY
            ================================================== */}
            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleEmailSubmit}
                    className="space-y-4"
                  >
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched({ ...touched, email: true })}
                      placeholder="you@company.com"
                      error={touched.email && errors.email}
                      required
                      icon={renderIcon('email')}
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={loading}
                      className="!mt-5 w-full"
                    >
                      Send Reset Code
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

                    <div className="text-center">
                      <Link
                        href="/auth/login"
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
                        Back to Login
                      </Link>
                    </div>
                  </motion.form>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleOtpSubmit}
                    className="space-y-5"
                  >
                    {/* Email pill */}
                    <div className="flex items-center gap-2.5 rounded-xl border border-[#E5E9EF] bg-[#F8FAFC] px-3.5 py-2.5">
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

                    <div>
                      <label className="mb-3 block text-center text-[12px] font-medium text-[#073155]">
                        Enter the 6-digit code
                      </label>

                      <div className="flex items-center justify-center gap-2">
                        {otp.map((digit, index) => (
                          <OtpInput
                            key={index}
                            index={index}
                            value={digit}
                            onChange={(e) =>
                              handleOtpChange(
                                index,
                                e.target.value.replace(/\D/g, '')
                              )
                            }
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            error={errors.otp}
                          />
                        ))}
                      </div>

                      {errors.otp && (
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
                          {errors.otp}
                        </motion.p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={loading}
                      className="w-full"
                    >
                      Verify Code
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </Button>

                    <div className="text-center">
                      <p className="text-[12.5px] text-[#5A6B7B]">
                        Didn&apos;t receive the code?{' '}
                        <button
                          type="button"
                          onClick={handleResendOTP}
                          disabled={!canResend || loading}
                          className={`font-semibold transition-colors ${
                            canResend && !loading
                              ? 'text-[#E96C35] hover:text-[#d55f2b] hover:underline underline-offset-4'
                              : 'cursor-not-allowed text-[#8A94A6]'
                          }`}
                        >
                          {!canResend
                            ? `Resend code (${timeLeft}s)`
                            : 'Resend code'}
                        </button>
                      </p>
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
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
                        Use a different email
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <motion.form
                    key="step3"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handlePasswordSubmit}
                    className="space-y-4"
                  >
                    <Input
                      label="New Password"
                      type={showPassword ? 'text' : 'password'}
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      onBlur={() =>
                        setTouched({ ...touched, newPassword: true })
                      }
                      placeholder="Enter new password"
                      error={touched.newPassword && errors.newPassword}
                      required
                      icon={renderIcon('password')}
                      rightElement={
                        <EyeButton
                          isVisible={showPassword}
                          onToggle={() => setShowPassword(!showPassword)}
                        />
                      }
                    />

                    {/* Password strength */}
                    {newPassword && (
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                            style={{ width: `${passwordStrength}%` }}
                          />
                        </div>
                        <span className="w-11 text-right text-[11px] font-medium text-[#5A6B7B]">
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                    )}

                    <Input
                      label="Confirm New Password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={() =>
                        setTouched({ ...touched, confirmPassword: true })
                      }
                      placeholder="Confirm your password"
                      error={
                        touched.confirmPassword && errors.confirmPassword
                      }
                      required
                      icon={renderIcon('password')}
                      rightElement={
                        <EyeButton
                          isVisible={showConfirmPassword}
                          onToggle={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        />
                      }
                    />

                    {/* Requirements */}
                    <div className="rounded-xl border border-[#E5E9EF] bg-[#F8FAFC] p-4">
                      <p className="mb-2 text-[12px] font-semibold text-[#073155]">
                        Password requirements:
                      </p>
                      <ul className="space-y-1 text-[11.5px] text-[#5A6B7B]">
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              newPassword.length >= 8
                                ? 'text-green-500'
                                : 'text-[#A5AFB5]'
                            }
                          >
                            {newPassword.length >= 8 ? '✓' : '○'}
                          </span>
                          At least 8 characters
                        </li>
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              /([a-z])/.test(newPassword)
                                ? 'text-green-500'
                                : 'text-[#A5AFB5]'
                            }
                          >
                            {/([a-z])/.test(newPassword) ? '✓' : '○'}
                          </span>
                          Contains lowercase letter
                        </li>
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              /([A-Z])/.test(newPassword)
                                ? 'text-green-500'
                                : 'text-[#A5AFB5]'
                            }
                          >
                            {/([A-Z])/.test(newPassword) ? '✓' : '○'}
                          </span>
                          Contains uppercase letter
                        </li>
                        <li className="flex items-center gap-2">
                          <span
                            className={
                              /([0-9!@#$%^&*])/.test(newPassword)
                                ? 'text-green-500'
                                : 'text-[#A5AFB5]'
                            }
                          >
                            {/([0-9!@#$%^&*])/.test(newPassword) ? '✓' : '○'}
                          </span>
                          Contains number or special character
                        </li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={loading}
                      className="!mt-5 w-full"
                    >
                      Reset Password
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

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
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
                        Back to verification
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
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