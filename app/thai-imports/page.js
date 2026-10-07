

// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import {
//   Ship,
//   Plane,
//   Package,
//   Factory,
//   Cpu,
//   Gem,
//   Leaf,
//   Globe2,
//   ArrowUpRight,
//   Container,
//   Wheat,
//   Fish,
//   TreePine,
//   Boxes,
//   Store,
// } from "lucide-react";
// import Link from "next/link";

// // Hero stats
// const stats = [
//   { label: "Trade Partners", value: "20+" },
//   { label: "Import Categories", value: "15+" },
//   { label: "Natural Resources", value: "10+" },
//   { label: "Years of Trade", value: "50+" },
// ];

// // US → Thailand imports (with bg images)
// const importsFromUS = [
//   { icon: Cpu, label: "Semiconductors", image: "/images/semi.jpg" },
//   { icon: Plane, label: "Civilian Aircraft", image: "/images/aircraft.jpg" },
//   { icon: Factory, label: "Industrial Machines", image: "/images/machine.jpg" },
//   { icon: Boxes, label: "Telecommunications Equipment", image: "/images/tele.jpg" },
//   { icon: Package, label: "Electrical Items", image: "/images/elect.jpg" },
//   { icon: Container, label: "Plastic & Chemicals", image: "/images/plastic.jpg" },
//   { icon: Ship, label: "Petroleum Products", image: "/images/petrol.jpg" },
// ];

// // Thailand → US exports (with bg images)
// const importsToUS = [
//   { icon: Gem, label: "Handicrafts", note: "Largest category", image: "/images/handi.jpg" },
//   { icon: Ship, label: "Aluminum & Tin", image: "/images/tin.jpg" },
//   { icon: Container, label: "Crude Oil", image: "/images/crud.jpg" },
//   { icon: Factory, label: "Mining Equipment", image: "/images/mining.jpg" },
//   { icon: Package, label: "Oil Processing Equipment", image: "/images/oil.jpg" },
//   { icon: Boxes, label: "Leather Working Equipment", image: "/images/leather.jpg" },
//   { icon: Package, label: "Sewing Equipment", image: "/images/swing.jpg" },
//   { icon: Ship, label: "Ships & Vessels", image: "/images/shipim.jpg" },
//   { icon: Gem, label: "Jewelry", image: "/images/jw.jpg" },
//   { icon: Cpu, label: "Computers", image: "/images/comp.jpg" },
// ];

// // Natural resources (with bg images)
// const naturalResources = [
//   { icon: Leaf, label: "Rubber", image: "/images/rubber.jpg" },
//   { icon: Fish, label: "Fish", image: "/images/fish.jpg" },
//   { icon: TreePine, label: "Timber", image: "/images/timber.jpg" },
//   { icon: Package, label: "Lead", image: "/images/lead.jpg" },
// ];

// // Agricultural imports (with bg images)
// const agricultural = [
//   { icon: Wheat, label: "Soybeans", image: "/images/agriculture/soybeans.jpg" },
//   { icon: Wheat, label: "Corn", image: "/images/agriculture/corn.jpg" },
//   { icon: Wheat, label: "Rice", image: "/images/agriculture/rice.jpg" },
//   { icon: Wheat, label: "Tapioca", image: "/images/agriculture/tapioca.jpg" },
// ];

// // Specialized importers (with bg images)
// const specializedImporters = [
//   {
//     name: "My Thai Direct Importers",
//     specialty: "Thai Handicrafts",
//     description:
//       "Specializes in Thai handicrafts, sold throughout the United States.",
//     image: "/images/handi.jpg",
//   },
//   {
//     name: "Thanaka.com",
//     specialty: "Fashion & Home",
//     description:
//       "Specializes in jewelry, handbags, home décor, giftware, and textiles.",
//     image: "/images/imk.jpg",
//   },
// ];

// // Key trade partners
// const tradePartners = ["United States", "Japan", "China", "Malaysia"];

// const ThaiImportsPage = () => {
//   const reduceMotion = useReducedMotion();

