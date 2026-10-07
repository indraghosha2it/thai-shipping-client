"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Lock,
  FileText,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Cookie,
  UserCheck,
  Database,
  Share2,
  Clock,
  Baby,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Handshake,
} from "lucide-react";

// ================= API =================
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

// ================= SECTIONS DATA =================
const sections = [
  {
    id: "introduction",
    icon: FileText,
    title: "1. Introduction",
    paragraphs: [
      'Thai Shipping ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thaishipping.com (the "Site") or use our services.',
      "Please read this Privacy Policy carefully. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site.",
    ],
  },
  {
    id: "information-we-collect",
    icon: Database,
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect information about you in a variety of ways. The information we may collect on the Site includes:",
    ],
    subsections: [
      {
        title: "2.1 Personal Information You Provide",
        items: [
          "Contact details such as your name, email address, phone number, and postal address",
          "Company information including business name, registration details, and job title",
          "Shipment details such as origin, destination, cargo type, weight, and dimensions",
          "Any additional information you choose to provide through our quote request or contact forms",
        ],
      },
      {
        title: "2.2 Information Collected Automatically",
        items: [
          "Log data including IP address, browser type, operating system, and access times",
          "Device information such as device type, screen resolution, and unique device identifiers",
          "Usage data showing which pages you visit, how long you stay, and how you navigate our Site",
          "Referring URLs indicating how you arrived at our Site",
        ],
      },
      {
        title: "2.3 Information from Cookies and Tracking Technologies",
        items: [
          "Cookies to recognize your browser and remember your preferences",
          "Web beacons and pixel tags to analyze Site usage and measure performance",
          "Analytics tools that help us understand visitor behavior and improve our services",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    icon: UserCheck,
    title: "3. How We Use Your Information",
    paragraphs: [
      "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use the information we collect to:",
    ],
    bullets: [
      "Respond to your quote requests, inquiries, and customer service needs",
      "Process and manage shipping bookings and related services",
      "Send you administrative information such as confirmations, invoices, and updates",
      "Improve our Site, products, services, and marketing efforts",
      "Send promotional communications, if you have opted in to receive them",
      "Monitor and analyze usage patterns to enhance user experience",
      "Prevent fraudulent transactions and protect against criminal activity",
      "Comply with legal obligations and enforce our terms of service",
    ],
  },
  {
    id: "sharing",
    icon: Share2,
    title: "4. Sharing Your Information",
    paragraphs: [
      "We may share the information we collect about you in certain situations. Your information may be disclosed as follows:",
    ],
    subsections: [
      {
        title: "4.1 With Service Providers",
        items: [
          "Shipping partners and logistics providers to fulfill your shipment requests",
          "Customs brokers and regulatory authorities where required by law",
          "Payment processors to complete financial transactions securely",
          "IT service providers who help operate our Site and services",
        ],
      },
      {
        title: "4.2 For Legal Reasons",
        items: [
          "To comply with applicable laws, regulations, or legal processes",
          "To respond to valid requests from public authorities",
          "To enforce our legal rights and protect our interests",
          "To prevent harm to our users, our business, or the public",
        ],
      },
      {
        title: "4.3 Business Transfers",
        items: [
          "In connection with any merger, acquisition, or sale of assets",
          "If our business is transferred to another entity, your information may be part of the transferred assets",
        ],
      },
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "5. Cookies and Tracking Technologies",
    paragraphs: [
      "We use cookies, web beacons, and other tracking technologies to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.",
      "Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.",
    ],
  },
  {
    id: "security",
    icon: Lock,
    title: "6. Security of Your Information",
    paragraphs: [
      "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.",
    ],
    bullets: [
      "Secure Sockets Layer (SSL) technology encrypts data transmitted through our Site",
      "Access to your personal information is limited to authorized personnel",
      "Regular security assessments help identify and address potential vulnerabilities",
      "Employee training ensures our team understands data protection responsibilities",
    ],
  },
  {
    id: "retention",
    icon: Clock,
    title: "7. Data Retention",
    paragraphs: [
      "We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.",
      "When we no longer need your personal information, we will securely delete or anonymize it in accordance with applicable laws and regulations.",
    ],
  },
  {
    id: "your-rights",
    icon: Shield,
    title: "8. Your Privacy Rights",
    paragraphs: [
      "Depending on your location, you may have certain rights regarding your personal information. These rights may include:",
    ],
    bullets: [
      "The right to access — request copies of your personal information",
      "The right to rectification — request correction of inaccurate information",
      "The right to erasure — request deletion of your personal information",
      "The right to restrict processing — request we limit how we use your data",
      "The right to data portability — request we transfer your data to another service",
      "The right to object — object to our processing of your personal information",
      "The right to withdraw consent — withdraw any consent you have given",
    ],
  },
  {
    id: "children",
    icon: Baby,
    title: "9. Children's Privacy",
    paragraphs: [
      "Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to remove that information from our records.",
    ],
  },
  {
    id: "international",
    icon: Globe2,
    title: "10. International Data Transfers",
    paragraphs: [
      "Your information, including personal information, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.",
      "If you are located outside Thailand and choose to provide information to us, please note that we transfer the information to Thailand and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "11. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify you by email or through a prominent notice on our Site.',
      "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
    ],
  },
];

// ================= QUICK SUMMARY DATA =================
const quickSummary = [
  {
    icon: Database,
    title: "What We Collect",
    description: "Contact details, shipment info, and browsing data.",
  },
  {
    icon: UserCheck,
    title: "How We Use It",
    description: "To serve your shipping needs and improve our services.",
  },
  {
    icon: Share2,
    title: "Who We Share With",
    description: "Shipping partners, customs, and legal authorities only.",
  },
  {
    icon: Shield,
    title: "Your Rights",
    description: "Access, correct, delete, or transfer your data anytime.",
  },
];

// All ids used by the sidebar scroll-spy (sections + contact)
const SECTION_IDS = [...sections.map((section) => section.id), "contact"];

// Distance from the top of the viewport at which a section counts as "active".
// Keep in sync with your navbar height + the `scroll-mt-28` class on sections.
const SCROLL_SPY_OFFSET = 160;

export default function PrivacyPolicyClient() {
  const reduceMotion = useReducedMotion();

  // ================= ACTIVE SIDEBAR SECTION =================
  const [activeSection, setActiveSection] = useState("introduction");

  // ================= FOOTER SETTINGS (for Contact Us) =================
  const [footerSettings, setFooterSettings] = useState(null);
  const [settingsLoading, setSettingsLoading] = useState(true);

  // Fetch contact info from the footer settings API
  useEffect(() => {
    let isMounted = true;

    const fetchFooterSettings = async () => {
      try {
        const res = await fetch(`${API_URL}/footer-settings`, {
          cache: "no-store",
        });
        const json = await res.json();

        if (isMounted && json.success) {
          setFooterSettings(json.data);
        }
      } catch (err) {
        console.error("Failed to load footer settings:", err);
      } finally {
        if (isMounted) setSettingsLoading(false);
      }
    };

    fetchFooterSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  // Derive contact info with graceful fallbacks
  const contactInfo = footerSettings?.contactInfo || {};
  const addressObj = contactInfo?.address || {};

  const fullAddress = [
    addressObj?.line1,
    addressObj?.line2,
    addressObj?.country,
  ]
    .filter(Boolean)
    .join(", ");

  const email = contactInfo?.email || "privacy@thaishipping.com";
  const phone = contactInfo?.phone || "+66 00 000 0000";
  const address = fullAddress || "Bangkok, Thailand";

  // ================= SCROLL SPY =================
  useEffect(() => {
    const handleScroll = () => {
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);

        if (
          element &&
          element.getBoundingClientRect().top <= SCROLL_SPY_OFFSET
        ) {
          current = id;
        }
      }

      // At the very bottom of the page the last section may never reach the top
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // ================= ANIMATION VARIANTS =================
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 16,
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
    // NOTE: no overflow-* class here, any overflow on an ancestor can break position: sticky
    <main className="bg-white text-[#073155] -mt-6">
      {/* ============================================================
          HERO
      ============================================================ */}
      <section
        className="relative isolate overflow-hidden bg-[#041B30]"
        aria-labelledby="privacy-heading"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/priv.jpg')",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,27,48,0.95) 0%, rgba(4,27,48,0.85) 35%, rgba(4,27,48,0.4) 65%, rgba(4,27,48,0.1) 100%)",
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

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:px-12 lg:pt-20 lg:pb-14">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={item} className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E96C35]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F2A57C]">
                Legal
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              id="privacy-heading"
              className="text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-md sm:text-4xl lg:text-[52px]"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 max-w-2xl text-[14px] leading-7 text-white/85 drop-shadow sm:text-[15px]"
            >
              Your privacy matters to us. This policy explains how Thai
              Shipping collects, uses, and protects your personal information
              when you use our Site and services.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
            >
              <Clock className="h-3.5 w-3.5 text-[#F2A57C]" />
              <span className="text-[11px] font-medium text-white/80">
                Last updated: January 2025
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          QUICK SUMMARY
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#F7F9FB] py-10 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#E96C35]/5 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-center"
          >
            <motion.div
              variants={item}
              className="mb-4 inline-flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-[#E96C35]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
                At a Glance
              </span>
              <span className="h-[2px] w-8 bg-[#E96C35]" />
            </motion.div>

            <motion.h2
              variants={item}
              className="text-xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[34px]"
            >
              Your privacy, in four key points
            </motion.h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4"
          >
            {quickSummary.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  variants={item}
                  className="group rounded-xl border border-[#E5E9EF] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/40 hover:shadow-[0_18px_40px_-20px_rgba(7,49,85,0.25)] sm:rounded-2xl sm:p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E96C35]/10 text-[#E96C35] transition-all duration-300 group-hover:bg-[#E96C35] group-hover:text-white sm:h-11 sm:w-11 sm:rounded-xl">
                    <Icon
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-3.5 text-[13px] font-semibold leading-tight text-[#073155] sm:mt-5 sm:text-[15px]">
                    {point.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] leading-5 text-[#5A6B7B] sm:mt-2.5 sm:text-[12.5px] sm:leading-6">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTENT + SIDEBAR NAV
      ============================================================ */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            {/* ============ STICKY SIDEBAR ============ */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#073155]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
                  On This Page
                </div>

                <nav
                  aria-label="Privacy policy sections"
                  className="space-y-1 border-l border-[#E5E9EF]"
                >
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        aria-current={isActive ? "location" : undefined}
                        onClick={() => setActiveSection(section.id)}
                        className={`-ml-px block border-l py-1.5 pl-4 pr-2 text-[13px] transition-colors ${
                          isActive
                            ? "border-[#E96C35] font-medium text-[#E96C35]"
                            : "border-transparent text-[#5A6B7B] hover:text-[#073155]"
                        }`}
                      >
                        {section.title}
                      </a>
                    );
                  })}

                  <a
                    href="#contact"
                    aria-current={
                      activeSection === "contact" ? "location" : undefined
                    }
                    onClick={() => setActiveSection("contact")}
                    className={`-ml-px block border-l py-1.5 pl-4 pr-2 text-[13px] transition-colors ${
                      activeSection === "contact"
                        ? "border-[#E96C35] font-medium text-[#E96C35]"
                        : "border-transparent text-[#5A6B7B] hover:text-[#073155]"
                    }`}
                  >
                    12. Contact Us
                  </a>
                </nav>

                <Link
                  href="/contact"
                  className="group mt-6 inline-flex w-full items-center justify-between gap-2 rounded-lg bg-[#073155] px-4 py-2.5 text-[12px] font-semibold text-white transition-colors duration-300 hover:bg-[#E96C35]"
                >
                  Questions?
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </aside>

            {/* ============ MAIN CONTENT ============ */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="max-w-3xl"
            >
              {/* INTRO */}
              <motion.p
                variants={item}
                className="text-[14.5px] leading-7 text-[#4A5568] sm:text-[15px] sm:leading-8"
              >
                At Thai Shipping, we take your privacy seriously. This Privacy
                Policy describes the types of information we may collect from
                you or that you may provide when you visit our Site or use our
                services, and our practices for collecting, using, maintaining,
                protecting, and disclosing that information.
              </motion.p>

              {/* SECTIONS */}
              <div className="mt-10 space-y-10 sm:space-y-12">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <motion.section
                      key={section.id}
                      id={section.id}
                      variants={item}
                      className="scroll-mt-28"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#073155] text-white sm:h-10 sm:w-10">
                          <Icon
                            className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                            strokeWidth={1.8}
                          />
                        </span>

                        <h2 className="text-lg font-semibold leading-tight text-[#073155] sm:text-xl">
                          {section.title}
                        </h2>
                      </div>

                      {section.paragraphs?.map((p, i) => (
                        <p
                          key={i}
                          className="mb-3 text-[13.5px] leading-7 text-[#5A6B7B] sm:text-[14.5px] sm:leading-8"
                        >
                          {p}
                        </p>
                      ))}

                      {section.bullets && (
                        <ul className="mt-4 space-y-2">
                          {section.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-[13.5px] leading-7 text-[#5A6B7B] sm:text-[14.5px]"
                            >
                              <CheckCircle2 className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[#E96C35]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.subsections && (
                        <div className="mt-4 space-y-4">
                          {section.subsections.map((sub, si) => (
                            <div
                              key={si}
                              className="rounded-xl border border-[#E5E9EF] bg-[#F8FAFC] p-4 sm:p-5"
                            >
                              <h3 className="mb-2.5 text-[13.5px] font-semibold text-[#073155] sm:text-[14.5px]">
                                {sub.title}
                              </h3>

                              <ul className="space-y-2">
                                {sub.items.map((subItem, ii) => (
                                  <li
                                    key={ii}
                                    className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5A6B7B] sm:text-[13.5px] sm:leading-7"
                                  >
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#E96C35]" />
                                    <span>{subItem}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.section>
                  );
                })}

                {/* ====================================================
                    CONTACT SECTION — dynamic from footer settings
                ==================================================== */}
                <motion.section
                  id="contact"
                  variants={item}
                  className="scroll-mt-28"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#073155] text-white sm:h-10 sm:w-10">
                      <Mail
                        className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                        strokeWidth={1.8}
                      />
                    </span>

                    <h2 className="text-lg font-semibold leading-tight text-[#073155] sm:text-xl">
                      12. Contact Us
                    </h2>
                  </div>

                  <p className="mb-5 text-[13.5px] leading-7 text-[#5A6B7B] sm:text-[14.5px] sm:leading-8">
                    If you have questions or comments about this Privacy
                    Policy, or if you wish to exercise any of your privacy
                    rights, please contact us at:
                  </p>

                  {/* Loading skeleton */}
                  {settingsLoading ? (
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 rounded-xl border border-[#E5E9EF] bg-white p-4"
                        >
                          <div className="h-9 w-9 shrink-0 animate-pulse rounded-lg bg-[#E5E9EF]" />

                          <div className="min-w-0 flex-1 space-y-2">
                            <div className="h-2.5 w-16 animate-pulse rounded bg-[#E5E9EF]" />
                            <div className="h-3 w-32 animate-pulse rounded bg-[#E5E9EF]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-3">
                      {/* EMAIL — from footer settings */}
                      <a
                        href={`mailto:${email}`}
                        className="group flex items-start gap-3 rounded-xl border border-[#E5E9EF] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E96C35]/40 hover:shadow-[0_15px_35px_-18px_rgba(7,49,85,0.25)]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E96C35]/10 text-[#E96C35] transition-all duration-300 group-hover:bg-[#E96C35] group-hover:text-white">
                          <Mail className="h-4 w-4" strokeWidth={1.9} />
                        </span>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A94A6]">
                            Email
                          </p>
                          <p className="mt-0.5 break-all text-[12.5px] font-medium text-[#073155]">
                            {email}
                          </p>
                        </div>
                      </a>

                      {/* PHONE — from footer settings */}
                      <a
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="group flex items-start gap-3 rounded-xl border border-[#E5E9EF] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E96C35]/40 hover:shadow-[0_15px_35px_-18px_rgba(7,49,85,0.25)]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E96C35]/10 text-[#E96C35] transition-all duration-300 group-hover:bg-[#E96C35] group-hover:text-white">
                          <Phone className="h-4 w-4" strokeWidth={1.9} />
                        </span>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A94A6]">
                            Phone
                          </p>
                          <p className="mt-0.5 break-all text-[12.5px] font-medium text-[#073155]">
                            {phone}
                          </p>
                        </div>
                      </a>

                      {/* ADDRESS — from footer settings */}
                      <div className="flex items-start gap-3 rounded-xl border border-[#E5E9EF] bg-white p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E96C35]/10 text-[#E96C35]">
                          <MapPin className="h-4 w-4" strokeWidth={1.9} />
                        </span>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A94A6]">
                            Address
                          </p>
                          <p className="mt-0.5 text-[12.5px] font-medium leading-5 text-[#073155]">
                            {address}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.section>
              </div>

              {/* NOTICE */}
              <motion.div
                variants={item}
                className="mt-12 flex items-start gap-3 rounded-xl border border-[#E96C35]/25 bg-[#FFF6F1] p-4 sm:p-5"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#E96C35]" />
                <p className="text-[12.5px] leading-6 text-[#073155] sm:text-[13px] sm:leading-7">
                  <span className="font-semibold">Note:</span> This Privacy
                  Policy may be updated periodically. We encourage you to
                  review this page regularly to stay informed about how we
                  protect your personal information.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}
      <section className="mb-8 bg-[#F7F9FB] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl border border-[#E5E9EF] bg-white p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E96C35]/10 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#073155]/5 blur-[80px]" />

            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#073155] text-white sm:flex">
                  <Handshake size={22} />
                </div>

                <div className="max-w-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96C35]">
                    Questions About Privacy?
                  </p>

                  <h2 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#073155] sm:text-2xl lg:text-3xl">
                    We&apos;re here to help.
                  </h2>

                  <p className="mt-2.5 text-[13.5px] leading-6 text-[#5A6B7B] sm:text-sm">
                    If you have any concerns about how we handle your data,
                    reach out to our team — we&apos;ll respond promptly.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shipping-regulations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#073155]/25 bg-white px-5 py-2.5 text-[12.5px] font-semibold text-[#073155] transition-all duration-300 hover:border-[#073155] hover:bg-[#073155] hover:text-white sm:px-6 sm:py-3 sm:text-sm"
                >
                  Shipping Regulations
                  <ArrowUpRight size={15} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E96C35] px-5 py-2.5 text-[12.5px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D95C27] sm:px-6 sm:py-3 sm:text-sm"
                >
                  Contact Us
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}