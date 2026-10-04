"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileText, 
  BookOpen, 
  Truck, 
  FileCheck, 
  MapPin, 
  PackageCheck,
  ArrowRight,
  Clock,
  Shield,
  Headphones,
  CheckCircle,
  Ship,
  TrendingUp,
  Calendar,
  Users,
  Globe,
  Award,
  Zap,
  BarChart3,
  ChevronRight,
  Circle
} from "lucide-react";

const steps = [
  { 
    number: '01', 
    title: 'Request a Quote', 
    desc: 'Submit your shipment details and receive a competitive quote within hours.',
    fullDesc: 'Share information about your cargo, destination, and timeline. Our experts analyze your requirements and provide a customized quote with competitive rates.',
    icon: <FileText className="w-6 h-6" />,
    category: 'Planning',
    timeEstimate: '2-4 hours',
    successRate: '95%',
    color: '#FF6B35',
    bgGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)'
  },
  { 
    number: '02', 
    title: 'Book Your Shipment', 
    desc: 'Confirm your booking with flexible payment options and secure your space.',
    fullDesc: 'Select your preferred shipping options, choose insurance coverage, and complete your booking with our secure payment system.',
    icon: <BookOpen className="w-6 h-6" />,
    category: 'Booking',
    timeEstimate: '30 minutes',
    successRate: '100%',
    color: '#4A90E2',
    bgGradient: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)'
  },
  { 
    number: '03', 
    title: 'Pickup & Consolidation', 
    desc: 'We collect your cargo and consolidate for maximum efficiency.',
    fullDesc: 'Our logistics team schedules pickup at your location, carefully loads your cargo, and consolidates with other shipments for optimal routing.',
    icon: <Truck className="w-6 h-6" />,
    category: 'Operations',
    timeEstimate: '24-48 hours',
    successRate: '98%',
    color: '#50C878',
    bgGradient: 'linear-gradient(135deg, #50C878 0%, #3DAF63 100%)'
  },
  { 
    number: '04', 
    title: 'Customs Clearance', 
    desc: 'Expert documentation handling for smooth customs processing.',
    fullDesc: 'Our customs specialists prepare and submit all required documentation, ensuring compliance and minimizing delays at border crossings.',
    icon: <FileCheck className="w-6 h-6" />,
    category: 'Compliance',
    timeEstimate: '1-3 days',
    successRate: '99%',
    color: '#9B59B6',
    bgGradient: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)'
  },
  { 
    number: '05', 
    title: 'Track in Real-Time', 
    desc: 'Monitor your shipment with live GPS tracking and ETA updates.',
    fullDesc: 'Access our tracking portal 24/7 to see your shipment\'s exact location, receive automated updates, and get accurate arrival predictions.',
    icon: <MapPin className="w-6 h-6" />,
    category: 'Monitoring',
    timeEstimate: 'Continuous',
    successRate: 'Live 24/7',
    color: '#E74C3C',
    bgGradient: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)'
  },
  { 
    number: '06', 
    title: 'Delivery & Confirmation', 
    desc: 'Safe delivery with digital proof of receipt and follow-up.',
    fullDesc: 'Your cargo is delivered to the final destination with digital signature confirmation, followed by customer satisfaction survey.',
    icon: <PackageCheck className="w-6 h-6" />,
    category: 'Completion',
    timeEstimate: '1 day',
    successRate: '100%',
    color: '#1ABC9C',
    bgGradient: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)'
  },
];

