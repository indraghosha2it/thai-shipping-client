

// "use client";

// import { motion, useReducedMotion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// const hero = {
//   image: "/images/banner.jpg",
//   title: "Thailand Import, Export & Shipping",
//   subtitle:
//     "Reliable shipping, trade, and logistics information connecting Thailand with the world.",
// };

// const companyLogos = [
//   { name: "Company One", src: "/images/clogo1.png" },
//   { name: "Company Two", src: "/images/clogo3.png" },
//   { name: "Company Three", src: "/images/clogo4.png" },
//   { name: "Company Four", src: "/images/clogo2.jpg" },
//   { name: "Company Five", src: "/images/clogo5.png" },
//   { name: "Company Six", src: "/images/clogo6.png" },
// ];

// const HeroBanner = () => {
//   const reduceMotion = useReducedMotion();

//   // One orchestrated entrance: children rise in sequence, then stop.
//   const container = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 },
//     },
//   };
//   const item = {
//     hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
//   };

//   // Duplicate the logos so the marquee loops seamlessly
//   const marqueeLogos = [...companyLogos, ...companyLogos];

//   return (
//     <>
//       {/* Keyframes for the infinite horizontal scroll */}
//       <style jsx global>{`
//         @keyframes logo-marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .logo-marquee-track {
//           animation: logo-marquee 28s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .logo-marquee-track {
//             animation: none;
//           }
//         }
//       `}</style>

//       {/* ================= HERO BANNER (unchanged) ================= */}
//       <section className="relative overflow-hidden -mt-20" aria-label="Introduction">
//         <div className="relative min-h-[600px] h-[80vh] md:h-[85vh] lg:h-[90vh]">
//           {/* Background image */}
//           <div
//             className="absolute inset-0 bg-cover bg-no-repeat"
//             style={{ backgroundImage: `url(${hero.image})`, backgroundPosition: "center 40%" }}
//             aria-hidden="true"
//           />

//           {/* Soft shade only behind the text; the rest of the image stays untouched */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background:
//                 'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 78%)',
//             }}
//             aria-hidden="true"
//           />

//           {/* Content - centered */}
//           <div className="relative h-full mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center pt-20 pb-16 ">
//             <motion.div
//               variants={container}
//               initial="hidden"
//               animate="visible"
//               className="max-w-3xl mx-auto text-center flex flex-col items-center"
//             >
//               <motion.div variants={item} className="mb-6 flex items-center justify-center gap-3">
//                 <span className="h-px w-8 bg-[#E96C35]" aria-hidden="true" />
//                 <span className="text-sm font-medium text-white/85">
//                   Thailand · Global trade · Logistics
//                 </span>
//                 <span className="h-px w-8 bg-[#E96C35]" aria-hidden="true" />
//               </motion.div>

//               <motion.h1
//                 variants={item}
//                 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-white leading-[1.08] tracking-tight text-balance drop-shadow-md"
//               >
//                 {hero.title}
//               </motion.h1>

//               <motion.p
//                 variants={item}
//                 className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/85 drop-shadow"
//               >
//                 {hero.subtitle}
//               </motion.p>

//               <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
//                 <Link
//                   href="/tracking-number"
//                   className="group inline-flex items-center gap-3 rounded-md bg-[#E96C35] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#d55f2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                 >
//                   Track Now
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center rounded-md border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                 >
//                   Contact us
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//     {/* ================= LOGISTIC COMPANIES ================= */}
// <section
//   className="relative  bg-[#FAFAF8] py-7 sm:py-8 md:py-4"
//   aria-label="Logistic companies"
// >
//   <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
//     <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-9">

//       {/* ================= LEFT: PREMIUM LABEL ================= */}
//       <div className="flex shrink-0 items-center justify-center md:justify-start">
//         <div className="flex items-center gap-4">

//           {/* Orange accent line */}
//           {/* <span
//             className="h-11 w-[3px] rounded-full bg-[#E96C35]"
//             aria-hidden="true"
//           /> */}

//           <div className="flex flex-col">

//             {/* Small eyebrow */}
//             <span className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8A8F8A] sm:text-[10px]">
//               Our Network
//             </span>

//             {/* Main title */}
//             <p className="text-[17px] font-semibold leading-tight tracking-[-0.02em] sm:text-[19px]">
//               <span className="text-[#073155]">Logistic</span>
//               <span className="ml-1.5 text-[#E96C35]">
//                 Companies
//               </span>
//             </p>

//             {/* Supporting text */}
//             <span className="mt-1 text-[10px] font-medium text-[#9A9D99] sm:text-[11px]">
//               Trusted logistics partners
//             </span>

            

//           </div>

