
// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import Link from "next/link";
// import Shipping from '@/components/home/shipping';

// import {
//   ArrowRight,
//   ArrowUpRight,
//   Globe2,
//   Ship,
//   Plane,
//   Truck,
//   Package,
//   Scale,
//   UtensilsCrossed,
//   Utensils,
//   Leaf,
//   Building2,
//   Users,
//   Target,
//   ShieldCheck,
//   TrendingUp,
//   Handshake,
//   Anchor,
//   MapPin,
//   FileText,
//   Award,
//   CheckCircle2,
//   Container,
//   FileCheck2
// } from "lucide-react";

// // ================= STATS =================
// const heroStats = [
//   { icon: Globe2, value: "20+", label: ["Trade", "Partners"] },
//   { icon: Ship, value: "6+", label: ["Featured", "Providers"] },
//   { icon: Package, value: "15+", label: ["Export", "Categories"] },
//   { icon: Users, value: "1000s", label: ["Businesses", "Served"] },
// ];

// // ================= PILLARS (What we do) =================
// const pillars = [
//   {
//     title: "Thai Imports",
//     description:
//       "Explore the products, resources, and goods imported into Thailand from global markets.",
//     href: "/thai-imports",
//     image: "/images/im.jpg",
//     icon: Package,
//   },
//   {
//     title: "Thai Exports",
//     description:
//       "Discover Thailand's major export products and its growing role in international trade.",
//     href: "/thai-exports",
//     image: "/images/ex.jpg",
//     icon: Globe2,
//   },
//   {
//     title: "Thai Food Shipping",
//     description:
//       "Learn about frozen, canned, packaged, and other Thai food products shipped worldwide.",
//     href: "/thai-food-shipping",
//     image: "/images/food.jpg",
//     icon: Utensils,
//   },
//   {
//     title: "Shipping Regulations",
//     description:
//       "Understand important shipping requirements, restrictions, and regulations before you ship.",
//     href: "/shipping-regulations",
//     image: "/images/s4.jpg",
//     icon: FileCheck2,
//   },
//   {
//     title: "Shipping Services",
//     description:
//       "Explore air, sea, and land transportation options used for shipping within and from Thailand.",
//     href: "/shipping-services",
//     image: "/images/ab1.jpg",
//     icon: Ship,
//   },
// ];

// // ================= PRINCIPLES =================
// const principles = [
//   {
//     icon: Target,
//     title: "Clarity First",
//     description:
//       "We turn complex shipping regulations and trade requirements into straightforward information anyone can act on.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Reliability",
//     description:
//       "Every detail we share is grounded in real trade practices and the shipping services operating across Thailand today.",
//   },
//   {
//     icon: Handshake,
//     title: "Connection",
//     description:
//       "We connect businesses, exporters, and individuals with the shipping providers and information they need.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Growth Mindset",
//     description:
//       "Thailand's trade economy is always evolving — we keep our resources up to date so you're never behind.",
//   },
// ];

// // ================= ROLE OF THAILAND =================
// const thailandFacts = [
//   {
//     icon: Anchor,
//     title: "Strategic Location",
//     description:
//       "Positioned at the heart of Southeast Asia, Thailand serves as a natural gateway for regional and global trade.",
//   },
//   {
//     icon: FileText,
//     title: "Two-Way Trade",
//     description:
//       "Thailand maintains strong relationships with the United States, Japan, China, Malaysia, and other major economies.",
//   },
//   {
//     icon: Award,
//     title: "Recognized Excellence",
//     description:
//       "Thai exporters are recognized through awards such as the Prime Minister's Export Award for quality and standards.",
//   },
//   {
//     icon: Leaf,
//     title: "Natural Resources",
//     description:
//       "Rubber, fish, timber, lead, and agricultural goods give Thailand's export economy a strong natural foundation.",
//   },
// ];

// // ================= TRANSPORTATION MODES =================
// const transportationModes = [
//   {
//     icon: Plane,
//     title: "Air Freight",
//     tagline: "International exports",
//     description:
//       "Air shipping is one of the main transportation methods used by Thai exporters sending products to other countries.",
//   },
//   {
//     icon: Ship,
//     title: "Sea Freight",
//     tagline: "Global trade",
//     description:
//       "Sea shipping is a major transportation method for Thailand's international trade and is widely used by exporters.",
//   },
//   {
//     icon: Truck,
//     title: "Road & Local",
//     tagline: "Local deliveries",
//     description:
//       "Automobile transportation is mainly associated with local deliveries and regional distribution within Thailand.",
//   },
// ];

// // ================= FEATURED PROVIDERS =================
// const providers = [
//   "Kintetsu World Express",
//   "World Freight",
//   "Asian Tigers",
//   "Seaborne Logistics",
//   "V.A.S. Services",
//   "B & J Services",
// ];

// function SectionHeading({ eyebrow, title, description, centered = false }) {
//   return (
//     <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
//       <div
//         className={`mb-4 flex items-center gap-3 ${
//           centered ? "justify-center" : ""
//         }`}
//       >
//         <span className="h-[2px] w-8 bg-[#E96C35]" />
//         <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
//           {eyebrow}
//         </span>
//       </div>

//       <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight text-[#073155] sm:text-3xl lg:text-[38px]">
//         {title}
//       </h2>

