"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Ship, 
  Globe, 
  ArrowRight,
  Ruler,
  Weight,
  Package,
  CheckCircle,
  Shield,
  Clock,
  Maximize,
  Minimize,
  Award,
  Truck,
  Grid3x3,
  Square,
  Layers,
  Sparkles,
  Snowflake
} from "lucide-react";

export default function ReeferContainerPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedContainer, setSelectedContainer] = useState(null);

  const containerTypes = [
    {
      id: 0,
      name: "20FT STEEL REEFER CONTAINER",
      shortName: "20' Steel Reefer",
      tabId: "20ft",
      tagline: "Compact Cooling for Perishable Goods",
      color: "#2563EB",
      bgGradient: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
      specs: {
        interior: { l: "5,455 mm", w: "2,290 mm", h: "2,262 mm" },
        door: { w: "2,290 mm", h: "2,227 mm" },
        capacity: "28.3 CBM",
        cargoLoadable: "26.4 CBM",
        payload: "2,960 KG",
        grossWeight: "24,000 KG"
      },
      features: ["Temperature Controlled", "Steel Construction", "Energy Efficient", "Reliable Cooling"],
      icon: <Snowflake className="w-6 h-6" />,
      image: "/images/steel.PNG"
    },
    {
      id: 1,
      name: "40FT ALUM.REEFER CONTAINER",
      shortName: "40' Aluminum Reefer",
      tabId: "40ft",
      tagline: "Lightweight, Superior Temperature Control",
      color: "#059669",
      bgGradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
      specs: {
        interior: { l: "11,556 mm", w: "2,290 mm", h: "2,238 mm" },
        door: { w: "2,290 mm", h: "2,204 mm" },
        capacity: "59.2 CBM",
        cargoLoadable: "55.3 CBM",
        payload: "4,520 KG",
        grossWeight: "32,480 KG"
      },
      features: ["Lightweight", "Corrosion Resistant", "Precise Cooling", "Energy Efficient"],
      icon: <Snowflake className="w-6 h-6" />,
      image: "/images/alm.PNG"
    },
    {
      id: 2,
      name: "40FT H/C ALUM.REEFER CONTAINER",
      shortName: "40' High Cube Alu",
      tabId: "aluminumHC",
      tagline: "Extra Height, Maximum Cooling Efficiency",
      color: "#D97706",
      bgGradient: "linear-gradient(135deg, #78350f 0%, #d97706 100%)",
      specs: {
        interior: { l: "11,585 mm", w: "2,292 mm", h: "2,527 mm" },
        door: { w: "2,290 mm", h: "2,491 mm" },
        capacity: "67.0 CBM",
        cargoLoadable: "64.3 CBM",
        payload: "4,160 KG",
        grossWeight: "32,500 KG"
      },
      features: ["Extra Height", "High Volume", "Advanced Cooling", "Temp: -25°C to +25°C"],
      icon: <Snowflake className="w-6 h-6" />,
      image: "/images/40almref.PNG"
    },
    {
      id: 3,
      name: "40FT H/C STEEL REEFER CONTAINER",
      shortName: "40' High Cube Steel",
      tabId: "steelHC",
      tagline: "Durable Construction, Superior Insulation",
      color: "#7C3AED",
      bgGradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
      specs: {
        interior: { l: "11,583 mm", w: "2,290 mm", h: "2,538 mm" },
        door: { w: "2,290 mm", h: "2,508 mm" },
        capacity: "67.3 CBM",
        cargoLoadable: "63.3 CBM",
        payload: "4,800 KG",
        grossWeight: "32,500 KG"
      },
      features: ["Steel Construction", "Maximum Durability", "Heavy Duty", "Temp: -30°C to +30°C"],
      icon: <Snowflake className="w-6 h-6" />,
      image: "/images/40steel.PNG"
    }
  ];

  // All containers in rows of 2
  const row1Containers = containerTypes.slice(0, 2);
  const row2Containers = containerTypes.slice(2, 4);

  // Tabs
  const tabs = [
    { id: "all", name: "All Containers", icon: <Grid3x3 className="w-4 h-4" />, count: containerTypes.length },
    { id: "20ft", name: "20FT Steel", icon: <Square className="w-4 h-4" />, count: 1, shortName: "20'" },
    { id: "40ft", name: "40FT Aluminum", icon: <Square className="w-4 h-4" />, count: 1, shortName: "40'" },
    { id: "aluminumHC", name: "40FT HC Alum", icon: <Layers className="w-4 h-4" />, count: 1, shortName: "40' HC" },
    { id: "steelHC", name: "40FT HC Steel", icon: <Layers className="w-4 h-4" />, count: 1, shortName: "40' HC" }
  ];

  const getFilteredContainers = () => {
    if (activeTab === "all") return containerTypes;
    return containerTypes.filter(container => container.tabId === activeTab);
  };

  const filteredContainers = getFilteredContainers();
  const activeContainer = filteredContainers.length === 1 ? filteredContainers[0] : null;

  const handleCardClick = (container) => {
    setSelectedContainer(container);
    setActiveTab(container.tabId);
  };

  const handleBackToAll = () => {
    setActiveTab("all");
    setSelectedContainer(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
  };

  // Regular card component (top image, bottom details)
  const RegularCard = ({ container, index }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => handleCardClick(container)}
      className="group relative cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#041367] to-[#041367]/90 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Section - Top */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={container.image}
            alt={container.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
              <Snowflake className="w-5 h-5" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white text-xs font-semibold">{container.shortName}</p>
          </div>
        </div>
        
        {/* Content Section - Bottom */}
        <div className="p-5">
          <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-1">{container.name}</h3>
          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{container.tagline}</p>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-lg p-2 text-center">
              <Package className="w-3 h-3 text-[#041367] mx-auto mb-1" />
              <p className="text-[9px] text-gray-500">Capacity</p>
              <p className="text-xs font-bold">{container.specs.capacity}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2 text-center">
              <Weight className="w-3 h-3 text-[#041367] mx-auto mb-1" />
              <p className="text-[9px] text-gray-500">Max Payload</p>
              <p className="text-xs font-bold">{container.specs.cargoLoadable}</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-1">
              {container.features.slice(0, 2).map((feature, idx) => (
                <span key={idx} className="text-[8px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                  {feature.length > 12 ? feature.slice(0, 10) + '...' : feature}
                </span>
              ))}
            </div>
            <div className="text-[10px] text-[#041367] font-semibold flex items-center gap-1">
              View Details
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[45vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/reffer.jpg"
            alt="Reefer Container"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
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
                <span className="text-white/70 text-sm tracking-wider">Reefer Container</span>
              </div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur px-4 py-2 rounded-full"
              >
                <Snowflake className="w-4 h-4 text-white" />
                <span className="text-white/90 text-xs tracking-wider">Temperature Controlled Containers</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Reefer
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">Container Specifications</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                Explore our complete range of refrigerated containers - from 20FT to 40FT High Cube
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {tabs.map((tab, idx) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? "text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
                style={{
                  background: activeTab === tab.id 
                    ? "linear-gradient(135deg, #041367 0%, #0f2b6e 100%)"
                    : "transparent"
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.shortName || tab.name.split(' ')[0]}</span>
              
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-[#041367]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* All Containers - 2 Cards Per Row */}
          <AnimatePresence mode="wait">
            {activeTab === "all" && (
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
                className="space-y-8"
              >
                {/* Row 1 - 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {row1Containers.map((container, idx) => (
                    <RegularCard key={container.id} container={container} index={idx} />
                  ))}
                </div>

                {/* Row 2 - 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {row2Containers.map((container, idx) => (
                    <RegularCard key={container.id} container={container} index={idx + 2} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Single Container Detailed View */}
            {activeTab !== "all" && activeContainer && (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-5xl mx-auto"
              >
                {/* Back Button */}
                <motion.button
                  onClick={handleBackToAll}
                  className="mb-6 flex items-center gap-2 text-gray-600 hover:text-[#041367] transition-colors"
                  whileHover={{ x: -5 }}
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Back to All Containers
                </motion.button>

                {/* Detailed Container Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={activeContainer.image}
                      alt={activeContainer.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-semibold mb-3">
                        {activeContainer.shortName}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{activeContainer.name}</h2>
                      <p className="text-white/80 text-base">{activeContainer.tagline}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Dimensions */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Ruler className="w-5 h-5 text-[#041367]" />
                          Technical Specifications
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm font-semibold text-gray-700 mb-2">Interior Dimensions</p>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="text-center p-2 bg-white rounded-lg">
                                <p className="text-[10px] text-gray-500">Length</p>
                                <p className="text-sm font-bold">{activeContainer.specs.interior.l}</p>
                              </div>
                              <div className="text-center p-2 bg-white rounded-lg">
                                <p className="text-[10px] text-gray-500">Width</p>
                                <p className="text-sm font-bold">{activeContainer.specs.interior.w}</p>
                              </div>
                              <div className="text-center p-2 bg-white rounded-lg">
                                <p className="text-[10px] text-gray-500">Height</p>
                                <p className="text-sm font-bold">{activeContainer.specs.interior.h}</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm font-semibold text-gray-700 mb-2">Door Opening</p>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="text-center p-2 bg-white rounded-lg">
                                <p className="text-[10px] text-gray-500">Width</p>
                                <p className="text-sm font-bold">{activeContainer.specs.door.w}</p>
                              </div>
                              <div className="text-center p-2 bg-white rounded-lg">
                                <p className="text-[10px] text-gray-500">Height</p>
                                <p className="text-sm font-bold">{activeContainer.specs.door.h}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Weight & Capacity */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Weight className="w-5 h-5 text-[#041367]" />
                          Weight & Capacity
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-[#041367] to-[#041367]/90 rounded-xl p-5 text-white">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div><p className="text-xs opacity-80">Capacity</p><p className="text-2xl font-bold">{activeContainer.specs.capacity}</p></div>
                              <div><p className="text-xs opacity-80">Cargo Loadable</p><p className="text-xl font-bold">{activeContainer.specs.cargoLoadable}</p></div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-4">
                            <div className="space-y-3">
                              <div className="flex justify-between"><span className="text-sm text-gray-600">Container Weight</span><span className="font-bold">{activeContainer.specs.payload}</span></div>
                              <div className="flex justify-between"><span className="text-sm text-gray-600">Max Gross Weight</span><span className="font-bold">{activeContainer.specs.grossWeight}</span></div>
                              <div className="pt-2 border-t border-gray-200">
                                <div className="flex flex-wrap gap-2">
                                  {activeContainer.features.map((feature, idx) => (
                                    <span key={idx} className="text-[10px] px-2 py-1 bg-[#041367]/5 text-[#041367] rounded-full">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { icon: <Shield className="w-5 h-5" />, title: "Temperature Controlled", value: "-30°C to +30°C" },
              { icon: <Truck className="w-5 h-5" />, title: "Global Network", value: "50+ Countries" },
              { icon: <Clock className="w-5 h-5" />, title: "24/7 Monitoring", value: "Real-time Tracking" },
              { icon: <Award className="w-5 h-5" />, title: "ISO Certified", value: "Quality Assured" }
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
                <div className="w-12 h-12 bg-[#041367]/10 rounded-xl flex items-center justify-center mx-auto mb-3">{stat.icon}</div>
                <p className="text-sm font-semibold text-gray-800">{stat.title}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#041367] to-[#041367]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Snowflake className="w-16 h-16 text-white/80 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Reefer Container Solutions?</h3>
          <p className="text-white/80 mb-6 text-sm max-w-2xl mx-auto">Contact our team for refrigerated container bookings</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"><button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#041367] rounded-lg font-semibold text-sm hover:shadow-xl transition-all">Contact Us<ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="/request-quote"><button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all">Request a Quote</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}