//   const container = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.05 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <div className="bg-white -mt-6">
//       {/* ============================================================
//           HERO (reduced height)
//       ============================================================ */}
//     <section
//   className="relative isolate overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12"
//   aria-labelledby="thai-imports-heading"
// >
//   {/* Background image */}
//   <div
//     className="absolute inset-0 -z-20 bg-cover bg-center"
//     style={{ backgroundImage: "url('/images/imban.jpg')" }}
//     aria-hidden="true"
//   />

//   {/* Navy overlay for readability */}
//   <div
//     className="absolute inset-0 -z-10 bg-gradient-to-br from-black/55 via-[#073155]/50 to-black/55"
//     aria-hidden="true"
//   />

//   {/* Soft orange glow */}
//   <div
//     className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-[#E96C35]/15 blur-[100px]"
//     aria-hidden="true"
//   />

//   <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 -mt-8 sm:-mt-10">
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       className="max-w-3xl"
//     >
//       <motion.div variants={item} className="mb-3 flex items-center gap-3">
//         <span className="h-px w-9 bg-[#E96C35]" />
//         <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F2A57C] sm:text-[10.5px]">
//           Trade Overview
//         </span>
//       </motion.div>

//       <motion.h1
//         variants={item}
//         id="thai-imports-heading"
//         className="text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-3xl lg:text-[46px]"
//       >
//         Thai <span className="text-[#E96C35]">Imports</span>
//       </motion.h1>

//       <motion.p
//         variants={item}
//         className="mt-3 max-w-2xl text-[13px] leading-6 text-white/75 sm:text-[14.5px]"
//       >
//         Thailand maintains a strong trade relationship with the United
//         States and other global partners. Foreign imports and exports are
//         what help make Thailand&apos;s economy strong — and many products
//         flow in both directions.
//       </motion.p>

//       <motion.div variants={item} className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
//         <Link
//           href="/thai-exports"
//           className="group inline-flex items-center gap-2 rounded-lg bg-[#E96C35] px-4 py-2 text-[12px] font-semibold text-white shadow-lg shadow-[#E96C35]/25 transition-all duration-300 hover:bg-[#d55f2b] sm:px-5 sm:py-2.5 sm:text-[12.5px]"
//         >
//           View Thai Exports
//           <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//         </Link>
//         <Link
//           href="/contact"
//           className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-[12.5px]"
//         >
//           Contact Us
//         </Link>
//       </motion.div>
//     </motion.div>

//     {/* Stats row */}
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 sm:mt-8 sm:grid-cols-4 sm:gap-6 sm:pt-5"
//     >
//       {stats.map((stat) => (
//         <motion.div key={stat.label} variants={item}>
//           <p className="text-lg font-semibold text-white sm:text-2xl">
//             {stat.value}
//           </p>
//           <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50 sm:text-[10.5px]">
//             {stat.label}
//           </p>
//         </motion.div>
//       ))}
//     </motion.div>
//   </div>
// </section>

//       {/* ============================================================
//           INTRO — TEXT LEFT + IMAGE RIGHT
//       ============================================================ */}
//       <section className="relative bg-white py-10 sm:py-12 lg:py-16">
//         <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
//           >
//             {/* Left — text */}
//             <motion.div variants={item}>
//               <div className="mb-4 flex items-center gap-3 sm:mb-5">
//                 <span className="h-px w-8 bg-[#E96C35]" />
//                 <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E96C35] sm:text-[10.5px]">
//                   A Global Trade Partner
//                 </span>
//               </div>

//               <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#073155] sm:text-3xl lg:text-[42px]">
//                 A Two-Way{" "}
//                 <span className="text-[#E96C35]">Trade Relationship</span>
//               </h2>

//               <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#4A5568] sm:mt-5 sm:text-[15px] sm:leading-7">
//                 Thailand has a very strong relationship with the United States
//                 when it comes to imports and exports. Foreign trade is what helps
//                 make Thailand&apos;s economy strong — and many of the products
//                 that Thailand imports come from the United States.
//               </p>

//               <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#4A5568] sm:mt-4 sm:text-[15px] sm:leading-7">
//                 In return, the United States imports a wide range of Thai
//                 products, creating a balanced and mutually beneficial trade
//                 partnership that continues to grow.
//               </p>
//             </motion.div>

