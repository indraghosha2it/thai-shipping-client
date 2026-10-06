"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Package,
  PackageCheck,
  Plane,
  Ship,
  Snowflake,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";

const NAVY = "#073155";
const ORANGE = "#E96C35";

const foodCategories = [
  {
    number: "01",
    title: "Frozen Thai Meals",
    description:
      "Frozen main meals make it possible to ship prepared Thai cuisine directly from Thailand. Many of these meals are designed for international markets.",
    examples: [
      "Rice with yellow curry",
      "Red curry pork (Panaeng)",
      "Sweet and sour fish",
    ],
    image:
      "/images/frozen.jpg",
    icon: Snowflake,
    tag: "Frozen food",
  },
  {
    number: "02",
    title: "Thai Canned Food",
    description:
      "Canned Thai food is an established part of the country's food shipping business, with rice dishes and other Thai cuisine products shipped to different countries.",
    examples: [
      "Fried rice",
      "Rice with fried basil",
      "Tuna and prawn paste",
    ],
    image:
      "/images/cannedpr.jpg",
    icon: Package,
    tag: "Canned products",
  },
  {
    number: "03",
    title: "Pre-Packaged Food",
    description:
      "Dry, pre-packaged products are convenient for international shipping because many have a shelf life of at least two years.",
    examples: [
      "Flavoured noodle bowls",
      "Pre-packaged rice bowls",
      "Rice and noodle side dishes",
    ],
    image:
      "/images/prepkg.jpg",
    icon: PackageCheck,
    tag: "Long shelf life",
  },
];

const popularDishes = [
  {
    title: "Rice with Yellow Curry",
    image:
      "/images/ricey.jpg",
  },
  {
    title: "Red Curry Pork",
    subtitle: "Panaeng",
    image:
      "/images/curry prok.jpg",
  },
  {
    title: "Sweet and Sour Fish",
    image:
      "/images/sfush.jpg",
  },
  {
    title: "Fried Rice",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Rice with Fried Basil",
    image:
      "/images/basil.jpg",
  },
  {
    title: "Noodle and Rice Bowls",
    image:
      "/images/noodl.jpg",
  },
];

const sauceTypes = [
  "Black bean sauce",
  "Sweet and sour sauce",
  "Spicy basil sauce",
];

