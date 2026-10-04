"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Ship, 
  Globe, 
  MapPin, 
  Anchor, 
  Calendar,
  ArrowRight,
  ChevronDown
} from "lucide-react";

export default function OutboundSchedulePage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeRegion, setActiveRegion] = useState("intraasia");
  
  const [showAllIntraBangkok, setShowAllIntraBangkok] = useState(false);
  const [showAllIntraSongkhla, setShowAllIntraSongkhla] = useState(false);
  const [showAllAmericaBangkok, setShowAllAmericaBangkok] = useState(false);
  const [showAllAmericaSongkhla, setShowAllAmericaSongkhla] = useState(false);
  const [showAllEuropeBangkok, setShowAllEuropeBangkok] = useState(false);
  const [showAllEuropeSongkhla, setShowAllEuropeSongkhla] = useState(false);

  // ==================== INTRA-ASIA SERVICES ====================
  const intraAsiaBangkok = [
    { name: "AUSTRALIA SINGAPORE EXPRESS SERVICE (AUS)", detail: "Weekly service to Brisbane / Sydney / Melbourne T/S at SIN", type: "Australia Service" },
    { name: "FAR EAST EUROPE EXPRESS SERVICE (FEX/E)", detail: "Laem Chabang (LMH), Singapore, Xingang", type: "Europe Service" },
    { name: "BANGKOK KOREA SERVICE (BKS) (LOOP 2)", detail: "Bangkok, Laem Chabang, Hongkong, Pusan", type: "Korea Service" },
    { name: "THAILAND TAIWAN SERVICE (ATL)", detail: "Bangkok/Laem Chabang direct service to Kaohsiung", type: "Taiwan Service" },
    { name: "JAPAN INDONESIA EXPRESS (JIX)", detail: "Thailand to Jakarta, Manila (via Singapore)", type: "Japan-Indonesia Service" },
    { name: "SUPER GALEX (GAX/W)", detail: "Bangkok/Laem Chabang to Singapore, Jebel Ali, Khor Fakkan, Karachi", type: "Middle East Service" },
    { name: "SUPER GALEX (GAX/E)", detail: "Bangkok/Laem Chabang to Singapore, Shanghai, Qingdao, Xingang", type: "China Service" },
    { name: "JAPAN EUROPE SERVICE (JES)", detail: "Singapore, Kobe, Nagoya, Tokyo", type: "Japan-Europe Service" },
    { name: "NORTH CHINA EXPRESS SERVICE (NCX/E)", detail: "Singapore, Shanghai, Dalian, Qingdao", type: "China Service" },
    { name: "PACIFIC SOUTH-WEST SERVICE (PAS/E)", detail: "Bangkok, Laem Chabang to Osaka, Tokyo", type: "Japan Service" },
    { name: "INDIA NORTH AMERICA SERVICE (INX/W)", detail: "Bangkok/Laem Chabang/Singapore/Colombo/Mundra/Nhava Sheva/Suez/Port Said", type: "India Service" },
    { name: "NEW THAILAND SERVICE (NTS)", detail: "Bangkok-Unithai, Laem Chabang, Hongkong, Shanghai, Pusan, Kwangyang", type: "Thailand Service" },
    { name: "GREECE AND ISRAEL SERVICE (GIX/W)", detail: "Bangkok/Laem Chabang to Singapore, Ashdod, Piraeus, Thessaloniki", type: "Mediterranean Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/E)", detail: "Bangkok, Laem Chabang to Osaka, Tokyo", type: "Japan Service" },
    { name: "MIDDLE-EAST SERVICE (MES/W)", detail: "Bangkok, Laem Chabang to Karachi, Khor Fakkan", type: "Middle East Service" },
    { name: "FEEDER TRANSHIP SINGAPORE", detail: "Bangkok/Laem Chabang to Singapore", type: "Feeder Service" },
    { name: "FEEDER TRANSHIP JAKARTA", detail: "Bangkok/Laem Chabang to Singapore/Jakarta", type: "Feeder Service" }
  ];

  const intraAsiaSongkhla = [
    { name: "ASIA EUROPE CONTAINER SERVICE (AEC/W)", detail: "Songkhla to Khor Fakkan, Jebel Ali, Jeddah", type: "Europe Service" },
    { name: "AUSTRALIA SERVICE (LOOP A)", detail: "Songkhla to Singapore, Brisbane, Sydney, Melbourne", type: "Australia Service" },
    { name: "KOREA INDONESIA SERVICE", detail: "Songkhla to Singapore, Hongkong, Incheon, Pusan, Keelung", type: "Korea-Indonesia Service" },
    { name: "JAPAN EUROPE SERVICE (JES)", detail: "Songkhla to Kobe, Nagoya, Tokyo", type: "Japan-Europe Service" },
    { name: "GULF - ASIA EXPRESS (GAX/W)", detail: "Songkhla to Singapore, Nhava Sheva, Jebel Ali, Khor Fakkan, Karachi", type: "Middle East Service" },
    { name: "SUPER GALEX SERVICE (GAX/E)", detail: "Songkhla to Singapore, Hongkong, Xingang, Qingdao, Shanghai", type: "China Service" },
    { name: "ASIA EUROPE CONTAINER SERVICE (AEC)", detail: "Songkhla to Pusan/Kaohsiung", type: "Europe Service" },
    { name: "JIX/E TO JAKARTA, MANILA", detail: "Singapore, Jakarta, Manila", type: "Indonesia-Philippines Service" },
    { name: "FAR EAST EUROPE SERVICE (FEX/E)", detail: "Calling port via Singapore/Kaohsiung", type: "Europe Service" },
    { name: "SUPER GALEX SERVICE (GAX/E)", detail: "Songkhla to Singapore via Pusan", type: "China Service" },
    { name: "JIX/E TO PUSAN", detail: "Singapore, Pusan", type: "Korea Service" },
    { name: "NEW MALAYSIA SERVICE (NMS/E)", detail: "Calling port via Singapore/Hongkong/Pusan/Incheon", type: "Malaysia Service" },
    { name: "NEW HOCHIMINH SERVICE (NHS/E)", detail: "Songkhla to Ho Chi Minh City", type: "Vietnam Service" },
    { name: "PACIFIC SOUTH-WEST SERVICE (PAS/E)", detail: "Singapore, Osaka, Tokyo", type: "Japan Service" },
    { name: "KOREA MALAYSIA SERVICE (KMS/E)", detail: "Calling port via Singapore/Hongkong", type: "Korea-Malaysia Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/E)", detail: "Singapore, Osaka, Tokyo", type: "Japan Service" },
    { name: "NORTH CHINA INDONESIA SERVICE (NIS/E)", detail: "Singapore, Incheon", type: "China-Indonesia Service" }
  ];

  // ==================== AMERICA SERVICES ====================
  const americaBangkok = [
    { name: "U.S.A ALL WATER HANJIN LANE (AWH)", detail: "Calling port - New York / Norfolk / Savannah", type: "All Water Service" },
    { name: "U.S.A ALL WATER YANG MING (AWY)", detail: "Calling port - Savannah / Wilmington / New York (ETA/KRPUS)", type: "All Water Service" },
    { name: "U.S.A ALL WATER YANG MING (AWY)", detail: "Calling port - Savannah / Wilmington / New York (ETA/TWKHH)", type: "All Water Service" },
    { name: "PENDULUM EXPRESS (PSX)", detail: "Calling port - Long Beach / Oakland / Seattle", type: "Express Service" },
    { name: "PNW NORTH EXPRESS (PNN)", detail: "Calling port - Seattle / Portland / Vancouver", type: "PNW Service" },
    { name: "YANGMING PACIFIC NORTHWEST (YPN)", detail: "Calling port - Tacoma / Portland", type: "PNW Service" },
    { name: "WEST COAST MEXICO-GUATEMALA SERVICE (MGS)", detail: "Calling port - Long Beach / Manzanillo / Puerto Quetzal", type: "Mexico Service" },
    { name: "NEW SOUTH AMERICA ASIA EXPRESS (NSX)", detail: "Calling port - Buenos Aires, Montevideo, Santos", type: "South America Service" },
    { name: "PACIFIC SOUTH-WEST SERVICE (PAS)", detail: "Pacific Southwest trade lane service", type: "PSW Service" },
    { name: "INDIA NORTH AMERICA SERVICE (INX/W)", detail: "Bangkok/Laem Chabang/Singapore/New York/Norfolk/Savannah", type: "India Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP)", detail: "Calling port - Long Beach & Oakland", type: "PSW Service" }
  ];

  const americaSongkhla = [
    { name: "U.S.A ALL WATER HANJIN LANE (AWH)", detail: "Pusan, Manzanillo (Mexico), Manzanillo (Panama), Miami, Savannah, Norfolk, New York", type: "All Water Service" },
    { name: "U.S.A ALL WATER YANG MING (AWY)", detail: "Calling port - Savannah / Wilmington / New York", type: "All Water Service" },
    { name: "PENDULUM EXPRESS (PSX)", detail: "Calling port - Pusan / Long Beach / Oakland / Seattle", type: "Express Service" },
    { name: "WEST COAST MEXICO-GUATEMALA SERVICE (MGS)", detail: "Calling port - Long Beach / Manzanillo / Puerto Quetzal", type: "Mexico Service" },
    { name: "PNW NORTH EXPRESS (PNN)", detail: "Calling port - Pusan / Seattle / Vancouver / Portland", type: "PNW Service" },
    { name: "PNW SOUTH EXPRESS (PNS)", detail: "Calling port - Hongkong / Vancouver / Seattle", type: "PNW Service" },
    { name: "YANGMING PACIFIC NORTHWEST (YPN)", detail: "Calling port - Tacoma / Portland", type: "PNW Service" },
    { name: "PACIFIC SOUTH-WEST SERVICE (PAS)", detail: "Pacific Southwest trade lane service", type: "PSW Service" },
    { name: "INDIA NORTH AMERICA SERVICE (INX/W)", detail: "Bangkok/Laem Chabang/Singapore/New York/Norfolk/Savannah", type: "India Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP)", detail: "Calling port - Long Beach & Oakland", type: "PSW Service" }
  ];

  // ==================== EUROPE SERVICES ====================
  const europeBangkok = [
    { name: "ASIA-EUROPE EXPRESS (AEX/W)", detail: "Laem Chabang to Port Klang, Hamburg/Bremerhaven, Rotterdam/Antwerp, Felixstowe, Le Havre", type: "Express Service" },
    { name: "FAR EAST EUROPE EXPRESS SERVICE (FEX/W)", detail: "Bangkok/Laem Chabang to Singapore, Rotterdam/Antwerp, Hamburg/Bremerhaven, Felixstowe", type: "Express Service" },
    { name: "JAPAN EUROPE SERVICE (JES/W) VIA SINGAPORE", detail: "Connecting Japan to Europe via Singapore", type: "Japan Service" },
    { name: "NORTH CHINA EXPRESS SERVICE (NCX/W) VIA SINGAPORE", detail: "North China to Europe via Singapore", type: "China Service" },
    { name: "FINANCIAL SCP (SCE/W)", detail: "Financial service route", type: "Special Service" },
    { name: "MEDITERRANEAN EXPRESS (MEX W/B)", detail: "Thailand to Genoa, Fos Sur Mer, Valencia, Gioia Tauro", type: "Mediterranean Service" },
    { name: "CHINA MEDITERRANEAN EXPRESS (CMX W/B)", detail: "Thailand to Port Said, Napoli, La Spezia, Barcelona", type: "Mediterranean Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/W)", detail: "Thailand to Port Said, Napoli, La Spezia, Barcelona", type: "Mediterranean Service" }
  ];

  const europeSongkhla = [
    { name: "JAPAN EUROPE SERVICE (JES/W) VIA SINGAPORE", detail: "Songkhla to Rotterdam, Felixstowe, Hamburg, Antwerp", type: "Japan Service" },
    { name: "FAR EAST EUROPE SERVICE (FEX/W)", detail: "Songkhla to Singapore, Rotterdam/Antwerp, Hamburg/Bremerhaven, Felixstowe", type: "Express Service" },
    { name: "NORTH CHINA EXPRESS SERVICE (NCX/W) VIA SINGAPORE", detail: "Songkhla to Rotterdam, Felixstowe, Hamburg, Antwerp", type: "China Service" },
    { name: "FINANCIAL SCP (SCE/W)", detail: "Singapore, Rotterdam, Hamburg, Antwerp, Felixstowe", type: "Special Service" },
    { name: "MEDITERRANEAN EXPRESS (MEX/W)", detail: "Singapore, Genoa, Fos Sur Mer, Valencia, Gioia Tauro", type: "Mediterranean Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/W)", detail: "Singapore, Port Said, Napoli, La Spezia, Barcelona", type: "Mediterranean Service" }
  ];

  const intraBangkokDisplay = showAllIntraBangkok ? intraAsiaBangkok : intraAsiaBangkok.slice(0, 8);
  const intraSongkhlaDisplay = showAllIntraSongkhla ? intraAsiaSongkhla : intraAsiaSongkhla.slice(0, 8);
  const americaBangkokDisplay = showAllAmericaBangkok ? americaBangkok : americaBangkok.slice(0, 8);
  const americaSongkhlaDisplay = showAllAmericaSongkhla ? americaSongkhla : americaSongkhla.slice(0, 8);
  const europeBangkokDisplay = showAllEuropeBangkok ? europeBangkok : europeBangkok.slice(0, 6);
  const europeSongkhlaDisplay = showAllEuropeSongkhla ? europeSongkhla : europeSongkhla.slice(0, 6);

  const regions = [
    { id: "intraasia", name: "Intra-Asia", icon: <Globe className="w-5 h-5" /> },
    { id: "america", name: "America", icon: <MapPin className="w-5 h-5" /> },
    { id: "europe", name: "Europe", icon: <Ship className="w-5 h-5" /> }
  ];

  const getServiceCount = () => {
    if (activeRegion === "intraasia") {
      return { bangkok: intraAsiaBangkok.length, songkhla: intraAsiaSongkhla.length };
    } else if (activeRegion === "america") {
      return { bangkok: americaBangkok.length, songkhla: americaSongkhla.length };
    } else {
      return { bangkok: europeBangkok.length, songkhla: europeSongkhla.length };
    }
  };

  const serviceCount = getServiceCount();

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[45vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/outbound.jpg"
            alt="Vessel Schedule"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
                <span className="text-white/70 text-sm tracking-wider">Vessel Schedule</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Outbound
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">Vessel Schedule</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                View our comprehensive outbound vessel schedules for Intra-Asia, America, and Europe services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    {/* Region Tabs - Sticky below navbar */}
{/* Region Tabs - Sticky below navbar */}
<div className="sticky top-20 z-40 bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex flex-wrap justify-center gap-3 py-4">
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => setActiveRegion(region.id)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
            activeRegion === region.id
              ? "bg-[#041367] text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {region.icon}
          {region.name}
        </button>
      ))}
    </div>
  </div>
