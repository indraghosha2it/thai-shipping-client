"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  PackageOpen,
  Ship,
  UtensilsCrossed,
  Scale,
  Container,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    key: "imports",
    label: "Thai Imports",
    href: "/thai-imports",
    icon: PackageOpen,
    number: "01",
    tagline: "Inbound Trade",
    image: "/images/im2.jpg",
    description:
      "Explore Thailand's major imports, trading partners, industrial products and raw materials.",
  },
  {
    key: "exports",
    label: "Thai Exports",
    href: "/thai-exports",
    icon: Ship,
    number: "02",
    tagline: "Outbound Trade",
    image: "/images/im.jpg",
    description:
      "Discover Thai rice, handicrafts, seafood, rubber and other products reaching global markets.",
  },
  {
    key: "food",
    label: "Thai Food Shipping",
    href: "/thai-food-shipping",
    icon: UtensilsCrossed,
    number: "03",
    tagline: "Food Trade",
    image: "/images/food.jpg",
    description:
      "Learn about frozen meals, canned foods and pre-packaged Thai specialties shipped worldwide.",
  },
  {
    key: "regulations",
    label: "Shipping Regulations",
    href: "/shipping-regulations",
    icon: Scale,
    number: "04",
    tagline: "Compliance",
    image: "/images/s4.jpg",
    description:
      "Understand restricted goods, customs requirements and important Thailand shipping regulations.",
  },
  {
    key: "services",
    label: "Shipping Services",
    href: "/shipping-services",
    icon: Container,
    number: "05",
    tagline: "Freight & Carriers",
    image: "/images/ab1.jpg",
    description:
      "Explore air, sea and land transportation used for domestic and international shipping.",
  },
];

const ExploreSection = () => {
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
      y: reduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-[#F8F8F6] py-8 sm:py-16 lg:py-10"
      aria-label="Explore Thailand trade and shipping"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#E96C35]/[0.035] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#073155]/[0.035] blur-3xl"
        aria-hidden="true"
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          {/* LEFT */}

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#E96C35]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E96C35] sm:text-[10px]">
                Our Services
              </span>
            </div>

            <h2 className="text-[29px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#073155] sm:text-[35px] lg:text-[40px]">
              Explore Thailand Trade
              <span className="text-[#E96C35]"> &amp; Shipping</span>
            </h2>
          </div>

          {/* RIGHT */}

        </motion.div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div className="mt-7 h-px w-full bg-[#DCE0E2] sm:mt-8" />

        {/* ===================================================
            FIVE IMAGE CARDS
        =================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            mt-6
            flex
            gap-2
            overflow-x-auto
            pb-2
            scrollbar-hide
            sm:gap-3
            lg:grid
            lg:grid-cols-5
            lg:overflow-visible
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.key}
                variants={item}
                className="
                  min-w-[220px]
                  flex-1
                  sm:min-w-[250px]
                  lg:min-w-0
                "
              >
                <Link
                  href={service.href}
                  className="
                    group
                    relative
                    block
                    h-[350px]
                    overflow-hidden
                    rounded-[4px]
                    bg-[#073155]
                    shadow-[0_8px_25px_rgba(7,49,85,0.14)]
                    sm:h-[390px]
                    lg:h-[400px]
                  "
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-cover
                      bg-center
                      transition-transform
                      duration-[900ms]
                      ease-out
                      group-hover:scale-[1.07]
                    "
                    style={{
                      backgroundImage: `url("${service.image}")`,
                    }}
                    aria-hidden="true"
                  />

                  {/* =================================================
                      DEFAULT DARK GRADIENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#031D32]/95
                      via-[#073155]/25
                      to-[#073155]/10
                    "
                    aria-hidden="true"
                  />

                  {/* =================================================
                      HOVER OVERLAY
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#073155]/80
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                    aria-hidden="true"
                  />

                  {/* =================================================
                      ORANGE TOP LINE
                  ================================================= */}

                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      z-20
                      h-[3px]
                      w-0
                      bg-[#E96C35]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                    aria-hidden="true"
                  />

                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      z-20
                      text-[9px]
                      font-semibold
                      tracking-[0.18em]
                      text-white/70
                    "
                  >
                    {service.number}
                  </span>

                  {/* =================================================
                      DEFAULT TITLE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-20
                      p-5
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      sm:p-6
                    "
                  >
                    <div className="mb-2 h-[2px] w-7 bg-[#E96C35] transition-all duration-500 group-hover:w-12" />

                    <h3
                      className="
                        text-[17px]
                        font-semibold
                        leading-tight
                        text-white
                        sm:text-[19px]
                      "
                    >
                      {service.label}
                    </h3>
                  </div>

                  {/* =================================================
                      HOVER CONTENT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-20
                      translate-y-8
                      p-5
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      sm:p-6
                    "
                  >
                    {/* Tagline */}

                    <div className="mb-3 flex items-center gap-2">
                      <Icon
                        className="h-4 w-4 text-[#E96C35]"
                        strokeWidth={1.7}
                      />

                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
                        {service.tagline}
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        text-[18px]
                        font-semibold
                        leading-tight
                        text-white
                        sm:text-[20px]
                      "
                    >
                      {service.label}
                    </h3>

                    {/* Description */}

                    <p className="mt-2.5 text-[10.5px] leading-[1.65] text-white/70 sm:text-[11px]">
                      {service.description}
                    </p>

                    {/* Explore */}

                    <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/60">
                        
                      </span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-[#E96C35]
                          text-white
                        "
                      >
                        <ArrowUpRight
                          className="h-3.5 w-3.5"
                          strokeWidth={1.8}
                        />
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      HOVER BORDER
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-30
                      rounded-[4px]
                      ring-1
                      ring-inset
                      ring-white/10
                      transition-all
                      duration-500
                      group-hover:ring-[#E96C35]/60
                    "
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===================================================
            BOTTOM LABEL
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-5 flex items-center justify-between border-t border-[#DCE0E2] pt-4"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#7A858D]">
              Thailand Trade • Shipping • Logistics
            </span>
          </div>

          <Link
            href="/shipping-services"
            className="
              hidden
              items-center
              gap-2
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#073155]
              transition-colors
              hover:text-[#E96C35]
              sm:flex
            "
          >
            View All Services

            <ArrowUpRight
              className="h-3 w-3"
              strokeWidth={1.8}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreSection;