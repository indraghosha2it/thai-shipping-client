// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { 
//   Ship, 
//   Globe, 
//   MapPin, 
//   Anchor, 
//   Clock, 
//   TrendingUp, 
//   Shield,
//   CheckCircle,
//   ArrowRight,
//   Route,
//   Compass,
//   Sparkles,
//   Zap,
//   Rocket,
//   Search,
//   ChevronDown,
//   Calendar,
//   Box,
//   Truck
// } from "lucide-react";

// export default function IntraAsiaPage() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
//   const [showAllBangkok, setShowAllBangkok] = useState(false);
//   const [showAllSongkhla, setShowAllSongkhla] = useState(false);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//     }
//   };

//   // Service routes data - shortened for initial view
//   const bangkokServices = [
//     { name: "AUSTRALIA SINGAPORE EXPRESS SERVICE (AUS)", detail: "Weekly service to Brisbane / Sydney / Melbourne T/S at SIN", type: "Ocean Freight" },
//     { name: "FAR EAST EUROPE EXPRESS SERVICE (FEX/E)", detail: "Laem Chabang (LMH), Singapore, Xingang", type: "Ocean Freight" },
//     { name: "BANGKOK KOREA SERVICE (BKS)", detail: "Bangkok, Laem Chabang, Hongkong, Pusan", type: "Ocean Freight" },
//     { name: "THAILAND TAIWAN SERVICE (ATL)", detail: "Bangkok/Laem Chabang direct service to Kaohsiung", type: "Ocean Freight" },
//     { name: "JAPAN INDONESIA EXPRESS (JIX)", detail: "Thailand to Jakarta, Manila (via Singapore)", type: "Ocean Freight" },
//     { name: "SUPER GALEX (GAX/W)", detail: "Bangkok/Laem Chabang to Singapore, Jebel Ali, Khor Fakkan, Karachi", type: "Ocean Freight" },
//     { name: "SUPER GALEX (GAX/E)", detail: "Bangkok/Laem Chabang to Singapore, Shanghai, Qingdao, Xingang", type: "Ocean Freight" },
//     { name: "JAPAN EUROPE SERVICE (JES)", detail: "Singapore, Kobe, Nagoya, Tokyo", type: "Ocean Freight" },
//     { name: "NORTH CHINA EXPRESS SERVICE (NCX/E)", detail: "Singapore, Shanghai, Dalian, Qingdao", type: "Ocean Freight" },
//     { name: "PACIFIC SOUTH-WEST SERVICE (PAS/E)", detail: "Bangkok, Laem Chabang to Osaka, Tokyo", type: "Ocean Freight" },
//     { name: "INDIA NORTH AMERICA SERVICE (INX/W)", detail: "Bangkok/Laem Chabang/Singapore/Colombo/Mundra/Nhava Sheva/Suez/Port Said", type: "Ocean Freight" },
//     { name: "NEW THAILAND SERVICE (NTS)", detail: "Bangkok-Unithai, Laem Chabang, Hongkong, Shanghai, Pusan, Kwangyang", type: "Ocean Freight" },
//     { name: "GREECE AND ISRAEL SERVICE (GIX/W)", detail: "Bangkok/Laem Chabang to Singapore, Ashdod, Piraeus, Thessaloniki", type: "Ocean Freight" },
//     { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/E)", detail: "Bangkok, Laem Chabang to Osaka, Tokyo", type: "Ocean Freight" },
//     { name: "MIDDLE-EAST SERVICE (MES/W)", detail: "Bangkok, Laem Chabang to Karachi, Khor Fakkan", type: "Ocean Freight" },
//     { name: "FEEDER TRANSHIP SINGAPORE", detail: "Bangkok/Laem Chabang to Singapore", type: "Feeder Service" },
//     { name: "FEEDER TRANSHIP JAKARTA", detail: "Bangkok/Laem Chabang to Singapore/Jakarta", type: "Feeder Service" }
//   ];