//       {description && (
//         <p className="mt-4 text-sm leading-7 text-[#687985] sm:text-base">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// export default function AboutPage() {
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

//   const heroContainer = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.1 },
//     },
//   };

//   const heroItem = {
//     hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <main className="overflow-hidden bg-white text-[#073155] -mt-6">
//       {/* ============================================================
//           HERO
//       ============================================================ */}
//    {/* ============================================================
//     HERO — reduced height
// ============================================================ */}
// {/* ============================================================
//     HERO — reduced height
// ============================================================ */}
// <section
//   className="relative isolate overflow-hidden bg-[#041B30]"
//   aria-labelledby="about-heading"
// >
//   <div
//     className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
//     style={{ backgroundImage: "url('/images/about.jpg')" }}
//     aria-hidden="true"
//   />

//   <div
//     className="absolute inset-0 -z-10"
//     style={{
//       background:
//         "linear-gradient(90deg, rgba(4,27,48,0.95) 0%, rgba(4,27,48,0.85) 35%, rgba(4,27,48,0.35) 65%, rgba(4,27,48,0.05) 100%)",
//     }}
//     aria-hidden="true"
//   />

//   <div
//     className="absolute inset-x-0 bottom-0 -z-10 h-32"
//     style={{
//       background:
//         "linear-gradient(to top, rgba(4,27,48,0.85) 0%, rgba(4,27,48,0) 100%)",
//     }}
//     aria-hidden="true"
//   />

//   <div className="relative mx-auto w-full max-w-7xl px-5 pt-12 pb-0 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
//     <motion.div
//       variants={heroContainer}
//       initial="hidden"
//       animate="visible"
//       className="max-w-2xl pb-8 sm:pb-9 lg:pb-10"
//     >
//       <motion.div variants={heroItem} className="mb-4 flex items-center gap-3">
//         <span className="h-px w-9 bg-[#E96C35]" />
//         <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F2A57C] sm:text-[11px]">
//           About Thai Shipping
//         </span>
//       </motion.div>

//       <motion.h1
//         variants={heroItem}
//         id="about-heading"
//         className="text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-md sm:text-4xl lg:text-[44px]"
//       >
//         Connecting Thailand to the World
//       </motion.h1>

//       <motion.p
//         variants={heroItem}
//         className="mt-4 max-w-xl text-[13.5px] leading-6 text-white/85 drop-shadow sm:text-sm"
//       >
//         Thai Shipping is a dedicated information platform for Thailand&apos;s
//         import, export, food shipping, logistics, and trade regulations —
//         built to make global trade simpler and more transparent.
//       </motion.p>

//       <motion.div variants={heroItem} className="mt-5 flex flex-wrap gap-2.5">
//         <a
//           href="#our-purpose"
//           className="group inline-flex items-center gap-2.5 rounded-md bg-[#E96C35] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#E96C35]/30 transition-all duration-300 hover:bg-[#d55f2b] hover:shadow-[#E96C35]/40"
//         >
//           Our Purpose
//           <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
//         </a>
//         <Link
//           href="/contact"
//           className="inline-flex items-center gap-2.5 rounded-md border border-white/25 bg-white/5 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
//         >
//           Get in Touch
//         </Link>
//       </motion.div>
//     </motion.div>
//   </div>

//   {/* Stats bar */}
//   <motion.div
//     variants={heroContainer}
//     initial="hidden"
//     animate="visible"
//     className="relative border-t border-white/10 bg-[#041B30]/95 backdrop-blur-sm"
//   >
//     <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
//       <div className="grid grid-cols-2 divide-white/10 sm:grid-cols-4 sm:divide-x">
//         {heroStats.map((stat) => {
//           const Icon = stat.icon;
//           return (
//             <motion.div
//               key={stat.value}
//               variants={heroItem}
//               className="flex items-center gap-3 py-3.5 sm:justify-center sm:py-4"
//             >
//               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E96C35]/40 bg-[#E96C35]/10 text-[#F2A57C]">
//                 <Icon className="h-4 w-4" strokeWidth={1.8} />
//               </span>
//               <div>
//                 <p className="text-base font-bold leading-none text-white sm:text-lg">
//                   {stat.value}
//                 </p>
//                 <p className="mt-1 text-[10px] font-medium leading-tight text-white/60 sm:text-[10.5px]">
//                   {stat.label[0]}
//                   <br />
//                   {stat.label[1]}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   </motion.div>
// </section>

//       {/* ============================================================
//           OUR PURPOSE
//       ============================================================ */}
//       <section id="our-purpose" className="py-10 sm:py-14 lg:py-16">
//   <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//     <motion.div
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       className="grid items-stretch gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
//     >
//       {/* ================= LEFT SECTION ================= */}
//       <motion.div
//         variants={item}
//         className="flex h-full flex-col"
//       >
//         <SectionHeading
//           eyebrow="Who We Are"
//           title="A clear guide to Thailand's global trade"
//         />

//         {/* Image Gallery */}
//         <div className="mt-7 grid flex-1 grid-cols-2 gap-3 sm:gap-4">
//           {/* Large Image */}
//           <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[340px]">
//             <img
//               src="/images/trans.jpg"
//               alt="Cargo ship transporting goods"
//               className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//             />
//           </div>

//           {/* Two Small Images */}
//           <div className="grid min-h-[280px] grid-rows-2 gap-3 sm:min-h-[340px] sm:gap-4">
//             <div className="relative overflow-hidden rounded-2xl">
//               <img
//                 src="/images/container.jpg"
//                 alt="Shipping container"
//                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>

