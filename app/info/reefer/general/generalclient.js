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
  Thermometer,
  Snowflake,
  Droplets,
  Clock,
  Shield,
  CheckCircle,
  Wifi,
  AlertTriangle,
  Package,
  Truck,
  Box,
  Leaf,
  Gauge,
  Microscope,
  Phone,
  Mail,
  Users,
  BarChart3,
  Award,
  Zap,
  TrendingUp
} from "lucide-react";

export default function ReeferGeneralInfoPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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

  const characteristics = [
    { title: "Equipment Capacity", desc: "Enough to meet customer's demands", icon: <Box className="w-5 h-5" /> },
    { title: "Modern Technology", desc: "Brand-new Reefer container with the most modernized technology", icon: <Gauge className="w-5 h-5" /> },
    { title: "Fast Transit", desc: "The fastest transit time with new vessel fleet", icon: <Ship className="w-5 h-5" /> },
    { title: "Fixed Express Service", desc: "Fixed express service for every calling port", icon: <Clock className="w-5 h-5" /> },
    { title: "Temperature Control", desc: "More accurate temperature control with digital electronic circuit", icon: <Thermometer className="w-5 h-5" /> },
    { title: "Controlled Atmosphere", desc: "C/A (Controlled-Atmosphere) Reefer containers for perishable goods", icon: <Leaf className="w-5 h-5" /> },
    { title: "Remote Monitoring", desc: "Remote monitoring system at bridge and regular personal check onboard", icon: <Wifi className="w-5 h-5" /> },
    { title: "Alarm System", desc: "Immediate alarm system to identify malfunction of unit", icon: <AlertTriangle className="w-5 h-5" /> },
    { title: "Environmental Friendly", desc: "Using environmental refrigerant (non-CFC) R134a", icon: <Globe className="w-5 h-5" /> },
    { title: "Cargo Protection", desc: "Advanced protection system against cargo damage with self-diagnostic digital circuit", icon: <Shield className="w-5 h-5" /> },
    { title: "Expert Staff", desc: "Well-skilled staffs and technicians for Reefer cargo handling and transportation", icon: <Users className="w-5 h-5" /> }
  ];

  const handlingInfo = [
    "Customers are able to reject cargo stuffing with damaged empty containers and thus secure safe transport of their goods.",
    "Proper storage patterns are required for air and temperature control.",
    "Because perishables have characteristics which make them unique, mixed cargoes (several commodities) in the same container are not allowed.",
    "Product condition at the time of stuffing determines its condition at destination.",
    "Cargo pre-cooling and maintaining of required temperature before cargo-stuffing into reefer container is essential.",
    "Shelf lifetime for every perishable good in coordination with transit time should be considered prior to booking."
  ];

  const temperatureRanges = [
    { product: "Frozen Meat & Seafood", temp: "-18°C to -25°C", icon: <Snowflake className="w-5 h-5" />, color: "from-blue-500 to-cyan-500", image: "/images/frozen.jpg" },
    { product: "Dairy Products", temp: "0°C to 4°C", icon: <Droplets className="w-5 h-5" />, color: "from-sky-500 to-blue-500", image: "/images/dairy.PNG" },
    { product: "Fresh Fruits", temp: "0°C to 8°C", icon: <Package className="w-5 h-5" />, color: "from-emerald-500 to-teal-500", image: "/images/fruite.PNG" },
    { product: "Bananas", temp: "12°C to 15°C", icon: <Leaf className="w-5 h-5" />, color: "from-amber-500 to-orange-500", image: "/images/banana.PNG" },
    { product: "Pharmaceuticals", temp: "2°C to 8°C", icon: <Shield className="w-5 h-5" />, color: "from-purple-500 to-pink-500", image: "/images/pharma.PNG" },
    { product: "Flowers", temp: "2°C to 5°C", icon: <Leaf className="w-5 h-5" />, color: "from-rose-500 to-red-500", image: "/images/flowers.jpg" }
  ];

  const keyStats = [
    { value: "24/7", label: "Monitoring", icon: <Clock className="w-5 h-5" />, trend: "+24%", color: "from-blue-500 to-cyan-500" },
    { value: "-25°C", label: "Minimum Temp", icon: <Thermometer className="w-5 h-5" />, trend: "Precision", color: "from-sky-500 to-blue-500" },
    { value: "100%", label: "Quality Assurance", icon: <Shield className="w-5 h-5" />, trend: "Certified", color: "from-emerald-500 to-teal-500" },
    { value: "Global", label: "Coverage", icon: <Globe className="w-5 h-5" />, trend: "50+ Countries", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[55vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/container.jpg"
            alt="Reefer Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        <div className="absolute top-10 right-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Snowflake className="w-20 h-20 text-white" />
          </motion.div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
                <span className="text-white/70 text-sm tracking-wider">Reefer Services</span>
              </div>
              <motion.div
                animate={floatingAnimation}
                className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur px-4 py-2 rounded-full"
              >
                <Thermometer className="w-4 h-4 text-white" />
                <span className="text-white/90 text-xs tracking-wider font-medium">General Information | Technical Specifications</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Reefer Container
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">General Information</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                Professional handling of perishable commodities with advanced temperature control technology
              </p>
            </motion.div>
          </div>
        </div>
      </section>

   <section className="py-8 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Clock className="w-4 h-4 text-white" />
        </div>
        <div className="text-2xl font-bold text-white mb-0.5">24/7</div>
        <div className="text-xs text-white/80 font-medium">Monitoring</div>
        <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-white/20 rounded-full">
          <TrendingUp className="w-2.5 h-2.5 text-white/80" />
          <span className="text-[9px] text-white/80">+24%</span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Thermometer className="w-4 h-4 text-white" />
        </div>
        <div className="text-2xl font-bold text-white mb-0.5">-25°C</div>
        <div className="text-xs text-white/80 font-medium">Minimum Temp</div>
        <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-white/20 rounded-full">
          <span className="text-[9px] text-white/80">Precision</span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Shield className="w-4 h-4 text-white" />
        </div>
        <div className="text-2xl font-bold text-white mb-0.5">100%</div>
        <div className="text-xs text-white/80 font-medium">Quality Assurance</div>
        <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-white/20 rounded-full">
          <span className="text-[9px] text-white/80">Certified</span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
          <Globe className="w-4 h-4 text-white" />
        </div>
        <div className="text-2xl font-bold text-white mb-0.5">Global</div>
        <div className="text-xs text-white/80 font-medium">Coverage</div>
        <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-white/20 rounded-full">
          <span className="text-[9px] text-white/80">50+ Countries</span>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* Overview Section */}
      <section ref={sectionRef} className="py-16 md:py-20 bg-white">
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
                Premium <span className="text-[#041367]">Reefer Solutions</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hanjin Shipping has a full range of reefer services, providing professional handling of 
                  <span className="font-semibold text-gray-800"> perishable commodities</span> with on-time delivery 
                  to its final destination anywhere in the world.
                </p>
                <p>
                  Built and specially designed to accommodate frozen and chilled products, refrigerated containers 
                  are well equipped for safe environmental conditions, imposed by rail, road and sea.
                </p>
                <div className="bg-[#041367]/5 rounded-lg p-4 border-l-4 border-[#041367]">
                  <p className="text-sm text-gray-700 italic flex items-start gap-2">
                    <Snowflake className="w-4 h-4 text-[#041367] mt-0.5 flex-shrink-0" />
                    "All reefer units are equipped with both microprocessor controller and mechanical partlow chart. 
                    With 24-Hour monitoring and inspection afloat or onshore, it ensures proper temperature control 
                    while maintaining optimum quality conditions during voyage."
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/re2.png"
                  alt="Reefer Container"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041367]/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Controlled Atmosphere Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="order-2 lg:order-1 relative h-[300px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/tech.png"
                alt="CA Container"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041367]/30 to-transparent" />
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Innovation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Controlled <span className="text-[#041367]">Atmosphere (CA)</span> Technology
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In order to meet our customers' diverse requirements, we own 
                  <span className="font-semibold text-gray-800"> Controlled Atmosphere (CA) containers</span> that 
                  maintain the ideal atmosphere for delicate agricultural products.
                </p>
                <p>
                  HJS's CA containers allow produce to arrive in excellent condition to far away destinations and 
                  prolong the shelf life for perishable commodities.
                </p>
                <p>
                  Hanjin Shipping ensures the utmost care and expertise of reefer cargoes by 
                  <span className="font-semibold text-gray-800"> qualified personnel both on land and sea</span> 
                  to provide the best quality service to its customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Temperature Guide Section - With Background Image Overlay */}
{/* Temperature Guide Section - No section bg image, only cards have images */}
<section className="py-16 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="text-center mb-10"
    >
      <div className="inline-flex items-center gap-2 mb-3 bg-[#041367]/10 px-4 py-1.5 rounded-full">
        <Thermometer className="w-4 h-4 text-[#041367]" />
        <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Temperature Guide</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Recommended <span className="text-[#041367]">Temperature Settings</span>
      </h2>
      <div className="w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Optimal temperature ranges for different product types
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {temperatureRanges.map((item, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
        >
          {/* Card Background Image */}
          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.product}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
          </div>
          <div className="relative p-6 text-center z-10">
            <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
              <div className="text-white">
                {item.icon}
              </div>
            </div>
            <h3 className="font-bold text-white text-base mb-2">{item.product}</h3>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              {item.temp}
            </div>
            <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur rounded-full">
              <Thermometer className="w-3 h-3 text-white/80" />
              <span className="text-[10px] text-white/80">Optimal Range</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Characteristics Grid - Modern & Eye Catching */}
<section className="py-16 bg-white relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#041367]/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-2 mb-3 bg-[#041367]/10 px-4 py-1.5 rounded-full">
        <Gauge className="w-4 h-4 text-[#041367]" />
        <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Specifications</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Service <span className="text-[#041367]">Characteristics</span>
      </h2>
      <div className="w-20 h-0.5 bg-gradient-to-r from-[#041367] to-transparent mx-auto rounded-full"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Advanced reefer container features ensuring optimal cargo condition
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characteristics.map((item, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#041367] to-[#041367]/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#041367]/10 rounded-xl flex items-center justify-center group-hover:bg-[#041367] transition-all duration-300">
                <div className="text-[#041367] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-800 text-base group-hover:text-[#041367] transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed pl-16">{item.desc}</p>
          </div>
          
          {/* Bottom Decorative Line */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#041367]/5 to-transparent rounded-tl-full" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Handling Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-[#041367] rounded-full"></div>
                <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">Guidelines</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Handling <span className="text-[#041367]">Information</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Essential guidelines for proper reefer cargo handling and transportation
              </p>
              <div className="space-y-3">
                {handlingInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                  >
                    <CheckCircle className="w-4 h-4 text-[#041367] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{info}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#041367] to-[#041367]/90 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5" />
                  <h3 className="text-xl font-bold">Shelf Life & Transit Time</h3>
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Shelf lifetime for every perishable good in coordination with transit time should be considered 
                  prior to booking details of reefer service.
                </p>
                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-white/80" />
                    <span className="text-sm font-semibold">Key Consideration</span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Product condition at the time of stuffing determines its condition at destination. 
                    Proper pre-cooling and temperature maintenance before cargo-stuffing is essential.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Row */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {[
           
              { text: "24/7 Monitoring", icon: <Clock className="w-4 h-4" /> },
              { text: "Global Network", icon: <Globe className="w-4 h-4" /> },
              { text: "Expert Support", icon: <Users className="w-4 h-4" /> },
              { text: "Environment Friendly", icon: <Leaf className="w-4 h-4" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
                <div className="text-[#041367]">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/global.avif"
            alt="Shipping Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041367]/95 to-[#041367]/85" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex mx-auto mb-4"
            >
              <Snowflake className="w-12 h-12 text-white/80" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need Reefer Container Services?
            </h3>
            <p className="text-white/80 mb-6 text-sm max-w-2xl mx-auto">
              Contact our team for specialized refrigerated shipping solutions
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