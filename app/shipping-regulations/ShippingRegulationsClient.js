"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  ClipboardCheck,
  FileSearch,
  Globe2,
  HelpCircle,
  Package,
  Plane,
  Scale,
  ShieldCheck,
  Ship,
  Truck,
  XCircle,
} from "lucide-react";

const prohibitedItems = [
  {
    title: "Firearms",
    description:
      "Firearms are identified in the supplied information as prohibited for shipment into Thailand.",
    icon: "firearms",
  },
  {
    title: "Pornographic Materials",
    description:
      "Pornographic materials are listed among items that should not be shipped into Thailand.",
    icon: "materials",
  },
  {
    title: "Gold & Silver",
    description:
      "Gold and silver are included in the source list of prohibited shipments.",
    icon: "metals",
  },
  {
    title: "Radio Equipment",
    description:
      "Radio equipment may be subject to restrictions that prevent shipment through a particular route or service.",
    icon: "radio",
  },
  {
    title: "Medical Equipment",
    description:
      "Medical equipment is listed among the items identified as prohibited in the supplied content.",
    icon: "medical",
  },
  {
    title: "Certain Plants",
    description:
      "Some types of plants are listed as prohibited. Requirements can depend on the specific plant.",
    icon: "plants",
  },
];

const restrictedItems = [
  {
    title: "Household Appliances",
    description:
      "Check the applicable limits and requirements before sending household appliances.",
    icon: Package,
  },
  {
    title: "Vehicles",
    description:
      "Vehicle shipments may be subject to additional restrictions and requirements.",
    icon: Truck,
  },
  {
    title: "Computers",
    description:
      "Confirm whether your computer or related equipment can be accepted by your chosen carrier.",
    icon: FileSearch,
  },
  {
    title: "Tobacco Products",
    description:
      "Tobacco products may be limited, so check the relevant import rules before shipping.",
    icon: ShieldCheck,
  },
];

const shippingMethods = [
  {
    title: "Air Freight",
    description:
      "Air shipping services may have their own acceptance rules for particular goods. Confirm eligibility before booking.",
    icon: Plane,
    image: "/images/air.jpg",
    points: [
      "Check the carrier's item restrictions",
      "Confirm documentation requirements",
      "Ask whether the item can enter Thailand",
    ],
  },
  {
    title: "Sea Freight",
    description:
      "Sea freight may have different acceptance rules from air freight. Check both import requirements and carrier conditions.",
    icon: Ship,
    image: "/images/sea.jpg",
    points: [
      "Confirm the item is accepted by the service",
      "Check customs and import requirements",
      "Clarify handling and collection arrangements",
    ],
  },
  {
    title: "Specialist Shipping",
    description:
      "If a regular carrier cannot accept your item, you may need a specialist shipping company that specifically serves Thailand.",
    icon: Truck,
    image: "/images/special.jpg",
    points: [
      "Describe the item accurately",
      "Ask about Thailand-specific services",
      "Get acceptance confirmation before sending",
    ],
  },
];

const collectionSteps = [
  {
    number: "01",
    title: "Verify the receiving company",
    description:
      "Before collecting your package, ask Thai Customs whether the receiving or shipping company you are dealing with is approved.",
  },
  {
    number: "02",
    title: "Confirm the charges",
    description:
      "Ask for a clear explanation of any collection fee or additional payment before handing over money.",
  },
  {
    number: "03",
    title: "Use an official channel if uncertain",
    description:
      "If you cannot verify the company, contact Customs directly for guidance or consider another legitimate receiving service.",
  },
  {
    number: "04",
    title: "Keep your shipping documents",
    description:
      "Keep your tracking details, shipping receipt, invoice and any customs paperwork so you can check the shipment and charges.",
  },
];

const faqs = [
  {
    question: "Which items are listed as prohibited in the source information?",
    answer:
      "The supplied content lists firearms, pornography, gold and silver, radio equipment, medical equipment, and certain types of plants. These examples should be verified against current official Thai requirements before shipping.",
  },
  {
    question: "Which items may have additional restrictions?",
    answer:
      "Household appliances, vehicles, computers and tobacco products are identified as items that may be limited. The applicable rules can depend on the exact product and shipping method.",
  },
  {
    question:
      "Can I use FedEx or UPS to ship an item from the United States to Thailand?",
    answer:
      "The supplied information warns that some items may not be accepted through services such as FedEx and UPS. Contact the carrier directly to confirm whether your specific item can be shipped to Thailand.",
  },
  {
    question:
      "What should I do if I am asked for unexpected payment when collecting a package?",
    answer:
      "Request an itemized explanation and supporting documentation. Verify the receiving company and any customs charges through official channels before paying. Do not rely only on a verbal assurance from an unverified intermediary.",
  },
  {
    question: "Should I ask Customs to leave my package unopened?",
    answer:
      "No. Do not try to prevent a lawful customs inspection. Customs officials may inspect packages under applicable procedures. Describe the contents accurately and follow the required declaration and payment process.",
  },
];