//   const songkhlaServices = [
//     { name: "ASIA EUROPE CONTAINER SERVICE (AEC/W)", detail: "Songkhla to Khor Fakkan, Jebel Ali, Jeddah", type: "Ocean Freight" },
//     { name: "AUSTRALIA SERVICE (LOOP A)", detail: "Songkhla to Singapore, Brisbane, Sydney, Melbourne", type: "Ocean Freight" },
//     { name: "KOREA INDONESIA SERVICE", detail: "Songkhla to Singapore, Hongkong, Incheon, Pusan, Keelung", type: "Ocean Freight" },
//     { name: "JAPAN EUROPE SERVICE (JES)", detail: "Songkhla to Kobe, Nagoya, Tokyo", type: "Ocean Freight" },
//     { name: "GULF - ASIA EXPRESS (GAX/W)", detail: "Songkhla to Singapore, Nhava Sheva, Jebel Ali, Khor Fakkan, Karachi", type: "Ocean Freight" },
//     { name: "SUPER GALEX SERVICE (GAX/E)", detail: "Songkhla to Singapore, Hongkong, Xingang, Qingdao, Shanghai", type: "Ocean Freight" },
//     { name: "ASIA EUROPE CONTAINER SERVICE (AEC)", detail: "Songkhla to Pusan/Kaohsiung", type: "Ocean Freight" },
//     { name: "JIX/E TO JAKARTA, MANILA", detail: "Singapore, Jakarta, Manila", type: "Ocean Freight" },
//     { name: "FAR EAST EUROPE SERVICE (FEX/E)", detail: "Calling port via Singapore/Kaohsiung", type: "Ocean Freight" },
//     { name: "NEW MALAYSIA SERVICE (NMS/E)", detail: "Calling port via Singapore/Hongkong/Pusan/Incheon", type: "Ocean Freight" },
//     { name: "NEW HOCHIMINH SERVICE (NHS/E)", detail: "Songkhla to Ho Chi Minh City", type: "Ocean Freight" },
//     { name: "PACIFIC SOUTH-WEST SERVICE (PAS/E)", detail: "Singapore, Osaka, Tokyo", type: "Ocean Freight" },
//     { name: "KOREA MALAYSIA SERVICE (KMS/E)", detail: "Calling port via Singapore/Hongkong", type: "Ocean Freight" },
//     { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/E)", detail: "Singapore, Osaka, Tokyo", type: "Ocean Freight" },
//     { name: "NORTH CHINA INDONESIA SERVICE (NIS/E)", detail: "Singapore, Incheon", type: "Ocean Freight" }
//   ];

//   const displayedBangkok = showAllBangkok ? bangkokServices : bangkokServices.slice(0, 8);
//   const displayedSongkhla = showAllSongkhla ? songkhlaServices : songkhlaServices.slice(0, 8);

//   const serviceHighlights = [
//     { code: "RTA", name: "Round the Asia Service", desc: "Comprehensive coverage of major Asian ports" },
//     { code: "MSS", name: "Korea-Malacca Strait Service", desc: "Strategic connection between Korea and Malacca Strait" },
//     { code: "BKS", name: "Bangkok-Korea Service", desc: "Direct link between Thailand and Korea" },
//     { code: "JIX", name: "Japan-Indonesia Express", desc: "Fast connection between Japan and Indonesia" },
//     { code: "BHS", name: "Bangkok-Ho Chi Minh Service", desc: "Direct service between Thailand and Vietnam" },
//     { code: "KCK", name: "Korea-China Service", desc: "Efficient Korea-China trade route" },
//     { code: "KJK", name: "Korea-Japan Service", desc: "Regular service between Korea and Japan" },
//     { code: "PKS", name: "Port Klang Service", desc: "Dedicated service to Port Klang, Malaysia" },
//     { code: "IPS", name: "Indonesia-Pusan Service", desc: "Two sailings weekly for Jakarta and Manila" },
//     { code: "AME", name: "Asia-Middle East Service", desc: "Comprehensive Middle East coverage" },
//     { code: "AFS", name: "Australia Far-East Service", desc: "Enhanced Australia service since 1999" },
//     { code: "GAX", name: "Gulf Asia-Line Express", desc: "New service covering India, Pakistan, Middle-East (2001)" }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section - Clean & Professional */}
//       <section className="relative h-[45vh] md:h-[50vh] min-h-[350px] overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/images/ocean.PNG"
//             alt="Intra-Asia Shipping"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#041367]/90 via-[#041367]/70 to-[#041367]/40" />
//           <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
//         </div>
        