export default function ThaiFoodShippingPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <main className="overflow-hidden bg-[#FAF8F4] text-[#073155] -mt-6">
      {/* HERO — reduced height */}
      <section className="relative isolate flex min-h-[340px] items-center overflow-hidden bg-[#073155] sm:min-h-[380px] lg:min-h-[420px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/thai.jpg')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073155]/95 via-[#073155]/80 to-[#073155]/35" />

        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35]" />
              THAILAND · FOOD · GLOBAL TRADE
            </div>

            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5A276] sm:text-sm">
              Discover Thai Cuisine
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Thai Food
              <span className="block text-[#F5A276]">Shipping</span>
            </h1>

            <p className="mt-4 max-w-2xl text-[14px] leading-6 text-white/85 sm:text-base sm:leading-7">
              From frozen Thai meals and canned favourites to convenient
              ready-to-prepare dishes, explore the food products shipped from
              Thailand to markets around the world.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href="#food-categories"
                className="inline-flex items-center gap-2 rounded-md bg-[#E96C35] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#d95c28] sm:px-6 sm:py-3 sm:text-sm"
              >
                Explore Thai Food
                <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/45 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#073155] sm:px-6 sm:py-3 sm:text-sm"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#E96C35] via-[#F5A276] to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/thaifood.jpg"
                alt="A selection of prepared Thai dishes"
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[380px]"
              />
            </div>
            <div className="absolute -bottom-4 right-3 max-w-[210px] rounded-xl bg-white p-3.5 shadow-xl sm:right-7 sm:max-w-[230px] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF0E8] text-[#E96C35] sm:h-11 sm:w-11">
                  <Globe2 size={20} className="sm:hidden" />
                  <Globe2 size={23} className="hidden sm:block" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#073155] sm:text-sm">
                    Thai Cuisine
                  </p>
                  <p className="mt-0.5 text-[11px] leading-5 text-slate-500 sm:mt-1 sm:text-xs">
                    Reaching international markets
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              A Taste of Thailand
            </p>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Thai food with a global reach
            </h2>
            <p className="mt-4 text-[14.5px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              Thai food is one of the most widely shipped products from
              Thailand. Known for its distinctive flavours, Thai cuisine is
              often served with rice or rice noodles and commonly features
              spicy seasonings and a variety of sauces.
            </p>
            <p className="mt-4 text-[14.5px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              Thai food products are shipped directly from Thailand to
              international destinations. Frozen meals, canned dishes and
              dry pre-packaged foods all contribute to the variety of Thai
              cuisine available to consumers in different countries.
            </p>

            <div className="mt-6 border-l-4 border-[#E96C35] bg-white px-4 py-3.5 sm:px-5 sm:py-4">
              <p className="text-[13px] font-semibold leading-6 text-[#073155] sm:text-sm">
                Popular Thai food formats include frozen main meals, canned
                rice dishes, and dry noodle or rice bowls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAUCES */}
      <section className="border-y border-[#E8E2D9] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-5">
          <div className="max-w-lg">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E96C35] sm:text-xs">
              Signature Flavours
            </p>
            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
              Sauces that define Thai cuisine
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {sauceTypes.map((sauce) => (
              <span
                key={sauce}
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D9] bg-[#FAF8F4] px-3.5 py-2 text-[12.5px] font-medium text-[#073155] sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E96C35] sm:h-2 sm:w-2" />
                {sauce}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD CATEGORIES */}
      <section
        id="food-categories"
        className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
                Explore Product Types
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Three popular ways to ship Thai food
              </h2>
              <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base">
                Thai cuisine reaches international consumers in several
                product formats, each offering different kinds of meals and
                convenience.
              </p>
            </div>
            <div className="hidden items-center gap-2 text-sm font-semibold text-[#073155] md:flex">
              <UtensilsCrossed size={19} className="text-[#E96C35]" />
              Thai Food Products
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {foodCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;

              return (
                <article
                  key={category.number}
                  onMouseEnter={() => setActiveCategory(index)}
                  className={`group overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                    isActive
                      ? "border-[#E96C35]/60 shadow-xl shadow-[#073155]/10"
                      : "border-[#E9E4DD] shadow-sm hover:-translate-y-1"
                  }`}
                >
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/75 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold text-[#073155] sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                      {category.tag}
                    </span>
                    <span className="absolute bottom-3 left-4 text-3xl font-semibold text-white/80 sm:bottom-4 sm:left-5 sm:text-4xl">
                      {category.number}
                    </span>
                    <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E96C35] text-white sm:bottom-4 sm:right-4 sm:h-11 sm:w-11 sm:rounded-xl">
                      <Icon size={19} className="sm:hidden" />
                      <Icon size={22} className="hidden sm:block" />
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold sm:text-xl">
                      {category.title}
                    </h3>
                    <p className="mt-2.5 min-h-0 text-[13px] leading-6 text-slate-600 sm:mt-3 sm:min-h-[96px] sm:text-sm sm:leading-7">
                      {category.description}
                    </p>
                    <div className="my-4 h-px bg-[#EEE8E0] sm:my-5" />
                    <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#073155] sm:mb-3 sm:text-xs">
                      Popular examples
                    </p>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {category.examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-2.5 text-[13px] text-slate-600 sm:text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#E96C35] sm:h-[17px] sm:w-[17px]"
                          />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* JM FOOD SAVORY */}
      <section className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#F4F0E9] lg:grid-cols-2">
          <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[440px]">
            <img
              src="/images/food2.PNG"
              alt="Prepared meals inspired by Thai cuisine"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#073155]/55 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-[#073155] sm:px-4 sm:py-2 sm:text-xs">
                <Snowflake size={14} className="text-[#E96C35] sm:hidden" />
                <Snowflake size={15} className="hidden text-[#E96C35] sm:block" />
                Frozen Main Meals
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-10 lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              Featured Thai Food Manufacturer
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              J.M. Food Savory
            </h2>
            <p className="mt-4 text-[14.5px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              J.M. Food Savory is a Thai food manufacturer that ships its
              products mainly to China, Japan, and the United States. The
              company&apos;s food items are tailored to meet the tastes of the
              destination country.
            </p>
            <p className="mt-4 text-[14.5px] leading-7 text-slate-600 sm:text-base sm:leading-8">
              Its meals include rice with yellow curry, red curry pork—also
              known as Panaeng—and sweet and sour fish, among other dishes.
              The manufacturer also focuses on frozen main meals.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-3 sm:gap-3">
              {["China", "Japan", "United States"].map((country) => (
                <div
                  key={country}
                  className="flex items-center gap-2 rounded-lg border border-[#E5DDD2] bg-white px-3 py-2.5 text-[13px] font-semibold text-[#073155] sm:py-3 sm:text-sm"
                >
                  <Globe2 size={15} className="shrink-0 text-[#E96C35] sm:h-[17px] sm:w-[17px]" />
                  {country}
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] leading-5 text-slate-500 sm:mt-5 sm:text-xs sm:leading-6">
              Destination markets and product examples are based on the
              information provided for this page.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR DISHES */}
     <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="h-[2px] w-8 bg-[#E96C35]" />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
          Made in Thailand
        </p>
        <span className="h-[2px] w-8 bg-[#E96C35]" />
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-[#073155] sm:text-3xl lg:text-4xl">
        Popular Thai food products
      </h2>
      <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base">
        From curry-based meals to convenient rice and noodle dishes,
        Thai food exports offer a wide range of familiar flavours and
        formats.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
      {popularDishes.map((dish, index) => (
        <article
          key={`${dish.title}-${index}`}
          className="group relative overflow-hidden rounded-2xl border border-[#E9E4DD] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E96C35]/40 hover:shadow-[0_18px_40px_-20px_rgba(7,49,85,0.35)]"
        >
          {/* Orange top accent bar — grows on hover */}
          <span className="absolute left-0 top-0 z-20 h-[3px] w-0 bg-[#E96C35] transition-all duration-500 group-hover:w-full" />

          {/* Image */}
          <div className="relative h-32 overflow-hidden sm:h-40 lg:h-44">
            <img
              src={dish.image}
              alt={dish.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#041B30]/70 via-[#073155]/20 to-transparent" />

            {/* Small index badge top-left */}
            <span className="absolute left-2.5 top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-white/15 text-[10px] font-bold text-white backdrop-blur-sm sm:h-7 sm:w-7 sm:text-[11px]">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Subtitle badge on image (if present) */}
            {dish.subtitle && (
              <span className="absolute bottom-2.5 left-2.5 z-10 rounded-full border border-white/30 bg-[#E96C35] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md sm:bottom-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
                {dish.subtitle}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="relative flex min-h-[64px] flex-col justify-between p-3 sm:min-h-[76px] sm:p-4">
            <h3 className="text-[12.5px] font-semibold leading-snug text-[#073155] transition-colors duration-300 group-hover:text-[#E96C35] sm:text-sm">
              {dish.title}
            </h3>

            {/* Bottom accent line that appears on hover */}
            <span className="mt-2 h-[2px] w-6 rounded-full bg-[#E96C35]/30 transition-all duration-500 group-hover:w-12 group-hover:bg-[#E96C35]" />
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* SHELF LIFE */}
      <section className="bg-[#073155] px-5 py-10 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5A276] sm:text-xs">
              Product Storage &amp; Shelf Life
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Different food formats, different shelf lives
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-7 text-white/75 sm:mt-4 sm:text-base">
              The provided information highlights frozen food and dry
              pre-packaged products as formats suitable for shipping to
              international markets.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-xl border border-white/15 bg-white/[0.07] p-5 sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#F5A276] sm:h-12 sm:w-12">
                <Snowflake size={22} className="sm:hidden" />
                <Snowflake size={25} className="hidden sm:block" />
              </div>
              <p className="mt-4 text-[13px] font-medium text-white/70 sm:mt-5 sm:text-sm">
                Frozen Thai food
              </p>
              <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                At least 1 year
              </p>
              <p className="mt-2.5 text-[13px] leading-6 text-white/70 sm:mt-3 sm:text-sm">
                The supplied source states that most shipped frozen Thai
                food has a shelf life of at least one year.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/[0.07] p-5 sm:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#F5A276] sm:h-12 sm:w-12">
                <Clock3 size={22} className="sm:hidden" />
                <Clock3 size={25} className="hidden sm:block" />
              </div>
              <p className="mt-4 text-[13px] font-medium text-white/70 sm:mt-5 sm:text-sm">
                Dry pre-packaged food
              </p>
              <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                At least 2 years
              </p>
              <p className="mt-2.5 text-[13px] leading-6 text-white/70 sm:mt-3 sm:text-sm">
                Pre-packaged noodle bowls, rice bowls and side dishes are
                described as having a shelf life of at least two years.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-7xl items-start gap-2 text-[11px] leading-5 text-white/55 sm:mt-7 sm:text-xs">
          <Clock3 size={13} className="mt-0.5 shrink-0 sm:h-3.5 sm:w-3.5" />
          <p>
            Shelf life varies by product. These durations reflect the
            supplied website content and are not a guarantee for every
            product. Check the manufacturer&apos;s label and shipping requirements
            for specific items.
          </p>
        </div>
      </section>

      {/* SHIPPING OVERVIEW */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
              Why These Products Travel
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Thai cuisine for international markets
            </h2>
            <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base">
              The popularity of Thai cuisine, together with the range of
              available product formats, makes Thai food an important part
              of Thailand&apos;s shipping and food production business.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#E96C35] sm:h-12 sm:w-12">
                <Utensils size={21} className="sm:hidden" />
                <Utensils size={23} className="hidden sm:block" />
              </div>
              <h3 className="mt-4 text-base font-semibold sm:text-lg">
                Variety of dishes
              </h3>
              <p className="mt-2 text-[13.5px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
                Product examples range from curry meals and fish dishes to
                fried rice, basil rice, tuna, prawn paste and noodles.
              </p>
            </div>

            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#E96C35] sm:h-12 sm:w-12">
                <PackageCheck size={21} className="sm:hidden" />
                <PackageCheck size={23} className="hidden sm:block" />
              </div>
              <h3 className="mt-4 text-base font-semibold sm:text-lg">
                Multiple product formats
              </h3>
              <p className="mt-2 text-[13.5px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
                Frozen meals, canned food, pre-packaged bowls and dry side
                dishes serve different product and consumer needs.
              </p>
            </div>

            <div className="rounded-xl border border-[#E8E2D9] bg-white p-5 sm:col-span-2 sm:p-6 lg:col-span-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#E96C35] sm:h-12 sm:w-12">
                <Globe2 size={21} className="sm:hidden" />
                <Globe2 size={23} className="hidden sm:block" />
              </div>
              <h3 className="mt-4 text-base font-semibold sm:text-lg">
                International destinations
              </h3>
              <p className="mt-2 text-[13.5px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
                Thai food products are shipped to different countries, with
                China, Japan and the United States identified as key
                destinations for J.M. Food Savory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#F0E8DD] px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[36px] border-white/40" />
          <div className="pointer-events-none absolute -bottom-24 right-40 h-48 w-48 rounded-full bg-[#E96C35]/10" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E96C35] sm:text-xs">
                Thailand · Food · Trade
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                Discover more about Thai shipping
              </h2>
              <p className="mt-3 text-[14.5px] leading-7 text-slate-600 sm:mt-4 sm:text-base">
                Explore Thailand&apos;s wider import, export and shipping
                landscape, or get in touch with our team for more information.
              </p>
            </div>

            <div className="relative flex shrink-0 flex-wrap gap-2.5 sm:gap-3">
              <Link
                href="/thai-exports"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E96C35] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#d95c28] sm:px-5 sm:py-3.5 sm:text-sm"
              >
                Thai Exports
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#073155]/20 bg-white px-5 py-3 text-[13px] font-semibold text-[#073155] transition hover:border-[#073155] hover:bg-[#073155] hover:text-white sm:px-5 sm:py-3.5 sm:text-sm"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}