//             {/* Right — image */}
//             <motion.div variants={item} className="relative">
//               <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-30px_rgba(7,49,85,0.45)]">
//                 <img
//                   src="/images/thaus.jpg"
//                   alt="Thailand and United States trade relationship"
//                   loading="lazy"
//                   className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/50 via-transparent to-transparent" />

//                 {/* Small floating badge */}
//                 <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:py-2.5">
//                   <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F2A57C] sm:text-[10px]">
//                     Two-Way Trade
//                   </p>
//                   <p className="mt-0.5 text-[12px] font-semibold text-white sm:text-[13px]">
//                     Thailand ↔ United States
//                   </p>
//                 </div>
//               </div>

//               {/* Orange corner accent */}
//               <span
//                 className="pointer-events-none absolute -left-3 -top-3 h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-[#E96C35]/50 sm:h-16 sm:w-16"
//                 aria-hidden="true"
//               />
//               <span
//                 className="pointer-events-none absolute -bottom-3 -right-3 h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-[#E96C35]/50 sm:h-16 sm:w-16"
//                 aria-hidden="true"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           US → THAILAND IMPORTS (equal-height columns, bg-image cards)
//       ============================================================ */}
//     <section className="relative overflow-hidden bg-[#F7F9FB] py-10 sm:py-12 lg:py-16">
//   <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#E96C35]/5 blur-[100px]" />

//   <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
//     <motion.div
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start"
//     >
//       {/* Left — heading + paragraph + Key insight */}
//       <motion.div variants={item} className="flex flex-col">
//         <div className="mb-4 flex items-center gap-3 sm:mb-5">
//           <span className="h-px w-8 bg-[#E96C35]" />
//           <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E96C35] sm:text-[10.5px]">
//             Imported into Thailand
//           </span>
//         </div>

//         <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#073155] sm:text-3xl lg:text-[42px]">
//           From the United States{" "}
//           <span className="text-[#E96C35]">to Thailand</span>
//         </h2>

//         <p className="mt-4 max-w-lg text-[14px] leading-6 text-[#4A5568] sm:mt-5 sm:text-[14.5px] sm:leading-7">
//           Some of Thailand&apos;s most valuable imports come from the United
//           States — from the technology that powers its industries to the
//           machinery that keeps them running. One of the largest Thai imports is
//           the shipment of semiconductors and civilian aircraft.
//         </p>

//         {/* Key insight — now on the left under the paragraph */}
//         <div className="mt-5 rounded-xl border border-[#E96C35]/20 bg-[#E96C35]/5 p-4 sm:mt-6">
//           <p className="text-[12px] leading-5 text-[#073155] sm:text-[12.5px] sm:leading-6">
//             <span className="font-semibold">Key insight:</span> Thailand imports
//             telecommunications equipment, industrial machines, electrical items,
//             plastic, petroleum products, and chemicals — supporting both
//             industry and daily life.
//           </p>
//         </div>
//       </motion.div>

//       {/* Right — import list with bg images */}
//       <motion.div variants={item} className="flex flex-col">
//         <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
//           {importsFromUS.map(({ icon: Icon, label, image }, index) => {
//             // Last card spans 2 columns
//             const isLast = index === importsFromUS.length - 1;

//             return (
//               <li
//                 key={label}
//                 className={`group relative overflow-hidden rounded-xl border border-[#E5E9EF] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E96C35]/40 hover:shadow-[0_15px_35px_-18px_rgba(7,49,85,0.45)] ${
//                   isLast ? "col-span-2" : ""
//                 }`}
//                 style={{ minHeight: "100px" }}
//               >
//                 {/* Background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url(${image})` }}
//                   aria-hidden="true"
//                 />

//                 {/* Stronger overlay for text readability */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#041B30]/65 via-[#073155]/65 to-[#073155]/35" />

//                 {/* Orange hover wash */}
//                 <span className="absolute left-0 top-0 h-full w-0 bg-[#E96C35]/15 transition-all duration-500 group-hover:w-full" />

