
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { registerCustomer } from '@/services/Authentication';

// // ==========================================================
// // AUTH HOOK (unchanged logic)
// // ==========================================================

// const useAuth = () => {
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);

//   const handleRegister = async (userData) => {
//     setLoading(true);
//     try {
//       const response = await registerCustomer(userData);

//       toast.success('OTP sent to your email! Please check your inbox.', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//       setTimeout(() => {
//         window.location.href = '/auth/verify-otp?email=' + encodeURIComponent(userData.email);
//       }, 2000);

//       return response;
//     } catch (error) {
//       toast.error(error.message || 'Registration failed. Please try again.', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     loading,
//     user,
//     register: handleRegister,
//   };
// };

// // ==========================================================
// // BRAND PANEL (rotating messages)
// // ==========================================================

// const messages = [
//   { title: "Global Shipping Excellence", description: "Connecting Thailand to the world with reliable ocean freight services across Asia, America, and Europe." },
//   { title: "30+ Years of Trust", description: "Serving the global community with excellence, recognized as Ocean Carrier of the Year for four consecutive years." },
//   { title: "Advanced Fleet", description: "Modern container fleet with real-time tracking and temperature-controlled solutions for all cargo types." },
//   { title: "24/7 Customer Support", description: "Dedicated support team available round the clock for all your shipping needs." },
//   { title: "Global Network", description: "200+ overseas branch offices and 50+ countries connected through our comprehensive network." },
// ];

// const AnimatedImageOverlay = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % messages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
//       <div className="flex items-center gap-2.5">
//         <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center">
//           <svg width="18" height="18" className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 17l2-8h14l2 8M3 17h18M3 17l1 3h16l1-3M12 9V4m0 0H8m4 0h4" />
//           </svg>
//         </div>
//         <span className="text-white font-semibold text-base tracking-tight">Thai Shipping Thailand</span>
//       </div>

//       <div>
//         <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5">
//           <span className="text-white/90 text-xs font-medium">Serving customers since 1988</span>
//         </div>

//         <div className="min-h-[160px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 14 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -14 }}
//               transition={{ duration: 0.45 }}
//             >
//               <h2 className="text-white text-2xl lg:text-[30px] font-semibold leading-tight tracking-tight">
//                 {messages[currentIndex].title}
//               </h2>
//               <p className="mt-3 text-white/75 text-sm leading-relaxed max-w-sm">
//                 {messages[currentIndex].description}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         <div className="flex items-center gap-1.5">
//           {messages.map((_, idx) => (
//             <button
//               key={idx}
//               type="button"
//               onClick={() => setCurrentIndex(idx)}
//               aria-label={`Go to message ${idx + 1}`}
//               className={`transition-all duration-300 rounded-full h-1.5 ${
//                 currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==========================================================
// // INPUT
// // ==========================================================

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
//   rightElement,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div>
//       {label && (
//         <label htmlFor={name} className="block text-[13px] font-medium text-slate-700 mb-1.5">
//           {label}
//           {required && <span className="text-red-500 ml-0.5">*</span>}
//         </label>
//       )}
//       <div className="relative">
//         {icon && (
//           <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors duration-200 ${isFocused ? 'text-[#041367]' : 'text-slate-400'}`}>
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
//           className={`w-full h-10 rounded-lg border bg-white text-slate-900 text-sm placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:bg-slate-50 ${
//             error
//               ? 'border-red-400 focus:ring-red-100'
//               : 'border-slate-300 hover:border-slate-400 focus:border-[#041367] focus:ring-[#041367]/15'
//           } ${icon ? 'pl-10' : 'pl-3.5'} ${rightElement ? 'pr-11' : 'pr-3.5'}`}
//         />
//         {rightElement && (
//           <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center">{rightElement}</div>
//         )}
//       </div>
//       {error && (
//         <p className="mt-1 text-xs text-red-600" role="alert">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// // ==========================================================
// // SELECT
// // ==========================================================

// const Select = ({ label, name, value, onChange, required = false, children }) => (
//   <div>
//     <label htmlFor={name} className="block text-[13px] font-medium text-slate-700 mb-1.5">
//       {label}
//       {required && <span className="text-red-500 ml-0.5">*</span>}
//     </label>
//     <div className="relative">
//       <select
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="w-full h-10 appearance-none rounded-lg border border-slate-300 hover:border-slate-400 bg-white pl-3.5 pr-9 text-sm text-slate-900 transition-colors focus:outline-none focus:border-[#041367] focus:ring-2 focus:ring-[#041367]/15"
//       >
//         {children}
//       </select>
//       <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//       </svg>
//     </div>
//   </div>
// );

