// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Car,
//   CheckCircle2,
//   Clock3,
//   Globe2,
//   MapPin,
//   Plane,
//   Ship,
//   Truck,
// } from "lucide-react";

// const transportationModes = [
//   {
//     number: "01",
//     title: "Air Shipping",
//     shortTitle: "Air",
//     description:
//       "Air shipping is one of the main transportation methods used by Thai exporters when sending products to other countries.",
//     icon: Plane,
//     image:
//       "/images/air.jpg",
//     points: [
//       "International export transportation",
//       "Used by professional Thai exporters",
//       "Suitable for shipments moving between countries",
//     ],
//   },
//   {
//     number: "02",
//     title: "Sea Shipping",
//     shortTitle: "Sea",
//     description:
//       "Sea shipping is another major transportation method for Thailand's international trade and is widely used by exporters.",
//     icon: Ship,
//     image:
//       "/images/sea.jpg",
//     points: [
//       "International export transportation",
//       "Used by professional shipping companies",
//       "Can support air-and-sea logistics services",
//     ],
//   },
//   {
//     number: "03",
//     title: "Automobile",
//     shortTitle: "Land",
//     description:
//       "Automobile transportation is mainly associated with local deliveries within Thailand.",
//     icon: Car,
//     image:
//       "/images/road.jpg",
//     points: [
//       "Mainly used for local deliveries",
//       "Suitable for domestic transportation",
//       "Useful for individuals and companies within Thailand",
//     ],
//   },
// ];

// const shippingCompanies = [
//   {
//     number: "01",
//     name: "Kintetsu World Express (Thailand) Co. Ltd",
//     founded: "Founded in 1990",
//     specialty: "Air Shipping",
//     description:
//       "Founded in 1990, Kintetsu World Express (Thailand) has become a leader in the Thai shipping industry. The company ships by air.",
//     icon: Plane,
//     accent: "AIR",
//     logo: "/images/clogo1.png",
//   },
//   {
//     number: "02",
//     name: "World Freight Co. Ltd.",
//     founded: "Air & Sea",
//     specialty: "Door-to-Door Shipping",
//     description:
//       "World Freight Co. ships by air and sea and is described as one of the few companies offering door-to-door shipping.",
//     icon: Globe2,
//     accent: "AIR + SEA",
//     logo: "/images/clogo4.png",
//   },
//   {
//     number: "03",
//     name: "Asian Tigers Transpo International Ltd.",
//     founded: "Founded in 1973",
//     specialty: "Moving Into & Out of Asia",
//     description:
//       "Founded in 1973, Asian Tigers helps people who are moving into and out of Asia and offers safe delivery of people's shipments.",
//     icon: Globe2,
//     accent: "MOVING",
//     logo: "/images/clogo2.jpg",
//   },
//   {
//     number: "04",
//     name: "Seaborne Logistics & Services Co. Ltd.",
//     founded: "Worldwide Services",
//     specialty: "Air & Sea Shipments",
//     description:
//       "Seaborne Logistics is one of the leading providers in air and sea shipments and offers services worldwide.",
//     icon: Ship,
//     accent: "WORLDWIDE",
//     logo: "/images/clogo3.png",
//   },
//   {
//     number: "05",
//     name: "V.A.S. Services Ltd",
//     founded: "Land & Sea",
//     specialty: "Clearinghouse Delivery",
//     description:
//       "V.A.S. handles land and sea shipments. The company promises to have shipments to the clearinghouse within 10 minutes, even in the worst traffic.",
//     icon: Truck,
//     accent: "LAND + SEA",
//     logo: "/images/clogo5.png",
//   },
//   {
//     number: "06",
//     name: "B and J Services – Specialist Heavy Transportation",
//     founded: "Specialist Service",
//     specialty: "Heavy Equipment",
//     description:
//       "B & J Services specializes in shipping heavy equipment, providing a specialized transportation option for large and heavy shipments.",
//     icon: Truck,
//     accent: "HEAVY",
//     logo: "/images/clogo6.png",
//   },
// ];

// const comparisonItems = [
//   {
//     label: "Air Shipping",
//     icon: Plane,
//     use: "International exports",
//     providers: "Kintetsu World Express, World Freight, Seaborne Logistics",
//   },
//   {
//     label: "Sea Shipping",
//     icon: Ship,
//     use: "International exports",
//     providers: "World Freight, Seaborne Logistics, V.A.S.",
//   },
//   {
//     label: "Land / Automobile",
//     icon: Car,
//     use: "Local deliveries",
//     providers: "V.A.S. Services",
//   },
//   {
//     label: "Heavy Transportation",
//     icon: Truck,
//     use: "Heavy equipment",
//     providers: "B & J Services",
//   },
// ];

