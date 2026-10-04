// "use client";
// import React, { useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { 
//   Shield, 
//   Clock, 
//   Globe, 
//   Headphones, 
//   Ship, 
//   Award,
//   TrendingUp,
//   Users,
//   MapPin,
//   CheckCircle,
//   ArrowRight,
//   Star,
//   Truck,
//   Package
// } from "lucide-react";

// export default function WhyChooseUs() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

//   const features = [
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Global Network",
//       description: "50+ countries connected with reliable shipping routes",
//       stat: "50+",
//       statLabel: "Countries",
//       color: "from-blue-500 to-cyan-500",
//       image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format"
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "24/7 Support",
//       description: "Round-the-clock customer service for all your needs",
//       stat: "24/7",
//       statLabel: "Availability",
//       color: "from-orange-500 to-red-500",
//       image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format"
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Secure Shipping",
//       description: "100% cargo protection with real-time monitoring",
//       stat: "100%",
//       statLabel: "Secure",
//       color: "from-green-500 to-emerald-500",
//       image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "99.5% On-Time",
//       description: "Industry-leading delivery performance",
//       stat: "99.5%",
//       statLabel: "On-Time",
//       color: "from-purple-500 to-pink-500",
//       image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <section ref={sectionRef} className="relative py-10 md:py-10 overflow-hidden">
      
//       {/* Background Image Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format')] bg-cover bg-center bg-fixed opacity-5" />
//         <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="flex justify-center mb-3">
//             <div className="w-12 h-0.5 bg-gradient-to-r from-[#041367] to-blue-500 rounded-full"></div>
//           </div>
          
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : { scale: 0 }}
//             transition={{ type: "spring", delay: 0.2 }}
//             className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#041367]/10 to-blue-500/10 rounded-full mb-3"
//           >
//             <Award className="w-3 h-3 text-[#041367]" />
//             <span className="text-[#041367] font-semibold text-xs uppercase tracking-wider">Why Choose Us</span>
//           </motion.div>
          
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
//             Your Trusted Partner in
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#041367] to-blue-600 block mt-1">
//               Global Logistics
//             </span>
//           </h2>
          
//           <p className="text-gray-500 max-w-2xl mx-auto text-sm">
//             With decades of experience, we deliver excellence in every shipment
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               {/* Background Image on Hover */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#041367]/90 to-blue-900/90" />
//               </div>
              
//               {/* Content */}
//               <div className="relative p-6 text-center z-10">
//                 {/* Icon */}
//                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   {feature.icon}
//                 </div>
                
//                 {/* Stat Number */}
//                 <div className="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
//                   {feature.stat}
//                 </div>
//                 <div className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300 mb-2">
//                   {feature.statLabel}
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
//                   {feature.title}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
//         >
//           {[
//             { value: "25+", label: "Years of Excellence", icon: <Award className="w-5 h-5" /> },
//             { value: "10K+", label: "Happy Customers", icon: <Users className="w-5 h-5" /> },
//             { value: "500K+", label: "Containers Handled", icon: <Package className="w-5 h-5" /> },
//             { value: "50+", label: "Global Destinations", icon: <MapPin className="w-5 h-5" /> }
//           ].map((stat, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -3 }}
//               className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm border border-gray-100"
//             >
//               <div className="w-10 h-10 bg-gradient-to-br from-[#041367]/10 to-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-2">
//                 <div className="text-[#041367]">{stat.icon}</div>
//               </div>
//               <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
//               <div className="text-xs text-gray-500">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Banner with Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="relative rounded-2xl overflow-hidden"
//         >
//           <div className="absolute inset-0">
//             <Image
//               src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format"
//               alt="Shipping Container"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#041367] to-[#041367]/80" />
//           </div>
          
//           <div className="relative p-8 md:p-10 text-center text-white">
//             <Ship className="w-12 h-12 mx-auto mb-4 opacity-80" />
//             <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to Experience Excellence?</h3>
//             <p className="text-white/80 text-sm mb-6 max-w-2xl mx-auto">
//               Join thousands of satisfied customers who trust us with their shipping needs
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <Link href="/contact">
//                 <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#041367] rounded-lg font-semibold hover:shadow-xl transition-all duration-300 text-sm">
//                   Get a Quote
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </Link>
//               <Link href="/services">
//                 <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 text-sm">
//                   Explore Services
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>

//         {/* Trust Badges */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="flex flex-wrap justify-center gap-6 mt-10"
//         >
//           {[
//             { icon: <Shield className="w-4 h-4" />, text: "ISO Certified" },
//             { icon: <CheckCircle className="w-4 h-4" />, text: "100% Secure" },
//             { icon: <Star className="w-4 h-4" />, text: "5 Star Rating" },
//             { icon: <Truck className="w-4 h-4" />, text: "Real-time Tracking" }
//           ].map((badge, idx) => (
//             <div key={idx} className="flex items-center gap-1.5 text-gray-500 text-xs">
//               <div className="text-[#041367]">{badge.icon}</div>
//               <span>{badge.text}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  FileCheck2,
  Ship,
  SearchCheck,
  ArrowUpRight,
  ShieldCheck,
  ClipboardCheck,
  Globe2,
} from "lucide-react";
import Link from "next/link";