function ItemIcon({ type }) {
  if (type === "firearms") return <CircleAlert size={20} />;
  if (type === "materials") return <FileSearch size={20} />;
  if (type === "metals") return <Scale size={20} />;
  if (type === "radio") return <Globe2 size={20} />;
  if (type === "medical") return <ShieldCheck size={20} />;
  return <Package size={20} />;
}

export default function ShippingRegulationsClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-[#FAF8F4] text-[#073155] -mt-6">
      {/* HERO — reduced height */}
      <section className="relative isolate flex min-h-[340px] items-center overflow-hidden bg-[#073155] sm:min-h-[380px] lg:min-h-[420px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/regu.PNG')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073155]/95 via-[#073155]/80 to-[#073155]/35" />

        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
              THAILAND · CUSTOMS · COMPLIANCE
            </div>

            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5A276] sm:text-sm">
              Know Before You Ship
            </p>

            <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Shipping
              <span className="block text-[#F5A276]">Regulations</span>
            </h1>

            <p className="mt-4 max-w-2xl text-[14px] leading-6 text-white/85 sm:text-base sm:leading-7">
              Understand prohibited and restricted items, choose a suitable
              shipping method, and take sensible precautions when sending
              packages to or collecting shipments in Thailand.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href="#item-rules"
                className="inline-flex items-center gap-2 rounded-md bg-[#E96C35] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#d95c28] sm:px-6 sm:py-3 sm:text-sm"
              >
                Check Item Rules
                <ArrowDown size={16} />
              </a>
              <a
                href="#safe-collection"
                className="inline-flex items-center gap-2 rounded-md border border-white/45 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#073155] sm:px-6 sm:py-3 sm:text-sm"
              >
                Safe Package Collection
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#E96C35] via-[#F5A276] to-transparent" />
      </section>

      {/* INTRO */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              Plan Before Sending
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Every shipment starts with the right information
            </h2>
            <p className="mt-4 text-[14.5px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              When shipping items into Thailand—or any country—it is
              important to understand what can and cannot be imported.
              Product restrictions, carrier policies and shipping methods
              can all affect whether a shipment will be accepted.
            </p>
            <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
              Before sending an item, identify the product accurately, check
              current Thai import requirements, and confirm that your
              selected shipping company accepts it for the intended route.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8E2D9] bg-white p-5 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#E96C35] sm:h-12 sm:w-12">
                <ClipboardCheck size={22} className="sm:hidden" />
                <ClipboardCheck size={25} className="hidden sm:block" />
              </div>
              <div>
                <h3 className="text-base font-semibold sm:text-lg">
                  Your pre-shipment checklist
                </h3>
                <p className="mt-2 text-[13.5px] leading-6 text-slate-600 sm:text-sm">
                  Use these checks before booking or handing over a package.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
              {[
                "Identify the exact item and its contents",
                "Check current Thai import rules",
                "Confirm the carrier accepts the item",
                "Prepare accurate declarations and documents",
                "Verify the recipient and collection process",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#E96C35] sm:h-[19px] sm:w-[19px]"
                  />
                  <p className="text-[13.5px] leading-6 text-slate-600 sm:text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROHIBITED & RESTRICTED */}
      <section
        id="item-rules"
        className="border-y border-[#E8E2D9] bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              Know What You Can Send
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Prohibited and potentially restricted items
            </h2>
            <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base">
              The following categories are drawn from the supplied source
              content. Treat them as a starting point, not a definitive
              statement of current Thai law. Verify the exact item with Thai
              Customs and your carrier before shipping.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* PROHIBITED */}
            <div className="overflow-hidden rounded-2xl border border-red-200 bg-[#FFFDFC]">
              <div className="flex items-center gap-3 border-b border-red-100 bg-red-50/80 px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm sm:h-11 sm:w-11">
                  <XCircle size={21} className="sm:hidden" />
                  <XCircle size={23} className="hidden sm:block" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073155] sm:text-xl">
                    Prohibited in the source list
                  </h3>
                  <p className="mt-0.5 text-[12.5px] text-slate-600 sm:mt-1 sm:text-sm">
                    Check official rules before sending
                  </p>
                </div>
              </div>

              <div className="grid gap-0 sm:grid-cols-2">
                {prohibitedItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-4 sm:p-5 ${
                      index % 2 === 0 ? "sm:border-r sm:border-red-100" : ""
                    } ${index < 4 ? "border-b border-red-100" : ""}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                        <ItemIcon type={item.icon} />
                      </span>
                      <h4 className="text-[13.5px] font-semibold sm:text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-3 text-[12.5px] leading-6 text-slate-600 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RESTRICTED */}
            <div className="overflow-hidden rounded-2xl border border-amber-200 bg-[#FFFDFC]">
              <div className="flex items-center gap-3 border-b border-amber-100 bg-amber-50/80 px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm sm:h-11 sm:w-11">
                  <CircleAlert size={21} className="sm:hidden" />
                  <CircleAlert size={23} className="hidden sm:block" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073155] sm:text-xl">
                    Items that may be restricted
                  </h3>
                  <p className="mt-0.5 text-[12.5px] text-slate-600 sm:mt-1 sm:text-sm">
                    Additional conditions may apply
                  </p>
                </div>
              </div>

              <div className="divide-y divide-amber-100">
                {restrictedItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3.5 p-4 sm:gap-4 sm:p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                        <Icon size={19} className="sm:hidden" />
                        <Icon size={21} className="hidden sm:block" />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-semibold sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-[12.5px] leading-6 text-slate-600 sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#E8E2D9] bg-[#FAF8F4] p-4 sm:mt-6 sm:p-5">
            <HelpCircle
              size={20}
              className="mt-0.5 shrink-0 text-[#E96C35] sm:h-[21px] sm:w-[21px]"
            />
            <p className="text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
              <strong className="text-[#073155]">Important:</strong> A carrier
              accepting a package does not automatically mean that Thai
              Customs permits its import. Check both the destination
              country&apos;s rules and the shipping company&apos;s own acceptance
              policy.
            </p>
          </div>
        </div>
      </section>

      {/* SHIPPING METHODS */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              Choose the Right Route
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#073155] sm:text-3xl lg:text-4xl">
              Shipping regulations can vary by method
            </h2>
            <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base">
              Different shipping methods and providers may apply different
              acceptance rules. Research your options before choosing a
              service for a particular item.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {shippingMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <article
                  key={method.title}
                  className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-2xl border border-[#E8E2D9] transition duration-300 hover:-translate-y-1 hover:border-[#E96C35]/50 hover:shadow-[0_20px_45px_-20px_rgba(7,49,85,0.45)] sm:min-h-[460px]"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${method.image})` }}
                    aria-hidden="true"
                  />

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-[#073155]/40" />

                  {/* Orange top accent bar grows on hover */}
                  <span className="absolute left-0 top-0 z-20 h-[3px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full" />

                  {/* Content */}
                  <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                    {/* Top row: icon + number */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#E96C35] group-hover:bg-[#E96C35] sm:h-12 sm:w-12">
                        <Icon size={21} className="sm:hidden" />
                        <Icon size={23} className="hidden sm:block" />
                      </div>

                      <span className="text-[13px] font-semibold tracking-widest text-white/50 sm:text-sm">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Bottom block: title + description + points */}
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {method.title}
                      </h3>

                      <p className="mt-2.5 text-[13px] leading-6 text-white/80 sm:text-sm sm:leading-7">
                        {method.description}
                      </p>

                      <div className="my-4 h-px bg-white/15 sm:my-5" />

                      <ul className="space-y-2.5 sm:space-y-3">
                        {method.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-[12.5px] leading-6 text-white/75 sm:text-[13.5px]"
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0 text-[#E96C35] sm:h-4 sm:w-4"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* US notice — unchanged */}
          <div className="mt-6 rounded-2xl bg-[#073155] p-5 text-white sm:mt-7 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F5A276] sm:h-12 sm:w-12">
                  <Globe2 size={22} className="sm:hidden" />
                  <Globe2 size={25} className="hidden sm:block" />
                </div>
                <div>
                  <h3 className="text-base font-semibold sm:text-lg">
                    Shipping from the United States to Thailand?
                  </h3>
                  <p className="mt-2 max-w-2xl text-[13px] leading-6 text-white/75 sm:text-sm sm:leading-7">
                    The supplied information notes that some items may not
                    be shippable through services such as FedEx and UPS.
                    Availability depends on the item, service and current
                    policies. Ask the carrier directly, or look for a
                    legitimate specialist that specifically handles
                    shipments to Thailand.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#E96C35] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#d95c28] sm:py-3.5 sm:text-sm"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SAFE COLLECTION */}
      <section
        id="safe-collection"
        className="border-y border-[#E8E2D9] bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              Receive Your Package Safely
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Be careful when collecting shipments in Thailand
            </h2>
            <p className="mt-4 text-[14.5px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              The supplied content warns about cases in which a receiver
              may retain a shipment or ask for additional money. Take time
              to verify the company, understand the charges and check your
              available options before proceeding.
            </p>

            <div className="mt-5 rounded-xl border border-[#F0D3C4] bg-[#FFF4ED] p-4 sm:mt-6 sm:p-5">
              <div className="flex items-start gap-3">
                <CircleAlert
                  size={20}
                  className="mt-0.5 shrink-0 text-[#E96C35] sm:h-[21px] sm:w-[21px]"
                />
                <div>
                  <h3 className="text-[14px] font-semibold sm:text-base">
                    Watch for unexplained charges
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-slate-600 sm:mt-2 sm:text-sm sm:leading-7">
                    Ask for an itemized bill and official supporting
                    documents. Verify unexpected customs-related charges
                    through official channels before paying.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-0">
            {collectionSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex gap-4 pb-6 sm:gap-5 sm:pb-7 ${
                  index < collectionSteps.length - 1 ? "" : "pb-0 sm:pb-0"
                }`}
              >
                {index < collectionSteps.length - 1 && (
                  <div className="absolute bottom-0 left-[19px] top-11 w-px bg-[#E8E2D9] sm:left-[21px] sm:top-12" />
                )}

                <div className="relative z-10 flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-xl bg-[#FFF0E8] text-[13px] font-bold text-[#E96C35] sm:h-[43px] sm:w-[43px] sm:text-sm">
                  {step.number}
                </div>

                <div className="pt-0.5 sm:pt-1">
                  <h3 className="text-[14.5px] font-semibold sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-slate-600 sm:mt-2 sm:text-sm sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMS INSPECTION NOTICE */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#E8E2D9] bg-[#F4F0E9] p-5 sm:p-8 lg:p-10">
          <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-start">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#E96C35] shadow-sm sm:h-12 sm:w-12">
              <ShieldCheck size={22} className="sm:hidden" />
              <ShieldCheck size={25} className="hidden sm:block" />
            </div>
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Customs inspections and accurate declarations
              </h2>
              <p className="mt-3 text-[14px] leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                Customs authorities may inspect packages as part of their
                official procedures. Do not try to bargain to prevent a
                lawful inspection or conceal the contents of a shipment.
                Instead, describe every item accurately, declare the
                contents and value as required, and retain the relevant
                invoices and shipping records.
              </p>
              <p className="mt-3 text-[14px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                If an inspection results in a charge, request the official
                explanation and documentation. If you believe a charge or
                handling request is improper, contact the appropriate
                customs authority or carrier through its verified contact
                channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              Common Questions
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Shipping regulations FAQ
            </h2>
            <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base">
              A few practical answers to help you plan a shipment and
              collect it with greater confidence.
            </p>
          </div>

          <div className="divide-y divide-[#E8E2D9] border-y border-[#E8E2D9]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
                  >
                    <span className="text-[13.5px] font-semibold leading-6 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#E96C35] transition-transform sm:h-5 sm:w-5 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-4 pr-6 text-[13px] leading-6 text-slate-600 sm:pb-5 sm:pr-7 sm:text-sm sm:leading-7">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#073155] px-5 py-8 text-white sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/[0.06]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5A276] sm:text-xs">
                Prepare Before You Ship
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Check the rules. Choose the right service.
              </h2>
              <p className="mt-3 text-[14px] leading-7 text-white/75 sm:mt-4 sm:text-base">
                Confirm item eligibility, carrier acceptance and
                documentation requirements before your shipment leaves.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-wrap gap-2.5 sm:gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E96C35] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#d95c28] sm:py-3.5 sm:text-sm"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/thai-exports"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#073155] sm:py-3.5 sm:text-sm"
              >
                Explore Thai Exports
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}