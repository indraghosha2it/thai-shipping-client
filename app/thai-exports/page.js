

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Award,
//   Globe2,
//   Ship,
//   Plane,
//   Handshake,
//   CalendarDays,
//   Wheat,
//   Palette,
//   Fish,
//   UtensilsCrossed,
//   Package,
//   Factory,
//   Leaf,
//   CheckCircle2,
//   Network,
//   BadgeCheck,
//   Container,
//   FileCheck,
//   Users,
//   Sprout,
//   Truck,
//   Boxes,
//   X,
// } from "lucide-react";

// const exportProducts = [
//   {
//     number: "01",
//     title: "Thai Rice",
//     category: "Agricultural Exports",
//     description:
//       "Rice is one of Thailand's major exports and an important business for people throughout the country. Thai rice can be shipped to markets around the world.",
//     icon: Wheat,
//     image: "/images/rice.jpg",
//   },
//   {
//     number: "02",
//     title: "Thai Handicrafts",
//     category: "Traditional Products",
//     description:
//       "Handicrafts are among the top Thai export products, showcasing traditional skills and locally produced goods for international customers.",
//     icon: Palette,
//     image: "/images/handi.jpg",
//   },
//   {
//     number: "03",
//     title: "Fish Sauce",
//     category: "Food Exports",
//     description:
//       "Fish sauce is one of the Thai food products identified in the source as part of the country's export trade.",
//     icon: UtensilsCrossed,
//     image: "/images/fishsauce.jpg",
//   },
//   {
//     number: "04",
//     title: "Shrimp Paste",
//     category: "Food Exports",
//     description:
//       "Shrimp paste is another traditional Thai food product included among the country's exported goods.",
//     icon: Package,
//     image: "/images/srimp.jpg",
//   },
//   {
//     number: "05",
//     title: "Canned Vegetables",
//     category: "Processed Foods",
//     description:
//       "Canned vegetables are among the processed food products Thailand exports to international markets.",
//     icon: Boxes,
//     image: "/images/canned.jpg",
//   },
//   {
//     number: "06",
//     title: "Seafood",
//     category: "Food & Agriculture",
//     description:
//       "Seafood is another important product category featured in the supplied overview of Thai exports.",
//     icon: Fish,
//     image: "/images/seafood.jpg",
//   },
//   {
//     number: "07",
//     title: "Rubber Bands",
//     category: "Rubber Products",
//     description:
//       "Thailand exports manufactured rubber products, including rubber bands for a variety of uses.",
//     icon: Package,
//     image: "/images/rubberband.jpg",
//   },
//   {
//     number: "08",
//     title: "Rubber Slippers",
//     category: "Rubber Products",
//     description:
//       "Rubber slippers are specifically identified in the source as one of Thailand's exported rubber products.",
//     icon: Factory,
//     image: "/images/slipper.jpg",
//   },
//   {
//     number: "09",
//     title: "Rubber Finger Cones",
//     category: "Rubber Products",
//     description:
//       "Rubber finger cones are another specialized manufactured product included in Thailand's export range.",
//     icon: Boxes,
//     image: "/images/finger.jpg",
//   },
// ];

// const exportEvents = [
//   {
//     number: "01",
//     icon: Globe2,
//     title: "International Trade Fairs",
//     description:
//       "An international trade fair described in the source is held in a different country each year, providing an opportunity for exporters specializing in baking and confectionery products.",
//     label: "Global Market Access",
//   },
//   {
//     number: "02",
//     icon: Sprout,
//     title: "Produce Conferences",
//     description:
//       "Conferences for produce specialists help exporters learn about their trade, discover product opportunities, and connect with other businesses.",
//     label: "Agricultural Trade",
//   },
//   {
//     number: "03",
//     icon: UtensilsCrossed,
//     title: "Food Export Conferences",
//     description:
//       "Events for Thai food exporters, including those shipping food to the United States, discuss shipping regulations applicable to US food shipments.",
//     label: "Food & Compliance",
//   },
//   {
//     number: "04",
//     icon: Handshake,
//     title: "Exporter Networking",
//     description:
//       "Conferences allow businesses to build relationships with other exporters, explore a wider selection of products, and better understand consumer needs.",
//     label: "Business Connections",
//   },
// ];

