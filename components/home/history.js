
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

const AboutUs = () => {
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
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF8] py-10 sm:py-12 lg:py-8 -mb-6"
      aria-label="About Thailand shipping and trade"
    >
      {/* Subtle background decoration */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#073155]/[0.025] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#E96C35]/[0.035] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">

          {/* =========================
              LEFT IMAGE
          ========================= */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative h-[300px] sm:h-[340px] lg:h-[360px]"
          >
            <motion.div
              variants={item}
              className="relative h-full w-full overflow-hidden"
            >
              <img
                src="/images/ab2.jpg"
                alt="Thailand shipping and international trade"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#073155]/90 via-[#073155]/25 to-transparent"
                aria-hidden="true"
              />

              {/* Orange accent */}
              <div
                className="absolute left-0 top-0 h-full w-[4px] bg-[#E96C35]"
                aria-hidden="true"
              />

              {/* Image content */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="h-px w-7 bg-[#E96C35]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75">
                    Thailand Trade & Shipping
                  </span>
                </div>

                <h3 className="max-w-[400px] text-[23px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[27px]">
                  Thailand's Trade & Shipping Landscape
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT CONTENT
          ========================= */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="flex items-center"
          >
            <div className="w-full">

              {/* Eyebrow */}
              <motion.div
                variants={item}
                className="mb-2.5 flex items-center gap-3"
              >
                <span className="h-[2px] w-7 bg-[#E96C35]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
                  About Us
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={item}
                className="max-w-[580px] text-[27px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#073155] sm:text-[32px] lg:text-[35px]"
              >
                Thailand shipping, imports and exports
              </motion.h2>

              {/* Accent */}
              <motion.div
                variants={item}
                className="my-3 h-[3px] w-10 rounded-full bg-[#E96C35]"
              />

              {/* Short content */}
              <motion.div
                variants={item}
                className="max-w-[610px] space-y-2"
              >
                <p className="text-[12px] leading-[1.65] text-[#596675] sm:text-[13px]">
                  Thailand's international trade is supported by air, sea and
                  land transportation, connecting businesses and products with
                  markets around the world.
                </p>

                <p className="text-[12px] leading-[1.65] text-[#596675] sm:text-[13px]">
                  From rice, seafood, handicrafts and rubber products to
                  machinery, technology and industrial goods, imports and
                  exports play an important role in Thailand's economy.
                </p>
              </motion.div>

              {/* Small information highlight */}
              <motion.div
                variants={item}
                className="mt-4 flex items-center gap-3 border-l-2 border-[#E96C35] bg-white px-3.5 py-2.5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#073155]/[0.06] text-[#073155]">
                  <Globe2
                    className="h-4 w-4"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#073155]">
                    Thailand & Global Trade
                  </p>

                  <p className="mt-0.5 text-[10px] leading-[1.45] text-[#68737E]">
                    Explore imports, exports, food shipping and regulations.
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={item}
                className="mt-4"
              >
                <a
                  href="/about"
                  className="group inline-flex items-center gap-2.5 bg-[#E96C35] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.07em] text-white shadow-[0_6px_18px_rgba(233,108,53,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D95D28] hover:shadow-[0_9px_22px_rgba(233,108,53,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E96C35]"
                >
                  Explore More About Us

                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