// // ==========================================================
// // BUTTON
// // ==========================================================

// const Button = ({
//   children,
//   type = 'button',
//   variant = 'primary',
//   isLoading = false,
//   disabled = false,
//   onClick,
//   className = '',
// }) => {
//   const baseClasses =
//     'h-11 rounded-lg text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

//   const variants = {
//     primary: 'bg-[#041367] text-white hover:bg-[#0a2080] focus-visible:ring-[#041367]',
//     outline: 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-400',
//   };

//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variants[variant] || variants.primary} ${className} ${
//         disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''
//       }`}
//       disabled={disabled || isLoading}
//       onClick={onClick}
//     >
//       <span className="flex items-center justify-center gap-2">
//         {isLoading ? (
//           <>
//             <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//             </svg>
//             Processing...
//           </>
//         ) : (
//           children
//         )}
//       </span>
//     </button>
//   );
// };

// // ==========================================================
// // REGISTER PAGE
// // ==========================================================

// export default function RegisterPage() {
//   const router = useRouter();
//   const { register, loading } = useAuth();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState(0);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phone: '',
//     countryCode: '+66',
//     companyName: '',
//     companyAddress: '',
//     companyVAT: '',
//     businessType: '',
//     industry: '',
//     acceptTerms: false,
//   });

//   const countryOptions = [
//     { code: '+1', name: 'USA/Canada', example: '+1 555 123 4567' },
//     { code: '+44', name: 'UK', example: '+44 20 7123 4567' },
//     { code: '+66', name: 'Thailand', example: '+66 X XXX XXXX' },
//     { code: '+86', name: 'China', example: '+86 10 1234 5678' },
//   ];

//   const handlePhoneChange = (e) => {
//     const { value } = e.target;
//     const cleaned = value.replace(/[^\d+]/g, '');
//     setFormData((prev) => ({ ...prev, phone: cleaned }));
//   };

//   const [touched, setTouched] = useState({});
//   const [errors, setErrors] = useState({});

//   const businessTypes = ['Trader', 'Manufacturer', 'Distributor', 'Retailer', 'E-commerce', 'Other'];
//   const industries = [
//     'Textile and Apparel', 'Electronics', 'Automotive', 'Pharmaceuticals',
//     'Food and Beverage', 'Furniture', 'Machinery', 'Chemicals', 'Other',
//   ];

//   const steps = ['Personal info', 'Security', 'Business'];

//   useEffect(() => {
//     validateForm();
//   }, [formData]);