// const benefits = [
//   {
//     icon: Award,
//     title: "Recognize Excellence",
//     description:
//       "Awards recognize exporters that demonstrate exceptional products and company standards.",
//   },
//   {
//     icon: Network,
//     title: "Build Trade Connections",
//     description:
//       "Industry events help businesses connect with other exporters and discover new opportunities.",
//   },
//   {
//     icon: FileCheck,
//     title: "Understand Regulations",
//     description:
//       "Food-export conferences provide information about shipping regulations for products entering the United States.",
//   },
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

// function ProductCard({ product, onOpen }) {
//   const Icon = product.icon;

//   return (
//     <article className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-[#E7E9E8] transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:shadow-[0_20px_45px_-20px_rgba(7,49,85,0.4)] sm:min-h-[280px]">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//         style={{ backgroundImage: `url(${product.image})` }}
//         aria-hidden="true"
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#041B30]/95 via-[#073155]/75 to-[#073155]/35" />

//       {/* Orange top bar grows on hover */}
//       <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full" />

//       {/* Content */}
//       <div className="relative flex h-full flex-col justify-between p-3.5 sm:p-5 md:p-6">
//         {/* Top row: icon + number */}
//         <div className="flex items-start justify-between gap-2">
//           <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] sm:h-12 sm:w-12 sm:rounded-xl">
//             <Icon size={16} strokeWidth={1.7} className="sm:hidden" />
//             <Icon size={22} strokeWidth={1.7} className="hidden sm:block" />
//           </div>

//           <span className="text-[10px] font-semibold tracking-widest text-white/50 sm:text-xs">
//             {product.number}
//           </span>
//         </div>

//         {/* Bottom block */}
//         <div>
//           <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#F3A071] sm:text-[10px] sm:tracking-[0.14em]">
//             {product.category}
//           </p>

//           <h3 className="mt-1.5 text-[13px] font-semibold leading-tight text-white sm:mt-2 sm:text-lg">
//             {product.title}
//           </h3>

//           {/* Mobile: clamped description */}
//           <p className="mt-1.5 line-clamp-2 text-[11px] leading-[1.45] text-white/75 sm:hidden">
//             {product.description}
//           </p>

//           {/* Desktop: full description */}
//           <p className="mt-2 hidden text-[13px] leading-6 text-white/75 sm:block">
//             {product.description}
//           </p>

//           <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2 text-[10px] font-semibold text-white/90 sm:mt-4 sm:pt-3 sm:text-[11.5px]">
//             <span>Thai Export Product</span>

//             {/* Mobile: tappable arrow that opens modal */}
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.preventDefault();
//                 onOpen(product);
//               }}
//               aria-label={`Read more about ${product.title}`}
//               className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E96C35]/50 bg-[#E96C35]/20 text-[#E96C35] transition-all duration-300 active:scale-95 sm:hidden"
//             >
//               <ArrowUpRight size={14} />
//             </button>

//             {/* Desktop: hide arrow */}
//             <ArrowUpRight
//               size={16}
//               className="hidden text-[#E96C35] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 "
//             />
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// function ProductModal({ product, onClose }) {
//   const Icon = product.icon;

//   // Lock body scroll while open
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   // Close on Escape
//   useEffect(() => {
//     const handler = (e) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 z-[200] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
//       onClick={onClose}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="product-modal-title"
//     >
//       <div
//         className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Image header */}
//         <div className="relative h-44 shrink-0 overflow-hidden sm:h-52">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${product.image})` }}
//             aria-hidden="true"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#041B30]/95 via-[#073155]/60 to-[#073155]/20" />

//           {/* Close button */}
//           <button
//             type="button"
//             onClick={onClose}
//             aria-label="Close"
//             className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
//           >
//             <X size={18} />
//           </button>

//           {/* Icon badge */}
//           <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/25 bg-[#E96C35] text-white shadow-lg">
//             <Icon size={22} strokeWidth={1.8} />
//           </div>

//           {/* Number */}
//           <span className="absolute bottom-4 right-4 text-xs font-semibold tracking-widest text-white/60">
//             {product.number}
//           </span>
//         </div>

//         {/* Body */}
//         <div className="flex-1 overflow-y-auto p-5 sm:p-6">
//           <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E96C35]">
//             {product.category}
//           </p>

//           <h3
//             id="product-modal-title"
//             className="mt-2 text-xl font-semibold leading-tight text-[#073155] sm:text-2xl"
//           >
//             {product.title}
//           </h3>

