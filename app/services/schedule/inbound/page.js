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
//   Calendar,
//   ArrowRight,
//   ChevronDown
// } from "lucide-react";

// export default function InboundSchedulePage() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
//   const [activeRegion, setActiveRegion] = useState("intraasia");
  
//   const [showAllIntra, setShowAllIntra] = useState(false);
//   const [showAllAmerica, setShowAllAmerica] = useState(false);
//   const [showAllEurope, setShowAllEurope] = useState(false);

//   // ==================== INTRA-ASIA INBOUND SERVICES ====================
//   const intraAsiaServices = [
//     { name: "AUSTRALIA SERVICE (AUS)", detail: "Brisbane - Sydney - Melbourne - Port Klang - Singapore - Bangkok" },
//     { name: "FAR EAST EUROPE EXPRESS SERVICE (FEX/E)", detail: "Far East Europe Service (FEX)" },
//     { name: "ASIA EUROPE CONTAINER SERVICE (AEC)", detail: "Jeddah - Jebel Ali - Khor Fakkan - Singapore - Bangkok" },
//     { name: "BANGKOK HONGKONG PUSAN SERVICE (BHS) (LOOP 1)", detail: "Pusan - Hongkong - Ho Chi Minh (Vietnam) - Bangkok (Unithai) - Laem Chabang" },
//     { name: "BANGKOK KOREA SERVICE (BKS) (LOOP 2)", detail: "Pusan - Hongkong - Bangkok - Laem Chabang" },
//     { name: "THAILAND TAIWAN SERVICE (ATL)", detail: "Kaohsiung direct to Bangkok/Laem Chabang" },
//     { name: "THAILAND SINGAPORE SERVICE (TSS)", detail: "Singapore direct to Bangkok/Laem Chabang" },
//     { name: "SUPER GALEX SERVICE (GAX/E)", detail: "Jebel Ali - Khor Fakkan - Karachi - Mundra - Nhava Sheva - Cochin - Tuticorin - Port Klang - Singapore - Bangkok - Laem Chabang" },
//     { name: "WEST MALAYSIA THAILAND SERVICE (AMT)", detail: "Port Klang direct service to Laem Chabang" },
//     { name: "SUPER GALEX SERVICE (GAX/W)", detail: "Shanghai - Qingdao - Xingang - Pusan - Chiwan - Singapore - Bangkok - Laem Chabang" },
//     { name: "JAPAN INDONESIA EXPRESS (JIX)", detail: "Osaka - Tokyo - Pusan - Manila - Singapore - Bangkok" },
//     { name: "KOREA INDONESIA SERVICE", detail: "Jakarta - Surabaya - Singapore - Bangkok - Laem Chabang" },
//     { name: "SINGAPORE KARACHI SERVICE", detail: "Karachi - Colombo - Singapore - Bangkok - Laem Chabang" },
//     { name: "SOUTH CHINA MIDDLE EAST EXPRESS", detail: "Dubai (Port Rashid) - Bandar Abbas - Singapore - Bangkok - Laem Chabang" },
//     { name: "NEW ASIA MEDITERRANEAN EXPRESS", detail: "Dubai (Port Rashid) - Bandar Abbas - Singapore - Bangkok - Laem Chabang" },
//     { name: "NEW THAILAND SERVICE (NTS)", detail: "Shanghai - Pusan - Hongkong - Bangkok (Unithai) - Laem Chabang" },
//     { name: "NORTH-CHINA INDONESIA EXPRESS (NIX)", detail: "Shanghai - Xingang - Qingdao - Singapore - Bangkok - Laem Chabang" }
//   ];

