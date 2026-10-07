
// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { login, googleLogin } from "@/services/Authentication";

// import {
//   setAuthToken,
//   setUserDetails,
//   getAuthToken,
// } from "@/utils/SessionHelper";

// // ==========================================================
// // FIREBASE
// // ==========================================================

// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// let auth;
// let googleProvider;

// if (typeof window !== "undefined") {
//   try {
//     const app = initializeApp(firebaseConfig);

//     auth = getAuth(app);

//     googleProvider = new GoogleAuthProvider();
//     googleProvider.addScope("email");
//     googleProvider.addScope("profile");
//     googleProvider.setCustomParameters({
//       prompt: "select_account",
//     });
//   } catch (error) {
//     console.error("Firebase initialization error:", error);
//   }
// }

// // ==========================================================
// // BUTTON COMPONENT
// // ==========================================================

// const Button = ({
//   children,
//   type = "button",
//   variant = "primary",
//   isLoading = false,
//   disabled = false,
//   onClick,
//   className = "",
// }) => {
//   const baseClasses =
//     "h-11 w-full rounded-lg text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

//   const variants = {
//     primary:
//       "bg-[#041367] text-white hover:bg-[#0a2080] focus-visible:ring-[#041367]",
//     google:
//       "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-400",
//   };

//   return (
//     <button
//       type={type}
//       className={`${baseClasses} ${variants[variant] || variants.primary} ${className} ${
//         disabled || isLoading ? "opacity-60 cursor-not-allowed" : ""
//       }`}
//       disabled={disabled || isLoading}
//       onClick={onClick}
//     >
//       <span className="flex items-center justify-center gap-2">
//         {isLoading ? (
//           <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//               fill="none"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             />
//           </svg>
//         ) : (
//           children
//         )}
//       </span>
//     </button>
//   );
// };

// // ==========================================================
// // INPUT COMPONENT
// // ==========================================================

// const Input = ({
//   label,
//   type = "text",
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
//   autoComplete,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   return (
//     <div className="mb-4">
//       {label && (
//         <label
//           htmlFor={name}
//           className="block text-sm font-medium text-slate-700 mb-1.5"
//         >
//           {label}
//           {required && <span className="text-red-500 ml-0.5">*</span>}
//         </label>
//       )}

//       <div className="relative">
//         {icon && (
//           <div
//             className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors duration-200 ${
//               isFocused ? "text-[#041367]" : "text-slate-400"
//             }`}
//           >
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
//             if (onBlur) onBlur(e);
//           }}
//           onFocus={() => setIsFocused(true)}
//           placeholder={placeholder}
//           disabled={disabled}
//           autoComplete={autoComplete}
//           className={`w-full h-11 rounded-lg border bg-white text-slate-900 text-sm placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:bg-slate-50 ${
//             error
//               ? "border-red-400 focus:ring-red-100"
//               : "border-slate-300 focus:border-[#041367] focus:ring-[#041367]/15"
//           } ${icon ? "pl-11" : "pl-4"} ${rightElement ? "pr-11" : "pr-4"}`}
//         />

//         {rightElement && (
//           <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
//             {rightElement}
//           </div>
//         )}
//       </div>

//       {error && (
//         <motion.p
//           initial={{ opacity: 0, y: -4 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-1.5 text-xs text-red-600"
//           role="alert"
//         >
//           {error}
//         </motion.p>
//       )}
//     </div>
//   );
// };

// // ==========================================================
// // ROTATING MESSAGES (LEFT PANEL)
// // ==========================================================

// const messages = [
//   {
//     title: "Global shipping, handled",
//     description:
//       "Reliable ocean freight connecting Thailand with Asia, America and Europe.",
//   },
//   {
//     title: "30+ years of trust",
//     description:
//       "Three decades of dependable shipping and logistics for businesses worldwide.",
//   },
//   {
//     title: "Track every container",
//     description:
//       "Modern fleet with real-time tracking and temperature-controlled options.",
//   },
//   {
//     title: "Support around the clock",
//     description:
//       "Our team is available 24/7 for bookings, documents and shipment questions.",
//   },
//   {
//     title: "A network in 50+ countries",
//     description:
//       "More than 200 overseas branch offices working as one connected network.",
//   },
// ];