// export default function ShippingServicesPage() {
//   const [activeCompany, setActiveCompany] = useState(null);

//   return (
//     <main className="bg-[#FAF8F4] text-[#073155] -mt-6">
//       {/* =========================================================
//           HERO
//       ========================================================= */}
//       <section className="relative min-h-[430px] overflow-hidden">
//         <img
//           src="/images/services.jpg"
//           alt="Shipping containers and global logistics"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/50" />

//         <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-6 py-16 lg:px-8">
//           <div className="max-w-3xl text-white">
//             <div className="mb-5 inline-flex items-center gap-2 border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
//               Thailand • Global Logistics
//             </div>

//             <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
//               Thailand Shipping
//               <span className="block text-[#F28A5C]">Services</span>
//             </h1>

//             <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
//               Discover the air, sea, and land transportation services used
//               throughout Thailand for international trade and local
//               deliveries.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link
//                 href="#shipping-providers"
//                 className="inline-flex items-center gap-2 bg-[#E96C35] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d95e2b]"
//               >
//                 Explore Shipping Services
//                 <ArrowRight size={17} />
//               </Link>

//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#073155]"
//               >
//                 Contact Us
//                 <ArrowUpRight size={17} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTRO
//       ========================================================= */}
//       <section className="border-b border-[#073155]/10 bg-[#FAF8F4]">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-20">
//           <div>
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E96C35]">
//               Shipping in Thailand
//             </p>

//             <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
//               Connecting local deliveries with international trade.
//             </h2>
//           </div>

//           <div className="max-w-3xl space-y-5 text-[15px] leading-7 text-[#073155]/70">
//             <p>
//               Thailand uses many different modes of transportation for its
//               shipping services, including air, sea, and automobile.
//             </p>

//             <p>
//               Air shipping services and sea shipping services are most often
//               used by companies exporting products to other countries, while
//               automobile transportation pertains mainly to local deliveries.
//             </p>

//             <p>
//               Many Thai exporters use professional shipping services when
//               shipping items internationally by air or sea. Individuals and
//               companies within Thailand who need local shipping services may
//               also use transportation services depending on the destination
//               and delivery requirements.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           TRANSPORTATION MODES
//       ========================================================= */}
//       <section
//         id="transportation"
//         className="bg-white px-6 py-16 lg:px-8 lg:py-20"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E96C35]">
//                 Transportation Modes
//               </p>

//               <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
//                 Three ways Thailand moves goods.
//               </h2>
//             </div>

//             <p className="max-w-md text-sm leading-6 text-[#073155]/60">
//               From international exports to local deliveries, different
//               transportation methods serve different shipping needs.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-3">
//             {transportationModes.map((mode) => {
//               const Icon = mode.icon;

//               return (
//                 <article
//                   key={mode.number}
//                   className="group relative min-h-[430px] overflow-hidden bg-[#073155]"
//                 >
//                   <img
//                     src={mode.image}
//                     alt={mode.title}
//                     className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#073155] via-[#073155]/65 to-[#073155]/10" />

//                   <div className="relative flex min-h-[430px] flex-col justify-between p-7 text-white">
//                     <div className="flex items-start justify-between">
//                       <span className="text-xs font-semibold tracking-[0.2em] text-white/60">
//                         {mode.number}
//                       </span>

//                       <div className="flex h-11 w-11 items-center justify-center border border-white/25 bg-white/10 backdrop-blur-sm">
//                         <Icon size={20} />
//                       </div>
//                     </div>

//                     <div>
//                       <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F28A5C]">
//                         {mode.shortTitle}
//                       </p>

//                       <h3 className="text-2xl font-semibold">{mode.title}</h3>

//                       <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
//                         {mode.description}
//                       </p>

//                       <div className="mt-5 space-y-2 border-t border-white/15 pt-5">
//                         {mode.points.map((point) => (
//                           <div
//                             key={point}
//                             className="flex items-start gap-2 text-xs text-white/75"
//                           >
//                             <CheckCircle2
//                               size={15}
//                               className="mt-0.5 shrink-0 text-[#F28A5C]"
//                             />
//                             <span>{point}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTERNATIONAL VS LOCAL
//       ========================================================= */}
//       <section className="bg-[#F0ECE5] px-6 py-16 lg:px-8 lg:py-20">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
//           <div>
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E96C35]">
//               Local & International
//             </p>

//             <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
//               The right transportation depends on where the shipment is
//               going.
//             </h2>

//             <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#073155]/65">
//               Thailand&apos;s shipping network supports both international
//               exporters and local individuals or businesses. Air and sea
//               transportation are particularly important for products moving
//               between countries, while automobile and land transportation
//               can serve local delivery requirements.
//             </p>
//           </div>