//   useEffect(() => {
//     calculatePasswordStrength(formData.password);
//   }, [formData.password]);

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

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     if (!formData.acceptTerms) {
//       newErrors.acceptTerms = 'You must accept the terms and conditions';
//     }

//     setErrors(newErrors);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleBlur = (field) => {
//     setTouched((prev) => ({ ...prev, [field]: true }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const allFields = Object.keys(formData).reduce((acc, key) => {
//       acc[key] = true;
//       return acc;
//     }, {});
//     setTouched(allFields);

//     if (Object.keys(errors).length === 0) {
//       try {
//         const { confirmPassword, acceptTerms, ...submitData } = formData;
//         await register(submitData);
//       } catch (error) {
//         // Error handled in hook
//       }
//     } else {
//       toast.warning('Please fix the errors before submitting', {
//         position: 'top-right',
//         autoClose: 3000,
//       });
//     }
//   };

//   const nextStep = () => {
//     const stepFields = {
//       1: ['firstName', 'lastName', 'email'],
//       2: ['password', 'confirmPassword'],
//     };

//     const stepErrors = {};
//     stepFields[currentStep].forEach((field) => {
//       if (errors[field]) stepErrors[field] = errors[field];
//     });

//     if (Object.keys(stepErrors).length === 0) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       stepFields[currentStep].forEach((field) => {
//         setTouched((prev) => ({ ...prev, [field]: true }));
//       });
//       toast.warning('Please fill all required fields correctly', {
//         position: 'top-right',
//         autoClose: 3000,
//       });
//     }
//   };

//   const prevStep = () => {
//     setCurrentStep((prev) => prev - 1);
//   };

//   const renderIcon = (type) => {
//     const common = { className: 'w-[17px] h-[17px]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' };
//     switch (type) {
//       case 'user':
//         return (
//           <svg {...common}>
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//           </svg>
//         );
//       case 'email':
//         return (
//           <svg {...common}>
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         );
//       case 'phone':
//         return (
//           <svg {...common}>
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//           </svg>
//         );
//       case 'password':
//         return (
//           <svg {...common}>
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   const eyeButton = (
//     <button
//       type="button"
//       onClick={() => setShowPassword(!showPassword)}
//       className="p-2 text-slate-400 hover:text-slate-700 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#041367]/40"
//       aria-label={showPassword ? 'Hide password' : 'Show password'}
//     >
//       {showPassword ? (
//         <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//         </svg>
//       ) : (
//         <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       )}
//     </button>
//   );

//   const arrowRight = (
//     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//     </svg>
//   );

//   const arrowLeft = (
//     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//     </svg>
//   );

//   const stepAnim = {
//     initial: { opacity: 0, y: 8 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.25 },
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

//       <main className="bg-slate-100 px-4 py-8 sm:py-10 -mt-5">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           className="mx-auto w-full max-w-[960px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 grid md:grid-cols-[0.9fr_1.1fr] md:min-h-[620px]"
//         >
//           {/* ==================================================
//               LEFT: BRAND PANEL
//           ================================================== */}
//           <aside className="relative hidden md:block bg-[#041367]">
//             <Image
//               src="/images/cta.jpg"
//               alt="Thai Shipping"
//               fill
//               priority
//               sizes="(min-width: 768px) 430px, 0px"
//               className="object-cover object-center"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-[#041367]/80 via-[#041367]/60 to-[#041367]/90" />
//             <AnimatedImageOverlay />
//           </aside>

//           {/* ==================================================
//               RIGHT: FORM PANEL
//           ================================================== */}
//           <section className="flex flex-col justify-center px-6 sm:px-10 py-8">
//             <p className="md:hidden text-sm font-semibold text-[#041367] mb-5">Thai Shipping Thailand</p>

//             <div className="mb-6">
//               <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Create your account</h1>
//               <p className="mt-1.5 text-sm text-slate-500">
//                 Already have an account?{' '}
//                 <Link href="/auth/login" className="font-medium text-[#041367] hover:underline underline-offset-4">
//                   Sign in
//                 </Link>
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} noValidate>
//               {/* Stepper */}
//               <ol className="flex items-center mb-7" aria-label="Registration progress">
//                 {steps.map((label, i) => {
//                   const step = i + 1;
//                   const done = currentStep > step;
//                   const active = currentStep === step;
//                   return (
//                     <React.Fragment key={label}>
//                       <li className="flex items-center gap-2" aria-current={active ? 'step' : undefined}>
//                         <span
//                           className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
//                             done || active ? 'bg-[#041367] text-white' : 'bg-slate-100 text-slate-500 ring-1 ring-slate-200'
//                           } ${active ? 'ring-4 ring-[#041367]/15' : ''}`}
//                         >
//                           {done ? (
//                             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
//                             </svg>
//                           ) : (
//                             step
//                           )}
//                         </span>
//                         <span className={`hidden sm:block text-xs font-medium ${active || done ? 'text-slate-900' : 'text-slate-400'}`}>
//                           {label}
//                         </span>
//                       </li>
//                       {step < steps.length && (
//                         <div className={`flex-1 h-px mx-3 ${currentStep > step ? 'bg-[#041367]' : 'bg-slate-200'}`} />
//                       )}
//                     </React.Fragment>
//                   );
//                 })}
//               </ol>

//               {/* Step 1: Personal Information */}
//               {currentStep === 1 && (
//                 <motion.div key="step1" {...stepAnim} className="space-y-3.5">
//                   <div className="grid grid-cols-2 gap-3">
//                     <Input
//                       label="First name"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       onBlur={() => handleBlur('firstName')}
//                       placeholder="Enter your firstname"
//                       error={touched.firstName && errors.firstName}
//                       required
//                       icon={renderIcon('user')}
//                     />
//                     <Input
//                       label="Last name"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       onBlur={() => handleBlur('lastName')}
//                       placeholder="Enter your lastname"
//                       error={touched.lastName && errors.lastName}
//                       required
//                     />
//                   </div>