// const AnimatedImageOverlay = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % messages.length);
//     }, 4500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
//       <div className="flex items-center gap-2.5">
//         <div className="w-8 h-8 rounded-md bg-white/15 border border-white/25 flex items-center justify-center">
//           <svg
//             className="w-4.5 h-4.5 text-white"
//             width="18"
//             height="18"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="1.8"
//               d="M3 17l2-8h14l2 8M3 17h18M3 17l1 3h16l1-3M12 9V4m0 0H8m4 0h4"
//             />
//           </svg>
//         </div>
//         <span className="text-white font-semibold text-base tracking-tight">
//           Thai Shipping
//         </span>
//       </div>

//       <div className="min-h-[150px]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -12 }}
//             transition={{ duration: 0.4 }}
//           >
//             <h2 className="text-white text-2xl lg:text-[28px] font-semibold leading-tight tracking-tight">
//               {messages[currentIndex].title}
//             </h2>
//             <p className="mt-3 text-white/75 text-sm leading-relaxed max-w-sm">
//               {messages[currentIndex].description}
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         <div className="mt-6 flex items-center gap-1.5">
//           {messages.map((_, idx) => (
//             <button
//               key={idx}
//               type="button"
//               onClick={() => setCurrentIndex(idx)}
//               aria-label={`Go to message ${idx + 1}`}
//               className={`transition-all duration-300 rounded-full h-1.5 ${
//                 currentIndex === idx
//                   ? "w-6 bg-white"
//                   : "w-1.5 bg-white/40 hover:bg-white/70"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==========================================================
// // MAIN LOGIN COMPONENT
// // ==========================================================

// export default function LoginPage() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true);

//   // ========================================================
//   // GOOGLE LOGIN
//   // ========================================================

//   const handleGoogleLogin = async () => {
//     if (!auth || !googleProvider) {
//       toast.error("Google login is currently unavailable.");
//       return;
//     }

//     setGoogleLoading(true);

//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
//       const idToken = await user.getIdToken();

//       const response = await googleLogin(
//         idToken,
//         user.email,
//         user.displayName,
//         user.photoURL,
//         user.uid
//       );

//       if (response.success) {
//         const userData = response.user || response.data || response;

//         if (response.token) {
//           setAuthToken(response.token);
//         }

//         if (userData) {
//           setUserDetails(userData);
//         }

//         toast.success(`Welcome ${userData?.firstName || "Customer"}!`);

//         if (typeof window !== "undefined") {
//           window.dispatchEvent(new Event("authChange"));
//         }

//         setTimeout(() => {
//           router.push("/profile");
//         }, 1500);
//       } else {
//         toast.error(response.message || "Google login failed");
//       }
//     } catch (error) {
//       console.error("Google Login Error:", error);
//       toast.error(error?.message || "Google login failed");
//     } finally {
//       setGoogleLoading(false);
//     }
//   };

//   // ========================================================
//   // AUTH CHECK
//   // ========================================================

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const token = getAuthToken();

//         if (token) {
//           const userStr = localStorage.getItem("user_details");

//           if (userStr) {
//             const user = JSON.parse(userStr);

//             if (user.role === "customer") {
//               router.push("/profile");
//             } else {
//               localStorage.removeItem("auth_token");
//               localStorage.removeItem("user_details");
//               setIsCheckingAuth(false);
//             }
//           } else {
//             router.push("/profile");
//           }
//         } else {
//           setIsCheckingAuth(false);
//         }
//       } catch (error) {
//         console.error("Auth check error:", error);
//         setIsCheckingAuth(false);
//       }
//     };

//     checkAuth();
//   }, [router]);

//   // ========================================================
//   // FORM VALIDATION
//   // ========================================================

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     return newErrors;
//   };

//   // ========================================================
//   // HANDLERS
//   // ========================================================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleBlur = (field) => {
//     setTouched((prev) => ({
//       ...prev,
//       [field]: true,
//     }));