//             <div className="relative overflow-hidden rounded-2xl">
//               <img
//                 src="/images/on port.jpg"
//                 alt="Cargo containers at port"
//                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* ================= RIGHT SECTION ================= */}
//    {/* ================= RIGHT SECTION ================= */}
// <motion.div
//   variants={item}
//   className="flex h-full flex-col"
// >
//   {/* Top spacer matches the heading area on the left */}
//   <div className="hidden lg:block">
//     <div className="h-[105px]" />
//   </div>

//   <div className="flex flex-1 flex-col justify-between">
//     <div className="space-y-5">
//       <p className="text-[14.5px] leading-7 text-[#4A5568] sm:text-[15px]">
//         Thailand plays an important role in international trade —
//         connecting businesses and markets through imports, exports,
//         logistics, and shipping. Yet understanding how the pieces fit
//         together is often harder than it should be.
//       </p>

//       <p className="text-[14.5px] leading-7 text-[#4A5568] sm:text-[15px]">
//         <span className="font-semibold text-[#073155]">
//           Thai Shipping
//         </span>{" "}
//         was built to change that. We bring together practical,
//         easy-to-read information about Thailand&apos;s trade activity —
//         from the goods flowing in and out of the country, to the
//         regulations that govern them, to the shipping providers that move
//         them.
//       </p>

//       <p className="text-[14.5px] leading-7 text-[#4A5568] sm:text-[15px]">
//         Whether you&apos;re an exporter, importer, food shipper, logistics
//         professional, or simply exploring Thailand&apos;s role in global
//         commerce, our goal is to give you the clarity you need to make
//         informed decisions.
//       </p>
//     </div>

//     {/* Bottom Information */}
//     <div className="mt-8 border-t border-[#E5E9EF] pt-6">
//       <div className="flex items-center gap-3">
//         <CheckCircle2 className="h-5 w-5 shrink-0 text-[#E96C35]" />

//         <p className="text-[13.5px] font-medium text-[#5A6B7B]">
//           Trusted information, organized for real-world shipping.
//         </p>
//       </div>
//     </div>
//   </div>
// </motion.div>
//     </motion.div>
//   </div>
// </section>

//       {/* ============================================================
//           FIVE PILLARS — What We Cover
//       ============================================================ */}
//  <section className="relative overflow-hidden bg-[#F7F9FB] py-12 sm:py-16 lg:py-20">
//   {/* Background decoration */}
//   <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#E96C35]/5 blur-[100px]" />

//   <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

//     {/* ================= SECTION HEADING ================= */}
//     <SectionHeading
//       eyebrow="What We Cover"
//       title="Five pillars of Thai trade and shipping"
//       description="Explore the key areas of Thailand's global trade, from imports and exports to food shipping, regulations, and transportation services."
//       centered
//     />

//     {/* ================= FIVE CARDS ================= */}
//     <motion.div
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.15 }}
//       className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
//     >
//       {pillars.map((pillar) => {
//         const Icon = pillar.icon;

//         return (
//           <motion.div
//             key={pillar.title}
//             variants={item}
//             className="group"
//           >
//             <Link
//               href={pillar.href}
//               className="relative block overflow-hidden rounded-[18px] bg-white shadow-[0_8px_30px_-15px_rgba(7,49,85,0.18)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(7,49,85,0.28)]"
//             >

//               {/* ================= IMAGE ================= */}
//               <div className="relative h-[220px] overflow-hidden sm:h-[230px]">
//                 <img
//                   src={pillar.image}
//                   alt={pillar.title}
//                   className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                 />

//                 {/* Image overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/45 via-transparent to-transparent opacity-70" />

//                 {/* Small top label */}
//                 <div className="absolute left-4 top-4">
//                   <span className="rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#073155] backdrop-blur-sm">
//                     Thailand
//                   </span>
//                 </div>
//               </div>

//               {/* ================= WHITE CONTENT ================= */}
//               <div className="relative mx-3 -mt-10 rounded-xl bg-white px-5 pb-5 pt-4 shadow-[0_8px_25px_-15px_rgba(7,49,85,0.35)]">

//                 {/* Icon + Title */}
//                 <div className="flex items-start gap-3">

//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#073155] text-white transition-colors duration-300 group-hover:bg-[#E96C35]">
//                     <Icon
//                       className="h-[18px] w-[18px]"
//                       strokeWidth={1.8}
//                     />
//                   </div>

//                   <div className="min-w-0">
//                     <h3 className="pt-1 text-[16px] font-semibold text-[#073155] sm:text-[17px]">
//                       {pillar.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="mt-4 pr-8 text-[12.5px] leading-5.5 text-[#687583] sm:text-[13px]">
//                   {pillar.description}
//                 </p>

//                 {/* Bottom */}
//                 <div className="mt-5 flex items-center justify-between border-t border-[#E8ECF0] pt-4">

//                   <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#073155]/55 transition-colors duration-300 group-hover:text-[#E96C35]">
//                     Explore
//                   </span>

//                   {/* Arrow button */}
//                   <div className="absolute bottom-0 right-0 flex h-11 w-11 items-center justify-center rounded-tl-xl bg-[#073155] text-white transition-all duration-300 group-hover:bg-[#E96C35]">
//                     <ArrowUpRight
//                       className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                     />
//                   </div>
//                 </div>

