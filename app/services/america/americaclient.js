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
  Truck
} from "lucide-react";

export default function AmericaServicesPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [showAllBangkok, setShowAllBangkok] = useState(false);
  const [showAllSongkhla, setShowAllSongkhla] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  // Service data
  const bangkokServices = [
    { name: "U.S.A ALL WATER HANJIN LANE (AWH)", detail: "CALLING PORT - NEW YORK / NORFOLK / SAVANNAH", type: "All Water Service" },
    { name: "U.S.A ALL WATER YANG MING (AWY)", detail: "CALLING PORT - SAVANNAH / WILMINGTON / NEW YORK (ETA/KRPUS)", type: "All Water Service" },
    { name: "U.S.A ALL WATER YANG MING (AWY)", detail: "CALLING PORT - SAVANNAH / WILMINGTON / NEW YORK (ETA/TWKHH)", type: "All Water Service" },
    { name: "PENDULUM EXPRESS (PSX)", detail: "CALLING PORT - LONGBEACH / OAKLAND / SEATTLE", type: "Express Service" },
    { name: "PNW NORTH EXPRESS (PNN)", detail: "CALLING PORT - SEATTLE / PORTLAND / VANCOUVER", type: "PNW Service" },
    { name: "YANGMING PACIFIC NORTHWEST (YPN)", detail: "CALLING PORT - TACOMA / PORTLAND", type: "PNW Service" },
    { name: "WEST COAST MEXICO-GUATEMALA SERVICE (MGS)", detail: "CALLING PORT - LONGBEACH / MANZANILLO / PUERTO QUETZAL", type: "Regional Service" },
    { name: "NEW SOUTH AMERICA ASIA EXPRESS (NSX)", detail: "CALLING PORT - BUENOS AIRES, MONTEVIDEO, SANTOS", type: "South America Service" },
    { name: "PACIFIC SOUTH-WEST SERVICE (PAS)", detail: "Pacific Southwest trade lane service", type: "PSW Service" },
    { name: "INDIA NORTH AMERICA SERVICE (INX/W)", detail: "BANGKOK / LAMCHABANG / SINGAPORE / NEW YORK / NORFOLK / SAVANNAH", type: "Trans-Pacific Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP)", detail: "CALLING PORT - LONGBEACH & OAKLAND", type: "PSW Service" }
  ];

  const songkhlaServices = [
    { name: "U.S.A ALL WATER HANJIN LANE (AWH)", detail: "PUSAN, MANZANILLO (MEXICO), MANZANILLO (PANAMA), MIAMI, SAVANNAH, NORFOLK, NEW YORK", type: "All Water Service" },
    { name: "U.S.A ALL WATER YANG MING (AWY)", detail: "CALLING PORT - SAVANNAH / WILMINGTON / NEW YORK", type: "All Water Service" },
    { name: "PENDULUM EXPRESS (PSX)", detail: "CALLING PORT - PUSAN / LONGBEACH / OAKLAND / SEATTLE", type: "Express Service" },
    { name: "WEST COAST MEXICO-GUATEMALA SERVICE (MGS)", detail: "CALLING PORT - LONGBEACH / MANZANILLO / PUERTO QUETZAL", type: "Regional Service" },
    { name: "PNW NORTH EXPRESS (PNN)", detail: "CALLING PORT - PUSAN / SEATTLE / VANCOUVER / PORTLAND", type: "PNW Service" },
    { name: "PNW SOUTH EXPRESS (PNS)", detail: "CALLING PORT - HONGKONG / VANCOUVER / SEATTLE", type: "PNW Service" },
    { name: "YANGMING PACIFIC NORTHWEST (YPN)", detail: "CALLING PORT - TACOMA / PORTLAND", type: "PNW Service" },
    { name: "PACIFIC SOUTH-WEST SERVICE (PAS)", detail: "Pacific Southwest trade lane service", type: "PSW Service" },
    { name: "INDIA NORTH AMERICA SERVICE (INX/W)", detail: "BANGKOK / LAMCHABANG / SINGAPORE / NEW YORK / NORFOLK / SAVANNAH", type: "Trans-Pacific Service" },
    { name: "MED-ASIA-AMERICA PEN SERVICE (MAP)", detail: "CALLING PORT - LONGBEACH & OAKLAND", type: "PSW Service" }
  ];

  const displayedBangkok = showAllBangkok ? bangkokServices : bangkokServices.slice(0, 6);
  const displayedSongkhla = showAllSongkhla ? songkhlaServices : songkhlaServices.slice(0, 6);

  // Service highlights
  const serviceStats = [
    { value: "11", label: "Pacific Southwest (PSW) Services", icon: <Ship className="w-5 h-5" /> },
    { value: "4", label: "Pacific Northwest (PNW) Services", icon: <Route className="w-5 h-5" /> },
    { value: "4", label: "All Water East Coast (AWE) Services", icon: <Globe className="w-5 h-5" /> },
    { value: "7", label: "Direct China Ports", icon: <MapPin className="w-5 h-5" /> }
  ];

  const serviceFeatures = [
    "Most frequent and quickest service on preferred departure day",
    "Favorable cut-off time from all major origin ports",
    "Direct services to up and coming thriving ports in China",
    "Enhanced services from Busan, Hong Kong, Yantian, Shanghai, Kaohsiung, Keelung, Tokyo, Osaka"
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[50vh] min-h-[350px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/america.jpg"
            alt="America Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041367]/70 via-[#041367]/70 to-[#041367]/40" />
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
                <span className="text-white/70 text-sm tracking-wider">Trans-Pacific Trade</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                America
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">Shipping Services</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                Advanced and diversified services for the America region, featuring 19 dedicated services across Pacific Southwest, Northwest, and All Water East Coast routes
              </p>
            </motion.div>
          </div>
        </div>
      </section>

   {/* Overview Section with Background Images */}
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
          America <span className="text-[#041367]">Service Deployment</span>
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            To further broaden our service deployment network in <span className="font-semibold text-gray-800">Trans-Pacific trade</span> and to enhance 
            our capacity to complement market demand, Hanjin Shipping is proud to introduce 
            <span className="font-semibold text-gray-800"> advanced and diversified services for 2006</span> for the America region.
          </p>
          <p>
            We have listened to our customers and carefully studied the methods to meet the increasing customer needs. 
            Hanjin Shipping has also continued to modernize our services to come closer to our customer's vision of an 
            ocean service provider.
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
          { value: "11", label: "Pacific Southwest (PSW) Services", icon: <Ship className="w-5 h-5" />, image: "/images/south.jpg" },
          { value: "4", label: "Pacific Northwest (PNW) Services", icon: <Route className="w-5 h-5" />, image: "/images/north.PNG" },
          { value: "4", label: "All Water East Coast (AWE) Services", icon: <Globe className="w-5 h-5" />, image: "/images/coast.jpg" },
          { value: "7", label: "Direct China Ports", icon: <MapPin className="w-5 h-5" />, image: "/images/china.png" }
        ].map((stat, idx) => (
          <div 
            key={idx} 
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={stat.image}
                alt="Background"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
            </div>
            
            {/* Content */}
            <div className="relative p-5 text-center z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/80">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

      {/* Service Features Section */}
      <section className="py-16 bg-gray-50">
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

          <div className="grid md:grid-cols-2 gap-6">
            {serviceFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 bg-[#041367]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#041367]" />
                </div>
                <p className="text-gray-700 text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* China Ports Highlight */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mt-8 bg-gradient-to-r from-[#041367] to-[#041367]/90 rounded-xl p-5 text-white"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Direct China Ports Coverage</h4>
                <p className="text-white/80 text-xs leading-relaxed">
                  With <span className="font-semibold text-white">7 direct calling ports in China</span>, Hanjin Shipping can lay claim to 
                  providing the most reliable service out of China.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Routes Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Service <span className="text-[#041367]">Categories</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm">
              Featuring 11 dedicated services for Pacific Southwest (PSW), 4 services for Pacific Northwest (PNW), 
              and 4 specialized All Water East Coast (AWE) services via Panama Canal
            </p>
          </motion.div>

          {/* Service Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Pacific Southwest (PSW)", count: "11 Services", desc: "Dedicated services for PSW trade lane", icon: <Ship className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
              { title: "Pacific Northwest (PNW)", count: "4 Services", desc: "Specialized PNW services", icon: <Route className="w-8 h-8" />, color: "from-emerald-500 to-teal-500" },
              { title: "All Water East Coast (AWE)", count: "4 Services", desc: "Via Panama Canal from major Asian ports", icon: <Globe className="w-8 h-8" />, color: "from-purple-500 to-pink-500" }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{category.title}</h3>
                <div className="text-2xl font-bold text-[#041367] mb-2">{category.count}</div>
                <p className="text-xs text-gray-500">{category.desc}</p>
              </motion.div>
            ))}
          </div>
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
                          service.type.includes('All Water') ? 'bg-blue-100 text-blue-700' :
                          service.type.includes('PNW') ? 'bg-emerald-100 text-emerald-700' :
                          service.type.includes('PSW') ? 'bg-purple-100 text-purple-700' :
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
                          service.type.includes('All Water') ? 'bg-blue-100 text-blue-700' :
                          service.type.includes('PNW') ? 'bg-emerald-100 text-emerald-700' :
                          service.type.includes('PSW') ? 'bg-purple-100 text-purple-700' :
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
              Reliable Trans-Pacific Services
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-6">
              The increased number of services enables us to offer the most frequent and quickest service on the 
              preferred departure day with favorable cut-off time from all major origin ports and points.
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