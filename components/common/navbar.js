

// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname, useRouter } from 'next/navigation';
// import Link from 'next/link';
// import {
//   Menu, X, ChevronDown, Home, LogOut, UserCircle, ClipboardList,
//   Truck, FileSpreadsheet, Settings, ArrowRight, UtensilsCrossed,
//   Scale, Ship, Anchor, Globe, Box, Thermometer, Wind, Ruler, FileText,
//   BarChart3, Phone, Calendar, ArrowUp, ArrowDown, Building, Search, PackageSearch
// } from 'lucide-react';
// import { getAuthToken, getUserDetails, logout } from '@/utils/SessionHelper';

// const Navbar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const hoverTimeoutRef = useRef(null);
//   const submenuTimeoutRef = useRef(null);

//   const isHomePage = pathname === '/';
//   const isTransparent = isHomePage && !scrolled;

//   const isActiveLink = (href) => {
//     if (href === '/') return pathname === '/';
//     return pathname === href || pathname.startsWith(href + '/');
//   };

//   const isDropdownActive = (items) => {
//     if (!items) return false;
//     for (const item of items) {
//       if (item.href && isActiveLink(item.href)) return true;
//       if (item.subitems) {
//         for (const subitem of item.subitems) {
//           if (isActiveLink(subitem.href)) return true;
//         }
//       }
//     }
//     return false;
//   };

//   const checkAuth = () => {
//     let token = null;
//     let userData = null;

//     if (typeof window !== 'undefined') {
//       token = localStorage.getItem('auth_token');
//       const userStr = localStorage.getItem('user_details') || localStorage.getItem('user');
//       if (userStr) {
//         try {
//           userData = JSON.parse(userStr);
//         } catch (e) {
//           console.error('Error parsing user data:', e);
//         }
//       }
//     }

//     if (!token) {
//       token = getAuthToken();
//       userData = getUserDetails();
//     }

//     const loggedIn = !!token;
//     setIsLoggedIn(loggedIn);
//     if (loggedIn && userData) setUser(userData);
//     else setUser(null);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     checkAuth();
//     const handleStorageChange = () => checkAuth();
//     const handleAuthChange = () => checkAuth();