//               </div>
//             </Link>
//           </motion.div>
//         );
//       })}
//     </motion.div>

//   </div>
// </section>
//       <Shipping />
    

//       {/* ============================================================
//           TRANSPORTATION MODES
//       ============================================================ */}
//       <section className="relative overflow-hidden bg-[#F7F9FB] py-10 sm:py-14 lg:py-16">
//         <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#073155]/5 blur-[100px]" />

//         <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <SectionHeading
//             eyebrow="How Goods Move"
//             title="Three ways Thailand ships the world"
//             description="Thailand uses many different modes of transportation for its shipping services — air, sea, and road. Each mode serves a different part of Thailand's trade economy."
//             centered
//           />

//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             className="mt-10 grid gap-5 md:grid-cols-3"
//           >
//             {transportationModes.map((mode) => {
//               const Icon = mode.icon;
//               return (
//                 <motion.div
//                   key={mode.title}
//                   variants={item}
//                   className="group relative overflow-hidden rounded-2xl border border-[#E5E9EF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/40 hover:shadow-[0_20px_45px_-20px_rgba(7,49,85,0.3)] sm:p-7"
//                 >
//                   <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full" />

//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#073155] text-white transition-all duration-300 group-hover:bg-[#E96C35]">
//                     <Icon className="h-5 w-5" strokeWidth={1.8} />
//                   </div>

//                   <p className="mt-5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#E96C35]">
//                     {mode.tagline}
//                   </p>

//                   <h3 className="mt-2 text-lg font-semibold text-[#073155] sm:text-xl">
//                     {mode.title}
//                   </h3>

//                   <p className="mt-2.5 text-[13.5px] leading-6 text-[#5A6B7B]">
//                     {mode.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           PROVIDERS
//       ============================================================ */}
//       <section className="py-10 sm:py-14 lg:py-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
//           >
//             <motion.div variants={item}>
//               <SectionHeading
//                 eyebrow="Trusted Providers"
//                 title="The shipping companies moving Thailand's trade"
//               />

//               <p className="mt-6 text-[14.5px] leading-7 text-[#4A5568] sm:text-[15px]">
//                 Thai Shipping features some of Thailand&apos;s most established
//                 shipping companies — spanning air, sea, land, moving,
//                 worldwide logistics, and heavy transportation.
//               </p>

//               <div className="mt-7 flex flex-wrap gap-2.5">
//                 {providers.map((provider) => (
//                   <span
//                     key={provider}
//                     className="inline-flex items-center gap-2 rounded-full border border-[#E96C35]/25 bg-[#E96C35]/5 px-4 py-2 text-[12.5px] font-medium text-[#073155]"
//                   >
//                     <Building2 className="h-3.5 w-3.5 text-[#E96C35]" strokeWidth={2} />
//                     {provider}
//                   </span>
//                 ))}
//               </div>

//               <Link
//                 href="/shipping-services"
//                 className="group mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#073155] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#E96C35]"
//               >
//                 Explore Shipping Services
//                 <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>
//             </motion.div>

//             <motion.div variants={item} className="relative">
//               <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-30px_rgba(7,49,85,0.45)]">
//                 <img
//                   src="/images/about-providers.jpg"
//                   alt="Thai shipping partners"
//                   loading="lazy"
//                   className="h-80 w-full object-cover sm:h-96 lg:h-[400px]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/60 via-transparent to-transparent" />

//                 <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-md">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F2A57C]">
//                     Featured Providers
//                   </p>
//                   <p className="mt-0.5 text-[13px] font-semibold text-white">
//                     Air · Sea · Land · Heavy Cargo
//                   </p>
//                 </div>
//               </div>

//               <span
//                 className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#E96C35]/50"
//                 aria-hidden="true"
//               />
//               <span
//                 className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#E96C35]/50"
//                 aria-hidden="true"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           PRINCIPLES
//       ============================================================ */}
//       <section className="relative overflow-hidden bg-[#041B30] py-12 text-white sm:py-16 lg:py-20">
//         <div className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-[#E96C35]/10 blur-[100px]" />

//         <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="mx-auto max-w-2xl text-center">
//             <div className="mb-4 flex items-center justify-center gap-3">
//               <span className="h-[2px] w-8 bg-[#E96C35]" />
//               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F2A57C] sm:text-xs">
//                 Our Principles
//               </span>
//               <span className="h-[2px] w-8 bg-[#E96C35]" />
//             </div>