//                   <Input
//                     label="Email address"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur('email')}
//                     placeholder="name@company.com"
//                     error={touched.email && errors.email}
//                     required
//                     icon={renderIcon('email')}
//                   />

//                   <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-3">
//                     <Select label="Country code" name="countryCode" value={formData.countryCode} onChange={handleChange} required>
//                       {countryOptions.map((country) => (
//                         <option key={country.code} value={country.code}>
//                           {country.name} ({country.code})
//                         </option>
//                       ))}
//                     </Select>

//                     <Input
//                       label="Phone number"
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handlePhoneChange}
//                       onBlur={() => handleBlur('phone')}
//                       placeholder={countryOptions.find((c) => c.code === formData.countryCode)?.example || 'Phone number'}
//                       error={touched.phone && errors.phone}
//                       icon={renderIcon('phone')}
//                     />
//                   </div>

//                   <Button type="button" variant="primary" onClick={nextStep} className="w-full !mt-5">
//                     Continue
//                     {arrowRight}
//                   </Button>
//                 </motion.div>
//               )}

//               {/* Step 2: Password Setup */}
//               {currentStep === 2 && (
//                 <motion.div key="step2" {...stepAnim} className="space-y-3.5">
//                   <Input
//                     label="Password"
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur('password')}
//                     placeholder="At least 6 characters"
//                     error={touched.password && errors.password}
//                     required
//                     icon={renderIcon('password')}
//                     rightElement={eyeButton}
//                   />

//                   {formData.password && (
//                     <div className="flex items-center gap-3">
//                       <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
//                         <div
//                           className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
//                           style={{ width: `${passwordStrength}%` }}
//                         />
//                       </div>
//                       <span className="text-xs font-medium text-slate-600 w-11 text-right">{getPasswordStrengthText()}</span>
//                     </div>
//                   )}

//                   <Input
//                     label="Confirm password"
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     onBlur={() => handleBlur('confirmPassword')}
//                     placeholder="Re-enter your password"
//                     error={touched.confirmPassword && errors.confirmPassword}
//                     required
//                     icon={renderIcon('password')}
//                   />

//                   <div className="flex gap-3 !mt-5">
//                     <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
//                       {arrowLeft}
//                       Back
//                     </Button>
//                     <Button type="button" variant="primary" onClick={nextStep} className="flex-1">
//                       Continue
//                       {arrowRight}
//                     </Button>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Step 3: Business Information */}
//               {currentStep === 3 && (
//                 <motion.div key="step3" {...stepAnim} className="space-y-3.5">
//                   <Input
//                     label="Company name"
//                     name="companyName"
//                     value={formData.companyName}
//                     onChange={handleChange}
//                     placeholder="Optional"
//                   />

//                   <Input
//                     label="Company address"
//                     name="companyAddress"
//                     value={formData.companyAddress}
//                     onChange={handleChange}
//                     placeholder="Optional"
//                   />

//                   <div className="grid grid-cols-2 gap-3">
//                     <Input
//                       label="VAT number"
//                       name="companyVAT"
//                       value={formData.companyVAT}
//                       onChange={handleChange}
//                       placeholder="Optional"
//                     />
//                     <Select label="Business type" name="businessType" value={formData.businessType} onChange={handleChange}>
//                       <option value="">Optional</option>
//                       {businessTypes.map((type) => (
//                         <option key={type} value={type}>{type}</option>
//                       ))}
//                     </Select>
//                   </div>

//                   <Select label="Industry" name="industry" value={formData.industry} onChange={handleChange}>
//                     <option value="">Optional</option>
//                     {industries.map((industry) => (
//                       <option key={industry} value={industry}>{industry}</option>
//                     ))}
//                   </Select>

//                   <div>
//                     <label className="flex items-start gap-2.5 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         name="acceptTerms"
//                         checked={formData.acceptTerms}
//                         onChange={handleChange}
//                         className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#041367] focus:ring-[#041367]/30"
//                       />
//                       <span className="text-[13px] text-slate-600 leading-snug">
//                         I agree to the{' '}
                      
//                         <a href="/privacy-policy" className="font-medium text-[#041367] hover:underline underline-offset-4">Privacy Policy</a>
//                       </span>
//                     </label>
//                     {touched.acceptTerms && errors.acceptTerms && (
//                       <p className="mt-1 text-xs text-red-600" role="alert">{errors.acceptTerms}</p>
//                     )}
//                   </div>