//           <div className="grid gap-4 sm:grid-cols-2">
//             <div className="border border-[#073155]/10 bg-white p-6">
//               <div className="mb-5 flex h-11 w-11 items-center justify-center bg-[#073155] text-white">
//                 <Globe2 size={20} />
//               </div>

//               <h3 className="text-lg font-semibold">International Shipping</h3>

//               <p className="mt-3 text-sm leading-6 text-[#073155]/60">
//                 Air and sea shipping are commonly used by Thai exporters
//                 sending products to other countries.
//               </p>
//             </div>

//             <div className="border border-[#073155]/10 bg-white p-6">
//               <div className="mb-5 flex h-11 w-11 items-center justify-center bg-[#E96C35] text-white">
//                 <Car size={20} />
//               </div>

//               <h3 className="text-lg font-semibold">Local Delivery</h3>

//               <p className="mt-3 text-sm leading-6 text-[#073155]/60">
//                 Automobile transportation is mainly associated with local
//                 deliveries within Thailand.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SHIPPING PROVIDERS  (with logos)
//       ========================================================= */}
//       <section
//         id="shipping-providers"
//         className="bg-[#FAF8F4] px-6 py-16 lg:px-8 lg:py-20"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-12 max-w-3xl">
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E96C35]">
//               Thai Shipping Providers
//             </p>

//             <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
//               Shipping services operating across Thailand and beyond.
//             </h2>

//             <p className="mt-5 text-[15px] leading-7 text-[#073155]/65">
//               The following shipping services are listed in the supplied
//               information and represent different capabilities across air,
//               sea, land, moving, worldwide logistics, and heavy
//               transportation.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {shippingCompanies.map((company) => {
//               const Icon = company.icon;
//               const isActive = activeCompany === company.number;

//               return (
//                 <article
//                   key={company.number}
//                   onClick={() =>
//                     setActiveCompany(isActive ? null : company.number)
//                   }
//                   className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-6 transition duration-300 ${
//                     isActive
//                       ? "border-[#E96C35] shadow-xl shadow-[#073155]/8"
//                       : "border-[#073155]/10 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:shadow-lg hover:shadow-[#073155]/5"
//                   }`}
//                 >
//                   {/* Top row: logo + number */}
//                   <div className="mb-6 flex items-center justify-between gap-4">
//                     <div className="flex h-16 w-32 items-center">
//                       <img
//                         src={company.logo}
//                         alt={`${company.name} logo`}
//                         className="h-14 w-auto max-w-full object-contain"
//                         loading="lazy"
//                       />
//                     </div>

//                     <span className="text-xs font-bold tracking-[0.18em] text-[#073155]/35">
//                       {company.number}
//                     </span>
//                   </div>

//                   {/* Accent chip */}
//                   <div className="mb-3 inline-flex items-center gap-2">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
//                     <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E96C35]">
//                       {company.accent}
//                     </span>
//                   </div>

//                   {/* Name */}
//                   <h3 className="min-h-[58px] text-lg font-semibold leading-snug">
//                     {company.name}
//                   </h3>

//                   {/* Meta chips */}
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <span className="border border-[#073155]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#073155]/55">
//                       {company.founded}
//                     </span>

//                     <span className="border border-[#E96C35]/20 bg-[#E96C35]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E96C35]">
//                       {company.specialty}
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="mt-5 flex-1 text-sm leading-6 text-[#073155]/60">
//                     {company.description}
//                   </p>

//                   {/* Thin footer strip — no "View details" */}
//                   <div className="mt-6 flex items-center justify-between border-t border-[#073155]/10 pt-4">
//                     <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#073155]/45">
//                       <Icon size={14} className="text-[#E96C35]" />
//                       Shipping Provider
//                     </span>

//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           SPECIALIZED CAPABILITIES  (now with bg image)
//       ========================================================= */}
//       <section className="relative isolate overflow-hidden px-6 py-16 lg:px-8 lg:py-20">
//         {/* Background image */}
//         <div
//           className="absolute inset-0 -z-20 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85')",
//           }}
//           aria-hidden="true"
//         />
//         {/* Navy overlay */}
//         <div className="absolute inset-0 -z-10 bg-[#041B30]/90" aria-hidden="true" />
//         {/* Orange corner glow */}
//         <div
//           className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#E96C35]/15 blur-[100px]"
//           aria-hidden="true"
//         />

//         <div className="relative mx-auto max-w-7xl text-white">
//           <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#F28A5C]">
//                 Specialized Services
//               </p>

//               <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
//                 Different needs require different logistics.
//               </h2>
//             </div>

//             <p className="max-w-lg text-sm leading-6 text-white/65">
//               The listed providers cover several specialized areas of
//               shipping, from door-to-door logistics to heavy transportation.
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-3">
//             <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.09]">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E96C35]/20 text-[#F28A5C]">
//                 <MapPin size={21} />
//               </div>