//   // ==================== AMERICA INBOUND SERVICES ====================
//   const americaServices = [
//     { name: "U.S.A ALL WATER YANGMING (AWY)", detail: "Charleston - Savannah - Wilmington - Montreal/Toronto - New York - Bangkok" },
//     { name: "U.S.A ALL WATER HANJIN LANE (AWH)", detail: "Charleston - Savannah - Wilmington - Montreal/Toronto - New York - Bangkok" },
//     { name: "PACIFIC SOUTH EXPRESS (PSX)", detail: "Montreal/Toronto - Long Beach - Oakland - Pusan - Kaohsiung - Bangkok - Lamchabang" },
//     { name: "PACIFIC NORTH WEST EXPRESS (PNX)", detail: "Montreal/Toronto - Chicago - Seattle - Portland - Vancouver - Kaohsiung - Lamchabang" },
//     { name: "PACIFIC TAIWAN EXPRESS SERVICE (YPS)", detail: "Los Angeles - Oakland - Kaohsiung - Lamchanbang - Thailand" },
//     { name: "PS-PENDULUM SERVICE (PDS)", detail: "Long Beach - Oakland - Kaohsiung - Bangkok - Thailand" },
//     { name: "U.S.A CHINA AMERICA EXPRESS (CAX)", detail: "Long Beach - Oakland - Pusan - Bangkok" },
//     { name: "PNW NORTH EXPRESS (PNN)", detail: "Seattle - Portland - Vancouver - Pusan - Bangkok - Lamchabang" },
//     { name: "PNW SOUTH EXPRESS (PNS)", detail: "Vancouver - Seattle - Hongkong - Bangkok - Lamchabang" },
//     { name: "PACIFIC TAIWAN EXPRESS SERVICE (YPS)", detail: "Tacoma - Portland - Kaohsiung - Lamchanbang - Thailand" },
//     { name: "PACIFIC SOUTH-WEST SERVICE (PAS)", detail: "Long Beach - Oakland - Osaka - Kaohsiung - Bangkok - Thailand" },
//     { name: "U.S.A ALL WATER GULF SERVICE (AWG)", detail: "Savannah - Charleston - Norfolk - Pusan - Bangkok - Laem Chabang" },
//     { name: "INDIA NORTH AMERICA SERVICE (INX/E)", detail: "Nhava Sheva - Pipavav - New York - Norfolk - Savannah - Port Said - Jeddah - Colombo - Singapore - Bangkok - Laem Chabang" },
//     { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/W)", detail: "Long Beach - Oakland - Osaka - Kaohsiung - Singapore - Bangkok - Laem Chabang" },
//     { name: "NORTH SOUTH AMERICA ASIA EXPRESS (NSX/E)", detail: "Montevideo - Buenos Aires - Santos - Singapore - Bangkok - Laem Chabang" }
//   ];

//   // ==================== EUROPE INBOUND SERVICES ====================
//   const europeServices = [
//     { name: "PS-PENDULUM SERVICE (PDS)", detail: "Rotterdam (1) - Hamburg - Felixstowe - Rotterdam (2) - Le Havre - Singapore - Bangkok" },
//     { name: "FAR EAST EUROPE SERVICE (FEX)", detail: "Hamburg - Rotterdam - Felixstowe - Singapore - Bangkok" },
//     { name: "JAPAN EUROPE SERVICE (JES)", detail: "Rotterdam - Felixstowe - Hamburg - Le Harve - Malta - Singapore - Bangkok" },
//     { name: "MEDITERRANEAN EXPRESS (MEX)", detail: "Genoa - Valencia - La Gioia Tauro - Jeddah - Khor Fakkan - Singapore - Bangkok" },
//     { name: "ASIA EUROPE EXPRESS (AEX) VIA PORT KLANG", detail: "Hamburg - Rotterdam - Felixstowe - Le Havre - Port Klang - Laem Chabang" },
//     { name: "FINANCIAL SCP (SCE)", detail: "Rotterdam - Felixstowe - Hamburg - Antwerp - Singapore - Bangkok" },
//     { name: "NORTH CHINA EXPRESS SERVICE (NCX)", detail: "Rotterdam, Felixstowe, Hamburg, Antwerp, Singapore, Bangkok, Laem Chabang" },
//     { name: "CHINA MEDITERRANEAN EXPRESS SERVICE (CMX)", detail: "Port Said → Napoli → La Spezia → Barcelona → Port Klang → Kaohsiung → Laem Chabang (ESCO)" },
//     { name: "SOUTH-CHINA EXPRESS (SCX)", detail: "Hamburg - Rotterdam - Felixstowe - Antwerp - Singapore - Bangkok - Laem Chabang" },
//     { name: "GREECE AND ISRAEL EXPRESS (GIX)", detail: "Ashdod - Piraeus - Thessaloniki - Singapore - Bangkok - Laem Chabang" },
//     { name: "MED-ASIA-AMERICA PEN SVC (MAP)", detail: "Port Said → Napoli → La Spezia → Barcelona → Port Klang → Singapore → Laem Chabang (ESCO)" }
//   ];