//                   <div className="flex gap-3 !mt-5">
//                     <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
//                       {arrowLeft}
//                       Back
//                     </Button>
//                     <Button type="submit" variant="primary" isLoading={loading} className="flex-1">
//                       Create account
//                     </Button>
//                   </div>
//                 </motion.div>
//               )}
//             </form>
//           </section>
//         </motion.div>

//         <p className="mt-5 text-center text-xs text-slate-400">
//           © 2006 Thai Shipping (Thailand) Co., Ltd. All rights reserved.
//         </p>
//       </main>
//     </>
//   );
// }



"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerCustomer } from '@/services/Authentication';

// ==========================================================
// BRAND COLORS
// ==========================================================
const NAVY = '#073155';
const ORANGE = '#E96C35';

// ==========================================================
// AUTH HOOK (unchanged logic)
// ==========================================================

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const handleRegister = async (userData) => {
    setLoading(true);
    try {
      const response = await registerCustomer(userData);

      toast.success('OTP sent to your email! Please check your inbox.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        window.location.href = '/auth/verify-otp?email=' + encodeURIComponent(userData.email);
      }, 2000);

      return response;
    } catch (error) {
      toast.error(error.message || 'Registration failed. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    user,
    register: handleRegister,
  };
};

// ==========================================================
// BRAND PANEL (rotating messages)
// ==========================================================

const messages = [
  { title: "Global Shipping Excellence", description: "Connecting Thailand to the world with reliable ocean freight services across Asia, America, and Europe." },
  { title: "30+ Years of Trust", description: "Serving the global community with excellence, recognized as Ocean Carrier of the Year for four consecutive years." },
  { title: "Advanced Fleet", description: "Modern container fleet with real-time tracking and temperature-controlled solutions for all cargo types." },
  { title: "24/7 Customer Support", description: "Dedicated support team available round the clock for all your shipping needs." },
  { title: "Global Network", description: "200+ overseas branch offices and 50+ countries connected through our comprehensive network." },
];

