"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe2,
  BookOpen,
  ShieldCheck,
  SearchCheck,
} from "lucide-react";

const TrustedSection = () => {
  const reduceMotion = useReducedMotion();

  const backgroundImage = "/images/trust.jpg";

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
      y: reduceMotion ? 0 : 10,
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

  const trustPoints = [
    {
      icon: Globe2,
      title: "Thailand-Focused",
      text: "Information centered on Thailand's trade, shipping and international markets.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Coverage",
      text: "Explore imports, exports, food shipping, services and trade regulations.",
    },
    {
      icon: ShieldCheck,
      title: "Practical Guidance",
      text: "Clear information to help you better understand shipping and trade requirements.",
    },
    {
      icon: SearchCheck,
      title: "Easy to Explore",
      text: "Organized resources make important Thailand trade information easier to find.",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden border-t border-b border-white/20 "
      aria-label="Why choose us"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
        aria-hidden="true"
      />

      {/* ================= BLENDED OVERLAY (left → right fade) ================= */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 32%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.78) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            min-h-[250px]
            items-stretch
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* ================= LEFT SIDE EMPTY ================= */}
          <div className="hidden lg:block" />

          {/* ================= RIGHT TEXT AREA ================= */}
          <div className="relative flex items-center">
            {/* Text content */}
            <div className="relative z-10 w-full py-7 pl-6 pr-4 sm:py-8 sm:pl-8 lg:pl-10 xl:pl-12">

              {/* Eyebrow */}
              <motion.div
                variants={item}
                className="mb-2 flex items-center gap-3"
              >
                <span className="h-[2px] w-8 bg-[#E96C35]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white">
                  Why Choose Us
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={item}
                className="
                  max-w-[600px]
                  text-[27px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[31px]
                  lg:text-[35px]
                "
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                }}
              >
                Your Trusted Thailand Trade Guide
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={item}
                className="
                  mt-2.5
                  max-w-[630px]
                  text-[11px]
                  leading-[1.55]
                  text-white/90
                  sm:text-[12px]
                "
                style={{
                  textShadow: "0 1px 6px rgba(0,0,0,0.35)",
                }}
              >
                We bring together clear and practical information about
                Thailand's shipping, imports, exports, food trade and
                regulations — helping you better understand Thailand's role
                in international trade.
              </motion.p>

              {/* ================= TRUST POINTS ================= */}
              <motion.div
                variants={item}
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-x-5
                  gap-y-4
                  xl:grid-cols-4
                "
              >
                {trustPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.title}
                      className="group border-l border-white/25 pl-3"
                    >
                      {/* Icon */}
                      <div
                        className="
                          mb-1.5
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          text-white
                          transition-all
                          duration-300
                          group-hover:bg-[#E96C35]
                        "
                      >
                        <Icon
                          className="h-3.5 w-3.5"
                          strokeWidth={1.7}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-[9px] font-semibold uppercase tracking-[0.05em] text-white"
                        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
                      >
                        {point.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="mt-0.5 max-w-[155px] text-[8.5px] leading-[1.4] text-white/80"
                        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}
                      >
                        {point.text}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedSection;