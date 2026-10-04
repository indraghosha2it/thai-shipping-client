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
  Zap,
  Wind
} from "lucide-react";

export default function OpenTopContainerPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedContainer, setSelectedContainer] = useState(null);

  const containerTypes = [
    {
      id: 0,
      name: "20FT OPEN TOP CONTAINER",
      shortName: "20' Open Top",
      tabId: "20ft",
      tagline: "Flexible Loading for Oversized Cargo",
      color: "#2563EB",
      bgGradient: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
      specs: {
        interior: { l: "5,898 mm", w: "2,346 mm", h: "2,354 mm" },
        door: { w: "2,338 mm", h: "2,244 mm" },
        capacity: "32.6 CBM",
        cargoLoadable: "21,550 KG",
        payload: "2,450 KG",
        grossWeight: "24,000 KG"
      },
      features: ["Removable Top", "Oversized Cargo", "Heavy Load", "Tarpaulin Cover"],
      icon: <Wind className="w-6 h-6" />,
      image: "/images/open.jpg"
    },
    {
      id: 1,
      name: "40FT OPEN TOP CONTAINER",
      shortName: "40' Open Top",
      tabId: "40ft",
      tagline: "Maximum Flexibility for Tall Cargo",
      color: "#059669",
      bgGradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
      specs: {
        interior: { l: "12,022 mm", w: "2,346 mm", h: "2,381 mm" },
        door: { w: "2,337 mm", h: "2,244 mm" },
        capacity: "66.4 CBM",
        cargoLoadable: "26,460 KG",
        payload: "4,020 KG",
        grossWeight: "30,480 KG"
      },
      features: ["Full Top Opening", "Top Loading", "Side Access", "Waterproof Cover"],
      icon: <Wind className="w-6 h-6" />,
      image: "/images/40ft.jpg"
    }
  ];

  // Organize containers: Row1: 2 cards (since only 2 containers)
  const row1Containers = containerTypes.slice(0, 2);

  // Tabs
  const tabs = [
    { id: "all", name: "All Containers", icon: <Grid3x3 className="w-4 h-4" />, count: containerTypes.length },
    { id: "20ft", name: "20FT Open Top", icon: <Square className="w-4 h-4" />, count: 1, shortName: "20'" },
    { id: "40ft", name: "40FT Open Top", icon: <Square className="w-4 h-4" />, count: 1, shortName: "40'" }
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
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              {container.icon}
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-white text-xs font-semibold">{container.shortName}</p>
          </div>
        </div>
        
        {/* Content Section - Bottom */}
        <div className="p-5">
          <h3 className="font-bold text-gray-800 text-base mb-2">{container.name}</h3>
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
                  {feature}
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
            src="/images/optop.jpg"
            alt="Open Top Container"
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
                <span className="text-white/70 text-sm tracking-wider">Open Top Container</span>
              </div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur px-4 py-2 rounded-full"
              >
                <Wind className="w-4 h-4 text-white" />
                <span className="text-white/90 text-xs tracking-wider">Flexible Loading Solutions</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Open Top
                <span className="text-white/90 block text-2xl md:text-3xl mt-1">Container Specifications</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-2xl">
                Explore our open top containers - ideal for oversized and heavy cargo that requires top loading
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
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
                              <div><p className="text-xs opacity-80">Max Payload</p><p className="text-xl font-bold">{activeContainer.specs.cargoLoadable}</p></div>
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
              { icon: <Wind className="w-5 h-5" />, title: "Top Loading", value: "Removable Roof" },
              { icon: <Truck className="w-5 h-5" />, title: "Global Network", value: "50+ Countries" },
              { icon: <Shield className="w-5 h-5" />, title: "Heavy Duty", value: "Up to 26,460 KG" },
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
          <Wind className="w-16 h-16 text-white/80 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Open Top Container Solutions?</h3>
          <p className="text-white/80 mb-6 text-sm max-w-2xl mx-auto">Contact our team for oversize cargo shipping solutions</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact"><button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#041367] rounded-lg font-semibold text-sm hover:shadow-xl transition-all">Contact Us<ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="/request-quote"><button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur border border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-all">Request a Quote</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}