//         <div className="relative h-full flex items-center">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="max-w-3xl"
//             >
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
//                 <span className="text-white/70 text-sm tracking-wider">Intra-Asia Trade</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//                 Intra-Asia
//                 <span className="text-white/90 block text-2xl md:text-3xl mt-1">Shipping Services</span>
//               </h1>
//               <p className="text-white/80 text-base md:text-lg max-w-2xl">
//                 Connecting major ports across Asia with reliable, frequent, and competitive shipping solutions
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section ref={sectionRef} className="py-16 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp}
//             >
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
//                 <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Overview</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Regional <span className="text-[#041367]">Shipping Excellence</span>
//               </h2>
//               <div className="space-y-4 text-gray-600 leading-relaxed">
//                 <p>
//                   As one of the global-leading shipping companies, <span className="font-semibold text-gray-800">Hanjin Shipping</span> has provided 
//                   its customers with the most competitive <span className="font-semibold text-gray-800">Intra-Asia service</span> as well as 
//                   America and Europe services.
//                 </p>
//                 <p>
//                   <span className="font-semibold text-gray-800">Intra-Asia Trade</span> covers all of the major ports in Asia, playing a 
//                   significant role in expanding our service network in rising markets with steady volume increase.
//                 </p>
//                 <div className="bg-[#041367]/5 rounded-lg p-4 border-l-4 border-[#041367]">
//                   <p className="text-sm text-gray-700">
//                     <span className="font-semibold">Schedule Loading At:</span> Bangkok / Laemchabang | Songkhla
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp}
//               className="grid grid-cols-2 gap-4"
//             >
//               {[
//                 { value: "50+", label: "Ports Covered", icon: <Anchor className="w-6 h-6" /> },
//                 { value: "Weekly", label: "Sailings", icon: <Calendar className="w-6 h-6" /> },
//                 { value: "12+", label: "Service Routes", icon: <Route className="w-6 h-6" /> },
//                 { value: "24/7", label: "Operations", icon: <Clock className="w-6 h-6" /> }
//               ].map((stat, idx) => (
//                 <div key={idx} className="bg-gray-50 rounded-xl p-5 text-center hover:shadow-md transition-all">
//                   <div className="w-12 h-12 bg-[#041367]/10 rounded-xl flex items-center justify-center mx-auto mb-3 text-[#041367]">
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
//                   <div className="text-sm text-gray-500">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Service Network Section */}
//      {/* Service Network Section */}
// <section className="py-16 md:py-20 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6">
//     <motion.div
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={fadeInUp}
//       className="text-center mb-12"
//     >
//       <div className="inline-flex items-center gap-2 mb-3 bg-[#041367]/10 px-4 py-1.5 rounded-full">
//         <Globe className="w-4 h-4 text-[#041367]" />
//         <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Service Network</span>
//       </div>
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//         Comprehensive <span className="text-[#041367]">Service Routes</span>
//       </h2>
//       <div className="w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
//       <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm">
//         Hanjin Shipping has a wide range of service network greatly contributed to the enhancement of Intra-Asia trade, 
//         along with another interport service provided by ocean-going lanes
//       </p>
//     </motion.div>