//                 <div className="relative flex items-center gap-2.5 p-3 sm:gap-3 sm:p-4">
//                   <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] sm:h-10 sm:w-10">
//                     <Icon className="h-[15px] w-[15px] sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} />
//                   </span>
//                   <span className="text-[12px] font-medium leading-tight text-white drop-shadow-sm sm:text-[13.5px]">
//                     {label}
//                   </span>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </motion.div>
//     </motion.div>
//   </div>
// </section>

//       {/* ============================================================
//           THAILAND → US EXPORTS (bg-image cards)
//       ============================================================ */}
//       <section className="relative bg-white py-10 sm:py-12 lg:py-16">
//         <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             className="mx-auto max-w-3xl text-center"
//           >
//             <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
//               <span className="h-px w-8 bg-[#E96C35]" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E96C35] sm:text-[10.5px]">
//                 Imported by the United States
//               </span>
//               <span className="h-px w-8 bg-[#E96C35]" />
//             </div>

//             <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#073155] sm:text-3xl lg:text-[42px]">
//               Thai Products Arriving in{" "}
//               <span className="text-[#E96C35]">the United States</span>
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#4A5568] sm:mt-5 sm:text-[14.5px] sm:leading-7">
//               Thai importers specializing in shipments to the United States have
//               strong growth potential. One of the largest categories is Thai
//               handicrafts — sold all across the US — followed by raw materials,
//               machinery, and finished goods.
//             </p>
//           </motion.div>

//           {/* Export grid with bg images */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5"
//           >
//             {importsToUS.map(({ icon: Icon, label, note, image }) => (
//               <motion.div
//                 key={label}
//                 variants={item}
//                 className="group relative flex min-h-[130px] flex-col items-center justify-end overflow-hidden rounded-xl border border-[#E5E9EF] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/40 hover:shadow-[0_18px_40px_-20px_rgba(7,49,85,0.45)] sm:min-h-[150px] sm:p-4"
//               >
//                 {/* Background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url(${image})` }}
//                   aria-hidden="true"
//                 />
//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/95 via-[#073155]/70 to-[#073155]/35" />
//                 {/* Orange top bar */}
//                 <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full" />

//                 <div className="relative flex flex-col items-center gap-2 sm:gap-2.5">
//                   <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] sm:h-10 sm:w-10">
//                     <Icon className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} />
//                   </span>

//                   <p className="text-[11px] font-semibold leading-tight text-white sm:text-[12px]">
//                     {label}
//                   </p>

//                   {note && (
//                     <span className="rounded-full border border-[#E96C35]/30 bg-[#E96C35]/20 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#F2A57C] backdrop-blur-sm sm:px-2 sm:text-[9px]">
//                       {note}
//                     </span>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           NATURAL RESOURCES (bg-image tiles)
//       ============================================================ */}
//       <section className="relative overflow-hidden bg-[#F7F9FB] py-10 sm:py-12 lg:py-16">
//         <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#073155]/5 blur-[100px]" />

//         <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:items-center"
//           >
//             {/* Left — resource grid */}
//             <motion.div variants={item}>
//               <div className="mb-4 flex items-center gap-3 sm:mb-6">
//                 <span className="h-px w-8 bg-[#E96C35]" />
//                 <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E96C35] sm:text-[10.5px]">
//                   Thailand&apos;s Natural Wealth
//                 </span>
//               </div>

//               <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#073155] sm:text-3xl lg:text-[42px]">
//                 Natural Resources That{" "}
//                 <span className="text-[#E96C35]">Drive Trade</span>
//               </h2>

//               <p className="mt-4 max-w-lg text-[14px] leading-6 text-[#4A5568] sm:mt-5 sm:text-[14.5px] sm:leading-7">
//                 Thailand&apos;s abundant natural resources give its importing
//                 business a leg up among many other countries. Rubber, fish,
//                 timber, and lead are actively exported, alongside a wide range
//                 of agricultural products.
//               </p>