//     window.addEventListener('storage', handleStorageChange);
//     window.addEventListener('authChange', handleAuthChange);
//     const interval = setInterval(checkAuth, 2000);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//       window.removeEventListener('authChange', handleAuthChange);
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMouseEnter = (dropdownName) => {
//     if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
//     setActiveDropdown(dropdownName);
//   };

//   const handleMouseLeave = () => {
//     if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
//     hoverTimeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//       setActiveSubmenu(null);
//     }, 150);
//   };

//   const handleSubmenuEnter = (submenuKey) => {
//     if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
//     setActiveSubmenu(submenuKey);
//   };

//   const handleSubmenuLeave = () => {
//     if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
//     submenuTimeoutRef.current = setTimeout(() => {
//       setActiveSubmenu(null);
//     }, 150);
//   };

//   const handleLogout = () => {
//     logout();
//     if (typeof window !== 'undefined') {
//       localStorage.removeItem('auth_token');
//       localStorage.removeItem('user_details');
//       localStorage.removeItem('user');
//     }
//     setIsLoggedIn(false);
//     setUser(null);
//     setIsMenuOpen(false);
//     window.dispatchEvent(new Event('authChange'));
//     router.push('/');
//   };

//   const navItems = [
//     { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
//     { label: 'Thai Imports', href: '/thai-imports', icon: <Anchor className="w-4 h-4" /> },
//     { label: 'Thai Exports', href: '/thai-exports', icon: <Globe className="w-4 h-4" /> },
//     { label: 'Thai Food Shipping', href: '/thai-food-shipping', icon: <UtensilsCrossed className="w-4 h-4" /> },
//     { label: 'Shipping Regulations', href: '/shipping-regulations', icon: <Scale className="w-4 h-4" /> },
//     {
//       label: 'Shipping Services',
//       icon: <Ship className="w-4 h-4" />,
//       dropdown: true,
//       items: [
//         { label: 'Ocean Freight', href: '/shipping-services/ocean-freight', icon: <Ship className="w-3 h-3" /> },
//         { label: 'Air Freight', href: '/shipping-services/air-freight', icon: <Globe className="w-3 h-3" /> },
//         { label: 'Container Types', href: '/shipping-services/containers', icon: <Box className="w-3 h-3" /> },
//         {
//           label: 'Vessel Schedule',
//           icon: <Calendar className="w-3 h-3" />,
//           hasSubmenu: true,
//           submenuKey: 'vesselSchedule',
//           subitems: [
//             { label: 'Outbound', href: '/shipping-services/schedule/outbound', icon: <ArrowUp className="w-3 h-3" /> },
//             { label: 'Inbound', href: '/shipping-services/schedule/inbound', icon: <ArrowDown className="w-3 h-3" /> }
//           ]
//         },
//         { label: 'Customer Service', href: '/contact', icon: <Phone className="w-3 h-3" /> }
//       ]
//     },
//   ];

//   const profileDropdownItems = [
//     { label: 'My Profile', href: '/profile', icon: <UserCircle className="w-4 h-4" /> },
//     { label: 'Create Bookings', href: '/Bookings/create_bookings', icon: <ClipboardList className="w-4 h-4" /> },
//     { label: 'My Bookings', href: '/Bookings/my_bookings', icon: <ClipboardList className="w-4 h-4" /> },
//     { label: 'My Shipments', href: '/my-shipping', icon: <Truck className="w-4 h-4" /> },
//     { label: 'My Invoices', href: '/invoice', icon: <FileSpreadsheet className="w-4 h-4" /> }
//   ];

//   if (user?.role === 'admin') {
//     profileDropdownItems.push({ label: 'Admin Panel', href: '/admin', icon: <Settings className="w-4 h-4" /> });
//   }

//   if (isLoading) {
//     return (
//       <div className={`fixed top-0 left-0 right-0 z-[100] py-4 w-full ${isTransparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
//         {isTransparent && (
//           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none" />
//         )}
//         <div className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full relative z-10">
//           <div className="flex items-center justify-between h-10">
//             <div className={`h-10 w-32 rounded animate-pulse ${isTransparent ? 'bg-white/20' : 'bg-gray-200'}`}></div>
//             <div className="hidden lg:flex space-x-2">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className={`h-9 w-24 rounded animate-pulse ${isTransparent ? 'bg-white/20' : 'bg-gray-200'}`}></div>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className={`h-10 w-10 rounded-full animate-pulse ${isTransparent ? 'bg-white/20' : 'bg-gray-200'}`}></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const getDisplayName = () => {
//     if (user?.firstName && user?.lastName) {
//       return `${user.firstName} ${user.lastName}`.trim().split(' ')[0];
//     }
//     if (user?.name) return user.name.split(' ')[0];
//     return 'Profile';
//   };

//   const iconBtn = isTransparent
//     ? 'bg-[#E96C35] border border-[#E96C35] text-white hover:bg-[#d55f2b]'
//     : 'bg-gray-50 border border-gray-200 text-[#0B2E4E] hover:bg-gray-100';

//   return (
//     <>
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap');
//         * {
//           font-family: 'Inter', sans-serif;
//         }
//       `}</style>

//       <nav
//         className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full ${
//           isTransparent
//             ? 'bg-transparent py-4'
//             : 'bg-white/95 backdrop-blur-md py-2.5 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.12)]'
//         }`}
//       >
//         {isTransparent && (
//           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none" />
//         )}

//         <div className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full relative z-10">
//           <div className="flex items-center justify-between gap-4 h-10">

//             {/* Logo only — larger on transparent, smaller on white navbar */}
//             <div className="flex items-center flex-shrink-0 h-10">
//               <a href="/" className="group inline-flex items-center h-10">
//                 <img
//                   src={isTransparent ? '/images/logo.png' : '/images/logo1.png'}
//                   alt="Thai Shipping"
//                   className={`w-auto transition-transform duration-300 group-hover:scale-105 ${
//                     isTransparent ? 'h-20' : 'h-10'
//                   }`}
//                 />
//               </a>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
//               {navItems.map((item) => (
//                 <div
//                   key={item.label}
//                   className="relative"
//                   onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
//                   onMouseLeave={item.dropdown && handleMouseLeave}
//                 >
//                   {item.dropdown ? (
//                     <>
//                       <button
//                         className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 group
//                           ${isDropdownActive(item.items)
//                             ? (isTransparent ? 'text-white' : 'text-[#E96C35]')
//                             : (isTransparent ? 'text-white/85 hover:text-white' : 'text-[#0B2E4E]/80 hover:text-[#0B2E4E]')
//                           }`}
//                       >
//                         <span>{item.label}</span>
//                         <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
//                         <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#E96C35] transition-all duration-300 ${isDropdownActive(item.items) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'}`} />
//                       </button>

//                       {activeDropdown === item.label && (
//                         <div
//                           className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
//                           onMouseEnter={() => handleMouseEnter(item.label)}
//                           onMouseLeave={handleMouseLeave}
//                         >
//                           <motion.div
//                             initial={{ opacity: 0, y: -8 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -8 }}
//                             transition={{ duration: 0.18 }}
//                             className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(11,46,78,0.25)] border border-gray-100 min-w-[260px] overflow-visible"
//                           >
//                             <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
//                             <div className="py-2 relative">
//                               {item.items.map((dropdownItem) => (
//                                 <div
//                                   key={dropdownItem.label}
//                                   className="relative"
//                                   onMouseEnter={() => dropdownItem.hasSubmenu && handleSubmenuEnter(dropdownItem.submenuKey)}
//                                   onMouseLeave={dropdownItem.hasSubmenu && handleSubmenuLeave}
//                                 >
//                                   {dropdownItem.hasSubmenu ? (
//                                     <>
//                                       <div className="flex items-center justify-between px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-all duration-200 cursor-pointer group">
//                                         <div className="flex items-center gap-2.5">
//                                           <span className="text-[#E96C35]">{dropdownItem.icon}</span>
//                                           <span className="text-sm text-[#0B2E4E] group-hover:font-medium">{dropdownItem.label}</span>
//                                         </div>
//                                         <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 group-hover:text-[#E96C35] transition-all" />
//                                       </div>

//                                       {activeSubmenu === dropdownItem.submenuKey && (
//                                         <motion.div
//                                           initial={{ opacity: 0, x: -8 }}
//                                           animate={{ opacity: 1, x: 0 }}
//                                           exit={{ opacity: 0, x: -8 }}
//                                           transition={{ duration: 0.18 }}
//                                           className="absolute left-full top-0 ml-1 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(11,46,78,0.25)] border border-gray-100 min-w-[220px] z-50"
//                                           onMouseEnter={() => handleSubmenuEnter(dropdownItem.submenuKey)}
//                                           onMouseLeave={handleSubmenuLeave}
//                                         >
//                                           <div className="py-2">
//                                             {dropdownItem.subitems.map((subitem) => (
//                                               <Link key={subitem.label} href={subitem.href}>
//                                                 <div className={`flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-all duration-200 cursor-pointer whitespace-nowrap group ${isActiveLink(subitem.href) ? 'text-[#E96C35] font-medium' : 'text-[#0B2E4E]'}`}>
//                                                   <span className="text-[#E96C35]">{subitem.icon}</span>
//                                                   <span className="text-sm">{subitem.label}</span>
//                                                 </div>
//                                               </Link>
//                                             ))}
//                                           </div>
//                                         </motion.div>
//                                       )}
//                                     </>
//                                   ) : (
//                                     <Link href={dropdownItem.href}>
//                                       <div className={`flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-all duration-200 cursor-pointer group ${isActiveLink(dropdownItem.href) ? 'text-[#E96C35] font-medium' : 'text-[#0B2E4E]'}`}>
//                                         <span className="text-[#E96C35]">{dropdownItem.icon}</span>
//                                         <span className="text-sm">{dropdownItem.label}</span>
//                                       </div>
//                                     </Link>
//                                   )}
//                                 </div>
//                               ))}
//                             </div>
//                           </motion.div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link href={item.href}>
//                       <div className={`relative flex items-center px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 group
//                         ${isActiveLink(item.href)
//                           ? (isTransparent ? 'text-white' : 'text-[#E96C35]')
//                           : (isTransparent ? 'text-white/85 hover:text-white' : 'text-[#0B2E4E]/80 hover:text-[#0B2E4E]')
//                         }`}>
//                         <span>{item.label}</span>
//                         <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#E96C35] transition-all duration-300 ${isActiveLink(item.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'}`} />
//                       </div>
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Desktop Right Side — 3 icon buttons */}
//             <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
//               <button
//                 onClick={() => router.push('/tracking-number')}
//                 className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${iconBtn}`}
//                 aria-label="Track order"
//                 title="Track Order"
//               >
//                 <PackageSearch className="w-[18px] h-[18px]" />
//               </button>

