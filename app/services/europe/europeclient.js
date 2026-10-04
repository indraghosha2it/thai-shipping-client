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
  Clock, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight,
  Route,
  Compass,
  Sparkles,
  Rocket,
  Zap,
  Star,
  Award,
  BarChart3,
  Calendar,
  Box,
  Truck,
  Euro,
  Building
} from "lucide-react";

export default function EuropeServicesPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [showAllBangkok, setShowAllBangkok] = useState(false);
  const [showAllSongkhla, setShowAllSongkhla] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Service data
  const bangkokServices = [
    { name: "ASIA-EUROPE EXPRESS (AEX/W)", detail: "Laem Chabang to Port Klang, Hamburg/Bremerhaven, Rotterdam/Antwerp, Felixstowe, Le Havre", type: "Express Service" },
    { name: "FAR EAST EUROPE EXPRESS SERVICE (FEX/W)", detail: "Bangkok/Laem Chabang to Singapore, Rotterdam/Antwerp, Hamburg/Bremerhaven, Felixstowe", type: "Express Service" },
    { name: "JAPAN EUROPE SERVICE (JES/W) VIA SINGAPORE", detail: "Connecting Japan to Europe via Singapore", type: "Japan Service" },
    { name: "NORTH CHINA EXPRESS SERVICE (NCX/W) VIA SINGAPORE", detail: "North China to Europe via Singapore", type: "China Service" },
    { name: "FINANCIAL SCP (SCE/W)", detail: "Financial service route", type: "Special Service" },
    { name: "MEDITERRANEAN EXPRESS (MEX W/B)", detail: "Thailand to Genoa, Fos Sur Mer, Valencia, Gioia Tauro", type: "Mediterranean Service" },
    { name: "CHINA MEDITERRANEAN EXPRESS (CMX W/B)", detail: "Thailand to Port Said, Napoli, La Spezia, Barcelona", type: "Mediterranean Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/W)", detail: "Thailand to Port Said, Napoli, La Spezia, Barcelona", type: "Mediterranean Service" }
  ];

  const songkhlaServices = [
    { name: "JAPAN EUROPE SERVICE (JES/W) VIA SINGAPORE", detail: "Songkhla to Rotterdam, Felixstowe, Hamburg, Antwerp", type: "Japan Service" },
    { name: "FAR EAST EUROPE SERVICE (FEX/W)", detail: "Songkhla to Singapore, Rotterdam/Antwerp, Hamburg/Bremerhaven, Felixstowe", type: "Express Service" },
    { name: "NORTH CHINA EXPRESS SERVICE (NCX/W) VIA SINGAPORE", detail: "Songkhla to Rotterdam, Felixstowe, Hamburg, Antwerp", type: "China Service" },
    { name: "FINANCIAL SCP (SCE/W)", detail: "Singapore, Rotterdam, Hamburg, Antwerp, Felixstowe", type: "Special Service" },
    { name: "MEDITERRANEAN EXPRESS (MEX/W)", detail: "Singapore, Genoa, Fos Sur Mer, Valencia, Gioia Tauro", type: "Mediterranean Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP/W)", detail: "Singapore, Port Said, Napoli, La Spezia, Barcelona", type: "Mediterranean Service" }
  ];

  const displayedBangkok = showAllBangkok ? bangkokServices : bangkokServices.slice(0, 6);
  const displayedSongkhla = showAllSongkhla ? songkhlaServices : songkhlaServices.slice(0, 6);

  // Service stats
  const serviceStats = [
    { value: "5,500+", label: "TEU Class Vessels", icon: <Ship className="w-5 h-5" />, description: "Maximum space utilization" },
    { value: "1995", label: "European Expansion", icon: <Calendar className="w-5 h-5" />, description: "Trans-Atlantic services launched" },
    { value: "4", label: "Alliance Partners", icon: <Building className="w-5 h-5" />, description: "Coscon, K-Line, Yangming, CKY Group" },
    { value: "Weekly", label: "Sailings", icon: <Clock className="w-5 h-5" />, description: "Fixed schedule" }
  ];

  const serviceHighlights = [
    { title: "Fixed Schedule", desc: "Higher sailing frequencies connecting Far East and Europe", icon: <Calendar className="w-5 h-5" /> },
    { title: "Mediterranean Coverage", desc: "CMX & MEX services strengthening Asia-Mediterranean trade", icon: <Globe className="w-5 h-5" /> },
    { title: "Alliance Network", desc: "CKY Group partnership for continuous improvement", icon: <Shield className="w-5 h-5" /> },
    { title: "East Mediterranean", desc: "AIX service covering Turkey and Greece markets", icon: <MapPin className="w-5 h-5" /> }
  ];

  const alliancePartners = ["COSCON", "K-Line", "Yangming Line", "CKY Group"];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] min-h-[350px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/europe.png"
            alt="Europe Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041367]/70 via-[#041367]/50 to-[#041367]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
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
                <span className="text-white/70 text-sm tracking-wider">Far East - Europe Trade</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Europe
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">Shipping Services</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                Fixed schedule services connecting Far East and Europe with higher sailing frequencies, 
                covering Central/Eastern Europe, Mediterranean, and Asia/Middle East/Europe routes
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section with Background Stats */}
      <section ref={sectionRef} className="py-16 md:py-20 bg-white relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
          <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Overview</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Europe <span className="text-[#041367]">Service Network</span>
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Under a fixed schedule, Hanjin's new service routes connect <span className="font-semibold text-gray-800">Far East and Europe</span> with 
            higher sailing frequencies and also cover <span className="font-semibold text-gray-800">Central/Eastern Europe and the Mediterranean</span>. 
            Hanjin also offers a separate weekly Asia/Middle East/Europe service.
          </p>
          <p>
            In line with the trade development between Europe and China, Hanjin has also launched new Mediterranean Service 
            <span className="font-semibold text-gray-800"> CMX (China Mediterranean Express Service)</span> and 
            <span className="font-semibold text-gray-800"> MEX (Mediterranean Express Service)</span> to strengthen Asia-Mediterranean trade.
          </p>
          <div className="bg-[#041367]/5 rounded-lg p-4 border-l-4 border-[#041367]">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Schedule Loading At:</span> Bangkok / Laemchabang | Songkhla
            </p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { value: "5,500+", label: "TEU Class Vessels", icon: <Ship className="w-5 h-5" />, description: "Maximum space utilization", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format" },
          { value: "1995", label: "European Expansion", icon: <Calendar className="w-5 h-5" />, description: "Trans-Atlantic services launched", image: "/images/oo.png" },
          { value: "4", label: "Alliance Partners", icon: <Building className="w-5 h-5" />, description: "Coscon, K-Line, Yangming, CKY Group", image: "/images/allience.jpg" },
          { value: "Weekly", label: "Sailings", icon: <Clock className="w-5 h-5" />, description: "Fixed schedule", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format" }
        ].map((stat, idx) => (
          <div 
            key={idx} 
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="absolute inset-0">
              <Image
                src={stat.image}
                alt="Background"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/75 to-black/55" />
            </div>
            <div className="relative p-5 text-center z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/80">{stat.label}</div>
              <div className="text-[10px] text-white/60 mt-1">{stat.description}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

      {/* Vessel & Alliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-xl shadow-lg h-[300px]"
            >
              <Image
                src="/images/strategy.PNG"
                alt="Vessel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041367]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <Ship className="w-6 h-6 text-white" />
                  <h3 className="text-white font-bold text-lg">5,500 TEU-Class Vessels</h3>
                </div>
                <p className="text-white/80 text-sm">Maximum space utilization for customer cargo needs</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Global Alliance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Strategic <span className="text-[#041367]">Partnerships</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Hanjin continues to further develop alliance relations to offer customers the maximum space use and best service coverage.
              </p>
              <div className="flex flex-wrap gap-3">
                {alliancePartners.map((partner, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white rounded-lg shadow-sm text-[#041367] font-semibold text-sm">
                    {partner}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-3 bg-[#041367]/10 px-4 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-[#041367]" />
              <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Service <span className="text-[#041367]">Highlights</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {serviceHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border-t-2 border-t-[#041367]"
              >
                <div className="w-12 h-12 bg-[#041367]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{highlight.title}</h3>
                <p className="text-gray-500 text-xs">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Historical Milestone */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-gradient-to-r from-[#041367] to-[#041367]/90 rounded-xl p-6 text-white"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Historical Expansion (1995)</h4>
                <p className="text-white/80 text-xs">
                  Hanjin expanded its network in Europe by introducing Trans-Atlantic services to Northern and Southern Europe separately, 
                  and augmented AIX to cover Turkey and Greece, opening doors to the East Mediterranean market.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bangkok/Laemchabang Services Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <Anchor className="w-6 h-6 text-[#041367]" />
              <h2 className="text-2xl font-bold text-gray-900">Loading at Bangkok / Laemchabang</h2>
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
                  {displayedBangkok.map((service, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-100 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                      <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          service.type.includes('Mediterranean') ? 'bg-purple-100 text-purple-700' :
                          service.type.includes('Express') ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {service.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {bangkokServices.length > 6 && (
              <button
                onClick={() => setShowAllBangkok(!showAllBangkok)}
                className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto"
              >
                {showAllBangkok ? 'Show Less' : `Show All (${bangkokServices.length} services)`}
                <ArrowRight className={`w-4 h-4 transition-transform ${showAllBangkok ? 'rotate-90' : ''}`} />
              </button>
            )}
          </motion.div>

          {/* Songkhla Services Table */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-6 h-6 text-[#041367]" />
              <h2 className="text-2xl font-bold text-gray-900">Loading at Songkhla</h2>
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
                  {displayedSongkhla.map((service, idx) => (
                    <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-100 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-3 text-gray-800 font-medium text-xs">{service.name}</td>
                      <td className="p-3 text-gray-500 text-xs">{service.detail}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          service.type.includes('Mediterranean') ? 'bg-purple-100 text-purple-700' :
                          service.type.includes('Express') ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {service.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {songkhlaServices.length > 6 && (
              <button
                onClick={() => setShowAllSongkhla(!showAllSongkhla)}
                className="mt-4 flex items-center gap-1 text-[#041367] text-sm font-medium hover:underline mx-auto"
              >
                {showAllSongkhla ? 'Show Less' : `Show All (${songkhlaServices.length} services)`}
                <ArrowRight className={`w-4 h-4 transition-transform ${showAllSongkhla ? 'rotate-90' : ''}`} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Mediterranean Services Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Mediterranean Focus</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Asia-<span className="text-[#041367]">Mediterranean</span> Trade
              </h2>
              <p className="text-gray-600 mb-4">
                Hanjin has launched new Mediterranean services to strengthen Asia-Mediterranean trade, 
                providing customers with enhanced connectivity to key Mediterranean ports.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#041367]" />
                  <span className="text-sm text-gray-600">CMX - China Mediterranean Express Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#041367]" />
                  <span className="text-sm text-gray-600">MEX - Mediterranean Express Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#041367]" />
                  <span className="text-sm text-gray-600">Coverage: Port Said, Napoli, La Spezia, Barcelona, Genoa, Fos Sur Mer, Valencia, Gioia Tauro</span>
                </div>
              </div>
            </div>
            <div className="relative h-[250px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/mediterranean.png"
                alt="Mediterranean Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041367]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gradient-to-r from-[#041367] to-[#041367]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white/90 text-xs uppercase tracking-wider">Our Commitment</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Customer-Centric Service Excellence
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-6">
              Providing customers with services that best meet their needs is Hanjin's top priority. 
              Hanjin constantly improves its existing lanes with the CKY Group and broadens the service coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#041367] rounded-lg font-semibold text-sm hover:shadow-xl transition-all">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/request-quote">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all">
                  Request a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}