//               <h3 className="text-xl font-semibold">Door-to-Door Shipping</h3>

//               <p className="mt-3 text-sm leading-6 text-white/65">
//                 World Freight Co. is described as one of the few companies
//                 offering door-to-door shipping services by air and sea.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.09]">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E96C35]/20 text-[#F28A5C]">
//                 <Clock3 size={21} />
//               </div>

//               <h3 className="text-xl font-semibold">Clearinghouse Delivery</h3>

//               <p className="mt-3 text-sm leading-6 text-white/65">
//                 V.A.S. Services handles land and sea shipments and states
//                 that shipments can reach the clearinghouse within 10
//                 minutes, even in heavy traffic.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.09]">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E96C35]/20 text-[#F28A5C]">
//                 <Truck size={21} />
//               </div>

//               <h3 className="text-xl font-semibold">Heavy Transportation</h3>

//               <p className="mt-3 text-sm leading-6 text-white/65">
//                 B &amp; J Services specializes in shipping heavy equipment,
//                 making it the specialist option among the listed providers
//                 for heavy transportation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           QUICK COMPARISON
//       ========================================================= */}
//       <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="mb-10">
//             <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E96C35]">
//               Quick Overview
//             </p>

//             <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
//               Choose the service according to your shipment.
//             </h2>
//           </div>

//           <div className="overflow-hidden border border-[#073155]/10">
//             <div className="hidden grid-cols-[1fr_1fr_1.4fr] bg-[#073155] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white md:grid">
//               <span>Transportation</span>
//               <span>Primary Use</span>
//               <span>Listed Providers</span>
//             </div>

//             {comparisonItems.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.label}
//                   className={`grid gap-4 px-6 py-5 md:grid-cols-[1fr_1fr_1.4fr] md:items-center ${
//                     index !== comparisonItems.length - 1
//                       ? "border-b border-[#073155]/10"
//                       : ""
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-9 w-9 items-center justify-center bg-[#F0ECE5] text-[#073155]">
//                       <Icon size={17} />
//                     </div>

//                     <span className="font-semibold">{item.label}</span>
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#E96C35] md:hidden">
//                       Primary Use
//                     </p>

//                     <p className="mt-1 text-sm text-[#073155]/60 md:mt-0">
//                       {item.use}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#E96C35] md:hidden">
//                       Listed Providers
//                     </p>

//                     <p className="mt-1 text-sm leading-6 text-[#073155]/60 md:mt-0">
//                       {item.providers}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INFORMATION NOTE
//       ========================================================= */}
//       <section className="bg-[#F0ECE5] px-6 py-12 lg:px-8">
//         <div className="mx-auto flex max-w-7xl flex-col gap-5 border-l-2 border-[#E96C35] pl-6 md:flex-row md:items-start md:justify-between">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E96C35]">
//               Important Information
//             </p>

//             <h3 className="mt-2 text-xl font-semibold">
//               Shipping services can vary by destination and shipment type.
//             </h3>
//           </div>

//           <p className="max-w-2xl text-sm leading-6 text-[#073155]/60">
//             The company descriptions and service details on this page are
//             based on the information provided. Current availability,
//             coverage, pricing, schedules, and service conditions should be
//             confirmed directly with the relevant shipping provider before
//             arranging a shipment.
//           </p>
//         </div>
//       </section>

//       {/* =========================================================
//           CTA
//       ========================================================= */}
//       <section className="bg-[#FAF8F4] px-6 py-16 lg:px-8 lg:py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="relative overflow-hidden bg-[#073155] px-7 py-12 text-white sm:px-10 lg:px-14">
//             <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
//             <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10" />

//             <div className="relative max-w-3xl">
//               <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F28A5C]">
//                 Ready to Ship?
//               </p>

//               <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
//                 Explore Thailand&apos;s import, export and shipping
//                 information.
//               </h2>

//               <p className="mt-5 max-w-2xl text-sm leading-6 text-white/60">
//                 Learn more about Thai imports, exports, food shipping and
//                 shipping regulations before planning your next shipment.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <Link
//                   href="/thai-imports"
//                   className="inline-flex items-center gap-2 bg-[#E96C35] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d95e2b]"
//                 >
//                   Thai Imports
//                   <ArrowRight size={17} />
//                 </Link>

//                 <Link
//                   href="/shipping-regulations"
//                   className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#073155]"
//                 >
//                   Shipping Regulations
//                   <ArrowUpRight size={17} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Car,
  CheckCircle2,
  Clock3,
  Globe2,
  MapPin,
  Plane,
  Ship,
  Truck,
} from "lucide-react";