//   const intraDisplay = showAllIntra ? intraAsiaServices : intraAsiaServices.slice(0, 10);
//   const americaDisplay = showAllAmerica ? americaServices : americaServices.slice(0, 10);
//   const europeDisplay = showAllEurope ? europeServices : europeServices.slice(0, 10);

//   const regions = [
//     { id: "intraasia", name: "Intra-Asia", icon: <Globe className="w-5 h-5" />  },
//     { id: "america", name: "America", icon: <MapPin className="w-5 h-5" />  },
//     { id: "europe", name: "Europe", icon: <Ship className="w-5 h-5" /> }
//   ];

//   const getServiceCount = () => {
//     if (activeRegion === "intraasia") return intraAsiaServices.length;
//     if (activeRegion === "america") return americaServices.length;
//     return europeServices.length;
//   };

//   // Helper function to render table
//   const renderTable = (title, icon, data, showAll, setShowAll, colorClass = "bg-blue-100 text-blue-700") => (
//     <div>
//       <div className="flex items-center gap-2 mb-4">
//         {icon}
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead>
//             <tr className="bg-[#041367] text-white">
//               <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
//               <th className="text-left p-3 font-semibold rounded-tr-lg">DETAIL</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((service, idx) => (
//               <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
//                 <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
//                 <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {data.length > 10 && (
//         <button onClick={() => setShowAll(!showAll)} className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto">
//           {showAll ? 'Show Less' : `Show All (${data.length} services)`}
//           <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
//         </button>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section */}
//       <section className="relative h-[40vh] md:h-[45vh] min-h-[300px] overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/images/outbound.jpg"
//             alt="Vessel Schedule"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
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
//                 <span className="text-white/70 text-sm tracking-wider">Vessel Schedule</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//                 Inbound
//                 <span className="text-white/90 block text-2xl md:text-3xl mt-1">Vessel Schedule</span>
//               </h1>
//               <p className="text-white/80 text-base md:text-lg max-w-2xl">
//                 View our comprehensive inbound vessel schedules for Intra-Asia, America, and Europe services
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Region Tabs - Sticky below navbar */}
//       <div className="sticky top-[80px] z-40 bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex flex-wrap justify-center gap-3 py-4">
//             {regions.map((region) => (
//               <button
//                 key={region.id}
//                 onClick={() => setActiveRegion(region.id)}
//                 className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
//                   activeRegion === region.id
//                     ? "bg-[#041367] text-white shadow-md"
//                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {region.icon}
//                 {region.name}
               
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Service Summary Cards */}
//       <section className="py-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
//               <div className="text-3xl font-bold text-[#041367]">{getServiceCount()}</div>
//               <div className="text-sm text-gray-600 mt-1">Total Services</div>
//             </div>
//             <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
//               <div className="text-3xl font-bold text-[#041367]">{activeRegion === "intraasia" ? intraAsiaServices.length : activeRegion === "america" ? americaServices.length : europeServices.length}</div>
//               <div className="text-sm text-gray-600 mt-1">Active Routes</div>
//             </div>
//             <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
//               <div className="text-3xl font-bold text-[#041367]">Weekly</div>
//               <div className="text-sm text-gray-600 mt-1">Sailing Frequency</div>
//             </div>
//             <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
//               <div className="text-3xl font-bold text-[#041367]">24/7</div>
//               <div className="text-sm text-gray-600 mt-1">Tracking Available</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Intra-Asia Section */}
//       {activeRegion === "intraasia" && (
//         <section className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="flex items-center gap-2 mb-6">
//               <Globe className="w-7 h-7 text-[#041367]" />
//               <h2 className="text-2xl font-bold text-gray-900">Intra-Asia Inbound Services</h2>
//             </div>
            