//     {/* All Service Routes - Cards with Right & Bottom Border */}
//     {/* All Service Routes - Cards with Right & Bottom Border using pseudo-elements */}
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
//   {[
//     { code: "RTA", name: "Round the Asia Service", desc: "Comprehensive coverage of major Asian ports" },
//     { code: "MSS", name: "Korea-Malacca Strait Service", desc: "Strategic connection between Korea and Malacca Strait" },
//     { code: "BKS", name: "Bangkok-Korea Service", desc: "Direct link between Thailand and Korea" },
//     { code: "JIX", name: "Japan-Indonesia Express", desc: "Fast connection between Japan and Indonesia" },
//     { code: "BHS", name: "Bangkok-Ho Chi Minh Service", desc: "Direct service between Thailand and Vietnam" },
//     { code: "KCK", name: "Korea-China Service", desc: "Efficient Korea-China trade route" },
//     { code: "KJK", name: "Korea-Japan Service", desc: "Regular service between Korea and Japan" },
//     { code: "PKS", name: "Port Klang Service", desc: "Dedicated service to Port Klang, Malaysia" },
//     { code: "IPS", name: "Indonesia-Pusan Service", desc: "Two sailings weekly for Jakarta and Manila" },
//     { code: "AME", name: "Asia-Middle East Service", desc: "Comprehensive Middle East coverage" },
//     { code: "AFS", name: "Australia Far-East Service", desc: "Enhanced Australia service since 1999" },
//     { code: "GAX", name: "Gulf Asia-Line Express", desc: "New service covering India, Pakistan, Middle-East (2001)" }
//   ].map((service, idx) => (
//     <motion.div
//       key={idx}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={fadeInUp}
//       transition={{ delay: idx * 0.03 }}
//       whileHover={{ y: -4 }}
//       className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer text-center relative"
//       style={{
//         borderRight: '2px solid rgba(4, 19, 103, 0.1)',
//         borderBottom: '2px solid rgba(4, 19, 103, 0.1)',
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.borderRightColor = '#041367';
//         e.currentTarget.style.borderBottomColor = '#041367';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.borderRightColor = 'rgba(4, 19, 103, 0.1)';
//         e.currentTarget.style.borderBottomColor = 'rgba(4, 19, 103, 0.1)';
//       }}
//     >
//       <div className="p-5">
//         {/* Code Badge - Centered */}
//         <div className="w-14 h-14 bg-[#041367]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#041367] transition-colors duration-300">
//           <span className="text-[#041367] group-hover:text-white font-bold text-base transition-colors duration-300">
//             {service.code}
//           </span>
//         </div>
        
//         {/* Title */}
//         <h3 className="text-gray-800 font-semibold text-sm mb-2 group-hover:text-[#041367] transition-colors">
//           {service.name}
//         </h3>
        
//         {/* Description */}
//         <p className="text-gray-500 text-xs leading-relaxed">
//           {service.desc}
//         </p>
//       </div>
//     </motion.div>
//   ))}
// </div>

//     {/* IPS Special Highlight Box */}
//     <motion.div
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={fadeInUp}
//       className="bg-gradient-to-r from-[#041367] to-[#041367]/90 rounded-xl p-5 mb-8 text-white"
//     >
//       <div className="flex items-start gap-3">
//         <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//           <Zap className="w-5 h-5" />
//         </div>
//         <div>
//           <h4 className="font-bold text-sm mb-1">IPS (Indonesia-Pusan Service) Highlight</h4>
//           <p className="text-white/80 text-xs leading-relaxed">
//             Out of these various kinds of service, IPS has enabled us to make 
//             <span className="font-semibold text-white"> two sailings a week for Jakarta and Manila</span> with the 
//             fastest transit time since the beginning of 2000.
//           </p>
//         </div>
//       </div>
//     </motion.div>

