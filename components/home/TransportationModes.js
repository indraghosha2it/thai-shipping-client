"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Ship,
  Plane,
  Truck,
  ArrowUpRight,
  X,
  BookOpen,
} from "lucide-react";
import { useEffect, useState } from "react";

const modes = [
  {
    key: "sea",
    label: "Sea Freight",
    short: "Global ocean transportation",
    icon: Ship,
    image: "/images/sea.jpg",
    description:
      "Cost-effective ocean freight for large-volume international shipments, connecting Thailand with global markets.",
  },
  {
    key: "air",
    label: "Air Freight",
    short: "Time-critical cargo",
    icon: Plane,
    image: "/images/air.jpg",
    description:
      "Fast and reliable air cargo solutions for time-sensitive shipments that need to reach their destination quickly.",
  },
  {
    key: "auto",
    label: "Road Transport",
    short: "Local & regional delivery",
    icon: Truck,
    image: "/images/road.jpg",
    description:
      "Flexible ground transportation for local distribution, regional delivery, and last-mile cargo movement.",
  },
];

const TransportationModes = () => {
  const reduceMotion = useReducedMotion();

  // Card currently being hovered / selected
  const [active, setActive] = useState(null);

  // Read More modal
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // =========================================================
  // CLOSE MODAL WITH ESCAPE
  // =========================================================
  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* =========================================================
          TRANSPORTATION SECTION
      ========================================================= */}
      <section
        className="relative overflow-hidden bg-[#F7F9FB] py-12 sm:py-14 lg:py-16"
        aria-label="Transportation modes"
      >
        {/* =======================================================
            BACKGROUND DECORATION
        ======================================================= */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#E96C35]/5 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#073155]/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12">
          {/* =======================================================
              MAIN LAYOUT
          ======================================================= */}
          <div className="grid items-center gap-7 lg:grid-cols-[0.72fr_1.28fr] xl:gap-9">
            {/* =====================================================
                LEFT SIDE
            ===================================================== */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-[370px]"
            >
              {/* Eyebrow */}
              <motion.div
                variants={item}
                className="mb-3 flex items-center gap-2.5"
              >
                <span
                  className="h-[2px] w-7 bg-[#E96C35]"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E96C35]">
                  Transportation Solutions
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={item}
                className="max-w-[340px] text-[28px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#073155] sm:text-[32px] lg:text-[35px]"
              >
                The right transportation mode for every shipment
              </motion.h2>

              {/* Accent line */}
              <motion.div
                variants={item}
                className="my-4 h-[3px] w-12 rounded-full bg-[#E96C35]"
              />

              {/* Short visible text */}
              <motion.div variants={item}>
                <p className="max-w-[350px] text-[13px] leading-5.5 text-[#596675] sm:text-[14px]">
                  Thailand's logistics network combines sea, air, and road
                  transportation to move goods efficiently across borders and
                  throughout the country.
                </p>

                <p className="mt-3 max-w-[350px] text-[13px] leading-5.5 text-[#596675] sm:text-[14px]">
                  From large international cargo to time-sensitive deliveries,
                  we select the transportation mode according to the shipment's
                  requirements.
                </p>
              </motion.div>

              {/* ===================================================
                  READ MORE BUTTON
              =================================================== */}
              <motion.div variants={item} className="mt-5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#073155] transition-colors hover:text-[#E96C35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E96C35]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E96C35] text-white transition-transform duration-300 group-hover:scale-105">
                    <BookOpen className="h-3.5 w-3.5" />
                  </span>

                  Read More

                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </button>
              </motion.div>

              {/* Small information line */}
              <motion.div
                variants={item}
                className="mt-6 flex items-center gap-3 border-t border-[#DDE1DE] pt-4"
              >
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#073155]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#89958C]" />
                </div>

                <span className="text-[11px] font-medium text-[#6B747C]">
                  Sea · Air · Road transportation
                </span>
              </motion.div>
            </motion.div>

            {/* =====================================================
                RIGHT SIDE — TRANSPORTATION CARDS
            ===================================================== */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {modes.map((mode, index) => {
                const Icon = mode.icon;
                const isActive = active === mode.key;

                return (
                  <motion.button
                    key={mode.key}
                    type="button"
                    variants={item}
                    onMouseEnter={() => setActive(mode.key)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(mode.key)}
                    onBlur={() => setActive(null)}
                    onClick={() =>
                      setActive((current) =>
                        current === mode.key ? null : mode.key
                      )
                    }
                    className={`group relative aspect-[0.78/1] min-h-[250px] overflow-hidden rounded-xl text-left outline-none transition-all duration-500 sm:min-h-[270px] ${
                      isActive
                        ? "shadow-[0_16px_38px_rgba(7,49,85,0.2)]"
                        : "shadow-[0_6px_20px_rgba(7,49,85,0.08)]"
                    }`}
                    aria-label={mode.label}
                    aria-pressed={isActive}
                  >
                    {/* =================================================
                        FULL CARD IMAGE
                    ================================================= */}
                    <div
                      className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out ${
                        isActive ? "scale-[1.07]" : "scale-100"
                      }`}
                      style={{
                        backgroundImage: `url(${mode.image})`,
                      }}
                      aria-hidden="true"
                    />

                    {/* =================================================
                        DEFAULT IMAGE OVERLAY
                    ================================================= */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? "bg-[#073155]/30"
                          : "bg-[#073155]/10"
                      }`}
                      aria-hidden="true"
                    />

                    {/* =================================================
                        BOTTOM DARK GRADIENT
                        Only enough to make default title readable
                    ================================================= */}
                    <div
                      className={`absolute inset-x-0 bottom-0 transition-all duration-500 ${
                        isActive
                          ? "h-full bg-gradient-to-t from-[#041C31]/95 via-[#041C31]/55 to-[#041C31]/10"
                          : "h-[32%] bg-gradient-to-t from-[#041C31]/75 to-transparent"
                      }`}
                      aria-hidden="true"
                    />

                    {/* =================================================
                        TOP ORANGE ACCENT
                    ================================================= */}
                    <span
                      className={`absolute left-0 top-0 z-20 h-[3px] bg-[#E96C35] transition-all duration-500 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />

                    {/* =================================================
                        CARD NUMBER
                    ================================================= */}
                    <span
                      className={`absolute right-4 top-4 z-20 text-[10px] font-bold tracking-[0.15em] transition-colors duration-300 ${
                        isActive
                          ? "text-white/75"
                          : "text-white/80"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    {/* =================================================
                        DEFAULT TITLE
                        Visible even before hover
                    ================================================= */}
                    <div
                      className={`absolute bottom-4 left-4 z-10 transition-all duration-400 ${
                        isActive
                          ? "translate-y-2 opacity-0"
                          : "translate-y-0 opacity-100"
                      }`}
                    >
                      <h3 className="text-[16px] font-semibold leading-tight text-white drop-shadow-md">
                        {mode.label}
                      </h3>
                    </div>

                    {/* =================================================
                        HOVER / ACTIVE DETAILS
                    ================================================= */}
                    <div
                      className={`absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-500 sm:p-5 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-5 opacity-0"
                      }`}
                    >
                      {/* Icon */}
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#E96C35] text-white shadow-lg">
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-[17px] font-semibold leading-tight text-white">
                        {mode.label}
                      </h3>

                      {/* Short label */}
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/65">
                        {mode.short}
                      </p>

                      {/* Description */}
                      <p className="mt-2 text-[11px] leading-[1.5] text-white/90">
                        {mode.description}
                      </p>

                      {/* View service */}
                      <div className="mt-3 flex items-center gap-2">
                        <span className="h-[2px] w-6 bg-[#E96C35]" />

                      

                      </div>
                    </div>

                    {/* =================================================
                        FOCUS RING
                    ================================================= */}
                    <span
                      className="pointer-events-none absolute inset-0 z-30 rounded-xl ring-2 ring-inset ring-transparent transition group-focus-visible:ring-[#E96C35]"
                      aria-hidden="true"
                    />
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          READ MORE MODAL
      ========================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#041C31]/60 px-5 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="transportation-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
          >
            {/* Orange top line */}
            <div className="h-1 w-full bg-[#E96C35]" />

            {/* Modal header */}
            <div className="flex items-start justify-between gap-5 border-b border-[#E8ECEF] px-6 py-5 sm:px-8 sm:py-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-[#E96C35]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E96C35]">
                    Transportation Solutions
                  </span>
                </div>

                <h3
                  id="transportation-modal-title"
                  className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#073155] sm:text-3xl"
                >
                  The right transportation mode for every shipment
                </h3>
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E1E6EA] text-[#596675] transition-colors hover:border-[#E96C35] hover:bg-[#FFF5EF] hover:text-[#E96C35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E96C35]"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal content */}
            <div className="max-h-[65vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
              <div className="space-y-5 text-[14px] leading-7 text-[#596675] sm:text-[15px]">
                <p>
                  Thailand's logistics network combines sea, air, and road
                  transportation to move goods efficiently across borders and
                  throughout the country.
                </p>

                <p>
                  From large international cargo to time-sensitive deliveries,
                  each transportation mode is selected to match the shipment's
                  requirements.
                </p>

                <p>
                  Ocean shipping handles a significant portion of Thailand's
                  international trade and provides a cost-effective solution
                  for larger shipments. Air freight is particularly suitable
                  for time-sensitive cargo that needs to reach its destination
                  quickly.
                </p>

                <p>
                  Road transportation supports local and regional distribution,
                  helping move goods between facilities, destinations, and
                  customers efficiently.
                </p>

                <p>
                  By combining these transportation options, shipping
                  requirements can be matched with the appropriate mode based
                  on cargo type, destination, timing, and delivery needs.
                </p>
              </div>

              {/* Modal bottom information */}
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#E8ECEF] pt-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#E96C35]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#073155]">
                    Sea Freight
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#073155]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#073155]">
                    Air Freight
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#89958C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#073155]">
                    Road Transport
                  </span>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex justify-end border-t border-[#E8ECEF] bg-[#F8FAFB] px-6 py-4 sm:px-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-[#073155] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#0B426B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#073155]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default TransportationModes;