//               <button
//                 onClick={() => router.push('/contact')}
//                 className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${iconBtn}`}
//                 aria-label="Contact"
//                 title="Contact"
//               >
//                 <Phone className="w-[18px] h-[18px]" />
//               </button>

//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter('profile')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${iconBtn}`}
//                   aria-label="Account"
//                   title="Account"
//                 >
//                   <UserCircle className="w-5 h-5" />
//                 </button>

//                 {activeDropdown === 'profile' && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -8 }}
//                     transition={{ duration: 0.18 }}
//                     className="absolute right-0 top-full pt-3 z-50"
//                     onMouseEnter={() => handleMouseEnter('profile')}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <div className="relative bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(11,46,78,0.25)] border border-gray-100 min-w-[260px] overflow-hidden">
//                       <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

//                       {isLoggedIn ? (
//                         <>
//                           <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-[#0B2E4E]/5 to-transparent">
//                             <div className="flex items-center gap-3">
//                               <div className="w-9 h-9 rounded-full bg-[#0B2E4E] flex items-center justify-center">
//                                 <UserCircle className="w-5 h-5 text-white" />
//                               </div>
//                               <div className="min-w-0">
//                                 <p className="text-xs text-gray-500">Signed in as</p>
//                                 <p className="text-sm font-semibold text-[#0B2E4E] truncate">{getDisplayName()}</p>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="py-1">
//                             {profileDropdownItems.map((item) => (
//                               <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
//                                 <div className={`flex items-center gap-3 px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-colors cursor-pointer ${isActiveLink(item.href) ? 'text-[#E96C35]' : 'text-[#0B2E4E]'}`}>
//                                   <span className="text-[#E96C35]">{item.icon}</span>
//                                   <span className="text-sm">{item.label}</span>
//                                 </div>
//                               </Link>
//                             ))}
//                           </div>

//                           <div className="border-t border-gray-100">
//                             <button
//                               onClick={handleLogout}
//                               className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-red-600"
//                             >
//                               <LogOut className="w-4 h-4" />
//                               <span className="text-sm font-medium">Logout</span>
//                             </button>
//                           </div>
//                         </>
//                       ) : (
//                         <div className="p-4">
//                           <p className="text-xs text-gray-500 mb-3">Welcome to Thai Shipping</p>
//                           <button
//                             onClick={() => { router.push('/auth/login'); setActiveDropdown(null); }}
//                             className="w-full py-2.5 rounded-lg bg-[#0B2E4E] text-white text-sm font-semibold hover:bg-[#0B2E4E]/90 transition-colors"
//                           >
//                             Sign In
//                           </button>
//                           <button
//                             onClick={() => { router.push('/auth/register'); setActiveDropdown(null); }}
//                             className="w-full mt-2 py-2.5 rounded-lg border border-[#0B2E4E]/20 text-[#0B2E4E] text-sm font-semibold hover:bg-[#0B2E4E]/5 transition-colors"
//                           >
//                             Create Account
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Right Side */}
//             <div className="lg:hidden flex items-center gap-2">
//               <button
//                 onClick={() => router.push('/tracking-number')}
//                 className={`flex items-center justify-center w-9 h-9 rounded-full ${iconBtn}`}
//                 aria-label="Track order"
//               >
//                 <PackageSearch className="w-[18px] h-[18px]" />
//               </button>
//               <button
//                 onClick={() => router.push('/contact')}
//                 className={`flex items-center justify-center w-9 h-9 rounded-full ${iconBtn}`}
//                 aria-label="Contact"
//               >
//                 <Phone className="w-[18px] h-[18px]" />
//               </button>
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
//                   isTransparent
//                     ? 'bg-white/10 text-white hover:bg-white/20'
//                     : 'bg-gray-100 text-[#0B2E4E] hover:bg-gray-200'
//                 }`}
//                 aria-label="Menu"
//               >
//                 {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {isMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="lg:hidden overflow-hidden mt-4"
//               >
//                 <div className="bg-white rounded-xl shadow-xl border py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
//                   <div className="space-y-1 px-3">
//                     {isLoggedIn && user && (
//                       <div className="px-4 py-3 bg-[#0B2E4E]/5 rounded-lg mb-2">
//                         <p className="text-xs text-gray-500">Logged in as</p>
//                         <p className="font-semibold text-[#0B2E4E]">
//                           {user.firstName} {user.lastName}
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1 truncate">{user.email}</p>
//                       </div>
//                     )}

//                     {navItems.map((item) => (
//                       <div key={item.label}>
//                         {item.dropdown ? (
//                           <div>
//                             <div
//                               className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
//                                 isDropdownActive(item.items) ? 'text-[#E96C35] font-semibold bg-[#E96C35]/5' : 'text-[#0B2E4E] hover:bg-[#0B2E4E]/5'
//                               }`}
//                               onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
//                             >
//                               <div className="flex items-center space-x-3">
//                                 <span className="text-[#E96C35]">{item.icon}</span>
//                                 <span className="font-medium text-sm">{item.label}</span>
//                               </div>
//                               <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
//                             </div>
//                             {activeDropdown === item.label && (
//                               <div className="pl-6 mt-1 space-y-1">
//                                 {item.items.map((dropdownItem) => (
//                                   <div key={dropdownItem.label}>
//                                     {dropdownItem.hasSubmenu ? (
//                                       <div>
//                                         <div
//                                           className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-[#0B2E4E] hover:bg-[#0B2E4E]/5"
//                                           onClick={() => setActiveSubmenu(activeSubmenu === dropdownItem.submenuKey ? null : dropdownItem.submenuKey)}
//                                         >
//                                           <div className="flex items-center gap-2">
//                                             <span className="text-[#E96C35]">{dropdownItem.icon}</span>
//                                             <span className="text-sm">{dropdownItem.label}</span>
//                                           </div>
//                                           <ChevronDown className={`w-3 h-3 transition-transform ${activeSubmenu === dropdownItem.submenuKey ? 'rotate-180' : ''}`} />
//                                         </div>
//                                         {activeSubmenu === dropdownItem.submenuKey && (
//                                           <div className="pl-6 mt-1 space-y-1">
//                                             {dropdownItem.subitems.map((subitem) => (
//                                               <Link key={subitem.label} href={subitem.href} onClick={() => setIsMenuOpen(false)}>
//                                                 <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#0B2E4E] hover:bg-[#0B2E4E]/5">
//                                                   <span className="text-[#E96C35]">{subitem.icon}</span>
//                                                   <span>{subitem.label}</span>
//                                                 </div>
//                                               </Link>
//                                             ))}
//                                           </div>
//                                         )}
//                                       </div>
//                                     ) : (
//                                       <Link href={dropdownItem.href} onClick={() => setIsMenuOpen(false)}>
//                                         <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#0B2E4E] hover:bg-[#0B2E4E]/5">
//                                           <span className="text-[#E96C35]">{dropdownItem.icon}</span>
//                                           <span>{dropdownItem.label}</span>
//                                         </div>
//                                       </Link>
//                                     )}
//                                   </div>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ) : (
//                           <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
//                             <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//                               isActiveLink(item.href) ? 'text-[#E96C35] font-semibold bg-[#E96C35]/5' : 'text-[#0B2E4E] hover:bg-[#0B2E4E]/5'
//                             }`}>
//                               <span className="text-[#E96C35]">{item.icon}</span>
//                               <span className="font-medium text-sm">{item.label}</span>
//                             </div>
//                           </Link>
//                         )}
//                       </div>
//                     ))}

