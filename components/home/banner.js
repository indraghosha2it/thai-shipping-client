
// "use client";

// import { useState, useEffect } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Ship, Plane, Truck, ArrowRight, Globe, Clock, Shield, Anchor, Package, Box } from 'lucide-react';
// import Link from 'next/link';

// const HeroBanner = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   // Single background image for hero
//   const heroBackground = {
//     image: "/images/banner.jpg",
//     title: "Hanjin Shipping Thailand",
//     subtitle: "Your Trusted Partner in Global Maritime Logistics",
//     description: "Providing comprehensive shipping solutions with decades of excellence serving Thailand and international markets."
//   };

//   const services = [
//     {
//       icon: <Ship className="w-9 h-9" />,
//       title: "Ocean Freight",
//       description: "Full container load (FCL) and less than container load (LCL) services across Asia, America, and Europe routes with real-time tracking.",
//       link: "/services/ocean-freight",
//       bgImage: "/images/ocean.PNG",
//       stats: "50+ Routes"
//     },
//     {
//       icon: <Plane className="w-9 h-9" />,
//       title: "Air Freight",
//       description: "Express air cargo solutions for time-sensitive shipments with temperature-controlled options for pharmaceuticals and perishables.",
//       link: "/services/air-freight",
//       bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format",
//       stats: "24/7 Service"
//     },
//     {
//       icon: <Truck className="w-9 h-9" />,
//       title: "Cargo & Logistics",
//       description: "End-to-end supply chain management including warehousing, customs clearance, and door-to-door delivery solutions.",
//       link: "/services/cargo-freight",
//       bgImage: "/images/cargo.avif",
//       stats: "100% Reliable"
//     }
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     })
//   };

//   return (
//     <section ref={sectionRef} className="relative overflow-hidden -mt-20">
//       {/* Hero Section - Content at TOP */}
//       <div className="relative h-[60vh] min-h-[514px] md:h-[65vh] lg:h-[70vh]">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${heroBackground.image})`, backgroundPosition: "center 30%" }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/40" />
//         </div>

//         {/* Hero Content - STRICTLY AT TOP */}
//         <div className="relative h-full -mt-10">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full h-full">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-3xl pt-16 md:pt-20 lg:pt-24"
//             >
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="w-20 h-1 bg-[#041367] mb-6"
//               />
//               <motion.h1 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
//               >
//                 {heroBackground.title}
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="text-base md:text-lg text-blue-100 mb-2 font-semibold"
//               >
//                 {heroBackground.subtitle}
//               </motion.p>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-sm md:text-base text-gray-200 mb-6 max-w-2xl"
//               >
//                 {heroBackground.description}
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//                 className="flex flex-col sm:flex-row gap-3"
//               >
//                 <Link href="/tracking-number">
//                   <button className="group px-6 py-2.5 bg-[#041367] text-white rounded-lg font-semibold hover:bg-[#041367]/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl text-sm">
//                     Track Shipment
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </Link>
//                 <Link href="/contact">
//                   <button className="group px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-2 text-sm">
//                     Get Quote
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

      
//       </div>

//       {/* Services Cards Section */}
// <div className="relative -mt-20 md:-mt-24 lg:-mt-36 pb-2 md:pb-2 z-20">

//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 custom={index}
//                 initial="hidden"
//                 animate={controls}
//                 variants={cardVariants}
//                 whileHover={{ y: -4 }}
//                 className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
//                 style={{ height: '280px' }}
//                 onClick={() => window.location.href = service.link}
//               >
//                 {/* Background Image */}
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                   style={{ backgroundImage: `url(${service.bgImage})` }}
//                 >
//                   {/* Dark Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-black/95 group-hover:via-black/80 transition-all duration-300" />
//                 </div>
                
//                 {/* Card Content - Compact */}
//                 <div className="relative h-full flex flex-col justify-between p-4">
//                   <div>
//                     {/* Icon */}
//                     <div className="mb-3">
//                       <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20">
//                         {service.icon}
//                       </div>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-base md:text-lg font-bold text-white mb-1.5 group-hover:text-[#041367] transition-colors duration-300">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-200 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-xs md:text-sm mb-2">
//                       {service.description}
//                     </p>

//                     {/* Stats Badge */}
//                     <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                       <Anchor className="w-2.5 h-2.5 text-[#041367]" />
//                       <span className="text-xs text-white/90">{service.stats}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative Corner */}
//                 <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500" />
//               </motion.div>
//             ))}
//           </div>