//               {/* Resource tiles with bg images */}
//               <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-4 sm:gap-3">
//                 {naturalResources.map(({ icon: Icon, label, image }) => (
//                   <div
//                     key={label}
//                     className="group relative flex min-h-[105px] flex-col items-center justify-end overflow-hidden rounded-xl border border-[#E5E9EF] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/40 hover:shadow-[0_15px_35px_-18px_rgba(7,49,85,0.4)] sm:min-h-[120px] sm:p-4"
//                   >
//                     <div
//                       className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                       style={{ backgroundImage: `url(${image})` }}
//                       aria-hidden="true"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/95 via-[#073155]/65 to-[#073155]/30" />

//                     <div className="relative flex flex-col items-center gap-1.5 sm:gap-2">
//                       <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] sm:h-9 sm:w-9">
//                         <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.8} />
//                       </span>
//                       <span className="text-[11px] font-semibold text-white sm:text-[12px]">
//                         {label}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right — agricultural imports (bg image card) */}
//             <motion.div
//               variants={item}
//               className="relative overflow-hidden rounded-2xl border border-[#E5E9EF] shadow-[0_20px_50px_-25px_rgba(7,49,85,0.3)]"
//             >
//               {/* Card background image */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: "url('/images/agricultural-bg.jpg')" }}
//                 aria-hidden="true"
//               />
//               <div className="absolute inset-0 bg-gradient-to-br from-[#073155]/95 via-[#073155]/88 to-[#041B30]/95" />
//               <div className="absolute left-0 top-0 h-[3px] w-full bg-[#E96C35]" />

//               <div className="relative p-5 sm:p-7">
//                 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E96C35] text-white sm:mb-5 sm:h-11 sm:w-11">
//                   <Wheat className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
//                 </div>

//                 <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F2A57C] sm:text-[10.5px]">
//                   Agricultural Imports
//                 </p>

//                 <h3 className="mt-2 text-lg font-semibold text-white sm:text-2xl">
//                   Grown in Thailand, Shipped Worldwide
//                 </h3>

//                 <p className="mt-2.5 text-[12.5px] leading-5 text-white/70 sm:mt-3 sm:text-[13px] sm:leading-6">
//                   Alongside industrial and natural resources, Thailand exports a
//                   variety of agricultural commodities that reach global markets.
//                 </p>

//                 <ul className="mt-5 space-y-2 sm:mt-6 sm:space-y-2.5">
//                   {agricultural.map(({ icon: Icon, label }) => (
//                     <li
//                       key={label}
//                       className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.05] p-2 backdrop-blur-sm transition-colors duration-300 hover:border-[#E96C35]/40 hover:bg-white/[0.08] sm:gap-3 sm:p-2.5"
//                     >
//                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E96C35]/20 text-[#F2A57C] sm:h-9 sm:w-9">
//                         <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.9} />
//                       </span>
//                       <span className="text-[12.5px] font-medium text-white sm:text-[13.5px]">
//                         {label}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           SPECIALIZED IMPORTERS (bg-image cards, no learn-more)
//       ============================================================ */}
//       <section className="relative bg-white py-10 sm:py-12 lg:py-16">
//         <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             className="mx-auto max-w-3xl text-center"
//           >
//             <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
//               <span className="h-px w-8 bg-[#E96C35]" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E96C35] sm:text-[10.5px]">
//                 Featured Importers
//               </span>
//               <span className="h-px w-8 bg-[#E96C35]" />
//             </div>

//             <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#073155] sm:text-3xl lg:text-[42px]">
//               Specialized Thai{" "}
//               <span className="text-[#E96C35]">Importers</span>
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#4A5568] sm:mt-5 sm:text-[14.5px] sm:leading-7">
//               Several Thai importers focus on specific product categories,
//               serving niche markets around the world — particularly the United
//               States.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5"
//           >
//             {specializedImporters.map((importer) => (
//               <motion.div
//                 key={importer.name}
//                 variants={item}
//                 className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-[#E5E9EF] transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/40 hover:shadow-[0_25px_55px_-25px_rgba(7,49,85,0.4)] sm:min-h-[260px]"
//               >
//                 {/* Background image */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url(${importer.image})` }}
//                   aria-hidden="true"
//                 />
//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/95 via-[#073155]/75 to-[#073155]/40" />
//                 {/* Orange top bar grows on hover */}
//                 <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full" />