export default function ShippingProcess() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const metrics = [
    { icon: <Clock className="w-5 h-5" />, value: "2-5 Days", label: "Average Transit", trend: "+12% faster" },
    { icon: <Globe className="w-5 h-5" />, value: "50+", label: "Countries Served", trend: "Global network" },
    { icon: <Users className="w-5 h-5" />, value: "10K+", label: "Happy Customers", trend: "98% satisfaction" },
    { icon: <Award className="w-5 h-5" />, value: "99.5%", label: "On-Time Delivery", trend: "Industry leading" }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#041367] to-blue-500 rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#041367]/10 to-blue-500/10 rounded-full mb-4"
          >
            <Zap className="w-4 h-4 text-[#041367]" />
            <span className="text-[#041367] font-semibold text-sm uppercase tracking-wider">6 Simple Steps</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Ship Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#041367] to-blue-600 block mt-2">
              Cargo Around The World
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A transparent, efficient process designed to move your goods from origin to destination seamlessly
          </p>
        </motion.div>

        {/* Main Interactive Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Left Side - Step Details with Progress */}
          <div>
        {/* Step Navigation - With Arrows */}
<div className="flex items-center justify-between mb-8">
  {steps.map((step, index) => (
    <React.Fragment key={index}>
      <motion.button
        onClick={() => setActiveStep(index)}
        className={`text-sm font-medium transition-all duration-200 pb-2 ${
          activeStep === index
            ? 'text-[#041367] border-b-2 border-[#041367]'
            : 'text-gray-400 hover:text-gray-600'
        }`}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="whitespace-nowrap">
          {step.title.split(' ')[0]}
        </span>
      </motion.button>
      
      {/* Arrow between steps */}
      {index < steps.length - 1 && (
        <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
      )}
    </React.Fragment>
  ))}
</div>

            {/* Active Step Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                {/* Color Bar */}
                <div className="h-2" style={{ background: steps[activeStep].color }} />
                
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-3">
                        <span className="text-xs font-medium text-gray-600">STEP {steps[activeStep].number}</span>
                        <span className="text-xs text-gray-400">/ {steps.length}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg"
                      style={{ background: steps[activeStep].bgGradient }}
                    >
                      {steps[activeStep].icon}
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {steps[activeStep].desc}
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {steps[activeStep].fullDesc}
                    </p>
                  </div>
                  
                  {/* Step Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <Clock className="w-5 h-5 text-[#041367]" />
                      <div>
                        <p className="text-xs text-gray-500">Time Estimate</p>
                        <p className="font-semibold text-gray-900">{steps[activeStep].timeEstimate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <BarChart3 className="w-5 h-5 text-[#041367]" />
                      <div>
                        <p className="text-xs text-gray-500">Success Rate</p>
                        <p className="font-semibold text-gray-900">{steps[activeStep].successRate}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        activeStep === 0 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'border border-gray-300 text-gray-700 hover:border-[#041367] hover:text-[#041367]'
                      }`}
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                      disabled={activeStep === steps.length - 1}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        activeStep === steps.length - 1 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'bg-[#041367] text-white hover:bg-[#041367]/90'
                      }`}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Enhanced Tracking Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Journey Progress</h3>
              
              {/* Enhanced Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full" />
                <div 
                  className="absolute left-6 top-0 w-0.5 bg-[#041367] rounded-full transition-all duration-500"
                  style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
                
                {/* Steps */}
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-start gap-4 cursor-pointer group`}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Node */}
                      <div className="relative z-10">
                        <motion.div
                          animate={{
                            scale: index === activeStep ? [1, 1.2, 1] : 1,
                            backgroundColor: index <= activeStep ? steps[activeStep].color : '#E5E7EB'
                          }}
                          transition={{ duration: 0.5, repeat: index === activeStep ? 2 : 0 }}
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                          style={{ 
                            backgroundColor: index <= activeStep ? step.color : '#E5E7EB',
                            boxShadow: index === activeStep ? `0 0 0 4px ${step.color}20` : 'none'
                          }}
                        >
                          {index < activeStep ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <span className="text-sm font-bold text-white">{index + 1}</span>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold transition-colors ${
                            index === activeStep ? 'text-[#041367]' : 'text-gray-700'
                          }`}>
                            {step.title}
                          </h4>
                          {index === activeStep && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="px-2 py-0.5 bg-[#041367]/10 rounded-full"
                            >
                              <span className="text-[10px] text-[#041367] font-medium">Current</span>
                            </motion.div>
                          )}
                          {index < activeStep && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{step.category}</p>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: index === activeStep ? '100%' : '0%' }}
                          className="h-0.5 bg-[#041367] rounded-full mt-2"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Progress Percentage */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm font-bold text-[#041367]">{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#041367] to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{activeStep + 1} of {steps.length} steps completed</p>
              </div>
            </div>
          </motion.div>
        </div>


     

      </div>
    </section>
  );
}