//     {/* Special Highlights - Australia & GAX */}
//     <div className="grid md:grid-cols-2 gap-5 mb-12">
//       <motion.div
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={fadeInUp}
//         className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border-l-4 border-l-[#041367]"
//       >
//         <div className="flex items-center gap-2 mb-2">
//           <div className="w-8 h-8 bg-[#041367]/10 rounded-lg flex items-center justify-center">
//             <Rocket className="w-4 h-4 text-[#041367]" />
//           </div>
//           <h3 className="font-bold text-gray-800 text-sm">Australia Service Enhancement</h3>
//         </div>
//         <p className="text-gray-600 text-xs leading-relaxed">
//           We have positively built up Australia service by adding a second lane called 
//           <span className="font-semibold text-gray-800"> AFS (Australia Far-East Service)</span> since 1999, 
//           while the former lane AUS still serving from Singapore to Australia.
//         </p>
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={fadeInUp}
//         className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border-l-4 border-l-[#041367]"
//       >
//         <div className="flex items-center gap-2 mb-2">
//           <div className="w-8 h-8 bg-[#041367]/10 rounded-lg flex items-center justify-center">
//             <Zap className="w-4 h-4 text-[#041367]" />
//           </div>
//           <h3 className="font-bold text-gray-800 text-sm">New GAX Service (2001)</h3>
//         </div>
//         <p className="text-gray-600 text-xs leading-relaxed">
//           <span className="font-semibold text-gray-800">GAX (Gulf Asia-Line Express)</span> - A new service covering Singapore, India, 
//           Pakistan, and Middle-East Asia, designed to offer customers one-step developed Middle-East & South-West service 
//           by making more direct calls.
//         </p>
//       </motion.div>
//     </div>


//           {/* Bangkok/Laemchabang Services - Compact Table */}
//           <div className="mb-10">
//             <div className="flex items-center gap-2 mb-5">
//               <Anchor className="w-5 h-5 text-[#041367]" />
//               <h2 className="text-xl font-bold text-gray-900">Loading at Bangkok / Laemchabang</h2>
//             </div>
            
//            <div className="overflow-x-auto">
//   <table className="w-full text-sm">
//     <thead>
//       <tr className="bg-[#041367] text-white">
//         <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
//         <th className="text-left p-3 font-semibold">DETAIL</th>
//         <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
//       </tr>
//     </thead>
//     <tbody>
//       {displayedBangkok.map((service, idx) => (
//         <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
//           <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
//           <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
//           <td className="p-3">
//             <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
//               service.type === 'Feeder Service' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
//             }`}>
//               {service.type}
//             </span>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
            
//             {bangkokServices.length > 8 && (
//               <button
//                 onClick={() => setShowAllBangkok(!showAllBangkok)}
//                 className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto"
//               >
//                 {showAllBangkok ? 'Show Less' : `Show All (${bangkokServices.length} services)`}
//                 <ChevronDown className={`w-4 h-4 transition-transform ${showAllBangkok ? 'rotate-180' : ''}`} />
//               </button>
//             )}
//           </div>