//                     {isLoggedIn && (
//                       <div className="border-t border-gray-100 my-2 pt-2">
//                         <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</p>
//                         {profileDropdownItems.map((item) => (
//                           <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
//                             <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
//                               isActiveLink(item.href) ? 'text-[#E96C35] bg-[#E96C35]/5' : 'text-[#0B2E4E] hover:bg-[#0B2E4E]/5'
//                             }`}>
//                               <span className="text-[#E96C35]">{item.icon}</span>
//                               <span className="text-sm font-medium">{item.label}</span>
//                             </div>
//                           </Link>
//                         ))}
//                         <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-all text-red-600">
//                           <LogOut className="w-4 h-4" />
//                           <span className="text-sm font-medium">Logout</span>
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {!isLoggedIn && (
//                     <div className="mt-4 pt-4 border-t border-gray-100 px-4 space-y-2">
//                       <button
//                         onClick={() => { router.push('/auth/login'); setIsMenuOpen(false); }}
//                         className="w-full py-3 rounded-lg bg-[#0B2E4E] text-white font-semibold hover:bg-[#0B2E4E]/90 transition-colors text-sm"
//                       >
//                         Sign In
//                       </button>
//                       <button
//                         onClick={() => { router.push('/auth/register'); setIsMenuOpen(false); }}
//                         className="w-full py-3 rounded-lg border border-[#0B2E4E]/20 text-[#0B2E4E] font-semibold hover:bg-[#0B2E4E]/5 transition-colors text-sm"
//                       >
//                         Create Account
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </nav>

//       <div className="h-20" />
//     </>
//   );
// };

// export default Navbar;


"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Menu, X, ChevronDown, Home, LogOut, UserCircle, ClipboardList,
  Truck, FileSpreadsheet, Settings, UtensilsCrossed,
  Scale, Ship, Anchor, Globe, Phone, PackageSearch
} from 'lucide-react';
import { getAuthToken, getUserDetails, logout } from '@/utils/SessionHelper';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Footer/navbar logos from backend
  const [transparentLogo, setTransparentLogo] = useState('/images/logo.png');
  const [solidLogo, setSolidLogo] = useState('/images/logo1.png');

  const hoverTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  const isActiveLink = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isDropdownActive = (items) => {
    if (!items) return false;
    for (const item of items) {
      if (item.href && isActiveLink(item.href)) return true;
      if (item.subitems) {
        for (const subitem of item.subitems) {
          if (isActiveLink(subitem.href)) return true;
        }
      }
    }
    return false;
  };

  // ============ FETCH FOOTER SETTINGS (Logos) ============
  useEffect(() => {
    let isMounted = true;

    fetch(`${API}/footer-settings`)
      .then((r) => r.json())
      .then((res) => {
        if (!isMounted) return;
        if (res.success && res.data) {
          if (res.data.navbarLogo?.url) {
            setTransparentLogo(res.data.navbarLogo.url);
          }
          if (res.data.bannerLogo?.url) {
            setSolidLogo(res.data.bannerLogo.url);
          }
        }
      })
      .catch((err) => {
        console.warn('Failed to load footer logos, using fallback:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // ============ AUTH CHECK ============
  const checkAuth = () => {
    let token = null;
    let userData = null;

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('auth_token');
      const userStr = localStorage.getItem('user_details') || localStorage.getItem('user');
      if (userStr) {
        try {
          userData = JSON.parse(userStr);
        } catch (e) {
          console.error('Error parsing user data:', e);
        }
      }
    }

    if (!token) {
      token = getAuthToken();
      userData = getUserDetails();
    }

    const loggedIn = !!token;
    setIsLoggedIn(loggedIn);
    if (loggedIn && userData) setUser(userData);
    else setUser(null);
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuth();
    const handleStorageChange = () => checkAuth();
    const handleAuthChange = () => checkAuth();

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleAuthChange);
    const interval = setInterval(checkAuth, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdownName) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 150);
  };

  const handleSubmenuEnter = (submenuKey) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    setActiveSubmenu(submenuKey);
  };

  const handleSubmenuLeave = () => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  const handleLogout = () => {
    logout();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_details');
      localStorage.removeItem('user');
    }
    setIsLoggedIn(false);
    setUser(null);
    setIsMenuOpen(false);
    window.dispatchEvent(new Event('authChange'));
    router.push('/');
  };

  // ============ NAV ITEMS (No dropdown) ============
  const navItems = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Thai Imports', href: '/thai-imports', icon: <Anchor className="w-4 h-4" /> },
    { label: 'Thai Exports', href: '/thai-exports', icon: <Globe className="w-4 h-4" /> },
    { label: 'Thai Food Shipping', href: '/thai-food-shipping', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { label: 'Shipping Regulations', href: '/shipping-regulations', icon: <Scale className="w-4 h-4" /> },
    { label: 'Shipping Services', href: '/shipping-services', icon: <Ship className="w-4 h-4" /> },
  ];

  const profileDropdownItems = [
    { label: 'My Profile', href: '/profile', icon: <UserCircle className="w-4 h-4" /> },
    { label: 'Create Bookings', href: '/Bookings/create_bookings', icon: <ClipboardList className="w-4 h-4" /> },
    { label: 'My Bookings', href: '/Bookings/my_bookings', icon: <ClipboardList className="w-4 h-4" /> },
    { label: 'My Shipments', href: '/my-shipping', icon: <Truck className="w-4 h-4" /> },
    { label: 'My Invoices', href: '/invoice', icon: <FileSpreadsheet className="w-4 h-4" /> }
  ];

  if (user?.role === 'admin') {
    profileDropdownItems.push({ label: 'Admin Panel', href: '/admin', icon: <Settings className="w-4 h-4" /> });
  }

  if (isLoading) {
    return (
      <div className={`fixed top-0 left-0 right-0 z-[100] py-4 w-full ${isTransparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
        {isTransparent && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none" />
        )}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full relative z-10">
          <div className="flex items-center justify-between h-10">
            <div className={`h-10 w-32 rounded animate-pulse ${isTransparent ? 'bg-white/20' : 'bg-gray-200'}`}></div>
            <div className="hidden lg:flex space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-9 w-24 rounded animate-pulse ${isTransparent ? 'bg-white/20' : 'bg-gray-200'}`}></div>
              ))}
            </div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-10 w-10 rounded-full animate-pulse ${isTransparent ? 'bg-white/20' : 'bg-gray-200'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`.trim().split(' ')[0];
    }
    if (user?.name) return user.name.split(' ')[0];
    return 'Profile';
  };

  const iconBtn = isTransparent
    ? 'bg-[#E96C35] border border-[#E96C35] text-white hover:bg-[#d55f2b]'
    : 'bg-gray-50 border border-gray-200 text-[#0B2E4E] hover:bg-gray-100';

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap');
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full ${
          isTransparent
            ? 'bg-transparent py-4'
            : 'bg-white/95 backdrop-blur-md py-2.5 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.12)]'
        }`}
      >
        {isTransparent && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none" />
        )}

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full relative z-10">
          <div className="flex items-center justify-between gap-4 h-10">

            {/* Logo — transparent nav uses footer/transparent logo, solid nav uses navbar logo */}
            <div className="flex items-center flex-shrink-0 h-10">
              <a href="/" className="group inline-flex items-center h-10">
                <img
                  src={isTransparent ? transparentLogo : solidLogo}
                  alt="Thai Shipping"
                  className={`w-auto transition-transform duration-300 group-hover:scale-105 ${
                    isTransparent ? 'h-20' : 'h-10'
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={item.dropdown && handleMouseLeave}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 group
                          ${isDropdownActive(item.items)
                            ? (isTransparent ? 'text-white' : 'text-[#E96C35]')
                            : (isTransparent ? 'text-white/85 hover:text-white' : 'text-[#0B2E4E]/80 hover:text-[#0B2E4E]')
                          }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#E96C35] transition-all duration-300 ${isDropdownActive(item.items) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'}`} />
                      </button>

                      {activeDropdown === item.label && (
                        <div
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(11,46,78,0.25)] border border-gray-100 min-w-[260px] overflow-visible"
                          >
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                            <div className="py-2 relative">
                              {item.items.map((dropdownItem) => (
                                <div
                                  key={dropdownItem.label}
                                  className="relative"
                                  onMouseEnter={() => dropdownItem.hasSubmenu && handleSubmenuEnter(dropdownItem.submenuKey)}
                                  onMouseLeave={dropdownItem.hasSubmenu && handleSubmenuLeave}
                                >
                                  {dropdownItem.hasSubmenu ? (
                                    <>
                                      <div className="flex items-center justify-between px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-all duration-200 cursor-pointer group">
                                        <div className="flex items-center gap-2.5">
                                          <span className="text-[#E96C35]">{dropdownItem.icon}</span>
                                          <span className="text-sm text-[#0B2E4E] group-hover:font-medium">{dropdownItem.label}</span>
                                        </div>
                                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 -rotate-90 group-hover:text-[#E96C35] transition-all" />
                                      </div>

                                      {activeSubmenu === dropdownItem.submenuKey && (
                                        <motion.div
                                          initial={{ opacity: 0, x: -8 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          exit={{ opacity: 0, x: -8 }}
                                          transition={{ duration: 0.18 }}
                                          className="absolute left-full top-0 ml-1 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(11,46,78,0.25)] border border-gray-100 min-w-[220px] z-50"
                                          onMouseEnter={() => handleSubmenuEnter(dropdownItem.submenuKey)}
                                          onMouseLeave={handleSubmenuLeave}
                                        >
                                          <div className="py-2">
                                            {dropdownItem.subitems.map((subitem) => (
                                              <Link key={subitem.label} href={subitem.href}>
                                                <div className={`flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-all duration-200 cursor-pointer whitespace-nowrap group ${isActiveLink(subitem.href) ? 'text-[#E96C35] font-medium' : 'text-[#0B2E4E]'}`}>
                                                  <span className="text-[#E96C35]">{subitem.icon}</span>
                                                  <span className="text-sm">{subitem.label}</span>
                                                </div>
                                              </Link>
                                            ))}
                                          </div>
                                        </motion.div>
                                      )}
                                    </>
                                  ) : (
                                    <Link href={dropdownItem.href}>
                                      <div className={`flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-all duration-200 cursor-pointer group ${isActiveLink(dropdownItem.href) ? 'text-[#E96C35] font-medium' : 'text-[#0B2E4E]'}`}>
                                        <span className="text-[#E96C35]">{dropdownItem.icon}</span>
                                        <span className="text-sm">{dropdownItem.label}</span>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href}>
                      <div className={`relative flex items-center px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 group
                        ${isActiveLink(item.href)
                          ? (isTransparent ? 'text-white' : 'text-[#E96C35]')
                          : (isTransparent ? 'text-white/85 hover:text-white' : 'text-[#0B2E4E]/80 hover:text-[#0B2E4E]')
                        }`}>
                        <span>{item.label}</span>
                        <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#E96C35] transition-all duration-300 ${isActiveLink(item.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60'}`} />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Side — 3 icon buttons */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => router.push('/tracking-number')}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${iconBtn}`}
                aria-label="Track order"
                title="Track Order"
              >
                <PackageSearch className="w-[18px] h-[18px]" />
              </button>

              <button
                onClick={() => router.push('/contact')}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${iconBtn}`}
                aria-label="Contact"
                title="Contact"
              >
                <Phone className="w-[18px] h-[18px]" />
              </button>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('profile')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${iconBtn}`}
                  aria-label="Account"
                  title="Account"
                >
                  <UserCircle className="w-5 h-5" />
                </button>

                {activeDropdown === 'profile' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full pt-3 z-50"
                    onMouseEnter={() => handleMouseEnter('profile')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="relative bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(11,46,78,0.25)] border border-gray-100 min-w-[260px] overflow-hidden">
                      <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

                      {isLoggedIn ? (
                        <>
                          <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-[#0B2E4E]/5 to-transparent">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#0B2E4E] flex items-center justify-center">
                                <UserCircle className="w-5 h-5 text-white" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs text-gray-500">Signed in as</p>
                                <p className="text-sm font-semibold text-[#0B2E4E] truncate">{getDisplayName()}</p>
                              </div>
                            </div>
                          </div>

                          <div className="py-1">
                            {profileDropdownItems.map((item) => (
                              <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                                <div className={`flex items-center gap-3 px-4 py-2.5 hover:bg-[#0B2E4E]/5 transition-colors cursor-pointer ${isActiveLink(item.href) ? 'text-[#E96C35]' : 'text-[#0B2E4E]'}`}>
                                  <span className="text-[#E96C35]">{item.icon}</span>
                                  <span className="text-sm">{item.label}</span>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="border-t border-gray-100">
                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-red-600"
                            >
                              <LogOut className="w-4 h-4" />
                              <span className="text-sm font-medium">Logout</span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="p-4">
                          <p className="text-xs text-gray-500 mb-3">Welcome to Thai Shipping</p>
                          <button
                            onClick={() => { router.push('/auth/login'); setActiveDropdown(null); }}
                            className="w-full py-2.5 rounded-lg bg-[#0B2E4E] text-white text-sm font-semibold hover:bg-[#0B2E4E]/90 transition-colors"
                          >
                            Sign In
                          </button>
                          <button
                            onClick={() => { router.push('/auth/register'); setActiveDropdown(null); }}
                            className="w-full mt-2 py-2.5 rounded-lg border border-[#0B2E4E]/20 text-[#0B2E4E] text-sm font-semibold hover:bg-[#0B2E4E]/5 transition-colors"
                          >
                            Create Account
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Right Side */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => router.push('/tracking-number')}
                className={`flex items-center justify-center w-9 h-9 rounded-full ${iconBtn}`}
                aria-label="Track order"
              >
                <PackageSearch className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => router.push('/contact')}
                className={`flex items-center justify-center w-9 h-9 rounded-full ${iconBtn}`}
                aria-label="Contact"
              >
                <Phone className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
                  isTransparent
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-gray-100 text-[#0B2E4E] hover:bg-gray-200'
                }`}
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden mt-4"
              >
                <div className="bg-white rounded-xl shadow-xl border py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                  <div className="space-y-1 px-3">
                    {isLoggedIn && user && (
                      <div className="px-4 py-3 bg-[#0B2E4E]/5 rounded-lg mb-2">
                        <p className="text-xs text-gray-500">Logged in as</p>
                        <p className="font-semibold text-[#0B2E4E]">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 truncate">{user.email}</p>
                      </div>
                    )}

                    {navItems.map((item) => (
                      <div key={item.label}>
                        {item.dropdown ? (
                          <div>
                            <div
                              className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                isDropdownActive(item.items) ? 'text-[#E96C35] font-semibold bg-[#E96C35]/5' : 'text-[#0B2E4E] hover:bg-[#0B2E4E]/5'
                              }`}
                              onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-[#E96C35]">{item.icon}</span>
                                <span className="font-medium text-sm">{item.label}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                            </div>
                            {activeDropdown === item.label && (
                              <div className="pl-6 mt-1 space-y-1">
                                {item.items.map((dropdownItem) => (
                                  <div key={dropdownItem.label}>
                                    {dropdownItem.hasSubmenu ? (
                                      <div>
                                        <div
                                          className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-[#0B2E4E] hover:bg-[#0B2E4E]/5"
                                          onClick={() => setActiveSubmenu(activeSubmenu === dropdownItem.submenuKey ? null : dropdownItem.submenuKey)}
                                        >
                                          <div className="flex items-center gap-2">
                                            <span className="text-[#E96C35]">{dropdownItem.icon}</span>
                                            <span className="text-sm">{dropdownItem.label}</span>
                                          </div>
                                          <ChevronDown className={`w-3 h-3 transition-transform ${activeSubmenu === dropdownItem.submenuKey ? 'rotate-180' : ''}`} />
                                        </div>
                                        {activeSubmenu === dropdownItem.submenuKey && (
                                          <div className="pl-6 mt-1 space-y-1">
                                            {dropdownItem.subitems.map((subitem) => (
                                              <Link key={subitem.label} href={subitem.href} onClick={() => setIsMenuOpen(false)}>
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#0B2E4E] hover:bg-[#0B2E4E]/5">
                                                  <span className="text-[#E96C35]">{subitem.icon}</span>
                                                  <span>{subitem.label}</span>
                                                </div>
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <Link href={dropdownItem.href} onClick={() => setIsMenuOpen(false)}>
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#0B2E4E] hover:bg-[#0B2E4E]/5">
                                          <span className="text-[#E96C35]">{dropdownItem.icon}</span>
                                          <span>{dropdownItem.label}</span>
                                        </div>
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                            <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                              isActiveLink(item.href) ? 'text-[#E96C35] font-semibold bg-[#E96C35]/5' : 'text-[#0B2E4E] hover:bg-[#0B2E4E]/5'
                            }`}>
                              <span className="text-[#E96C35]">{item.icon}</span>
                              <span className="font-medium text-sm">{item.label}</span>
                            </div>
                          </Link>
                        )}
                      </div>
                    ))}

                    {isLoggedIn && (
                      <div className="border-t border-gray-100 my-2 pt-2">
                        <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</p>
                        {profileDropdownItems.map((item) => (
                          <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                            <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                              isActiveLink(item.href) ? 'text-[#E96C35] bg-[#E96C35]/5' : 'text-[#0B2E4E] hover:bg-[#0B2E4E]/5'
                            }`}>
                              <span className="text-[#E96C35]">{item.icon}</span>
                              <span className="text-sm font-medium">{item.label}</span>
                            </div>
                          </Link>
                        ))}
                        <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-all text-red-600">
                          <LogOut className="w-4 h-4" />
                          <span className="text-sm font-medium">Logout</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {!isLoggedIn && (
                    <div className="mt-4 pt-4 border-t border-gray-100 px-4 space-y-2">
                      <button
                        onClick={() => { router.push('/auth/login'); setIsMenuOpen(false); }}
                        className="w-full py-3 rounded-lg bg-[#0B2E4E] text-white font-semibold hover:bg-[#0B2E4E]/90 transition-colors text-sm"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => { router.push('/auth/register'); setIsMenuOpen(false); }}
                        className="w-full py-3 rounded-lg border border-[#0B2E4E]/20 text-[#0B2E4E] font-semibold hover:bg-[#0B2E4E]/5 transition-colors text-sm"
                      >
                        Create Account
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <div className="h-20" />
    </>
  );
};

export default Navbar;