//             <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-[38px]">
//               What guides everything we publish
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
//               These are the principles we apply when organizing, presenting,
//               and updating the information across Thai Shipping.
//             </p>
//           </div>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5"
//           >
//             {principles.map((principle) => {
//               const Icon = principle.icon;
//               return (
//                 <motion.div
//                   key={principle.title}
//                   variants={item}
//                   className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.07]"
//                 >
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E96C35]/15 text-[#F2A57C] transition-all duration-300 group-hover:bg-[#E96C35] group-hover:text-white">
//                     <Icon className="h-5 w-5" strokeWidth={1.8} />
//                   </div>

//                   <h3 className="mt-5 text-base font-semibold text-white">
//                     {principle.title}
//                   </h3>

//                   <p className="mt-2 text-[13px] leading-6 text-white/65">
//                     {principle.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           CTA
//       ============================================================ */}
//       <section className="bg-[#F7F9FB] py-10 sm:py-12 lg:py-14 mb-8">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-4">
//               <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073155] text-white sm:flex">
//                 <Handshake size={24} />
//               </div>

//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
//                   Let&apos;s Work Together
//                 </p>

//                 <h2 className="mt-2 text-xl font-semibold text-[#073155] sm:text-2xl">
//                   Ready to explore Thai trade and shipping?
//                 </h2>

//                 <p className="mt-2 max-w-xl text-sm leading-6 text-[#5A6B7B]">
//                   Browse our shipping resources or get in touch — we&apos;re
//                   here to help you make the most of Thailand&apos;s global trade
//                   network.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <Link
//                 href="/shipping-services"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-[#073155]/25 px-5 py-2.5 text-[13px] font-semibold text-[#073155] transition-colors hover:border-[#073155] hover:bg-[#073155] hover:text-white sm:py-3 sm:text-sm"
//               >
//                 Shipping Services
//                 <ArrowUpRight size={16} />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E96C35] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#D95C27] sm:py-3 sm:text-sm"
//               >
//                 Contact Us
//                 <ArrowRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="h-10 bg-[#073155] sm:h-14" />
//     </main>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import Link from "next/link";
import Shipping from '@/components/home/shipping';

import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Ship,
  Plane,
  Truck,
  Package,
  Scale,
  UtensilsCrossed,
  Utensils,
  Leaf,
  Building2,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Anchor,
  MapPin,
  FileText,
  Award,
  CheckCircle2,
  Container,
  FileCheck2
} from "lucide-react";

// ================= STATS =================
const heroStats = [
  { icon: Globe2, value: 20, suffix: "+", label: ["Trade", "Partners"] },
  { icon: Ship, value: 6, suffix: "+", label: ["Featured", "Providers"] },
  { icon: Package, value: 15, suffix: "+", label: ["Export", "Categories"] },
  { icon: Users, value: 1000, suffix: "+", label: ["Businesses", "Served"] },
];

// ================= PILLARS =================
const pillars = [
  {
    title: "Thai Imports",
    description:
      "Explore the products, resources, and goods imported into Thailand from global markets.",
    href: "/thai-imports",
    image: "/images/im.jpg",
    icon: Package,
  },
  {
    title: "Thai Exports",
    description:
      "Discover Thailand's major export products and its growing role in international trade.",
    href: "/thai-exports",
    image: "/images/ex.jpg",
    icon: Globe2,
  },
  {
    title: "Thai Food Shipping",
    description:
      "Learn about frozen, canned, packaged, and other Thai food products shipped worldwide.",
    href: "/thai-food-shipping",
    image: "/images/food.jpg",
    icon: Utensils,
  },
  {
    title: "Shipping Regulations",
    description:
      "Understand important shipping requirements, restrictions, and regulations before you ship.",
    href: "/shipping-regulations",
    image: "/images/s4.jpg",
    icon: FileCheck2,
  },
  {
    title: "Shipping Services",
    description:
      "Explore air, sea, and land transportation options used for shipping within and from Thailand.",
    href: "/shipping-services",
    image: "/images/ab1.jpg",
    icon: Ship,
  },
];

// ================= PRINCIPLES =================
const principles = [
  {
    icon: Target,
    title: "Clarity First",
    description:
      "We turn complex shipping regulations and trade requirements into straightforward information anyone can act on.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Every detail we share is grounded in real trade practices and the shipping services operating across Thailand today.",
  },
  {
    icon: Handshake,
    title: "Connection",
    description:
      "We connect businesses, exporters, and individuals with the shipping providers and information they need.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "Thailand's trade economy is always evolving — we keep our resources up to date so you're never behind.",
  },
];

// ================= ROLE OF THAILAND =================
const thailandFacts = [
  {
    icon: Anchor,
    title: "Strategic Location",
    description:
      "Positioned at the heart of Southeast Asia, Thailand serves as a natural gateway for regional and global trade.",
  },
  {
    icon: FileText,
    title: "Two-Way Trade",
    description:
      "Thailand maintains strong relationships with the United States, Japan, China, Malaysia, and other major economies.",
  },
  {
    icon: Award,
    title: "Recognized Excellence",
    description:
      "Thai exporters are recognized through awards such as the Prime Minister's Export Award for quality and standards.",
  },
  {
    icon: Leaf,
    title: "Natural Resources",
    description:
      "Rubber, fish, timber, lead, and agricultural goods give Thailand's export economy a strong natural foundation.",
  },
];

// ================= TRANSPORTATION MODES =================
const transportationModes = [
  {
    icon: Plane,
    title: "Air Freight",
    tagline: "International exports",
    description:
      "Air shipping is one of the main transportation methods used by Thai exporters sending products to other countries.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    tagline: "Global trade",
    description:
      "Sea shipping is a major transportation method for Thailand's international trade and is widely used by exporters.",
  },
  {
    icon: Truck,
    title: "Road & Local",
    tagline: "Local deliveries",
    description:
      "Automobile transportation is mainly associated with local deliveries and regional distribution within Thailand.",
  },
];