</div>

      {/* Service Summary Cards */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-[#041367]">{serviceCount.bangkok + serviceCount.songkhla}</div>
              <div className="text-sm text-gray-600 mt-1">Total Services</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-[#041367]">{serviceCount.bangkok}</div>
              <div className="text-sm text-gray-600 mt-1">Bangkok/Laemchabang</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-[#041367]">{serviceCount.songkhla}</div>
              <div className="text-sm text-gray-600 mt-1">Songkhla</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-[#041367]">Weekly</div>
              <div className="text-sm text-gray-600 mt-1">Sailing Frequency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intra-Asia Section */}
      {activeRegion === "intraasia" && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-5">
              <Globe className="w-7 h-7 text-[#041367]" />
              <h2 className="text-2xl font-bold text-gray-900">Intra-Asia Services</h2>
            </div>
            
            {/* Bangkok Table */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="w-5 h-5 text-[#041367]" />
                <h3 className="text-lg font-semibold text-gray-800">Loading at Bangkok / Laemchabang</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#041367] text-white">
                      <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
                      <th className="text-left p-3 font-semibold">DETAIL</th>
                      <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {intraBangkokDisplay.map((service, idx) => (
                      <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                        <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">
                            {service.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {intraAsiaBangkok.length > 8 && (
                <button onClick={() => setShowAllIntraBangkok(!showAllIntraBangkok)} className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto">
                  {showAllIntraBangkok ? 'Show Less' : `Show All (${intraAsiaBangkok.length} services)`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllIntraBangkok ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            {/* Songkhla Table */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#041367]" />
                <h3 className="text-lg font-semibold text-gray-800">Loading at Songkhla</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#041367] text-white">
                      <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
                      <th className="text-left p-3 font-semibold">DETAIL</th>
                      <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {intraSongkhlaDisplay.map((service, idx) => (
                      <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                        <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">
                            {service.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {intraAsiaSongkhla.length > 8 && (
                <button onClick={() => setShowAllIntraSongkhla(!showAllIntraSongkhla)} className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto">
                  {showAllIntraSongkhla ? 'Show Less' : `Show All (${intraAsiaSongkhla.length} services)`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllIntraSongkhla ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* America Section */}
      {activeRegion === "america" && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-7 h-7 text-[#041367]" />
              <h2 className="text-2xl font-bold text-gray-900">America Services</h2>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="w-5 h-5 text-[#041367]" />
                <h3 className="text-lg font-semibold text-gray-800">Loading at Bangkok / Laemchabang</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#041367] text-white">
                      <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
                      <th className="text-left p-3 font-semibold">DETAIL</th>
                      <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {americaBangkokDisplay.map((service, idx) => (
                      <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                        <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">
                            {service.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {americaBangkok.length > 8 && (
                <button onClick={() => setShowAllAmericaBangkok(!showAllAmericaBangkok)} className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto">
                  {showAllAmericaBangkok ? 'Show Less' : `Show All (${americaBangkok.length} services)`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllAmericaBangkok ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#041367]" />
                <h3 className="text-lg font-semibold text-gray-800">Loading at Songkhla</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#041367] text-white">
                      <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
                      <th className="text-left p-3 font-semibold">DETAIL</th>
                      <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {americaSongkhlaDisplay.map((service, idx) => (
                      <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                        <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-700">
                            {service.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {americaSongkhla.length > 8 && (
                <button onClick={() => setShowAllAmericaSongkhla(!showAllAmericaSongkhla)} className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto">
                  {showAllAmericaSongkhla ? 'Show Less' : `Show All (${americaSongkhla.length} services)`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllAmericaSongkhla ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Europe Section */}
      {activeRegion === "europe" && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-5">
              <Ship className="w-7 h-7 text-[#041367]" />
              <h2 className="text-2xl font-bold text-gray-900">Europe Services</h2>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="w-5 h-5 text-[#041367]" />
                <h3 className="text-lg font-semibold text-gray-800">Loading at Bangkok / Laemchabang</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#041367] text-white">
                      <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
                      <th className="text-left p-3 font-semibold">DETAIL</th>
                      <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {europeBangkokDisplay.map((service, idx) => (
                      <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                        <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-100 text-purple-700">
                            {service.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {europeBangkok.length > 6 && (
                <button onClick={() => setShowAllEuropeBangkok(!showAllEuropeBangkok)} className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto">
                  {showAllEuropeBangkok ? 'Show Less' : `Show All (${europeBangkok.length} services)`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllEuropeBangkok ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#041367]" />
                <h3 className="text-lg font-semibold text-gray-800">Loading at Songkhla</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#041367] text-white">
                      <th className="text-left p-3 font-semibold rounded-tl-lg">SERVICE NAME</th>
                      <th className="text-left p-3 font-semibold">DETAIL</th>
                      <th className="text-left p-3 font-semibold rounded-tr-lg">TYPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {europeSongkhlaDisplay.map((service, idx) => (
                      <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                        <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-100 text-purple-700">
                            {service.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {europeSongkhla.length > 6 && (
                <button onClick={() => setShowAllEuropeSongkhla(!showAllEuropeSongkhla)} className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto">
                  {showAllEuropeSongkhla ? 'Show Less' : `Show All (${europeSongkhla.length} services)`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllEuropeSongkhla ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
    <section className="relative py-12 overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/global.avif"
      alt="Shipping Background"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/75" />
  </div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
    <div className="inline-flex items-center gap-2 mb-3 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full">
      <Calendar className="w-4 h-4 text-white" />
      <span className="text-white/90 text-xs uppercase tracking-wider">Need Assistance?</span>
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Plan Your Shipment Today</h2>
    <p className="text-white/80 text-sm max-w-2xl mx-auto mb-5">
      Contact our team for booking inquiries and schedule information
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Link href="/contact">
        <button className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#041367] rounded-lg font-semibold text-sm hover:shadow-xl transition-all">
          Contact Us
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
      <Link href="/request-quote">
        <button className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/30 transition-all">
          Request a Quote
        </button>
      </Link>
    </div>
  </div>
</section>
    </div>
  );
}