//           {/* Songkhla Services - Compact Table */}
//           <div>
//             <div className="flex items-center gap-2 mb-5">
//               <MapPin className="w-5 h-5 text-[#041367]" />
//               <h2 className="text-xl font-bold text-gray-900">Loading at Songkhla</h2>
//             </div>
            
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">
//                 <thead>
//                   <tr className="bg-[#041367] text-white">
//                     <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
//                     <th className="text-left p-3 font-semibold">DETAIL</th>
//                     <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
//                    </tr>
//                 </thead>
//                 <tbody>
//                   {displayedSongkhla.map((service, idx) => (
//                     <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
//                       <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
//                       <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
//                       <td className="p-3">
//                         <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
//                           service.type === 'Feeder Service' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
//                         }`}>
//                           {service.type}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             {songkhlaServices.length > 8 && (
//               <button
//                 onClick={() => setShowAllSongkhla(!showAllSongkhla)}
//                 className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto"
//               >
//                 {showAllSongkhla ? 'Show Less' : `Show All (${songkhlaServices.length} services)`}
//                 <ChevronDown className={`w-4 h-4 transition-transform ${showAllSongkhla ? 'rotate-180' : ''}`} />
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Feeder Network Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp}
//             >
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
//                 <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Feeder Network</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Extensive <span className="text-[#041367]">Feeder Network</span>
//               </h2>
//               <p className="text-gray-600 mb-4 leading-relaxed">
//                 We have expanded our feeder network from all primary Asian hub ports, making it possible 
//                 to reach most destinations in <span className="font-semibold">North, East, and West Asian countries</span>.
//               </p>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 <span className="font-semibold">IPS (Indonesia-Pusan Service)</span> enables 
//                 <span className="font-semibold"> two sailings weekly</span> for Jakarta and Manila with fastest transit time.
//               </p>
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <p className="text-sm font-semibold text-gray-700 mb-2">Key Feeder Hubs:</p>
//                 <div className="flex flex-wrap gap-2">
//                   {["Singapore", "Busan", "Hong Kong", "Shanghai", "Port Klang", "Jakarta", "Manila", "Kaohsiung"].map((hub, idx) => (
//                     <span key={idx} className="px-2.5 py-1 bg-white rounded-lg text-xs text-gray-600 shadow-sm">
//                       {hub}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//               variants={fadeInUp}
//               className="relative h-[280px] rounded-xl overflow-hidden shadow-xl"
//             >
//               <Image
//                 src="/images/feeder.png"
//                 alt="Feeder Network"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Commitment Section */}
//       <section className="py-16 bg-gradient-to-r from-[#041367] to-[#041367]/95">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
//           <motion.div
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             variants={fadeInUp}
//           >
//             <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full">
//               <Shield className="w-4 h-4 text-white" />
//               <span className="text-white/90 text-xs uppercase tracking-wider">Our Commitment</span>
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               Worldwide Leading Shipping Company
//             </h2>
//             <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-6">
//               Hanjin Shipping, on the basis of frontiership to upgrade all kinds of trade, will keep trying our best 
//               to fully meet customer's requirements and become a worldwide leading shipping company alike.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <Link href="/contact">
//                 <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#041367] rounded-lg font-semibold text-sm hover:shadow-xl transition-all">
//                   Contact Us
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </Link>
//               <Link href="/request-quote">
//                 <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all">
//                   Request a Quote
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


import IntraAsiaClient from './intra-asiaclient';

// 🔹 SEO metadata for Intra-Asia Services - Hanjin Shipping Thailand
export const metadata = {
  title: "Intra-Asia Shipping Services",
  description:
    "Comprehensive Intra-Asia ocean freight services connecting major ports across Asia. Weekly sailings from Bangkok/Laemchabang and Songkhla to Korea, Japan, China, Indonesia, Middle East, and Europe.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Intra-Asia Shipping",
    "Asia Ocean Freight",
    "Container Shipping Asia",
    "Bangkok Shipping Services",
    "Laemchabang Port",
    "Songkhla Shipping",
    "Korea Shipping Route",
    "Japan Shipping Route",
    "China Shipping Route",
    "Indonesia Shipping",
    "Middle East Shipping",
    "Asia Europe Service",
    "Regional Container Service",
    "Round the Asia Service",
    "Bangkok Korea Service",
    "Japan Indonesia Express",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/services/intra-asia",
  },
  openGraph: {
    title: "Intra-Asia Shipping Services | Hanjin Shipping Thailand",
    description:
      "Comprehensive Intra-Asia ocean freight services connecting major ports across Asia. Weekly sailings from Bangkok/Laemchabang and Songkhla.",
    url: "https://hanjinthailand.com/services/intra-asia",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-intra-asia.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Intra-Asia Shipping Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intra-Asia Shipping Services | Hanjin Shipping Thailand",
    description:
      "Weekly ocean freight services from Thailand to Korea, Japan, China, Indonesia, Middle East, and Europe.",
    images: ["/og-intra-asia.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <IntraAsiaClient />;
}