//                 <div className="relative p-5 sm:p-7">
//                   {/* Top row: icon + specialty badge */}
//                   <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5 sm:gap-4">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] sm:h-12 sm:w-12">
//                       <Store className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px]" strokeWidth={1.8} />
//                     </div>

//                     <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:px-3 sm:text-[10px]">
//                       {importer.specialty}
//                     </span>
//                   </div>

//                   <h3 className="text-base font-semibold text-white sm:text-xl">
//                     {importer.name}
//                   </h3>

//                   <p className="mt-2 max-w-md text-[12.5px] leading-5 text-white/75 sm:text-[13.5px] sm:leading-6">
//                     {importer.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           TRADE PARTNERS
//       ============================================================ */}
//       <section className="relative overflow-hidden bg-[#041B30] py-10 sm:py-12 lg:py-16">
//         <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-[#E96C35]/10 blur-[100px]" />

//         <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:items-center"
//           >
//             <motion.div variants={item}>
//               <div className="mb-4 flex items-center gap-3 sm:mb-5">
//                 <span className="h-px w-8 bg-[#E96C35]" />
//                 <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F2A57C] sm:text-[10.5px]">
//                   Global Network
//                 </span>
//               </div>

//               <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-3xl lg:text-[42px]">
//                 Thailand&apos;s Key{" "}
//                 <span className="text-[#E96C35]">Trade Partners</span>
//               </h2>

//               <p className="mt-4 max-w-lg text-[14px] leading-6 text-white/70 sm:mt-5 sm:text-[14.5px] sm:leading-7">
//                 Beyond the United States, Thailand maintains strong import
//                 relationships with several countries across Asia and beyond.
//                 These partnerships support a diversified and resilient trade
//                 economy.
//               </p>
//             </motion.div>

//             <motion.div variants={item}>
//               <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
//                 {tradePartners.map((partner) => (
//                   <div
//                     key={partner}
//                     className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.07] sm:gap-3 sm:p-5"
//                   >
//                     <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E96C35]/15 text-[#F2A57C] transition-all duration-300 group-hover:bg-[#E96C35] group-hover:text-white sm:h-10 sm:w-10">
//                       <Globe2 className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} />
//                     </span>
//                     <span className="text-[11.5px] font-semibold text-white sm:text-[12.5px]">
//                       {partner}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           CTA
//       ============================================================ */}
//       <section className="relative bg-white py-10 sm:py-12 lg:py-16">
//         <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             className="relative overflow-hidden rounded-2xl border border-[#E5E9EF] bg-[#F7F9FB] p-6 sm:p-10 lg:p-12"
//           >
//             <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E96C35]/10 blur-[80px]" />
//             <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#073155]/5 blur-[80px]" />

//             <div className="relative flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center lg:gap-6">
//               <div className="max-w-xl">
//                 <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E96C35] sm:text-[10.5px]">
//                   Need Assistance?
//                 </p>
//                 <h2 className="mt-2.5 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#073155] sm:mt-3 sm:text-3xl lg:text-[32px]">
//                   Importing from or into Thailand?
//                 </h2>
//                 <p className="mt-2.5 text-[13px] leading-5 text-[#5A6B7B] sm:mt-3 sm:text-[14px] sm:leading-6">
//                   Our team can help you understand customs requirements,
//                   documentation, and the best shipping method for your goods.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-2.5 sm:gap-3">
//                 <Link
//                   href="/contact"
//                   className="group inline-flex items-center gap-2 rounded-lg bg-[#073155] px-5 py-3 text-[12.5px] font-semibold text-white transition-all duration-300 hover:bg-[#E96C35] sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[13px]"
//                 >
//                   Contact Our Team
//                   <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                 </Link>
//                 <Link
//                   href="/shipping-services"
//                   className="inline-flex items-center gap-2 rounded-lg border border-[#073155]/15 bg-white px-5 py-3 text-[12.5px] font-semibold text-[#073155] transition-all duration-300 hover:border-[#E96C35] hover:text-[#E96C35] sm:gap-2.5 sm:px-6 sm:py-3.5 sm:text-[13px]"
//                 >
//                   View Services
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ThaiImportsPage;