//             {renderTable(
//               "Inbound Services to Bangkok / Laemchabang",
//               <Anchor className="w-5 h-5 text-[#041367]" />,
//               intraDisplay,
//               showAllIntra,
//               setShowAllIntra,
//               "bg-blue-100 text-blue-700"
//             )}
//           </div>
//         </section>
//       )}

//       {/* America Section */}
//       {activeRegion === "america" && (
//         <section className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="flex items-center gap-2 mb-6">
//               <MapPin className="w-7 h-7 text-[#041367]" />
//               <h2 className="text-2xl font-bold text-gray-900">America Inbound Services</h2>
//             </div>
            
//             {renderTable(
//               "Inbound Services to Bangkok / Laemchabang",
//               <Anchor className="w-5 h-5 text-[#041367]" />,
//               americaDisplay,
//               showAllAmerica,
//               setShowAllAmerica,
//               "bg-emerald-100 text-emerald-700"
//             )}
//           </div>
//         </section>
//       )}

//       {/* Europe Section */}
//       {activeRegion === "europe" && (
//         <section className="py-12 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="flex items-center gap-2 mb-6">
//               <Ship className="w-7 h-7 text-[#041367]" />
//               <h2 className="text-2xl font-bold text-gray-900">Europe Inbound Services</h2>
//             </div>
            
//             {renderTable(
//               "Inbound Services to Bangkok / Laemchabang",
//               <Anchor className="w-5 h-5 text-[#041367]" />,
//               europeDisplay,
//               showAllEurope,
//               setShowAllEurope,
//               "bg-purple-100 text-purple-700"
//             )}
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       <section className="relative py-12 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/images/global.avif"
//             alt="Shipping Background"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/75" />
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
//           <div className="inline-flex items-center gap-2 mb-3 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full">
//             <Calendar className="w-4 h-4 text-white" />
//             <span className="text-white/90 text-xs uppercase tracking-wider">Need Assistance?</span>
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Plan Your Shipment Today</h2>
//           <p className="text-white/80 text-sm max-w-2xl mx-auto mb-5">
//             Contact our team for booking inquiries and schedule information
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <Link href="/contact">
//               <button className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#041367] rounded-lg font-semibold text-sm hover:shadow-xl transition-all">
//                 Contact Us
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </Link>
//             <Link href="/request-quote">
//               <button className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition-all">
//                 Request a Quote
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





import InboundScheduleClient from './inboundclient';

// 🔹 SEO metadata for Inbound Vessel Schedule - Hanjin Shipping Thailand
export const metadata = {
  title: "Inbound Vessel Schedule",
  description:
    "View Hanjin Shipping Thailand's comprehensive inbound vessel schedules. Weekly services from Intra-Asia, America, and Europe to Bangkok/Laemchabang. Plan your cargo shipments with our reliable inbound routes.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Inbound Vessel Schedule",
    "Inbound Schedule",
    "Vessel Schedule Thailand",
    "Bangkok Inbound Schedule",
    "Laemchabang Inbound Schedule",
    "Intra-Asia Inbound Services",
    "America Inbound Services", 
    "Europe Inbound Services",
    "Container Schedule Thailand",
    "Shipping Schedule Bangkok",
    "Cargo Arrival Schedule",
    "Weekly Vessel Schedule",
    "Inbound Container Schedule",
    "Port Schedule Thailand",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/services/schedule/inbound",
  },
  openGraph: {
    title: "Inbound Vessel Schedule | Hanjin Shipping Thailand",
    description:
      "View Hanjin Shipping Thailand's comprehensive inbound vessel schedules. Weekly services from Intra-Asia, America, and Europe to Bangkok/Laemchabang.",
    url: "https://hanjinthailand.com/services/schedule/inbound",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-inbound-schedule.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Inbound Vessel Schedule",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inbound Vessel Schedule | Hanjin Shipping Thailand",
    description:
      "Weekly inbound vessel services from Intra-Asia, America, and Europe to Bangkok/Laemchabang.",
    images: ["/og-inbound-schedule.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return <InboundScheduleClient />;
}