// ================= FEATURED PROVIDERS =================
const providers = [
  "Kintetsu World Express",
  "World Freight",
  "Asian Tigers",
  "Seaborne Logistics",
  "V.A.S. Services",
  "B & J Services",
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-[2px] w-8 bg-[#E96C35]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-xl font-semibold leading-[1.15] tracking-tight text-[#073155] sm:text-3xl lg:text-[38px]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-[13px] leading-6 text-[#687985] sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}

// ================= COUNTER =================
function Counter({ target, suffix = "", duration = 1500, start = true }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    let raf;
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const reduceMotion = useReducedMotion();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const heroContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.1 },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="overflow-hidden bg-white text-[#073155] -mt-6">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section
        className="relative isolate overflow-hidden bg-[#041B30]"
        aria-labelledby="about-heading"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,27,48,0.95) 0%, rgba(4,27,48,0.85) 35%, rgba(4,27,48,0.35) 65%, rgba(4,27,48,0.05) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(4,27,48,0.85) 0%, rgba(4,27,48,0) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-10 pb-0 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl pb-7 sm:pb-9 lg:pb-10"
          >
            <motion.div variants={heroItem} className="mb-3 flex items-center gap-3 sm:mb-4">
              <span className="h-px w-8 bg-[#E96C35] sm:w-9" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F2A57C] sm:text-[11px]">
                About Thai Shipping
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              id="about-heading"
              className="text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-white drop-shadow-md sm:text-4xl lg:text-[44px]"
            >
              Connecting Thailand to the World
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-3 max-w-xl text-[13px] leading-6 text-white/85 drop-shadow sm:mt-4 sm:text-sm"
            >
              Thai Shipping is a dedicated information platform for Thailand&apos;s
              import, export, food shipping, logistics, and trade regulations —
              built to make global trade simpler and more transparent.
            </motion.p>

            <motion.div variants={heroItem} className="mt-4 flex flex-wrap gap-2.5 sm:mt-5">
              <a
                href="#our-purpose"
                className="group inline-flex items-center gap-2 rounded-md bg-[#E96C35] px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#E96C35]/30 transition-all duration-300 hover:bg-[#d55f2b] hover:shadow-[#E96C35]/40 sm:px-5 sm:py-2.5 sm:text-[11px]"
              >
                Our Purpose
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-[11px]"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          ref={statsRef}
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative border-t border-white/10 bg-gradient-to-b from-[#041B30]/95 to-[#041B30]/85 backdrop-blur-md"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E96C35]/60 to-transparent"
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 divide-white/10 sm:grid-cols-4 sm:divide-x">
              {heroStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label.join("-")}
                    variants={heroItem}
                    className="group relative flex items-center gap-3 py-3.5 sm:justify-center sm:gap-3.5 sm:py-5"
                  >
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E96C35]/40 bg-gradient-to-br from-[#E96C35]/20 to-[#E96C35]/5 text-[#F2A57C] transition-all duration-300 group-hover:border-[#E96C35] sm:h-10 sm:w-10">
                      <Icon className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={1.9} />
                    </span>

                    <div className="min-w-0">
                      <p className="flex items-baseline gap-0.5 text-base font-bold leading-none text-white tabular-nums sm:text-xl">
                        <Counter
                          target={stat.value}
                          suffix={stat.suffix}
                          duration={1400 + index * 150}
                          start={statsInView && !reduceMotion}
                        />
                      </p>
                      <p className="mt-1 text-[9.5px] font-medium uppercase leading-tight tracking-[0.06em] text-white/55 sm:text-[10.5px]">
                        {stat.label[0]}
                        <br />
                        {stat.label[1]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />
        </motion.div>
      </section>

      {/* ============================================================
          OUR PURPOSE
      ============================================================ */}
      <section id="our-purpose" className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12"
          >
            <motion.div variants={item} className="flex h-full flex-col">
              <SectionHeading
                eyebrow="Who We Are"
                title="A clear guide to Thailand's global trade"
              />

              <div className="mt-6 grid flex-1 grid-cols-2 gap-2.5 sm:gap-4">
                <div className="relative min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[340px]">
                  <img
                    src="/images/trans.jpg"
                    alt="Cargo ship transporting goods"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="grid min-h-[220px] grid-rows-2 gap-2.5 sm:min-h-[340px] sm:gap-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/images/container.jpg"
                      alt="Shipping container"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/images/on port.jpg"
                      alt="Cargo containers at port"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex h-full flex-col">
              <div className="hidden lg:block">
                <div className="h-[105px]" />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-[13.5px] leading-6 text-[#4A5568] sm:text-[15px] sm:leading-7">
                    Thailand plays an important role in international trade —
                    connecting businesses and markets through imports, exports,
                    logistics, and shipping. Yet understanding how the pieces fit
                    together is often harder than it should be.
                  </p>

                  <p className="text-[13.5px] leading-6 text-[#4A5568] sm:text-[15px] sm:leading-7">
                    <span className="font-semibold text-[#073155]">
                      Thai Shipping
                    </span>{" "}
                    was built to change that. We bring together practical,
                    easy-to-read information about Thailand&apos;s trade activity —
                    from the goods flowing in and out of the country, to the
                    regulations that govern them, to the shipping providers that
                    move them.
                  </p>

                  <p className="text-[13.5px] leading-6 text-[#4A5568] sm:text-[15px] sm:leading-7">
                    Whether you&apos;re an exporter, importer, food shipper,
                    logistics professional, or simply exploring Thailand&apos;s
                    role in global commerce, our goal is to give you the clarity
                    you need to make informed decisions.
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E5E9EF] pt-5 sm:mt-8 sm:pt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E96C35] sm:h-5 sm:w-5" />
                    <p className="text-[12.5px] font-medium text-[#5A6B7B] sm:text-[13.5px]">
                      Trusted information, organized for real-world shipping.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          FIVE PILLARS — 2 cards per row on mobile
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F7F9FB] py-10 sm:py-12 lg:py-14">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#E96C35]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What We Cover"
            title="Five pillars of Thai trade and shipping"
            description="Explore the key areas of Thailand's global trade, from imports and exports to food shipping, regulations, and transportation services."
            centered
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 lg:grid-cols-3"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={item}
                  className="group"
                >
                  <Link
                    href={pillar.href}
                    className="relative block overflow-hidden rounded-[14px] bg-white shadow-[0_8px_30px_-15px_rgba(7,49,85,0.18)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-18px_rgba(7,49,85,0.28)] sm:rounded-[18px]"
                  >
                    <div className="relative h-[140px] overflow-hidden sm:h-[230px]">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/45 via-transparent to-transparent opacity-70" />

                      <div className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4">
                        <span className="rounded-full bg-white/90 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#073155] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[9px] sm:tracking-[0.16em]">
                          Thailand
                        </span>
                      </div>
                    </div>

                    <div className="relative mx-2 -mt-7 rounded-lg bg-white px-3 pb-3.5 pt-3 shadow-[0_8px_25px_-15px_rgba(7,49,85,0.35)] sm:mx-3 sm:-mt-10 sm:rounded-xl sm:px-5 sm:pb-5 sm:pt-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#073155] text-white transition-colors duration-300 group-hover:bg-[#E96C35] sm:h-10 sm:w-10 sm:rounded-lg">
                          <Icon className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} />
                        </div>

                        <div className="min-w-0">
                          <h3 className="pt-0.5 text-[12.5px] font-semibold leading-tight text-[#073155] sm:pt-1 sm:text-[17px]">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-2.5 line-clamp-3 pr-6 text-[10.5px] leading-4 text-[#687583] sm:mt-4 sm:line-clamp-none sm:pr-8 sm:text-[13px] sm:leading-5.5">
                        {pillar.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between border-t border-[#E8ECF0] pt-2.5 sm:mt-5 sm:pt-4">
                        <span className="text-[8.5px] font-bold uppercase tracking-[0.14em] text-[#073155]/55 transition-colors duration-300 group-hover:text-[#E96C35] sm:text-[10px] sm:tracking-[0.16em]">
                          Explore
                        </span>

                        <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-tl-lg bg-[#073155] text-white transition-all duration-300 group-hover:bg-[#E96C35] sm:h-11 sm:w-11 sm:rounded-tl-xl">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* ================= CTA CARD (6th slot) ================= */}
            <motion.div variants={item} className="group">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[14px] bg-gradient-to-br from-[#073155] via-[#0A2A4A] to-[#041B30] shadow-[0_8px_30px_-15px_rgba(7,49,85,0.35)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-18px_rgba(7,49,85,0.45)] sm:rounded-[18px]">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E96C35]/20 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 top-0 h-[3px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />

                <div className="relative flex flex-1 flex-col justify-between p-4 sm:p-6 md:p-7">
                  <div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E96C35] text-white shadow-lg shadow-[#E96C35]/30 md:h-12 md:w-12 sm:rounded-xl -mb-2">
                      <Handshake className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.9} />
                    </div>

                    <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F2A57C] sm:mt-6 sm:text-[10px] sm:tracking-[0.2em] -mb-1">
                      Ready to Ship?
                    </p>

                    <h3 className="mt-2 text-[14px] font-semibold leading-snug text-white sm:mt-3 sm:text-xl -mb-8">
                      Talk to our team
                      <br />
                      about your shipment.
                    </h3>
                  </div>

                  <div className="mt-5 sm:mt-8">
                    <ul className="space-y-2 border-t border-white/10 pt-4 sm:space-y-2.5 sm:pt-5">
                      <li className="flex items-center gap-2 text-[10.5px] text-white/75 sm:gap-2.5 sm:text-[12.5px]">
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#E96C35]/20 sm:h-4 sm:w-4">
                          <CheckCircle2 className="h-2.5 w-2.5 text-[#F2A57C] sm:h-3 sm:w-3" />
                        </span>
                        Free consultation
                      </li>
                      <li className="flex items-center gap-2 text-[10.5px] text-white/75 sm:gap-2.5 sm:text-[12.5px]">
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#E96C35]/20 sm:h-4 sm:w-4">
                          <CheckCircle2 className="h-2.5 w-2.5 text-[#F2A57C] sm:h-3 sm:w-3" />
                        </span>
                        2–4 hour response
                      </li>
                      <li className="flex items-center gap-2 text-[10.5px] text-white/75 sm:gap-2.5 sm:text-[12.5px]">
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#E96C35]/20 sm:h-4 sm:w-4">
                          <CheckCircle2 className="h-2.5 w-2.5 text-[#F2A57C] sm:h-3 sm:w-3" />
                        </span>
                        Expert guidance
                      </li>
                    </ul>

                    <Link
                      href="/contact"
                      className="group/btn mt-4 inline-flex w-full items-center justify-between gap-2 rounded-lg bg-[#E96C35] px-3.5 py-2.5 text-[11px] font-semibold text-white transition-colors duration-300 hover:bg-[#d55f2b] sm:mt-6 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-[13px]"
                    >
                      Contact Us
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Shipping />

      {/* ============================================================
          TRANSPORTATION MODES
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F7F9FB] py-10 sm:py-12 lg:py-14">
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#073155]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="How Goods Move"
            title="Three ways Thailand ships the world"
            description="Thailand uses many different modes of transportation for its shipping services — air, sea, and road. Each mode serves a different part of Thailand's trade economy."
            centered
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5"
          >
            {transportationModes.map((mode) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={mode.title}
                  variants={item}
                  className="group relative overflow-hidden rounded-2xl border border-[#E5E9EF] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/40 hover:shadow-[0_20px_45px_-20px_rgba(7,49,85,0.3)] sm:p-7"
                >
                  <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full" />

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#073155] text-white transition-all duration-300 group-hover:bg-[#E96C35] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#E96C35] sm:mt-5">
                    {mode.tagline}
                  </p>

                  <h3 className="mt-2 text-base font-semibold text-[#073155] sm:text-xl">
                    {mode.title}
                  </h3>

                  <p className="mt-2.5 text-[12.5px] leading-6 text-[#5A6B7B] sm:text-[13.5px]">
                    {mode.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROVIDERS
      ============================================================ */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12"
          >
            <motion.div variants={item}>
              <SectionHeading
                eyebrow="Trusted Providers"
                title="The shipping companies moving Thailand's trade"
              />

              <p className="mt-4 text-[13.5px] leading-6 text-[#4A5568] sm:mt-6 sm:text-[15px] sm:leading-7">
                Thai Shipping features some of Thailand&apos;s most established
                shipping companies — spanning air, sea, land, moving,
                worldwide logistics, and heavy transportation.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
                {providers.map((provider) => (
                  <span
                    key={provider}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#E96C35]/25 bg-[#E96C35]/5 px-3 py-1.5 text-[11px] font-medium text-[#073155] sm:gap-2 sm:px-4 sm:py-2 sm:text-[12.5px]"
                  >
                    <Building2 className="h-3 w-3 text-[#E96C35] sm:h-3.5 sm:w-3.5" strokeWidth={2} />
                    {provider}
                  </span>
                ))}
              </div>

              <Link
                href="/shipping-services"
                className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-[#073155] px-4 py-2.5 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#E96C35] sm:mt-8 sm:gap-2.5 sm:px-5 sm:py-3 sm:text-[13px]"
              >
                Explore Shipping Services
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4" />
              </Link>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_-30px_rgba(7,49,85,0.45)]">
                <img
                  src="/images/all.jpg"
                  alt="Thai shipping partners"
                  loading="lazy"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:py-2.5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#F2A57C] sm:text-[10px] sm:tracking-[0.18em]">
                    Featured Providers
                  </p>
                  <p className="mt-0.5 text-[11.5px] font-semibold text-white sm:text-[13px]">
                    Air · Sea · Land · Heavy Cargo
                  </p>
                </div>
              </div>

              <span
                className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#E96C35]/50"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-[#E96C35]/50"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PRINCIPLES — 2 cards per row on mobile
      ============================================================ */}
      <section className="relative isolate overflow-hidden py-10 text-white sm:py-12 lg:py-14">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/abo.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[#041B30]/90"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#E96C35]/15 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
              <span className="h-[2px] w-8 bg-[#E96C35]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F2A57C] sm:text-xs">
                Our Principles
              </span>
              <span className="h-[2px] w-8 bg-[#E96C35]" />
            </div>

            <h2 className="text-xl font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-[38px]">
              What guides everything we publish
            </h2>

            <p className="mt-3 text-[13px] leading-6 text-white/75 sm:mt-4 sm:text-base sm:leading-7">
              These are the principles we apply when organizing, presenting,
              and updating the information across Thai Shipping.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4 sm:gap-5"
          >
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  variants={item}
                  className="group rounded-xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.1] sm:rounded-2xl sm:p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E96C35]/20 text-[#F2A57C] transition-all duration-300 group-hover:bg-[#E96C35] group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-3.5 text-[13.5px] font-semibold text-white sm:mt-5 sm:text-base">
                    {principle.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-5 text-white/70 sm:mt-2 sm:text-[13px] sm:leading-6">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="bg-[#F7F9FB] py-10 sm:py-12 lg:py-14 mb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073155] text-white sm:flex">
                <Handshake size={24} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
                  Let&apos;s Work Together
                </p>

                <h2 className="mt-2 text-lg font-semibold text-[#073155] sm:text-2xl">
                  Ready to explore Thai trade and shipping?
                </h2>

                <p className="mt-2 max-w-xl text-[13px] leading-6 text-[#5A6B7B] sm:text-sm">
                  Browse our shipping resources or get in touch — we&apos;re
                  here to help you make the most of Thailand&apos;s global trade
                  network.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/shipping-services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#073155]/25 px-4 py-2.5 text-[12px] font-semibold text-[#073155] transition-colors hover:border-[#073155] hover:bg-[#073155] hover:text-white sm:px-5 sm:py-3 sm:text-sm"
              >
                Shipping Services
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E96C35] px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#D95C27] sm:px-5 sm:py-3 sm:text-sm"
              >
                Contact Us
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}