import ThaiImportsClient from './ThaiImportsClient';

// 🔹 SEO metadata for Thai Imports Page
export const metadata = {
  title: "Thai Imports | Thailand's Top Imports from the United States & Global Partners",
  description:
    "Explore Thailand's key imports including semiconductors, civilian aircraft, industrial machines, telecommunications equipment, petroleum products, and chemicals. Learn about Thailand's strong trade relationship with the United States and other global partners.",
  keywords: [
    "Thai Imports",
    "Thailand Imports",
    "Import to Thailand",
    "Thailand US Trade",
    "Thai Trade Partners",
    "Semiconductors Thailand",
    "Civilian Aircraft Thailand",
    "Industrial Machines Thailand",
    "Telecommunications Equipment Thailand",
    "Petroleum Products Thailand",
    "Thai Natural Resources",
    "Thai Agricultural Imports",
    "Thai Handicrafts",
    "My Thai Direct Importers",
    "Thanaka Importers",
    "Thailand Japan Trade",
    "Thailand China Trade",
    "Thailand Malaysia Trade",
    "Thai Import Regulations",
    "Bangkok Import Services",
  ],
  alternates: {
    canonical: "https://thaishipping.com/thai-imports",
  },
  openGraph: {
    title: "Thai Imports | Thailand's Top Imports from the United States & Global Partners",
    description:
      "Explore Thailand's key imports including semiconductors, civilian aircraft, industrial machines, telecommunications equipment, petroleum products, and chemicals.",
    url: "https://thaishipping.com/thai-imports",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-thai-imports.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Imports - Thailand's Trade with the United States and Global Partners",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Imports | Thailand's Top Imports from the US & Global Partners",
    description:
      "Discover Thailand's key imports including semiconductors, aircraft, industrial machines, and more.",
    images: ["/og-thai-imports.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <ThaiImportsClient />

      {/* 🔹 Schema Markup for Thai Imports Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Thai Imports",
            description:
              "Explore Thailand's key imports including semiconductors, civilian aircraft, industrial machines, telecommunications equipment, petroleum products, and chemicals.",
            url: "https://thaishipping.com/thai-imports",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://thaishipping.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Thai Imports",
                item: "https://thaishipping.com/thai-imports",
              },
            ],
          }),
        }}
      />

      {/* 🔹 ItemList Schema for Import Categories */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Thailand Imports from the United States",
            description:
              "Key products Thailand imports from the United States including semiconductors, civilian aircraft, industrial machines, and more.",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Semiconductors" },
              { "@type": "ListItem", position: 2, name: "Civilian Aircraft" },
              { "@type": "ListItem", position: 3, name: "Industrial Machines" },
              { "@type": "ListItem", position: 4, name: "Telecommunications Equipment" },
              { "@type": "ListItem", position: 5, name: "Electrical Items" },
              { "@type": "ListItem", position: 6, name: "Plastic & Chemicals" },
              { "@type": "ListItem", position: 7, name: "Petroleum Products" },
            ],
          }),
        }}
      />

      {/* 🔹 ItemList Schema for Thai Exports to US */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Thai Products Imported by the United States",
            description:
              "Key Thai products imported by the United States including handicrafts, aluminum, tin, crude oil, and more.",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Handicrafts" },
              { "@type": "ListItem", position: 2, name: "Aluminum & Tin" },
              { "@type": "ListItem", position: 3, name: "Crude Oil" },
              { "@type": "ListItem", position: 4, name: "Mining Equipment" },
              { "@type": "ListItem", position: 5, name: "Oil Processing Equipment" },
              { "@type": "ListItem", position: 6, name: "Leather Working Equipment" },
              { "@type": "ListItem", position: 7, name: "Sewing Equipment" },
              { "@type": "ListItem", position: 8, name: "Ships & Vessels" },
              { "@type": "ListItem", position: 9, name: "Jewelry" },
              { "@type": "ListItem", position: 10, name: "Computers" },
            ],
          }),
        }}
      />
    </>
  );
}