//           <p className="mt-4 text-sm leading-7 text-[#5A6B7B]">
//             {product.description}
//           </p>
//         </div>

//         {/* Footer CTA */}
//         <div className="shrink-0 border-t border-[#EDF0F0] p-4 sm:p-5">
//           <Link
//             href="/contact"
//             className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#073155] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E96C35]"
//           >
//             Enquire about this export
//             <ArrowUpRight size={16} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// function EventCard({ event }) {
//   const Icon = event.icon;

//   return (
//     <article className="group flex h-full flex-col rounded-2xl border border-[#E6E9E9] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:shadow-[0_16px_40px_rgba(7,49,85,0.06)] sm:p-6 lg:p-7">
//       <div className="flex items-start justify-between gap-3">
//         <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F9EEE7] text-[#E96C35] transition-colors duration-300 group-hover:bg-[#E96C35] group-hover:text-white sm:h-12 sm:w-12 sm:rounded-xl">
//           <Icon size={18} strokeWidth={1.7} className="sm:hidden" />
//           <Icon size={23} strokeWidth={1.7} className="hidden sm:block" />
//         </div>

//         <span className="text-[10px] font-bold tracking-widest text-[#A5AFB5] sm:text-xs">
//           {event.number}
//         </span>
//       </div>

//       <span className="mt-4 inline-flex w-fit rounded-full bg-[#F5F6F4] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#687985] sm:mt-6 sm:px-3 sm:py-1.5 sm:text-[10px]">
//         {event.label}
//       </span>

//       <h3 className="mt-3 text-[14px] font-semibold leading-snug text-[#073155] sm:mt-4 sm:text-lg lg:text-xl">
//         {event.title}
//       </h3>

//       <p className="mt-2 text-[11.5px] leading-[1.55] text-[#71808B] sm:mt-3 sm:text-sm sm:leading-7">
//         {event.description}
//       </p>
//     </article>
//   );
// }

// export default function ThaiExportsPage() {
//   const [activeProduct, setActiveProduct] = useState(null);

//   return (
//     <main className="overflow-hidden bg-white text-[#073155] -mt-6">
//       {/* HERO */}
//       <section className="relative isolate flex min-h-[320px] items-center overflow-hidden bg-[#073155] sm:min-h-[360px] lg:min-h-[420px]">
//         <div
//           className="absolute inset-0 -z-20 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85')",
//           }}
//         />

//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052844]/90 via-[#073155]/75 to-[#073155]/35" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#052844]/25 to-transparent" />

//         <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
//           <div className="max-w-3xl">
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
//               <Globe2 size={14} className="text-[#F3A071] sm:size-[15px]" />
//               <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:text-[11px]">
//                 Thailand · Exports · Global Trade
//               </span>
//             </div>

//             <h1 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[54px]">
//               Thai Exports
//               <span className="mt-1.5 block text-[#F3A071]">
//                 Taking Thai Products Worldwide
//               </span>
//             </h1>

//             <p className="mt-4 max-w-2xl text-[13.5px] leading-6 text-white/85 sm:text-sm sm:leading-7 lg:text-base">
//               Discover Thailand&apos;s export products, industry recognition,
//               trade events, and international opportunities connecting Thai
//               businesses with customers around the world.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
//               <a
//                 href="#export-products"
//                 className="inline-flex items-center gap-2 rounded-full bg-[#E96C35] px-5 py-2.5 text-[12.5px] font-semibold text-white transition-all hover:bg-[#D95C27] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
//               >
//                 Explore Thai Exports
//                 <ArrowRight size={16} />
//               </a>

//               <a
//                 href="#export-events"
//                 className="inline-flex items-center gap-2 rounded-full border border-white/45 px-5 py-2.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
//               >
//                 Export Events
//                 <ArrowUpRight size={16} />
//               </a>
//             </div>

//             <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/75 sm:text-xs">
//               <span className="inline-flex items-center gap-2">
//                 <Ship size={14} />
//                 Global Shipping
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <Wheat size={14} />
//                 Thai Products
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <Handshake size={14} />
//                 Trade Connections
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* INTRODUCTION */}
//       <section className="py-10 sm:py-14 lg:py-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <SectionHeading
//             eyebrow="Thailand's Export Industry"
//             title="Local products with international potential"
//             description="Exporting is a major business in Thailand. Thai businesses send a wide range of goods to international markets — from agricultural products and traditional handicrafts to processed foods and manufactured rubber products."
//             centered
//           />

