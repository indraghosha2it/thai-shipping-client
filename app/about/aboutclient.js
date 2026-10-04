

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Ship, 
  Globe, 
  Award, 
  MapPin, 
  Building, 
  TrendingUp, 
  Shield,
  Users,
  Anchor,
  Box,
  Trophy,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Container,
  Warehouse,
  Briefcase,
  Compass,
  ChevronRight,
  Zap,
  Sparkles,
  Rocket
} from "lucide-react";

export default function AboutPage() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // State for rotating images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const rotatingImages = [
    { src: "/images/building.avif", alt: "Hanjin Headquarters", label: "Headquarters" },
    { src: "/images/Ocean.PNG", alt: "Container Ship", label: "Container Fleet" },
    { src: "/images/global.avif", alt: "Cargo Operations", label: "Cargo Operations" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "200+", label: "Global Offices", icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, desc: "Worldwide presence", change: "+12% growth", color: "from-blue-500 to-cyan-500" },
    { value: "11", label: "Dedicated Terminals", icon: <Anchor className="w-5 h-5 md:w-6 md:h-6" />, desc: "Strategic locations", change: "2 more planned", color: "from-emerald-500 to-teal-500" },
    { value: "90%", label: "Overseas Revenue", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, desc: "International business", change: "Global reach", color: "from-purple-500 to-pink-500" },
    { value: "30+", label: "Years of Excellence", icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />, desc: "Industry leadership", change: "Since 1988", color: "from-amber-500 to-orange-500" },
    { value: "5", label: "Regional HQs", icon: <Building className="w-5 h-5 md:w-6 md:h-6" />, desc: "Global management", change: "4 continents", color: "from-rose-500 to-red-500" },
    { value: "20", label: "Local Corporations", icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, desc: "Local expertise", change: "Growing network", color: "from-indigo-500 to-blue-500" }
  ];

  const achievements = [
    { year: "2003", title: "Best Carrier Award", by: "Global Shippers Association", icon: <Trophy className="w-4 h-4" />, color: "from-amber-500 to-orange-500", desc: "Industry recognition" },
    { year: "2004", title: "Best Carrier Award", by: "Fred Meyer", icon: <Award className="w-4 h-4" />, color: "from-blue-500 to-cyan-500", desc: "Retail excellence" },
    { year: "2005", title: "Good Partner Award", by: "Target Store & Best Buy", icon: <Star className="w-4 h-4" />, color: "from-purple-500 to-pink-500", desc: "Partnership excellence" },
    { year: "2006", title: "Ocean Carrier of the Year", by: "Owens Corning (4x)", icon: <Award className="w-4 h-4" />, color: "from-emerald-500 to-teal-500", desc: "4 consecutive years" }
  ];

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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] overflow-hidden -mt-6">
        <motion.div 
          className="absolute inset-0"
          style={{ opacity, scale }}
        >
          <Image
            src="/images/building.avif"
            alt="Hanjin Shipping"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041367]/70 via-[#041367]/50 to-[#041367]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
        
        {/* Animated Waves - Hidden on mobile */}
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,176C672,171,768,181,864,197.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-16 md:w-20 h-1 bg-white/80 rounded-full mb-4 md:mb-5"
              />
              <motion.div
                animate={floatingAnimation}
                className="inline-flex items-center gap-2 mb-3 md:mb-4 bg-white/10 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                <span className="text-white/90 text-[10px] md:text-xs tracking-wider font-medium">EST. 1988 | Global Leader</span>
              </motion.div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight">
                Hanjin Shipping
                <span className="text-white/90 block text-xl md:text-3xl lg:text-4xl mt-1 md:mt-2">Thailand</span>
              </h1>
              <p className="text-white/80 text-sm md:text-lg max-w-2xl leading-relaxed mb-6 md:mb-8">
                A member of the Hanjin Group, delivering excellence in global shipping and logistics
                with a comprehensive network spanning five continents.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Animated Scroll Indicator - Hidden on mobile */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 md:w-7 md:h-11 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 md:w-1.5 md:h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Company Overview Section 1 - Company Background */}
      <section ref={sectionRef} className="py-12 md:py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#041367]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 -mt-8 md:-mt-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-8 md:w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-xs md:text-sm uppercase tracking-wider">Company Profile</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
                Global <span className="text-[#041367]">Shipping Excellence</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  <span className="font-semibold text-gray-800">Hanjin Shipping</span> is a member of the Hanjin Group and has 
                  several subsidiaries including <span className="font-semibold text-gray-800">Keoyang Shipping</span> and 
                  <span className="font-semibold text-gray-800"> Senator Lines GmbH</span>, and affiliates including 
                  <span className="font-semibold text-gray-800"> CyberLogitec</span>, a logistics IT specialist, and 
                  <span className="font-semibold text-gray-800"> Pyeongtaek Container Terminal Co., Ltd.</span>, a new addition in 2004.
                </p>
                <p>
                  Hanjin Shipping has a comprehensive global business network with 
                  <span className="font-semibold text-gray-800"> five regional headquarters</span>, 
                  <span className="font-semibold text-gray-800"> 200 overseas branch offices</span>, and 
                  <span className="font-semibold text-gray-800"> 20 local corporations</span>, earning about 
                  <span className="font-semibold text-gray-800"> 90% of its total revenue</span> from third-party business overseas.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-[#041367]/5 to-transparent rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#041367]">30+</div>
                  <div className="text-xs md:text-sm text-gray-600">Years of Excellence</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-1">Since 1988</div>
                </div>
                <div className="bg-gradient-to-br from-[#041367]/5 to-transparent rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#041367]">90%</div>
                  <div className="text-xs md:text-sm text-gray-600">Overseas Revenue</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-1">Global Operations</div>
                </div>
                <div className="bg-gradient-to-br from-[#041367]/5 to-transparent rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#041367]">200+</div>
                  <div className="text-xs md:text-sm text-gray-600">Global Offices</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-1">Worldwide Presence</div>
                </div>
                <div className="bg-gradient-to-br from-[#041367]/5 to-transparent rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#041367]">50+</div>
                  <div className="text-xs md:text-sm text-gray-600">Countries</div>
                  <div className="text-[10px] md:text-xs text-gray-400 mt-1">Global Network</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview Section 2 - Logistics Network with Rotating Images */}
      <section className="py-12 md:py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-8 md:w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-xs md:text-sm uppercase tracking-wider">Global Infrastructure</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
                World-Class <span className="text-[#041367]">Logistics Network</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Hanjin Shipping's world-class logistics network includes 
                  <span className="font-semibold text-gray-800"> 11 dedicated terminals</span> in Long Beach, Tokyo, Kaohsiung, 
                  and Busan among others and <span className="font-semibold text-gray-800"> six inland logistic bases</span> in such 
                  locations as Shanghai, Qingdao, and Port Kelang.
                </p>
                <p>
                  An additional dedicated container terminal in Busan New Port of the development phase 2-1 is 
                  scheduled to open for business in <span className="font-semibold text-gray-800">2009</span>.
                </p>
              </div>
              
              {/* Key Terminals Highlight */}
              <div className="mt-4 md:mt-6 grid grid-cols-2 gap-2 md:gap-3">
                {["Long Beach, USA", "Tokyo, Japan", "Kaohsiung, Taiwan", "Busan, South Korea", "Shanghai, China", "Port Kelang, Malaysia"].map((terminal, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                    <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#041367]" />
                    <span>{terminal}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Right Side - Rotating Images */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-[250px] md:h-[380px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={rotatingImages[currentImageIndex].src}
                      alt={rotatingImages[currentImageIndex].alt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#041367]/30 to-transparent" />
                
                {/* Image Label Badge */}
                <motion.div 
                  animate={floatingAnimation}
                  className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-white/90 backdrop-blur rounded-lg px-2 py-1 md:px-3 md:py-1.5 shadow-lg"
                >
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Ship className="w-3 h-3 md:w-4 md:h-4 text-[#041367]" />
                    <span className="text-[10px] md:text-xs font-semibold text-gray-800">{rotatingImages[currentImageIndex].label}</span>
                  </div>
                </motion.div>
                
                {/* Image Indicators */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex gap-1.5 md:gap-2 z-10">
                  {rotatingImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        currentImageIndex === idx 
                          ? 'w-4 md:w-6 h-1 bg-white' 
                          : 'w-1 h-1 md:w-1.5 md:h-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/about1.jpg')] bg-cover bg-center bg-fixed" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
               whileHover={{ y: -5, scale: 1.02 }}
                className="text-center text-white group cursor-pointer bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br ${stat.color} rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-lg md:text-2xl lg:text-3xl font-bold">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-white/80 mt-1 font-medium">{stat.label}</div>
                <div className="hidden md:block text-[8px] md:text-[10px] text-white/50 mt-0.5">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Section 3 - Awards & Recognition */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-8 md:w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-xs md:text-sm uppercase tracking-wider">Recognition</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
                Awards & <span className="text-[#041367]">Achievements</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Hanjin Shipping's seamless international shipping service is recognized by the 
                  <span className="font-semibold text-gray-800"> Best Carrier Awards</span> by Global Shippers Association in 2003 
                  and by Fred Meyer in 2004.
                </p>
                <p>
                  In addition, Hanjin Shipping won <span className="font-semibold text-gray-800">Good Partner Awards</span> by Target Store 
                  and Best Buy in 2005 and was named the <span className="font-semibold text-gray-800">Ocean Carrier of the Year</span> by 
                  Owens Corning for <span className="font-semibold text-gray-800">four consecutive years in 2006</span>.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {achievements.map((award, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-lg md:rounded-xl p-3 md:p-4 text-center shadow-md">
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${award.color} rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                    <div className="text-white">{award.icon}</div>
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[#041367]">{award.year}</div>
                  <div className="text-[10px] md:text-xs font-semibold text-gray-800">{award.title}</div>
                  <div className="hidden md:block text-[8px] md:text-[10px] text-gray-500 mt-1">{award.by.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Future Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-black to-black/75 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/about1.jpg')] bg-cover bg-center" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4 bg-white/10 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <Compass className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-white/90 text-[10px] md:text-xs uppercase tracking-wider">Our Vision & Future</span>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
              "The Premier Logistics Company
            </h2>
            <p className="text-white/80 text-sm md:text-lg italic">
              Recognized, Respected & Trusted by the Global Community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl md:rounded-2xl p-5 md:p-8 text-center">
              <p className="text-white/90 leading-relaxed text-xs md:text-base mb-4 md:mb-6">
                To achieve its goal, Hanjin Shipping will continue to enlarge and efficiently operate its fleet, 
                acquire more dedicated terminals, and reinforce its core businesses including container and bulk shipping. 
                In addition, Hanjin is bringing <span className="font-semibold">3PL business</span> on track and building a 
                <span className="font-semibold"> ship-repair yard</span> as part of its business diversification efforts.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4">
                {[
                  "Fleet Expansion",
                  "Dedicated Terminals",
                  "Container Shipping",
                  "Bulk Shipping",
                  "3PL Business",
                  "Ship-Repair Yard"
                ].map((item, idx) => (
                  <span key={idx} className="px-2 py-1 md:px-3 md:py-1 bg-white/20 rounded-full text-[9px] md:text-xs text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-12 md:py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-8 md:mb-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex mx-auto mb-2 md:mb-3"
            >
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#041367]" />
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3">
              Our <span className="text-[#041367]">Global Network</span>
            </h2>
            <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Subsidiaries */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#041367] to-[#041367]/80 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900">Subsidiaries & Affiliates</h3>
                  <p className="text-[10px] md:text-xs text-gray-500">Strategic business units worldwide</p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                {[
                  { name: "Keoyang Shipping", role: "Maritime Operations", year: "Est. 1995", icon: <Ship className="w-3 h-3 md:w-4 md:h-4" /> },
                  { name: "Senator Lines GmbH", role: "Global Container Shipping", year: "Est. 1998", icon: <Container className="w-3 h-3 md:w-4 md:h-4" /> },
                  { name: "CyberLogitec", role: "Logistics IT Specialist", year: "Est. 2000", icon: <Globe className="w-3 h-3 md:w-4 md:h-4" /> },
                  { name: "Pyeongtaek Container Terminal", role: "Terminal Operations", year: "Joined 2004", icon: <Anchor className="w-3 h-3 md:w-4 md:h-4" /> }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-gray-50 rounded-lg md:rounded-xl hover:bg-[#041367]/5 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-[#041367] group-hover:bg-[#041367] group-hover:text-white transition-all duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-xs md:text-sm">{item.name}</h4>
                      <div className="flex items-center gap-1 md:gap-2">
                        <p className="text-[10px] md:text-xs text-gray-500">{item.role}</p>
                        <span className="text-[8px] md:text-[10px] text-gray-400">{item.year}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-[#041367] transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Terminals */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#041367] to-[#041367]/80 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Anchor className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900">Dedicated Terminals</h3>
                  <p className="text-[10px] md:text-xs text-gray-500">11 strategic locations worldwide</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-1.5 md:gap-2">
                {[
                  { name: "Long Beach, USA", volume: "2.5M TEU", type: "Major Hub" },
                  { name: "Tokyo, Japan", volume: "1.8M TEU", type: "Regional Hub" },
                  { name: "Kaohsiung, Taiwan", volume: "2.1M TEU", type: "Transshipment" },
                  { name: "Busan, South Korea", volume: "3.2M TEU", type: "Main Hub" },
                  { name: "Shanghai, China", volume: "4.5M TEU", type: "Mega Hub" },
                  { name: "Qingdao, China", volume: "2.0M TEU", type: "Regional Hub" },
                  { name: "Port Kelang, Malaysia", volume: "1.5M TEU", type: "Gateway Port" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ x: 3 }}
                    className="flex items-center justify-between p-2 md:p-2.5 bg-gray-50 rounded-lg hover:bg-[#041367]/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#041367]" />
                      <span className="text-[11px] md:text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <span className="text-[8px] md:text-[10px] text-gray-500">{item.volume}</span>
                      <span className="text-[7px] md:text-[9px] px-1.5 md:px-2 py-0.5 bg-[#041367]/10 rounded-full text-[#041367] font-medium">{item.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Businesses */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3">
              Core <span className="text-[#041367]">Businesses</span>
            </h2>
            <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
            <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto mt-3 md:mt-4">
              Diversified operations driving our global success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Container Shipping", desc: "Global container transportation services", icon: <Container className="w-6 h-6 md:w-8 md:h-8" />, stats: "500K+ TEU annually", color: "from-blue-500 to-cyan-500" },
              { title: "Bulk Shipping", desc: "Dry bulk and liquid bulk cargo", icon: <Ship className="w-6 h-6 md:w-8 md:h-8" />, stats: "10M+ tons", color: "from-emerald-500 to-teal-500" },
              { title: "3PL Business", desc: "Third-party logistics solutions", icon: <Warehouse className="w-6 h-6 md:w-8 md:h-8" />, stats: "98% satisfaction", color: "from-purple-500 to-pink-500" },
              { title: "Ship Repair Yard", desc: "Vessel maintenance and repair", icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />, stats: "50+ vessels/year", color: "from-amber-500 to-orange-500" }
            ].map((business, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${business.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <div className="text-white">
                    {business.icon}
                  </div>
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{business.title}</h3>
                <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3">{business.desc}</p>
                <div className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-[#041367]/10 rounded-full">
                  <span className="text-[8px] md:text-xs font-semibold text-[#041367]">{business.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-8 md:w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-xs md:text-sm uppercase tracking-wider">Visit Us</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Headquarters
                <span className="text-[#041367] block">in Bangkok</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                Located in the heart of Bangkok's business district, our headquarters serves as the 
                central hub for our operations across Thailand and Southeast Asia.
              </p>
              <motion.div 
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-gray-100 mb-5 md:mb-6"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#041367] to-[#041367]/80 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1 md:mb-2">Hanjin Shipping (Thailand) Co., Ltd.</h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      6th Floor, Sirinrat Building<br />
                      3388/17-18 Rama IV Road, Khlong Tan<br />
                      Khlong Toei, Bangkok 10110<br />
                      Thailand
                    </p>
                    <div className="flex flex-wrap gap-3 md:gap-4 mt-3 md:mt-4">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <Phone className="w-3 h-3 md:w-4 md:h-4 text-[#041367]" />
                        <span className="text-xs md:text-sm text-gray-600">+66 2 123 4567</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <Mail className="w-3 h-3 md:w-4 md:h-4 text-[#041367]" />
                        <span className="text-xs md:text-sm text-gray-600">contact@hanjinthailand.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#041367] to-[#041367]/90 text-white rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:shadow-xl transition-all duration-300 justify-center"
                  >
                    Contact Us
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.button>
                </Link>
                <a href="https://maps.google.com/?q=Sirinrat+Building+Rama+IV+Road+Khlong+Toei+Bangkok" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border-2 border-[#041367] text-[#041367] rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-[#041367] hover:text-white transition-all duration-300 justify-center"
                  >
                    Get Directions
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.021038203981!2d100.56866517368576!3d13.717175598097086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f3bc7cca4ab%3A0x5808503cfa6cbfa0!2sClariant%20(Thailand)%20Ltd.!5e0!3m2!1sen!2sbd!4v1780829767043!5m2!1sen!2sbd" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[250px] md:h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-[#041367] to-[#041367]/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format')] bg-cover bg-center" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex mx-auto mb-3 md:mb-4"
            >
              <Rocket className="w-8 h-8 md:w-12 md:h-12 text-white/80" />
            </motion.div>
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
              Ready to Ship with Hanjin?
            </h3>
            <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-lg max-w-2xl mx-auto">
              Contact our team for a customized shipping solution tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 md:px-8 py-2 md:py-3 bg-white text-[#041367] rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:shadow-2xl transition-all duration-300 justify-center"
                >
                  Get a Quote
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 md:px-8 py-2 md:py-3 bg-white/10 backdrop-blur border-2 border-white/30 text-white rounded-lg md:rounded-xl font-bold text-sm md:text-base hover:bg-white/20 transition-all duration-300 justify-center"
                >
                  Explore Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}