const AnimatedImageOverlay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center">
          <svg width="18" height="18" className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 17l2-8h14l2 8M3 17h18M3 17l1 3h16l1-3M12 9V4m0 0H8m4 0h4" />
          </svg>
        </div>
        <span className="text-white font-semibold text-base tracking-tight">Thai Shipping Thailand</span>
      </div>

      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5">
          <span className="text-white/90 text-xs font-medium">Serving customers since 2009</span>
        </div>

        <div className="min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-white text-2xl lg:text-[30px] font-semibold leading-tight tracking-tight">
                {messages[currentIndex].title}
              </h2>
              <p className="mt-3 text-white/75 text-sm leading-relaxed max-w-sm">
                {messages[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1.5">
          {messages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to message ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
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
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-[13px] font-medium text-slate-700 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors duration-200 ${isFocused ? 'text-[#073155]' : 'text-slate-400'}`}>
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
          className={`w-full h-10 rounded-lg border bg-white text-slate-900 text-sm placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:bg-slate-50 ${
            error
              ? 'border-red-400 focus:ring-red-100'
              : 'border-slate-300 hover:border-slate-400 focus:border-[#073155] focus:ring-[#073155]/15'
          } ${icon ? 'pl-10' : 'pl-3.5'} ${rightElement ? 'pr-11' : 'pr-3.5'}`}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-1.5 flex items-center">{rightElement}</div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// ==========================================================
// SELECT
// ==========================================================

const Select = ({ label, name, value, onChange, required = false, children }) => (
  <div>
    <label htmlFor={name} className="block text-[13px] font-medium text-slate-700 mb-1.5">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
    <div className="relative">
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-10 appearance-none rounded-lg border border-slate-300 hover:border-slate-400 bg-white pl-3.5 pr-9 text-sm text-slate-900 transition-colors focus:outline-none focus:border-[#073155] focus:ring-2 focus:ring-[#073155]/15"
      >
        {children}
      </select>
      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

// ==========================================================
// BUTTON
// ==========================================================

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  isLoading = false,
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'h-11 rounded-lg text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-[#073155] text-white hover:bg-[#0a4270] focus-visible:ring-[#073155]',
    outline: 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-400',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className} ${
        disabled || isLoading ? 'opacity-60 cursor-not-allowed' : ''
      }`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
// REGISTER PAGE
// ==========================================================

export default function RegisterPage() {
  const router = useRouter();
  const { register, loading } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    countryCode: '+66',
    companyName: '',
    companyAddress: '',
    companyVAT: '',
    businessType: '',
    industry: '',
    acceptTerms: false,
  });

  const countryOptions = [
    { code: '+1', name: 'USA/Canada', example: '+1 555 123 4567' },
    { code: '+44', name: 'UK', example: '+44 20 7123 4567' },
    { code: '+66', name: 'Thailand', example: '+66 X XXX XXXX' },
    { code: '+86', name: 'China', example: '+86 10 1234 5678' },
  ];

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const cleaned = value.replace(/[^\d+]/g, '');
    setFormData((prev) => ({ ...prev, phone: cleaned }));
  };

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const businessTypes = ['Trader', 'Manufacturer', 'Distributor', 'Retailer', 'E-commerce', 'Other'];
  const industries = [
    'Textile and Apparel', 'Electronics', 'Automotive', 'Pharmaceuticals',
    'Food and Beverage', 'Furniture', 'Machinery', 'Chemicals', 'Other',
  ];

  const steps = ['Personal info', 'Security', 'Business'];

  useEffect(() => {
    validateForm();
  }, [formData]);

  useEffect(() => {
    calculatePasswordStrength(formData.password);
  }, [formData.password]);

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFields = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allFields);

    if (Object.keys(errors).length === 0) {
      try {
        const { confirmPassword, acceptTerms, ...submitData } = formData;
        await register(submitData);
      } catch (error) {
        // Error handled in hook
      }
    } else {
      toast.warning('Please fix the errors before submitting', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  const nextStep = () => {
    const stepFields = {
      1: ['firstName', 'lastName', 'email'],
      2: ['password', 'confirmPassword'],
    };

    const stepErrors = {};
    stepFields[currentStep].forEach((field) => {
      if (errors[field]) stepErrors[field] = errors[field];
    });

    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prev) => prev + 1);
    } else {
      stepFields[currentStep].forEach((field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
      });
      toast.warning('Please fill all required fields correctly', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderIcon = (type) => {
    const common = { className: 'w-[17px] h-[17px]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' };
    switch (type) {
      case 'user':
        return (
          <svg {...common}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'email':
        return (
          <svg {...common}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'phone':
        return (
          <svg {...common}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'password':
        return (
          <svg {...common}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const eyeButton = (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="p-2 text-slate-400 hover:text-slate-700 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#073155]/40"
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? (
        <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
      ) : (
        <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )}
    </button>
  );

  const arrowRight = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );

  const arrowLeft = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  );

  const stepAnim = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25 },
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />

      <main className="bg-slate-100 px-4 py-8 sm:py-10 -mt-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[960px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 grid md:grid-cols-[0.9fr_1.1fr] md:min-h-[620px]"
        >
          {/* ==================================================
              LEFT: BRAND PANEL
          ================================================== */}
          <aside className="relative hidden md:block bg-[#073155]">
            <Image
              src="/images/cta.jpg"
              alt="Thai Shipping"
              fill
              priority
              sizes="(min-width: 768px) 430px, 0px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#073155]/80 via-[#073155]/60 to-[#073155]/90" />
            <AnimatedImageOverlay />
          </aside>

          {/* ==================================================
              RIGHT: FORM PANEL
          ================================================== */}
          <section className="flex flex-col justify-center px-6 sm:px-10 py-8">
            <p className="md:hidden text-sm font-semibold text-[#073155] mb-5">Thai Shipping Thailand</p>

            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Create your account</h1>
              <p className="mt-1.5 text-sm text-slate-500">
                Already have an account?{' '}
                <Link href="/auth/login" className="font-medium text-[#E96C35] hover:text-[#d55f2b] hover:underline underline-offset-4">
                  Sign in
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Stepper */}
              <ol className="flex items-center mb-7" aria-label="Registration progress">
                {steps.map((label, i) => {
                  const step = i + 1;
                  const done = currentStep > step;
                  const active = currentStep === step;
                  return (
                    <React.Fragment key={label}>
                      <li className="flex items-center gap-2" aria-current={active ? 'step' : undefined}>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                            done || active ? 'bg-[#073155] text-white' : 'bg-slate-100 text-slate-500 ring-1 ring-slate-200'
                          } ${active ? 'ring-4 ring-[#073155]/15' : ''}`}
                        >
                          {done ? (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            step
                          )}
                        </span>
                        <span className={`hidden sm:block text-xs font-medium ${active || done ? 'text-slate-900' : 'text-slate-400'}`}>
                          {label}
                        </span>
                      </li>
                      {step < steps.length && (
                        <div className={`flex-1 h-px mx-3 ${currentStep > step ? 'bg-[#073155]' : 'bg-slate-200'}`} />
                      )}
                    </React.Fragment>
                  );
                })}
              </ol>

              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div key="step1" {...stepAnim} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('firstName')}
                      placeholder="Enter your firstname"
                      error={touched.firstName && errors.firstName}
                      required
                      icon={renderIcon('user')}
                    />
                    <Input
                      label="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('lastName')}
                      placeholder="Enter your lastname"
                      error={touched.lastName && errors.lastName}
                      required
                    />
                  </div>

                  <Input
                    label="Email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="name@company.com"
                    error={touched.email && errors.email}
                    required
                    icon={renderIcon('email')}
                  />

                  <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-3">
                    <Select label="Country code" name="countryCode" value={formData.countryCode} onChange={handleChange} required>
                      {countryOptions.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name} ({country.code})
                        </option>
                      ))}
                    </Select>

                    <Input
                      label="Phone number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onBlur={() => handleBlur('phone')}
                      placeholder={countryOptions.find((c) => c.code === formData.countryCode)?.example || 'Phone number'}
                      error={touched.phone && errors.phone}
                      icon={renderIcon('phone')}
                    />
                  </div>

                  <Button type="button" variant="primary" onClick={nextStep} className="w-full !mt-5">
                    Continue
                    {arrowRight}
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Password Setup */}
              {currentStep === 2 && (
                <motion.div key="step2" {...stepAnim} className="space-y-3.5">
                  <Input
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={() => handleBlur('password')}
                    placeholder="At least 6 characters"
                    error={touched.password && errors.password}
                    required
                    icon={renderIcon('password')}
                    rightElement={eyeButton}
                  />

                  {formData.password && (
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                          style={{ width: `${passwordStrength}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-600 w-11 text-right">{getPasswordStrengthText()}</span>
                    </div>
                  )}

                  <Input
                    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={() => handleBlur('confirmPassword')}
                    placeholder="Re-enter your password"
                    error={touched.confirmPassword && errors.confirmPassword}
                    required
                    icon={renderIcon('password')}
                  />

                  <div className="flex gap-3 !mt-5">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                      {arrowLeft}
                      Back
                    </Button>
                    <Button type="button" variant="primary" onClick={nextStep} className="flex-1">
                      Continue
                      {arrowRight}
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Business Information */}
              {currentStep === 3 && (
                <motion.div key="step3" {...stepAnim} className="space-y-3.5">
                  <Input
                    label="Company name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Optional"
                  />

                  <Input
                    label="Company address"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Optional"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="VAT number"
                      name="companyVAT"
                      value={formData.companyVAT}
                      onChange={handleChange}
                      placeholder="Optional"
                    />
                    <Select label="Business type" name="businessType" value={formData.businessType} onChange={handleChange}>
                      <option value="">Optional</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </Select>
                  </div>

                  <Select label="Industry" name="industry" value={formData.industry} onChange={handleChange}>
                    <option value="">Optional</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </Select>

                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#073155] focus:ring-[#073155]/30"
                      />
                      <span className="text-[13px] text-slate-600 leading-snug">
                        I agree to the{' '}
                        <a href="/privacy-policy" className="font-medium text-[#E96C35] hover:text-[#d55f2b] hover:underline underline-offset-4">Privacy Policy</a>
                      </span>
                    </label>
                    {touched.acceptTerms && errors.acceptTerms && (
                      <p className="mt-1 text-xs text-red-600" role="alert">{errors.acceptTerms}</p>
                    )}
                  </div>

                  <div className="flex gap-3 !mt-5">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                      {arrowLeft}
                      Back
                    </Button>
                    <Button type="submit" variant="primary" isLoading={loading} className="flex-1">
                      Create account
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>
          </section>
        </motion.div>

        <p className="mt-5 text-center text-xs text-slate-400">
          © 2009 Thai Shipping (Thailand) Co., Ltd. All rights reserved.
        </p>
      </main>
    </>
  );
}