//           <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2">
//             <div className="rounded-2xl border border-[#E7E9E8] bg-white p-5 sm:p-6">
//               <div className="flex items-start gap-3">
//                 <Globe2 size={22} className="mt-0.5 shrink-0 text-[#E96C35]" />
//                 <div>
//                   <h3 className="font-semibold text-[#073155]">
//                     Connecting Thailand to global markets
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-[#71808B]">
//                     International trade helps Thai businesses introduce their
//                     products to new customers and expand commercial connections
//                     beyond domestic markets.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-[#E7E9E8] bg-white p-5 sm:p-6">
//               <div className="flex items-start gap-3">
//                 <Handshake size={22} className="mt-0.5 shrink-0 text-[#E96C35]" />
//                 <div>
//                   <h3 className="font-semibold text-[#073155]">
//                     Awards, events &amp; networking
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-[#71808B]">
//                     Export awards, industry conferences, and international trade
//                     fairs help Thai exporters demonstrate quality, learn about
//                     market demand, and build business relationships.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EXPORT PRODUCTS */}
//       <section
//         id="export-products"
//         className="scroll-mt-20 bg-[#FAF8F4] py-10 sm:py-14 lg:py-16"
//       >
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <SectionHeading
//             eyebrow="Made in Thailand"
//             title="Explore Thailand's export products"
//             description="From rice and traditional handicrafts to seafood, processed foods, and rubber goods, Thailand offers a diverse range of products for international markets."
//           />

//           <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
//             {exportProducts.map((product, index) => {
//               const isLast = index === exportProducts.length - 1;
//               return (
//                 <div
//                   key={product.number}
//                   className={isLast ? "col-span-2 lg:col-span-1" : ""}
//                 >
//                   <ProductCard
//                     product={product}
//                     onOpen={(p) => setActiveProduct(p)}
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#E6E9E9] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF3E9] text-[#073155]">
//                 <Leaf size={24} />
//               </div>

//               <div>
//                 <h3 className="text-base font-semibold text-[#073155] sm:text-lg">
//                   Agricultural, food &amp; manufactured goods
//                 </h3>
//                 <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#71808B]">
//                   Thailand&apos;s export range spans agricultural staples,
//                   traditional foods, seafood, handicrafts, and practical rubber
//                   products.
//                 </p>
//               </div>
//             </div>

//             <a
//               href="#export-opportunities"
//               className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#E96C35] transition-colors hover:text-[#C95020]"
//             >
//               Discover export opportunities
//               <ArrowRight size={17} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* PRIME MINISTER'S EXPORT AWARD */}
//       <section className="py-10 sm:py-14 lg:py-16">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
//             <div className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl bg-[#073155] p-6 sm:min-h-[320px] sm:p-8 lg:p-10">
//               <div
//                 className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
//                 style={{ backgroundImage: "url('/images/aw.PNG')" }}
//               />
//               <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#073155]/60 via-[#073155]/75 to-[#052844]/95" />

//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E96C35] text-white sm:h-14 sm:w-14">
//                 <Award size={26} strokeWidth={1.6} />
//               </div>

//               <div className="mt-8">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3A071]">
//                   Recognizing Export Excellence
//                 </p>

//                 <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
//                   Prime Minister&apos;s
//                   <br />
//                   Export Award
//                 </h3>

//                 <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
//                   An award recognizing top Thai exporters for exceptional
//                   products and company standards.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col justify-center py-1 lg:py-4">
//               <SectionHeading
//                 eyebrow="Quality & Recognition"
//                 title="Celebrating high standards in Thai exports"
//                 description="Thailand's Prime Minister's Export Award is highlighted as a form of recognition for leading exporters."
//               />

//               <div className="mt-6 space-y-4">
//                 <div className="flex items-start gap-3">
//                   <BadgeCheck size={21} className="mt-1 shrink-0 text-[#E96C35]" />
//                   <div>
//                     <h4 className="font-semibold text-[#073155]">
//                       Exceptional products
//                     </h4>
//                     <p className="mt-1 text-sm leading-6 text-[#71808B]">
//                       The award is associated with exporters demonstrating
//                       outstanding products.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <CheckCircle2 size={21} className="mt-1 shrink-0 text-[#E96C35]" />
//                   <div>
//                     <h4 className="font-semibold text-[#073155]">
//                       Company standards
//                     </h4>
//                     <p className="mt-1 text-sm leading-6 text-[#71808B]">
//                       Strong standards throughout an exporting company are
//                       another key characteristic highlighted.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 border-t border-[#E8EBEB] pt-4">
//                 <p className="text-xs leading-5 text-[#8A969E]">
//                   Award details and current eligibility requirements should be
//                   checked with the relevant official organizer.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EXPORT EVENTS */}
//      <section
//   id="export-events"
//   className="scroll-mt-20 bg-[#FAF8F4] py-10 sm:py-14 lg:py-16"
// >
//   <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//     <SectionHeading
//       eyebrow="Events, Conferences & Trade Fairs"
//       title="Helping Thai exporters grow through connections"
//       description="Export-focused events give businesses opportunities to discover popular products, exchange ideas, understand markets, and connect with other companies."
//     />

//     <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
//       {exportEvents.map((event) => (
//         <EventCard key={event.number} event={event} />
//       ))}
//     </div>

//     <div className="mt-7 grid gap-4 rounded-2xl bg-[#073155] p-5 sm:p-7 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-6">
//       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#F3A071] sm:h-12 sm:w-12">
//         <CalendarDays size={22} className="sm:hidden" />
//         <CalendarDays size={24} className="hidden sm:block" />
//       </div>

//       <div>
//         <h3 className="text-base font-semibold text-white sm:text-lg lg:text-xl">
//           Discover products. Exchange knowledge. Build partnerships.
//         </h3>
//         <p className="mt-2 text-[13px] leading-6 text-white/70 sm:mt-2.5 sm:text-sm sm:leading-7">
//           International baking and confectionery trade fairs, produce
//           conferences, and food-export conferences provide opportunities
//           for exporters to grow and connect.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* WHY EVENTS MATTER */}
//       <section
//         id="export-opportunities"
//         className="py-10 sm:py-14 lg:py-16"
//       >
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <SectionHeading
//             eyebrow="Export Opportunities"
//             title="Building stronger international trade"
//             description="Industry recognition and business events can help Thai exporters improve their market knowledge, form connections, and better understand what international consumers need."
//           />

//           <div className="mt-8 grid gap-5 md:grid-cols-3">
//             {benefits.map((benefit) => {
//               const Icon = benefit.icon;
//               return (
//                 <article
//                   key={benefit.title}
//                   className="rounded-2xl border border-[#E6E9E9] bg-white p-6 sm:p-7"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F9EEE7] text-[#E96C35]">
//                     <Icon size={23} />
//                   </div>

//                   <h3 className="mt-5 text-lg font-semibold text-[#073155] sm:text-xl">
//                     {benefit.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-[#71808B]">
//                     {benefit.description}
//                   </p>
//                 </article>
//               );
//             })}
//           </div>

//           <div className="mt-8 grid items-center gap-6 rounded-2xl border border-[#E6E9E9] bg-[#FAF8F4] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-9">
//             <div>
//               <div className="flex items-center gap-3">
//                 <span className="h-[2px] w-8 bg-[#E96C35]" />
//                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E96C35]">
//                   International Food Trade
//                 </span>
//               </div>

//               <h3 className="mt-4 text-xl font-semibold leading-tight text-[#073155] sm:text-2xl">
//                 Understanding US food shipping regulations
//               </h3>

//               <p className="mt-3 max-w-2xl text-sm leading-7 text-[#71808B]">
//                 Food-export conferences cover shipping regulations for food
//                 products entering the United States. Exporters need to consider
//                 applicable destination-country requirements when preparing
//                 international food shipments.
//               </p>
//             </div>

//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#E96C35] shadow-sm sm:h-16 sm:w-16">
//               <FileCheck size={28} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SHIPPING AND CONTACT CTA */}
//       <section className="bg-[#F7F9FB] py-14 sm:py-16 lg:py-20 mb-10">
//         <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-4">
//               <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073155] text-white sm:flex">
//                 <Container size={24} />
//               </div>

//               <div>
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
//                   Thailand · Exports · Logistics
//                 </p>

//                 <h2 className="mt-2 text-xl font-semibold text-[#073155] sm:text-2xl">
//                   Explore shipping and trade information
//                 </h2>

//                 <p className="mt-2 max-w-xl text-sm leading-6 text-[#5A6B7B]">
//                   Learn more about Thailand&apos;s trade activities and the
//                   shipping considerations involved in international commerce.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <Link
//                 href="/shipping-regulations"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-[#073155]/25 px-5 py-2.5 text-[13px] font-semibold text-[#073155] transition-colors hover:border-[#073155] hover:bg-[#073155] hover:text-white sm:py-3 sm:text-sm"
//               >
//                 Shipping Regulations
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



//       {/* ================= PRODUCT MODAL ================= */}
//       {activeProduct && (
//         <ProductModal
//           product={activeProduct}
//           onClose={() => setActiveProduct(null)}
//         />
//       )}
//     </main>
//   );
// }


import ThaiExportsClient from './ThaiExportsClient';

// 🔹 SEO metadata for Thai Exports Page
export const metadata = {
  title:
    "Thai Exports | Thailand's Top Export Products, Trade Events & Export Awards",
  description:
    "Explore Thailand's top exports including Thai rice, handicrafts, fish sauce, shrimp paste, canned vegetables, seafood, and rubber products. Learn about the Prime Minister's Export Award, international trade fairs, and export opportunities.",
  keywords: [
    "Thai Exports",
    "Thailand Exports",
    "Export from Thailand",
    "Thai Rice Export",
    "Thai Handicrafts",
    "Thai Fish Sauce",
    "Thai Shrimp Paste",
    "Thai Canned Vegetables",
    "Thai Seafood Export",
    "Thai Rubber Products",
    "Rubber Bands Thailand",
    "Rubber Slippers Thailand",
    "Rubber Finger Cones",
    "Prime Minister's Export Award",
    "Thai Export Award",
    "International Trade Fairs Thailand",
    "Thai Export Conferences",
    "Thai Food Export",
    "US Food Shipping Regulations",
    "Thai Export Opportunities",
    "Thai Trade Events",
    "Bangkok Export Services",
  ],
  alternates: {
    canonical: "https://thaishipping.com/thai-exports",
  },
  openGraph: {
    title:
      "Thai Exports | Thailand's Top Export Products, Trade Events & Export Awards",
    description:
      "Explore Thailand's top exports including Thai rice, handicrafts, fish sauce, shrimp paste, canned vegetables, seafood, and rubber products.",
    url: "https://thaishipping.com/thai-exports",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-thai-exports.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Exports - Thailand's Top Export Products and Trade Events",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Exports | Thailand's Top Export Products & Trade Events",
    description:
      "Discover Thailand's top exports including rice, handicrafts, seafood, processed foods, and rubber products.",
    images: ["/og-thai-exports.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <ThaiExportsClient />

      {/* 🔹 Schema Markup for Thai Exports Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Thai Exports",
            description:
              "Explore Thailand's top exports including Thai rice, handicrafts, fish sauce, shrimp paste, canned vegetables, seafood, and rubber products.",
            url: "https://thaishipping.com/thai-exports",
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
                name: "Thai Exports",
                item: "https://thaishipping.com/thai-exports",
              },
            ],
          }),
        }}
      />

      {/* 🔹 ItemList Schema for Thai Export Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Thai Export Products",
            description:
              "A list of Thailand's key export products including rice, handicrafts, seafood, and rubber goods.",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Thai Rice",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Thai Handicrafts",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Fish Sauce",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Shrimp Paste",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Canned Vegetables",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Seafood",
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "Rubber Bands",
              },
              {
                "@type": "ListItem",
                position: 8,
                name: "Rubber Slippers",
              },
              {
                "@type": "ListItem",
                position: 9,
                name: "Rubber Finger Cones",
              },
            ],
          }),
        }}
      />

      {/* 🔹 ItemList Schema for Thai Export Events */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Thai Export Trade Events",
            description:
              "Events and conferences that help Thai exporters grow through networking and market knowledge.",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "International Trade Fairs",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Produce Conferences",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Food Export Conferences",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Exporter Networking",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Service Schema for Thai Export Shipping */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Thai Export Shipping Services",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
            },
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Thai Export Categories",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Agricultural Exports",
                  description: "Thai rice and agricultural products",
                },
                {
                  "@type": "Offer",
                  name: "Traditional Products",
                  description: "Thai handicrafts and traditional goods",
                },
                {
                  "@type": "Offer",
                  name: "Food Exports",
                  description:
                    "Fish sauce, shrimp paste, canned vegetables, and seafood",
                },
                {
                  "@type": "Offer",
                  name: "Rubber Products",
                  description:
                    "Rubber bands, slippers, and rubber finger cones",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}