//     setErrors(validateForm());
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setTouched({
//       email: true,
//       password: true,
//     });

//     const validationErrors = validateForm();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length !== 0) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await login(formData.email, formData.password);

//       if (response.success && response.token) {
//         const userData = response.data || response.user;

//         if (!userData || userData.role !== "customer") {
//           toast.error(
//             "Access denied. Only customers can log in to this portal.",
//             {
//               position: "top-right",
//               autoClose: 5000,
//             }
//           );

//           setLoading(false);
//           return;
//         }

//         setAuthToken(response.token);
//         setUserDetails(userData);

//         if (typeof window !== "undefined") {
//           window.dispatchEvent(new Event("authChange"));
//         }

//         toast.success("Login successful! Redirecting...", {
//           position: "top-right",
//           autoClose: 2000,
//         });

//         setTimeout(() => {
//           router.push("/profile");
//         }, 2000);
//       } else {
//         toast.error(response.message || "Invalid email or password", {
//           position: "top-right",
//           autoClose: 5000,
//         });
//       }
//     } catch (error) {
//       console.error("Login error:", error);

//       toast.error(error?.message || "Invalid email or password", {
//         position: "top-right",
//         autoClose: 5000,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ========================================================
//   // ICONS
//   // ========================================================

//   const renderIcon = (type) => {
//     switch (type) {
//       case "email":
//         return (
//           <svg
//             className="w-[18px] h-[18px]"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.6" />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="1.6"
//               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
//             />
//           </svg>
//         );

//       case "password":
//         return (
//           <svg
//             className="w-[18px] h-[18px]"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <rect x="4" y="10" width="16" height="11" rx="2" strokeWidth="1.6" />
//             <path
//               strokeLinecap="round"
//               strokeWidth="1.6"
//               d="M8 10V7a4 4 0 018 0v3"
//             />
//           </svg>
//         );

//       default:
//         return null;
//     }
//   };

//   const PasswordVisibilityIcon = () => {
//     if (showPassword) {
//       return (
//         <svg
//           className="w-[18px] h-[18px]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="1.5"
//             d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
//           />
//         </svg>
//       );
//     }

//     return (
//       <svg
//         className="w-[18px] h-[18px]"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="1.5"
//           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//       </svg>
//     );
//   };

//   const GoogleIcon = () => (
//     <svg className="w-5 h-5" viewBox="0 0 24 24">
//       <path
//         fill="#4285F4"
//         d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//       />
//       <path
//         fill="#34A853"
//         d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//       />
//       <path
//         fill="#FBBC05"
//         d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//       />
//       <path
//         fill="#EA4335"
//         d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//       />
//     </svg>
//   );

//   // ========================================================
//   // AUTH CHECK LOADING
//   // ========================================================

//   if (isCheckingAuth) {
//     return (
//       <div className="min-h-[60vh] bg-slate-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-10 h-10 border-2 border-[#041367]/20 border-t-[#041367] rounded-full animate-spin mx-auto" />
//           <p className="text-slate-500 text-sm mt-4">Checking your session...</p>
//         </div>
//       </div>
//     );
//   }

//   // ========================================================
//   // MAIN UI
//   // ========================================================

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

//       <main className="bg-slate-100 px-4 py-8 sm:py-10 -mt-6">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           className="mx-auto w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 grid md:grid-cols-[1fr_1.05fr] md:min-h-[540px]"
//         >
//           {/* ==================================================
//               LEFT: BRAND PANEL
//           ================================================== */}

//           <aside className="relative hidden md:block bg-[#041367]">
//             <Image
//               src="/images/login.jpg"
//               alt="Hanjin Shipping container terminal"
//               fill
//               priority
//               sizes="(min-width: 768px) 460px, 0px"
//               className="object-cover object-center"
//             />

//             <div className="absolute inset-0 bg-gradient-to-b from-[#041367]/80 via-[#041367]/60 to-[#041367]/90" />

//             <AnimatedImageOverlay />
//           </aside>

//           {/* ==================================================
//               RIGHT: FORM PANEL
//           ================================================== */}

//           <section className="flex flex-col justify-center px-6 sm:px-10 py-8">
//             {/* Mobile brand */}
//             <p className="md:hidden text-sm font-semibold text-[#041367] mb-5">
//               Thai Shipping
//             </p>

//             <div className="mb-6">
//               <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
//                 Sign in to your account
//               </h1>
//               <p className="mt-1.5 text-sm text-slate-500">
//                 Manage your shipments and bookings in the customer portal.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} noValidate>
//               <Input
//                 label="Email address"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur("email")}
//                 placeholder="you@company.com"
//                 error={touched.email && errors.email}
//                 required
//                 disabled={loading}
//                 icon={renderIcon("email")}
//                 autoComplete="email"
//               />

//               <Input
//                 label="Password"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 onBlur={() => handleBlur("password")}
//                 placeholder="Enter your password"
//                 error={touched.password && errors.password}
//                 required
//                 disabled={loading}
//                 icon={renderIcon("password")}
//                 autoComplete="current-password"
//                 rightElement={
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="p-2 text-slate-400 hover:text-slate-700 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#041367]/40"
//                     aria-label={showPassword ? "Hide password" : "Show password"}
//                   >
//                     <PasswordVisibilityIcon />
//                   </button>
//                 }
//               />

//               <div className="flex items-center justify-between mb-5">
//                 <label className="flex items-center gap-2 cursor-pointer text-slate-600 text-sm">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="w-4 h-4 rounded border-slate-300 text-[#041367] focus:ring-[#041367]/30"
//                   />
//                   Remember me
//                 </label>

//                 <Link
//                   href="/auth/forgot-password"
//                   className="text-sm font-medium text-[#041367] hover:underline underline-offset-4"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>

//               <Button type="submit" variant="primary" isLoading={loading}>
//                 Sign in
//               </Button>

//               <div className="flex items-center gap-3 my-5">
//                 <div className="flex-1 h-px bg-slate-200" />
//                 <span className="text-xs text-slate-400">or</span>
//                 <div className="flex-1 h-px bg-slate-200" />
//               </div>

//               <Button
//                 type="button"
//                 variant="google"
//                 isLoading={googleLoading}
//                 disabled={loading}
//                 onClick={handleGoogleLogin}
//               >
//                 <GoogleIcon />
//                 Continue with Google
//               </Button>
//             </form>

//             <p className="mt-6 text-center text-sm text-slate-500">
//               Don&apos;t have an account?{" "}
//               <Link
//                 href="/auth/register"
//                 className="font-medium text-[#041367] hover:underline underline-offset-4"
//               >
//                 Create an account
//               </Link>
//             </p>
//           </section>
//         </motion.div>

//         <p className="mt-5 text-center text-xs text-slate-400">
//           © 2006 Hanjin Shipping (Thailand) Co., Ltd. All rights reserved.
//         </p>
//       </main>
//     </>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { login, googleLogin } from "@/services/Authentication";

import {
  setAuthToken,
  setUserDetails,
  getAuthToken,
} from "@/utils/SessionHelper";

// ==========================================================
// FIREBASE
// ==========================================================

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let auth;
let googleProvider;

if (typeof window !== "undefined") {
  try {
    const app = initializeApp(firebaseConfig);

    auth = getAuth(app);

    googleProvider = new GoogleAuthProvider();
    googleProvider.addScope("email");
    googleProvider.addScope("profile");
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
}

// ==========================================================
// BUTTON COMPONENT
// ==========================================================

const Button = ({
  children,
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled = false,
  onClick,
  className = "",
}) => {
  const baseClasses =
    "h-11 w-full rounded-lg text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#073155] text-white hover:bg-[#0a4270] focus-visible:ring-[#073155]",
    google:
      "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-400",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className} ${
        disabled || isLoading ? "opacity-60 cursor-not-allowed" : ""
      }`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2">
        {isLoading ? (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
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
        ) : (
          children
        )}
      </span>
    </button>
  );
};

// ==========================================================
// INPUT COMPONENT
// ==========================================================

const Input = ({
  label,
  type = "text",
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
  autoComplete,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div
            className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors duration-200 ${
              isFocused ? "text-[#073155]" : "text-slate-400"
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
            if (onBlur) onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          className={`w-full h-11 rounded-lg border bg-white text-slate-900 text-sm placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:bg-slate-50 ${
            error
              ? "border-red-400 focus:ring-red-100"
              : "border-slate-300 focus:border-[#073155] focus:ring-[#073155]/15"
          } ${icon ? "pl-11" : "pl-4"} ${rightElement ? "pr-11" : "pr-4"}`}
        />

        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            {rightElement}
          </div>
        )}
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-xs text-red-600"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

// ==========================================================
// ROTATING MESSAGES (LEFT PANEL)
// ==========================================================

const messages = [
  {
    title: "Global shipping, handled",
    description:
      "Reliable ocean freight connecting Thailand with Asia, America and Europe.",
  },
  {
    title: "30+ years of trust",
    description:
      "Three decades of dependable shipping and logistics for businesses worldwide.",
  },
  {
    title: "Track every container",
    description:
      "Modern fleet with real-time tracking and temperature-controlled options.",
  },
  {
    title: "Support around the clock",
    description:
      "Our team is available 24/7 for bookings, documents and shipment questions.",
  },
  {
    title: "A network in 50+ countries",
    description:
      "More than 200 overseas branch offices working as one connected network.",
  },
];

const AnimatedImageOverlay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-white/15 border border-white/25 flex items-center justify-center">
          <svg
            className="w-4.5 h-4.5 text-white"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M3 17l2-8h14l2 8M3 17h18M3 17l1 3h16l1-3M12 9V4m0 0H8m4 0h4"
            />
          </svg>
        </div>
        <span className="text-white font-semibold text-base tracking-tight">
          Thai Shipping
        </span>
      </div>

      <div className="min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-white text-2xl lg:text-[28px] font-semibold leading-tight tracking-tight">
              {messages[currentIndex].title}
            </h2>
            <p className="mt-3 text-white/75 text-sm leading-relaxed max-w-sm">
              {messages[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex items-center gap-1.5">
          {messages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to message ${idx + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                currentIndex === idx
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================================
// MAIN LOGIN COMPONENT
// ==========================================================

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // ========================================================
  // GOOGLE LOGIN
  // ========================================================

  const handleGoogleLogin = async () => {
    if (!auth || !googleProvider) {
      toast.error("Google login is currently unavailable.");
      return;
    }

    setGoogleLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const idToken = await user.getIdToken();

      const response = await googleLogin(
        idToken,
        user.email,
        user.displayName,
        user.photoURL,
        user.uid
      );

      if (response.success) {
        const userData = response.user || response.data || response;

        if (response.token) {
          setAuthToken(response.token);
        }

        if (userData) {
          setUserDetails(userData);
        }

        toast.success(`Welcome ${userData?.firstName || "Customer"}!`);

        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("authChange"));
        }

        setTimeout(() => {
          router.push("/profile");
        }, 1500);
      } else {
        toast.error(response.message || "Google login failed");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      toast.error(error?.message || "Google login failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  // ========================================================
  // AUTH CHECK
  // ========================================================

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = getAuthToken();

        if (token) {
          const userStr = localStorage.getItem("user_details");

          if (userStr) {
            const user = JSON.parse(userStr);

            if (user.role === "customer") {
              router.push("/profile");
            } else {
              localStorage.removeItem("auth_token");
              localStorage.removeItem("user_details");
              setIsCheckingAuth(false);
            }
          } else {
            router.push("/profile");
          }
        } else {
          setIsCheckingAuth(false);
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  // ========================================================
  // FORM VALIDATION
  // ========================================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // ========================================================
  // HANDLERS
  // ========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));

    setErrors(validateForm());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({
      email: true,
      password: true,
    });

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      return;
    }

    setLoading(true);

    try {
      const response = await login(formData.email, formData.password);

      if (response.success && response.token) {
        const userData = response.data || response.user;

        if (!userData || userData.role !== "customer") {
          toast.error(
            "Access denied. Only customers can log in to this portal.",
            {
              position: "top-right",
              autoClose: 5000,
            }
          );

          setLoading(false);
          return;
        }

        setAuthToken(response.token);
        setUserDetails(userData);

        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("authChange"));
        }

        toast.success("Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 2000,
        });

        setTimeout(() => {
          router.push("/profile");
        }, 2000);
      } else {
        toast.error(response.message || "Invalid email or password", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Login error:", error);

      toast.error(error?.message || "Invalid email or password", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // ========================================================
  // ICONS
  // ========================================================

  const renderIcon = (type) => {
    switch (type) {
      case "email":
        return (
          <svg
            className="w-[18px] h-[18px]"
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

      case "password":
        return (
          <svg
            className="w-[18px] h-[18px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="4" y="10" width="16" height="11" rx="2" strokeWidth="1.6" />
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

  const PasswordVisibilityIcon = () => {
    if (showPassword) {
      return (
        <svg
          className="w-[18px] h-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      );
    }

    return (
      <svg
        className="w-[18px] h-[18px]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  };

  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );

  // ========================================================
  // AUTH CHECK LOADING
  // ========================================================

  if (isCheckingAuth) {
    return (
      <div className="min-h-[60vh] bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-[#073155]/20 border-t-[#073155] rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 text-sm mt-4">Checking your session...</p>
        </div>
      </div>
    );
  }

  // ========================================================
  // MAIN UI
  // ========================================================

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

      <main className="bg-slate-100 px-4 py-8 sm:py-10 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 grid md:grid-cols-[1fr_1.05fr] md:min-h-[540px]"
        >
          {/* ==================================================
              LEFT: BRAND PANEL
          ================================================== */}

          <aside className="relative hidden md:block bg-[#073155]">
            <Image
              src="/images/login.jpg"
              alt="Thai Shipping container terminal"
              fill
              priority
              sizes="(min-width: 768px) 460px, 0px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#073155]/80 via-[#073155]/60 to-[#073155]/90" />

            <AnimatedImageOverlay />
          </aside>

          {/* ==================================================
              RIGHT: FORM PANEL
          ================================================== */}

          <section className="flex flex-col justify-center px-6 sm:px-10 py-8">
            {/* Mobile brand */}
            <p className="md:hidden text-sm font-semibold text-[#073155] mb-5">
              Thai Shipping
            </p>

            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
                Sign in to your account
              </h1>
              <p className="mt-1.5 text-sm text-slate-500">
                Manage your shipments and bookings in the customer portal.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <Input
                label="Email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                placeholder="you@company.com"
                error={touched.email && errors.email}
                required
                disabled={loading}
                icon={renderIcon("email")}
                autoComplete="email"
              />

              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => handleBlur("password")}
                placeholder="Enter your password"
                error={touched.password && errors.password}
                required
                disabled={loading}
                icon={renderIcon("password")}
                autoComplete="current-password"
                rightElement={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-2 text-slate-400 hover:text-slate-700 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#073155]/40"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <PasswordVisibilityIcon />
                  </button>
                }
              />

              <div className="flex items-center justify-between mb-5">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 text-sm">
                
                </label>

                <Link
                  href="/auth/forgot-password"
                  className="text-sm font-medium text-[#E96C35] hover:text-[#d55f2b] hover:underline underline-offset-4"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="primary" isLoading={loading}>
                Sign in
              </Button>

              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400">or</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <Button
                type="button"
                variant="google"
                isLoading={googleLoading}
                disabled={loading}
                onClick={handleGoogleLogin}
              >
                <GoogleIcon />
                Continue with Google
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-[#E96C35] hover:text-[#d55f2b] hover:underline underline-offset-4"
              >
                Create an account
              </Link>
            </p>
          </section>
        </motion.div>

        <p className="mt-5 text-center text-xs text-slate-400">
          © 2006 Thai Shipping (Thailand) Co., Ltd. All rights reserved.
        </p>
      </main>
    </>
  );
}