const transportationModes = [
  {
    number: "01",
    title: "Air Shipping",
    shortTitle: "Air",
    description:
      "Air shipping is one of the main transportation methods used by Thai exporters when sending products to other countries.",
    icon: Plane,
    image: "/images/air.jpg",
    points: [
      "International export transportation",
      "Used by professional Thai exporters",
      "Suitable for shipments moving between countries",
    ],
  },
  {
    number: "02",
    title: "Sea Shipping",
    shortTitle: "Sea",
    description:
      "Sea shipping is another major transportation method for Thailand's international trade and is widely used by exporters.",
    icon: Ship,
    image: "/images/sea.jpg",
    points: [
      "International export transportation",
      "Used by professional shipping companies",
      "Can support air-and-sea logistics services",
    ],
  },
  {
    number: "03",
    title: "Automobile",
    shortTitle: "Land",
    description:
      "Automobile transportation is mainly associated with local deliveries within Thailand.",
    icon: Car,
    image: "/images/road.jpg",
    points: [
      "Mainly used for local deliveries",
      "Suitable for domestic transportation",
      "Useful for individuals and companies within Thailand",
    ],
  },
];

const shippingCompanies = [
  {
    number: "01",
    name: "Kintetsu World Express (Thailand) Co. Ltd",
    founded: "Founded in 1990",
    specialty: "Air Shipping",
    description:
      "Founded in 1990, Kintetsu World Express (Thailand) has become a leader in the Thai shipping industry. The company ships by air.",
    icon: Plane,
    accent: "AIR",
    logo: "/images/clogo1.png",
  },
  {
    number: "02",
    name: "World Freight Co. Ltd.",
    founded: "Air & Sea",
    specialty: "Door-to-Door Shipping",
    description:
      "World Freight Co. ships by air and sea and is described as one of the few companies offering door-to-door shipping.",
    icon: Globe2,
    accent: "AIR + SEA",
    logo: "/images/clogo4.png",
  },
  {
    number: "03",
    name: "Asian Tigers Transpo International Ltd.",
    founded: "Founded in 1973",
    specialty: "Moving Into & Out of Asia",
    description:
      "Founded in 1973, Asian Tigers helps people who are moving into and out of Asia and offers safe delivery of people's shipments.",
    icon: Globe2,
    accent: "MOVING",
    logo: "/images/clogo2.jpg",
  },
  {
    number: "04",
    name: "Seaborne Logistics & Services Co. Ltd.",
    founded: "Worldwide Services",
    specialty: "Air & Sea Shipments",
    description:
      "Seaborne Logistics is one of the leading providers in air and sea shipments and offers services worldwide.",
    icon: Ship,
    accent: "WORLDWIDE",
    logo: "/images/clogo3.png",
  },
  {
    number: "05",
    name: "V.A.S. Services Ltd",
    founded: "Land & Sea",
    specialty: "Clearinghouse Delivery",
    description:
      "V.A.S. handles land and sea shipments. The company promises to have shipments to the clearinghouse within 10 minutes, even in the worst traffic.",
    icon: Truck,
    accent: "LAND + SEA",
    logo: "/images/clogo5.png",
  },
  {
    number: "06",
    name: "B and J Services – Specialist Heavy Transportation",
    founded: "Specialist Service",
    specialty: "Heavy Equipment",
    description:
      "B & J Services specializes in shipping heavy equipment, providing a specialized transportation option for large and heavy shipments.",
    icon: Truck,
    accent: "HEAVY",
    logo: "/images/clogo6.png",
  },
];

const comparisonItems = [
  {
    label: "Air Shipping",
    icon: Plane,
    use: "International exports",
    providers: "Kintetsu World Express, World Freight, Seaborne Logistics",
  },
  {
    label: "Sea Shipping",
    icon: Ship,
    use: "International exports",
    providers: "World Freight, Seaborne Logistics, V.A.S.",
  },
  {
    label: "Land / Automobile",
    icon: Car,
    use: "Local deliveries",
    providers: "V.A.S. Services",
  },
  {
    label: "Heavy Transportation",
    icon: Truck,
    use: "Heavy equipment",
    providers: "B & J Services",
  },
];