//             <span
//             className="h-11 w-[3px] rounded-full bg-[#E96C35]"
//             aria-hidden="true"
//           />
//         </div>
//       </div>

//       {/* ================= RIGHT: INFINITE LOGO MARQUEE ================= */}
//       <div className="relative min-w-0 flex-1 overflow-hidden">

//         {/* Left fade */}
//         <div
//           className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-16"
//           style={{
//             background:
//               "linear-gradient(to right, #FAFAF8, rgba(250,250,248,0))",
//           }}
//           aria-hidden="true"
//         />

//         {/* Right fade */}
//         <div
//           className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-16"
//           style={{
//             background:
//               "linear-gradient(to left, #FAFAF8, rgba(250,250,248,0))",
//           }}
//           aria-hidden="true"
//         />

//         {/* Marquee viewport */}
//         <div className="overflow-hidden">
//           <div className="logo-marquee-track flex w-max items-center gap-10 py-2 md:gap-14">

//             {marqueeLogos.map((logo, i) => (
//               <div
//                 key={`${logo.name}-${i}`}
//                 className="flex h-10 w-32 shrink-0 items-center justify-center sm:h-12 sm:w-36 md:h-14 md:w-40"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.name}
//                   loading="lazy"
//                   className="h-full w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>
//     </>
//   );
// };

// export default HeroBanner;


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

  const marqueeLogos = [...companyLogos, ...companyLogos];

  return (
    <>
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

      {/* ================= HERO BANNER ================= */}
      <section className="relative overflow-hidden -mt-20" aria-label="Introduction">
        {/* 
          Mobile: reduced height (min-h-[340px] h-[48vh])
          Small: min-h-[420px] h-[58vh]
          md+:   original heights restored
        */}
        <div className="relative min-h-[340px] h-[48vh] sm:min-h-[420px] sm:h-[58vh] md:min-h-[600px] md:h-[80vh] lg:h-[85vh] xl:h-[90vh]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${hero.image})`, backgroundPosition: "center 40%" }}
            aria-hidden="true"
          />

          {/* Soft shade only behind the text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 65% 55% at 50% 45%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 78%)',
            }}
            aria-hidden="true"
          />

          {/* Content - centered */}
          <div className="relative h-full mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center pt-16 pb-12 sm:pt-20 sm:pb-16">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto text-center flex flex-col items-center"
            >
              <motion.div variants={item} className="mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
                <span className="h-px w-6 sm:w-8 bg-[#E96C35]" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium text-white/85">
                  Thailand · Global trade · Logistics
                </span>
                <span className="h-px w-6 sm:w-8 bg-[#E96C35]" aria-hidden="true" />
              </motion.div>

              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-white leading-[1.08] tracking-tight text-balance drop-shadow-md"
              >
                {hero.title}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/85 drop-shadow"
              >
                {hero.subtitle}
              </motion.p>

              <motion.div variants={item} className="mt-6 sm:mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/tracking-number"
                  className="group inline-flex items-center gap-2 sm:gap-3 rounded-md bg-[#E96C35] px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#d55f2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Track Now
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-white/50 px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
        className="relative bg-[#FAFAF8] py-4 sm:py-7 md:py-4"
        aria-label="Logistic companies"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:gap-9">
            {/* LEFT: PREMIUM LABEL — hidden on mobile, visible on md+ */}
            <div className="hidden shrink-0 items-center justify-center md:flex md:justify-start">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8A8F8A] sm:text-[10px]">
                    Our Network
                  </span>
                  <p className="text-[17px] font-semibold leading-tight tracking-[-0.02em] sm:text-[19px]">
                    <span className="text-[#073155]">Logistic</span>
                    <span className="ml-1.5 text-[#E96C35]">
                      Companies
                    </span>
                  </p>
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

            {/* RIGHT: INFINITE LOGO MARQUEE — full width on mobile */}
            <div className="relative min-w-0 flex-1 overflow-hidden">
              {/* Left fade */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-12 md:w-16"
                style={{
                  background:
                    "linear-gradient(to right, #FAFAF8, rgba(250,250,248,0))",
                }}
                aria-hidden="true"
              />

              {/* Right fade */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-12 md:w-16"
                style={{
                  background:
                    "linear-gradient(to left, #FAFAF8, rgba(250,250,248,0))",
                }}
                aria-hidden="true"
              />

              {/* Marquee viewport */}
              <div className="overflow-hidden">
                <div className="logo-marquee-track flex w-max items-center gap-6 sm:gap-10 md:gap-14 py-1 sm:py-2">
                  {marqueeLogos.map((logo, i) => (
                    <div
                      key={`${logo.name}-${i}`}
                      className="flex h-7 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-28 md:h-14 md:w-40"
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