//           {/* Stats Section Below Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={controls}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-10 pt-5 border-t border-gray-200"
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//               <div>
//                 <div className="flex items-center justify-center gap-2 mb-1">
//                   <Globe className="w-4 h-4 text-[#041367]" />
//                   <span className="text-lg md:text-xl font-bold text-gray-900">50+</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Global Destinations</p>
//               </div>
//               <div>
//                 <div className="flex items-center justify-center gap-2 mb-1">
//                   <Clock className="w-4 h-4 text-[#041367]" />
//                   <span className="text-lg md:text-xl font-bold text-gray-900">30+</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Years of Excellence</p>
//               </div>
//               <div>
//                 <div className="flex items-center justify-center gap-2 mb-1">
//                   <Shield className="w-4 h-4 text-[#041367]" />
//                   <span className="text-lg md:text-xl font-bold text-gray-900">100%</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Secure Shipping</p>
//               </div>
//               <div>
//                 <div className="flex items-center justify-center gap-2 mb-1">
//                   <Package className="w-4 h-4 text-[#041367]" />
//                   <span className="text-lg md:text-xl font-bold text-gray-900">500K+</span>
//                 </div>
//                 <p className="text-xs text-gray-600">Containers Handled</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const hero = {
  image: "/images/banner.jpg",
  title: "Thailand Import, Export & Shipping",
  subtitle:
    "Reliable shipping, trade, and logistics information connecting Thailand with the world.",
};

const companyLogos = [
  { name: "Company One", src: "/images/clogo1.png" },
  { name: "Company Two", src: "/images/clogo3.png" },
  { name: "Company Three", src: "/images/clogo4.png" },
  { name: "Company Four", src: "/images/clogo2.jpg" },
  { name: "Company Five", src: "/images/clogo5.png" },
  { name: "Company Six", src: "/images/clogo6.png" },
];

const HeroBanner = () => {
  const reduceMotion = useReducedMotion();

  // One orchestrated entrance: children rise in sequence, then stop.
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  // Duplicate the logos so the marquee loops seamlessly
  const marqueeLogos = [...companyLogos, ...companyLogos];

  return (
    <>
      {/* Keyframes for the infinite horizontal scroll */}
      <style jsx global>{`
        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .logo-marquee-track {
          animation: logo-marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* ================= HERO BANNER (unchanged) ================= */}
      <section className="relative overflow-hidden -mt-20" aria-label="Introduction">
        <div className="relative min-h-[600px] h-[80vh] md:h-[85vh] lg:h-[90vh]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${hero.image})`, backgroundPosition: "center 40%" }}
            aria-hidden="true"
          />

          {/* Soft shade only behind the text; the rest of the image stays untouched */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 78%)',
            }}
            aria-hidden="true"
          />

          {/* Content - centered */}
          <div className="relative h-full mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center pt-20 pb-16 ">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto text-center flex flex-col items-center"
            >
              <motion.div variants={item} className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#E96C35]" aria-hidden="true" />
                <span className="text-sm font-medium text-white/85">
                  Thailand · Global trade · Logistics
                </span>
                <span className="h-px w-8 bg-[#E96C35]" aria-hidden="true" />
              </motion.div>

              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-white leading-[1.08] tracking-tight text-balance drop-shadow-md"
              >
                {hero.title}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/85 drop-shadow"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/tracking-number"
                  className="group inline-flex items-center gap-3 rounded-md bg-[#E96C35] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#d55f2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Track Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* ================= LOGISTIC COMPANIES ================= */}
<section
  className="relative  bg-[#FAFAF8] py-7 sm:py-8 md:py-4"
  aria-label="Logistic companies"
>
  <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-9">

      {/* ================= LEFT: PREMIUM LABEL ================= */}
      <div className="flex shrink-0 items-center justify-center md:justify-start">
        <div className="flex items-center gap-4">

          {/* Orange accent line */}
          {/* <span
            className="h-11 w-[3px] rounded-full bg-[#E96C35]"
            aria-hidden="true"
          /> */}

          <div className="flex flex-col">

            {/* Small eyebrow */}
            <span className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8A8F8A] sm:text-[10px]">
              Our Network
            </span>

            {/* Main title */}
            <p className="text-[17px] font-semibold leading-tight tracking-[-0.02em] sm:text-[19px]">
              <span className="text-[#073155]">Logistic</span>
              <span className="ml-1.5 text-[#E96C35]">
                Companies
              </span>
            </p>

            {/* Supporting text */}
            <span className="mt-1 text-[10px] font-medium text-[#9A9D99] sm:text-[11px]">
              Trusted logistics partners
            </span>

            

          </div>

            <span
            className="h-11 w-[3px] rounded-full bg-[#E96C35]"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ================= RIGHT: INFINITE LOGO MARQUEE ================= */}
      <div className="relative min-w-0 flex-1 overflow-hidden">

        {/* Left fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-16"
          style={{
            background:
              "linear-gradient(to right, #FAFAF8, rgba(250,250,248,0))",
          }}
          aria-hidden="true"
        />

        {/* Right fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-16"
          style={{
            background:
              "linear-gradient(to left, #FAFAF8, rgba(250,250,248,0))",
          }}
          aria-hidden="true"
        />

        {/* Marquee viewport */}
        <div className="overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-10 py-2 md:gap-14">

            {marqueeLogos.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-10 w-32 shrink-0 items-center justify-center sm:h-12 sm:w-36 md:h-14 md:w-40"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="h-full w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
};

export default HeroBanner;