export default function ShippingServicesPage() {
  const [activeCompany, setActiveCompany] = useState(null);

  return (
    <main className="bg-[#FAF8F4] text-[#073155] -mt-6">
      {/* =========================================================
          HERO — reduced height on mobile
      ========================================================= */}
      <section className="relative min-h-[340px] overflow-hidden sm:min-h-[400px] lg:min-h-[430px]">
        <img
          src="/images/services.jpg"
          alt="Shipping containers and global logistics"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-center px-5 py-12 sm:min-h-[400px] sm:px-8 sm:py-16 lg:min-h-[430px] lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="mb-4 inline-flex items-center gap-2 border border-white/30 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
              Thailand • Global Logistics
            </div>

            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-6xl">
              Thailand Shipping
              <span className="block text-[#F28A5C]">Services</span>
            </h1>

            <p className="mt-4 max-w-2xl text-[14px] leading-6 text-white/85 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
              Discover the air, sea, and land transportation services used
              throughout Thailand for international trade and local
              deliveries.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
              <Link
                href="#shipping-providers"
                className="inline-flex items-center gap-2 bg-[#E96C35] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#d95e2b] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Explore Shipping Services
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#073155] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO — tighter padding
      ========================================================= */}
      <section className="border-b border-[#073155]/10 bg-[#FAF8F4]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8 lg:py-14">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#E96C35] sm:text-xs">
              Shipping in Thailand
            </p>

            <h2 className="max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Connecting local deliveries with international trade.
            </h2>
          </div>

          <div className="max-w-3xl space-y-4 text-[14.5px] leading-7 text-[#073155]/70 sm:space-y-5 sm:text-[15px]">
            <p>
              Thailand uses many different modes of transportation for its
              shipping services, including air, sea, and automobile.
            </p>

            <p>
              Air shipping services and sea shipping services are most often
              used by companies exporting products to other countries, while
              automobile transportation pertains mainly to local deliveries.
            </p>

            <p>
              Many Thai exporters use professional shipping services when
              shipping items internationally by air or sea. Individuals and
              companies within Thailand who need local shipping services may
              also use transportation services depending on the destination
              and delivery requirements.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRANSPORTATION MODES
      ========================================================= */}
      <section
        id="transportation"
        className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 md:flex-row md:items-end">
            <div>
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#E96C35] sm:mb-3 sm:text-xs">
                Transportation Modes
              </p>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Three ways Thailand moves goods.
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-6 text-[#073155]/60 sm:text-sm">
              From international exports to local deliveries, different
              transportation methods serve different shipping needs.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {transportationModes.map((mode) => {
              const Icon = mode.icon;

              return (
                <article
                  key={mode.number}
                  className="group relative min-h-[340px] overflow-hidden bg-[#073155] sm:min-h-[380px] lg:min-h-[430px]"
                >
                  <img
                    src={mode.image}
                    alt={mode.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#073155] via-[#073155]/65 to-[#073155]/10" />

                  <div className="relative flex min-h-[340px] flex-col justify-between p-5 text-white sm:min-h-[380px] sm:p-7 lg:min-h-[430px]">
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 sm:text-xs">
                        {mode.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center border border-white/25 bg-white/10 backdrop-blur-sm sm:h-11 sm:w-11">
                        <Icon size={18} className="sm:hidden" />
                        <Icon size={20} className="hidden sm:block" />
                      </div>
                    </div>

                    <div>
                      <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#F28A5C] sm:mb-2 sm:text-xs">
                        {mode.shortTitle}
                      </p>

                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {mode.title}
                      </h3>

                      <p className="mt-2.5 max-w-md text-[13px] leading-6 text-white/75 sm:mt-3 sm:text-sm">
                        {mode.description}
                      </p>

                      <div className="mt-4 space-y-2 border-t border-white/15 pt-4 sm:mt-5 sm:pt-5">
                        {mode.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-2 text-[11.5px] text-white/75 sm:text-xs"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#F28A5C] sm:h-[15px] sm:w-[15px]"
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERNATIONAL VS LOCAL
      ========================================================= */}
      <section className="bg-[#F0ECE5] px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#E96C35] sm:mb-3 sm:text-xs">
              Local & International
            </p>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              The right transportation depends on where the shipment is
              going.
            </h2>

            <p className="mt-4 max-w-xl text-[14.5px] leading-7 text-[#073155]/65 sm:mt-5 sm:text-[15px]">
              Thailand&apos;s shipping network supports both international
              exporters and local individuals or businesses. Air and sea
              transportation are particularly important for products moving
              between countries, while automobile and land transportation
              can serve local delivery requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-[#073155]/10 bg-white p-5 sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#073155] text-white sm:mb-5 sm:h-11 sm:w-11">
                <Globe2 size={18} className="sm:hidden" />
                <Globe2 size={20} className="hidden sm:block" />
              </div>

              <h3 className="text-base font-semibold sm:text-lg">
                International Shipping
              </h3>

              <p className="mt-2.5 text-[13px] leading-6 text-[#073155]/60 sm:mt-3 sm:text-sm">
                Air and sea shipping are commonly used by Thai exporters
                sending products to other countries.
              </p>
            </div>

            <div className="border border-[#073155]/10 bg-white p-5 sm:p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#E96C35] text-white sm:mb-5 sm:h-11 sm:w-11">
                <Car size={18} className="sm:hidden" />
                <Car size={20} className="hidden sm:block" />
              </div>

              <h3 className="text-base font-semibold sm:text-lg">
                Local Delivery
              </h3>

              <p className="mt-2.5 text-[13px] leading-6 text-[#073155]/60 sm:mt-3 sm:text-sm">
                Automobile transportation is mainly associated with local
                deliveries within Thailand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SHIPPING PROVIDERS — 2 cards per row on mobile
      ========================================================= */}
      <section
        id="shipping-providers"
        className="bg-[#FAF8F4] px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#E96C35] sm:mb-3 sm:text-xs">
              Thai Shipping Providers
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Shipping services operating across Thailand and beyond.
            </h2>

            <p className="mt-4 text-[14.5px] leading-7 text-[#073155]/65 sm:mt-5 sm:text-[15px]">
              The following shipping services are listed in the supplied
              information and represent different capabilities across air,
              sea, land, moving, worldwide logistics, and heavy
              transportation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {shippingCompanies.map((company) => {
              const Icon = company.icon;
              const isActive = activeCompany === company.number;

              return (
                <article
                  key={company.number}
                  onClick={() =>
                    setActiveCompany(isActive ? null : company.number)
                  }
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-4 transition duration-300 sm:p-5 lg:p-6 ${
                    isActive
                      ? "border-[#E96C35] shadow-xl shadow-[#073155]/8"
                      : "border-[#073155]/10 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:shadow-lg hover:shadow-[#073155]/5"
                  }`}
                >
                  {/* Top row: logo + number */}
                  <div className="mb-4 flex items-center justify-between gap-2 sm:mb-5 sm:gap-4">
                    <div className="flex h-12 w-20 items-center sm:h-16 sm:w-32">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-10 w-auto max-w-full object-contain sm:h-14"
                        loading="lazy"
                      />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#073155]/35 sm:text-xs">
                      {company.number}
                    </span>
                  </div>

                  {/* Accent chip */}
                  <div className="mb-2 inline-flex items-center gap-1.5 sm:mb-3 sm:gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E96C35] sm:text-[10px] sm:tracking-[0.18em]">
                      {company.accent}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-[13.5px] font-semibold leading-snug sm:text-base lg:text-lg">
                    {company.name}
                  </h3>

                  {/* Meta chips */}
                  <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    <span className="border border-[#073155]/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#073155]/55 sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.12em]">
                      {company.founded}
                    </span>

                    <span className="border border-[#E96C35]/20 bg-[#E96C35]/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#E96C35] sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.12em]">
                      {company.specialty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-[11.5px] leading-5 text-[#073155]/60 sm:mt-5 sm:text-[13px] sm:leading-6">
                    {company.description}
                  </p>

                  {/* Footer strip */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#073155]/10 pt-3 sm:mt-6 sm:pt-4">
                    <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#073155]/45 sm:gap-2 sm:text-[11px] sm:tracking-[0.14em]">
                      <Icon size={12} className="text-[#E96C35] sm:h-3.5 sm:w-3.5" />
                      Provider
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIALIZED CAPABILITIES — 3 cards in 1 row
      ========================================================= */}
      <section className="relative isolate overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85')",
          }}
          aria-hidden="true"
        />
        {/* Navy overlay */}
        <div
          className="absolute inset-0 -z-10 bg-[#041B30]/90"
          aria-hidden="true"
        />
        {/* Orange glow */}
        <div
          className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#E96C35]/15 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl text-white">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 md:flex-row md:items-end">
            <div>
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F28A5C] sm:mb-3 sm:text-xs">
                Specialized Services
              </p>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Different needs require different logistics.
              </h2>
            </div>

            <p className="max-w-lg text-[13px] leading-6 text-white/65 sm:text-sm">
              The listed providers cover several specialized areas of
              shipping, from door-to-door logistics to heavy transportation.
            </p>
          </div>

          {/* 3 cards in 1 row (mobile: still 3 columns with smaller padding) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5">
            <div className="rounded-xl border border-white/15 bg-white/[0.06] p-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.09] sm:rounded-2xl sm:p-5 lg:p-7">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E96C35]/20 text-[#F28A5C] sm:mb-5 sm:h-11 sm:w-11 sm:rounded-xl lg:mb-6 lg:h-12 lg:w-12">
                <MapPin size={16} className="sm:hidden" />
                <MapPin size={20} className="hidden sm:block" />
              </div>

              <h3 className="text-[13px] font-semibold leading-tight sm:text-base lg:text-xl">
                Door-to-Door Shipping
              </h3>

              <p className="mt-2 text-[10.5px] leading-4 text-white/65 sm:mt-2.5 sm:text-[12.5px] sm:leading-6 lg:mt-3 lg:text-sm">
                World Freight Co. is described as one of the few companies
                offering door-to-door shipping services by air and sea.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/[0.06] p-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.09] sm:rounded-2xl sm:p-5 lg:p-7">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E96C35]/20 text-[#F28A5C] sm:mb-5 sm:h-11 sm:w-11 sm:rounded-xl lg:mb-6 lg:h-12 lg:w-12">
                <Clock3 size={16} className="sm:hidden" />
                <Clock3 size={20} className="hidden sm:block" />
              </div>

              <h3 className="text-[13px] font-semibold leading-tight sm:text-base lg:text-xl">
                Clearinghouse Delivery
              </h3>

              <p className="mt-2 text-[10.5px] leading-4 text-white/65 sm:mt-2.5 sm:text-[12.5px] sm:leading-6 lg:mt-3 lg:text-sm">
                V.A.S. Services handles land and sea shipments and states
                that shipments can reach the clearinghouse within 10
                minutes, even in heavy traffic.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/[0.06] p-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:bg-white/[0.09] sm:rounded-2xl sm:p-5 lg:p-7">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#E96C35]/20 text-[#F28A5C] sm:mb-5 sm:h-11 sm:w-11 sm:rounded-xl lg:mb-6 lg:h-12 lg:w-12">
                <Truck size={16} className="sm:hidden" />
                <Truck size={20} className="hidden sm:block" />
              </div>

              <h3 className="text-[13px] font-semibold leading-tight sm:text-base lg:text-xl">
                Heavy Transportation
              </h3>

              <p className="mt-2 text-[10.5px] leading-4 text-white/65 sm:mt-2.5 sm:text-[12.5px] sm:leading-6 lg:mt-3 lg:text-sm">
                B &amp; J Services specializes in shipping heavy equipment,
                making it the specialist option among the listed providers
                for heavy transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK COMPARISON
      ========================================================= */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 sm:mb-10">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#E96C35] sm:mb-3 sm:text-xs">
              Quick Overview
            </p>

            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Choose the service according to your shipment.
            </h2>
          </div>

          <div className="overflow-hidden border border-[#073155]/10">
            <div className="hidden grid-cols-[1fr_1fr_1.4fr] bg-[#073155] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white md:grid">
              <span>Transportation</span>
              <span>Primary Use</span>
              <span>Listed Providers</span>
            </div>

            {comparisonItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`grid gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 md:grid-cols-[1fr_1fr_1.4fr] md:items-center ${
                    index !== comparisonItems.length - 1
                      ? "border-b border-[#073155]/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center bg-[#F0ECE5] text-[#073155] sm:h-9 sm:w-9">
                      <Icon size={15} className="sm:hidden" />
                      <Icon size={17} className="hidden sm:block" />
                    </div>

                    <span className="text-[13.5px] font-semibold sm:text-base">
                      {item.label}
                    </span>
                  </div>

                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#E96C35] sm:text-[10px] md:hidden">
                      Primary Use
                    </p>

                    <p className="mt-1 text-[12.5px] text-[#073155]/60 sm:text-sm md:mt-0">
                      {item.use}
                    </p>
                  </div>

                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#E96C35] sm:text-[10px] md:hidden">
                      Listed Providers
                    </p>

                    <p className="mt-1 text-[12.5px] leading-5 text-[#073155]/60 sm:text-sm sm:leading-6 md:mt-0">
                      {item.providers}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INFORMATION NOTE
      ========================================================= */}
      <section className="bg-[#F0ECE5] px-5 py-8 sm:px-8 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-l-2 border-[#E96C35] pl-4 sm:gap-5 sm:pl-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E96C35] sm:text-xs">
              Important Information
            </p>

            <h3 className="mt-2 text-lg font-semibold sm:text-xl">
              Shipping services can vary by destination and shipment type.
            </h3>
          </div>

          <p className="max-w-2xl text-[13px] leading-6 text-[#073155]/60 sm:text-sm">
            The company descriptions and service details on this page are
            based on the information provided. Current availability,
            coverage, pricing, schedules, and service conditions should be
            confirmed directly with the relevant shipping provider before
            arranging a shipment.
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#FAF8F4] px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-[#073155] px-6 py-8 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F28A5C] sm:text-xs">
                Ready to Ship?
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Explore Thailand&apos;s import, export and shipping
                information.
              </h2>

              <p className="mt-4 max-w-2xl text-[13px] leading-6 text-white/60 sm:mt-5 sm:text-sm">
                Learn more about Thai imports, exports, food shipping and
                shipping regulations before planning your next shipment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                <Link
                  href="/thai-imports"
                  className="inline-flex items-center gap-2 bg-[#E96C35] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#d95e2b] sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Thai Imports
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/shipping-regulations"
                  className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#073155] sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Shipping Regulations
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}