const regulationPoints = [
  {
    icon: AlertTriangle,
    title: "Prohibited goods",
    text: "Some goods cannot legally be imported or exported through Thailand.",
  },
  {
    icon: FileCheck2,
    title: "Restricted goods",
    text: "Certain products require permits, approvals, or supporting documents.",
  },
  {
    icon: Ship,
    title: "Shipping method",
    text: "Requirements can vary for air, sea, road, and other transport methods.",
  },
  {
    icon: SearchCheck,
    title: "Check before shipping",
    text: "Review customs rules and product restrictions before dispatch.",
  },
];

const checklist = [
  "Confirm product restrictions",
  "Prepare required documents",
  "Review customs requirements",
  "Choose the right shipping method",
];

export default function KnowBeforeShip() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12"
      aria-labelledby="shipping-regulations-heading"
    >
      {/* ================= SECTION BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/ship.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 -z-10 bg-[#041B30]/70"
        aria-hidden="true"
      />

      {/* Orange glow */}
      <div
        className="pointer-events-none absolute -right-32 top-[-120px] -z-10 h-[320px] w-[320px] rounded-full bg-[#E96C35]/10 blur-[90px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {/* ================= HEADING (compact) ================= */}
          <motion.div variants={item} className="mb-5 max-w-3xl sm:mb-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E96C35]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F2A57C] sm:text-[11px]">
                Shipping regulations
              </span>
            </div>

            <h2
              id="shipping-regulations-heading"
              className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[42px]"
            >
              Know before{" "}
              <span className="text-[#F0804F]">you ship.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-[13px] leading-6 text-white/70 sm:text-sm">
              Shipping goods to or from Thailand involves customs rules,
              product restrictions, permits, and documentation. Review the
              essentials before your shipment moves.
            </p>
          </motion.div>

          {/* ================= 3-PANEL GRID ================= */}
          <div className="grid items-stretch gap-4 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
            {/* ---------- Intro panel ---------- */}
            <motion.div
              variants={item}
              className="relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#0B3151] p-5 shadow-xl sm:p-6"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/shipping-regulations-bg.jpg')",
                }}
                aria-hidden="true"
              />

              <div
                className="absolute inset-0 bg-gradient-to-br from-[#06213A]/90 via-[#073155]/80 to-[#03182B]/90"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-[#E96C35]/20 blur-[70px]"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E96C35] text-white">
                  <Globe2 size={18} strokeWidth={1.8} />
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F2A57C]">
                  Shipping compliance
                </p>

                <h3 className="mt-1.5 max-w-xs text-lg font-semibold leading-snug text-white sm:text-xl">
                  Prepare every shipment with confidence.
                </h3>

                <p className="mt-2.5 max-w-sm text-[13px] leading-5 text-white/70">
                  Requirements may depend on the product, destination, and
                  transport method.
                </p>
              </div>

              <div className="relative mt-5 border-t border-white/20 pt-3.5">
                <div className="flex items-center gap-2.5 text-white/70">
                  <ShieldCheck
                    className="h-4 w-4 shrink-0 text-[#F0804F]"
                    strokeWidth={1.8}
                  />
                  <span className="text-[11px] font-medium">
                    Customs, compliance, documentation
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ---------- Regulation points ---------- */}
            <motion.div
              variants={item}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B3960]/95 p-5 shadow-2xl backdrop-blur-sm sm:p-6"
            >
              <div className="absolute left-0 right-0 top-0 h-1 bg-[#E96C35]" />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F2A57C]">
                    Before you ship
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    Key considerations
                  </h3>
                </div>

                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] sm:flex">
                  <ClipboardCheck
                    className="h-4.5 w-4.5 text-[#F0804F]"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              <div className="mt-3.5 grid gap-x-5 sm:grid-cols-2">
                {regulationPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.title}
                      className="group border-t border-white/10 py-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/75 transition-colors group-hover:border-[#E96C35]/60 group-hover:bg-[#E96C35] group-hover:text-white">
                          <Icon size={15} strokeWidth={1.7} />
                        </div>

                        <span className="text-[11px] font-semibold tabular-nums text-white/25">
                          0{index + 1}
                        </span>
                      </div>

                      <h4 className="mt-2.5 text-[13px] font-semibold text-white">
                        {point.title}
                      </h4>

                      <p className="mt-1 text-[11.5px] leading-5 text-white/55 sm:text-xs">
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* ---------- Checklist panel ---------- */}
            <motion.div
              variants={item}
              className="relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-2xl border border-[#E5E8E6] bg-[#F7F8F6] p-5 shadow-xl sm:p-6"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(7,49,85,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,49,85,.04) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D95E2D]">
                  Quick checklist
                </p>

                <h3 className="mt-1.5 text-lg font-semibold leading-snug text-[#073155] sm:text-xl">
                  A few checks before dispatch.
                </h3>

                <p className="mt-2 text-[12.5px] leading-5 text-[#68727A]">
                  Confirm the essentials before handing your shipment to a
                  carrier.
                </p>

                <ul className="mt-3.5 space-y-2">
                  {checklist.map((text, index) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#073155] text-[9px] font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 text-[12.5px] leading-5 text-[#46515A]">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-4 border-t border-[#073155]/10 pt-3.5">
                <Link
                  href="/shipping-regulations"
                  className="group inline-flex w-full items-center justify-between gap-3 rounded-lg bg-[#073155] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#E96C35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E96C35]"
                >
                  <span>Explore regulations</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ================= FOOTER NOTE ================= */}
          <motion.div
            variants={item}
            className="mt-3.5 flex flex-col gap-1.5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
          >
            <p className="text-[11px] leading-5 text-white/45">
              Requirements vary by product, destination, and shipping method.
            </p>

            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35">
              Verify applicable requirements before shipment
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}