

// "use client";

// import React from "react";
// import Link from "next/link";
// import {
//   ArrowUpRight,
//   MapPin,
//   Mail,
//   Phone,
//   Facebook,
//   Instagram,
//   Linkedin,
//   Twitter,
// } from "lucide-react";
// import Image from "next/image";

// const galleryImages = [
//   "/images/f1.jpg",
//   "/images/f2.jpg",
//   "/images/f3.jpg",
//   "/images/f4.jpg",
//   "/images/f5.jpg",
//   "/images/f6.jpg",
// ];

// const discoverLinks = [
//   {
//     label: "Thai Imports",
//     href: "/thai-imports",
//   },
//   {
//     label: "Thai Exports",
//     href: "/thai-exports",
//   },
//   {
//     label: "Thai Food Shipping",
//     href: "/thai-food-shipping",
//   },
//   {
//     label: "Shipping Regulations",
//     href: "/shipping-regulations",
//   },
//   {
//     label: "Shipping Services",
//     href: "/shipping-services",
//   },
// ];

// const informationLinks = [
//   {
//     label: "Contact Us",
//     href: "/contact",
//   },
//   {
//     label: "About Us",
//     href: "/about",
//   },
//   {
//     label: "Track Shipment",
//     href: "/track-shipment",
//   },
// ];

// const socialLinks = [
//   {
//     icon: Facebook,
//     href: "#",
//     label: "Facebook",
//   },
//   {
//     icon: Instagram,
//     href: "#",
//     label: "Instagram",
//   },
//   {
//     icon: Linkedin,
//     href: "#",
//     label: "LinkedIn",
//   },
//   {
//     icon: Twitter,
//     href: "#",
//     label: "Twitter",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="relative overflow-hidden bg-[#073155] text-white">
//       {/* =====================================================
//           SUBTLE BACKGROUND
//       ===================================================== */}

//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.025]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
//           backgroundSize: "55px 55px",
//         }}
//       />

//       {/* =====================================================
//           MAIN FOOTER
//       ===================================================== */}

//       <div className="relative mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row">
//         {/* =================================================
//             LEFT — COMPACT IMAGE GALLERY
//         ================================================= */}

//      <div
//   className="
//     relative
//     flex
//     w-full
//     overflow-hidden
//     bg-[#ED6D32]
//     px-5
//     py-6
//     sm:px-7
//     sm:py-7
//     lg:w-[26%]
//     lg:flex-shrink-0
//     lg:px-6
//     lg:py-7
//     xl:w-[27%]
//     xl:px-7
//   "
// >
//   {/* Decorative circles */}
//   <div className="pointer-events-none absolute -bottom-28 -left-28 h-[300px] w-[300px] rounded-full border border-white/10" />
//   <div className="pointer-events-none absolute -right-20 top-[-100px] h-[220px] w-[220px] rounded-full border border-white/10" />

//   {/* Subtle pattern */}
//   <div
//     className="pointer-events-none absolute inset-0 opacity-[0.05]"
//     style={{
//       backgroundImage:
//         "linear-gradient(135deg, transparent 40%, rgba(255,255,255,.8) 40%, transparent 41%)",
//       backgroundSize: "65px 65px",
//     }}
//   />

//   <div className="relative w-full">
//     <div className="mb-4">
//       <h2 className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
//         Thai <span  className="text-[#073155]" > Shipping </span>
//       </h2>
//       <div className="mt-2 h-[2px] w-7 bg-white/60" />
//     </div>

//     {/* Six smaller images in two rows */}
//     <div className="grid grid-cols-3 gap-2">
//       {galleryImages.map((image, index) => (
//         <Link
//           key={image}
//           href="/gallery"
//           aria-label={`View gallery image ${index + 1}`}
//           className="group relative aspect-[1.2/1] overflow-hidden border border-white/20 bg-black/10"
//         >
//           <img
//             src={image}
//             alt={`Thai shipping gallery ${index + 1}`}
//             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />

//           <div className="absolute inset-0 bg-[#062B35]/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//           <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center bg-[#ED6D32] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//             <ArrowUpRight className="h-3 w-3" />
//           </div>
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>

//         {/* =================================================
//             RIGHT CONTENT
//         ================================================= */}

//         <div
//           className="
//             w-full
//             px-6
//             py-8
//             sm:px-8
//             sm:py-9
//             lg:w-[74%]
//             lg:px-9
//             lg:py-8
//             xl:px-11
//           "
//         >
//           {/* =================================================
//               FOUR COLUMNS
//           ================================================= */}

//           <div
//             className="
//               grid
//               grid-cols-1
//               gap-8
//               sm:grid-cols-2
//               lg:grid-cols-4
//               lg:gap-6
//               xl:gap-8
//             "
//           >
//             {/* =================================================
//                 COLUMN 1 — THAI SHIPPING
//             ================================================= */}

//             <div>
//               {/* Logo */}
//        <Link href="/" className="inline-flex items-center">
//   <Image
//     src="/images/logo.png"
//     alt="Thai Shipping"
//     width={200}
//     height={200}
//     className="h-16 w-auto object-contain"
//   />
//   <span className="sr-only">Thai Shipping</span>
// </Link>

//               {/* Description */}
//               <p className="mt-4 max-w-[190px] text-[9px] leading-[1.7] text-white/45 -mt-3">
//                 Connecting Thailand with global markets through reliable
//                 shipping, logistics and international trade solutions.
//               </p>

//               {/* Social */}
//               <div className="mt-4 flex items-center gap-1.5">
//                 {socialLinks.map((social) => {
//                   const Icon = social.icon;

//                   return (
//                     <Link
//                       key={social.label}
//                       href={social.href}
//                       aria-label={social.label}
//                       className="
//                         flex
//                         h-6
//                         w-6
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#ED6D32]
//                         text-white
//                         transition-all
//                         duration-300
//                         hover:-translate-y-1
//                         hover:bg-white
//                         hover:text-[#062B35]
//                       "
//                     >
//                       <Icon
//                         className="h-3 w-3"
//                         strokeWidth={1.8}
//                       />
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* =================================================
//                 COLUMN 2 — DISCOVER
//             ================================================= */}

//             <div>
//               <h3 className="text-[12px] font-semibold text-white">
//                 Discover
//               </h3>

//               <div className="mt-4 space-y-2.5">
//                 {discoverLinks.map((item) => (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     className="
//                       group
//                       flex
//                       items-center
//                       gap-1.5
//                       text-[9px]
//                       leading-[1.4]
//                       text-white/45
//                       transition-colors
//                       duration-200
//                       hover:text-[#ED6D32]
//                     "
//                   >
//                     <span>{item.label}</span>

//                     <ArrowUpRight
//                       className="
//                         h-2.5
//                         w-2.5
//                         opacity-0
//                         transition-all
//                         duration-200
//                         group-hover:translate-x-0.5
//                         group-hover:-translate-y-0.5
//                         group-hover:opacity-100
//                       "
//                     />
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* =================================================
//                 COLUMN 3 — INFORMATION
//             ================================================= */}

//             <div>
//               <h3 className="text-[12px] font-semibold text-white">
//                 Information
//               </h3>

//               <div className="mt-4 space-y-2.5">
//                 {informationLinks.map((item) => (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     className="
//                       group
//                       flex
//                       items-center
//                       gap-1.5
//                       text-[9px]
//                       leading-[1.4]
//                       text-white/45
//                       transition-colors
//                       duration-200
//                       hover:text-[#ED6D32]
//                     "
//                   >
//                     <span>{item.label}</span>

//                     <ArrowUpRight
//                       className="
//                         h-2.5
//                         w-2.5
//                         opacity-0
//                         transition-all
//                         duration-200
//                         group-hover:translate-x-0.5
//                         group-hover:-translate-y-0.5
//                         group-hover:opacity-100
//                       "
//                     />
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* =================================================
//                 COLUMN 4 — CONTACT
//             ================================================= */}

//             <div>
//               <h3 className="text-[12px] font-semibold text-white">
//                 Contact
//               </h3>

//               <div className="mt-4 space-y-3.5">
//                 {/* Address */}
//                 <div className="flex items-start gap-2">
//                   <MapPin
//                     className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ED6D32]"
//                     strokeWidth={1.7}
//                   />

//                   <p className="text-[9px] leading-[1.6] text-white/45">
//                     Bangkok, Thailand
//                     <br />
//                     International Shipping Office
//                   </p>
//                 </div>

//                 {/* Email */}
//                 <a
//                   href="mailto:info@thaishipping.com"
//                   className="
//                     flex
//                     items-center
//                     gap-2
//                     text-[9px]
//                     text-white/45
//                     transition-colors
//                     hover:text-[#ED6D32]
//                   "
//                 >
//                   <Mail
//                     className="h-3.5 w-3.5 shrink-0 text-[#ED6D32]"
//                     strokeWidth={1.7}
//                   />

//                   <span className="break-all">
//                     info@thaishipping.com
//                   </span>
//                 </a>

//                 {/* Phone */}
//                 <a
//                   href="tel:+66000000000"
//                   className="
//                     flex
//                     items-center
//                     gap-2
//                     text-[9px]
//                     text-white/45
//                     transition-colors
//                     hover:text-[#ED6D32]
//                   "
//                 >
//                   <Phone
//                     className="h-3.5 w-3.5 shrink-0 text-[#ED6D32]"
//                     strokeWidth={1.7}
//                   />

//                   +66 00 000 0000
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               COPYRIGHT
//           ================================================= */}

//           <div
//             className="
//               mt-7
//               border-t
//               border-white/10
//               pt-4
//             "
//           >
//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-2
//                 sm:flex-row
//                 sm:items-center
//                 sm:justify-between
//               "
//             >
//               <p className="text-[8px] text-white/25">
//                 Copyright © 2009 ThaiShipping.com
//               </p>

//               <div className="flex items-center gap-4">
//                 <Link
//                   href="/privacy-policy"
//                   className="
//                     text-[8px]
//                     text-white/25
//                     transition-colors
//                     hover:text-white/60
//                   "
//                 >
//                   Privacy Policy
//                 </Link>

//                 <Link
//                   href="/terms"
//                   className="
//                     text-[8px]
//                     text-white/25
//                     transition-colors
//                     hover:text-white/60
//                   "
//                 >
//                   Terms & Conditions
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight, MapPin, Mail, Phone,
  Facebook, Instagram, Linkedin, Twitter, Youtube,
} from "lucide-react";
import Image from "next/image";
import { fetchFooterSettings } from "@/utils/fetchFooterSettings";

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

// Fallback data — shown while loading or if API fails
const fallbackData = {
  navbarLogo: { url: "/images/logo.png" },
  bannerLogo: { url: "/images/logo.png" },
  galleryImages: [
    { url: "/images/f1.jpg" },
    { url: "/images/f2.jpg" },
    { url: "/images/f3.jpg" },
    { url: "/images/f4.jpg" },
    { url: "/images/f5.jpg" },
    { url: "/images/f6.jpg" },
  ],
  socialLinks: [
    { platform: "facebook", url: "#", isActive: true },
    { platform: "instagram", url: "#", isActive: true },
    { platform: "linkedin", url: "#", isActive: true },
    { platform: "twitter", url: "#", isActive: true },
  ],
  contactInfo: {
    address: {
      line1: "Bangkok, Thailand",
      line2: "International Shipping Office",
    },
    email: "info@thaishipping.com",
    phone: "+66 00 000 0000",
  },
  companyName: "Thai Shipping",
  description:
    "Connecting Thailand with global markets through reliable shipping, logistics and international trade solutions.",
  copyrightText: "Copyright © 2009 ThaiShipping.com",
  discoverLinks: [
    { label: "Thai Imports", href: "/thai-imports" },
    { label: "Thai Exports", href: "/thai-exports" },
    { label: "Thai Food Shipping", href: "/thai-food-shipping" },
    { label: "Shipping Regulations", href: "/shipping-regulations" },
    { label: "Shipping Services", href: "/shipping-services" },
  ],
  informationLinks: [
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Track Shipment", href: "/track-shipment" },
  ],
};

const Footer = () => {
  const [settings, setSettings] = useState(fallbackData);

  useEffect(() => {
    const load = async () => {
      const data = await fetchFooterSettings();
      if (data) {
        setSettings({
          ...fallbackData,
          ...data,
          contactInfo: { ...fallbackData.contactInfo, ...data.contactInfo },
          galleryImages:
            data.galleryImages?.length > 0
              ? data.galleryImages
              : fallbackData.galleryImages,
          socialLinks:
            data.socialLinks?.length > 0
              ? data.socialLinks
              : fallbackData.socialLinks,
          discoverLinks:
            data.discoverLinks?.length > 0
              ? data.discoverLinks
              : fallbackData.discoverLinks,
          informationLinks:
            data.informationLinks?.length > 0
              ? data.informationLinks
              : fallbackData.informationLinks,
        });
      }
    };
    load();
  }, []);

  const {
    navbarLogo, bannerLogo, galleryImages, socialLinks,
    contactInfo, companyName, description, copyrightText,
    discoverLinks, informationLinks,
  } = settings;

  const activeSocialLinks = socialLinks.filter((s) => s.isActive !== false);

  return (
    <footer className="relative overflow-hidden bg-[#073155] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row">
        {/* LEFT — GALLERY */}
        <div className="relative flex w-full overflow-hidden bg-[#ED6D32] px-5 py-6 sm:px-7 sm:py-7 lg:w-[26%] lg:flex-shrink-0 lg:px-6 lg:py-7 xl:w-[27%] xl:px-7">
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-[300px] w-[300px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-20 top-[-100px] h-[220px] w-[220px] rounded-full border border-white/10" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, transparent 40%, rgba(255,255,255,.8) 40%, transparent 41%)",
              backgroundSize: "65px 65px",
            }}
          />

          <div className="relative w-full">
            <div className="mb-4">
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
                Thai <span className="text-[#073155]">Shipping</span>
              </h2>
              <div className="mt-2 h-[2px] w-7 bg-white/60" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {galleryImages.slice(0, 6).map((image, index) => (
                <Link
                  key={image._id || index}
                  href="/gallery"
                  aria-label={`View gallery image ${index + 1}`}
                  className="group relative aspect-[1.2/1] overflow-hidden border border-white/20 bg-black/10"
                >
                  <img
                    src={image.url}
                    alt={image.alt || `Thai shipping gallery ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#062B35]/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center bg-[#ED6D32] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full px-6 py-8 sm:px-8 sm:py-9 lg:w-[74%] lg:px-9 lg:py-8 xl:px-11">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
            {/* COLUMN 1 — Brand */}
            <div>
              <Link href="/" className="inline-flex items-center">
                <Image
                  src={navbarLogo?.url || bannerLogo?.url || "/images/logo.png"}
                  alt={companyName}
                  width={200}
                  height={200}
                  className="h-16 w-auto object-contain"
                />
                <span className="sr-only">{companyName}</span>
              </Link>

              <p className="mt-4 max-w-[190px] text-[9px] leading-[1.7] text-white/45 -mt-3">
                {description}
              </p>

              <div className="mt-4 flex items-center gap-1.5">
                {activeSocialLinks.map((social) => {
                  const Icon = socialIconMap[social.platform] || Facebook;
                  return (
                    <Link
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ED6D32] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#062B35]"
                    >
                      <Icon className="h-3 w-3" strokeWidth={1.8} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2 — Discover */}
            <div>
              <h3 className="text-[12px] font-semibold text-white">Discover</h3>
              <div className="mt-4 space-y-2.5">
                {discoverLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[9px] leading-[1.4] text-white/45 transition-colors duration-200 hover:text-[#ED6D32]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-2.5 w-2.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            {/* COLUMN 3 — Information */}
            <div>
              <h3 className="text-[12px] font-semibold text-white">Information</h3>
              <div className="mt-4 space-y-2.5">
                {informationLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[9px] leading-[1.4] text-white/45 transition-colors duration-200 hover:text-[#ED6D32]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-2.5 w-2.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            {/* COLUMN 4 — Contact */}
            <div>
              <h3 className="text-[12px] font-semibold text-white">Contact</h3>
              <div className="mt-4 space-y-3.5">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ED6D32]" strokeWidth={1.7} />
                  <p className="text-[9px] leading-[1.6] text-white/45">
                    {contactInfo?.address?.line1}
                    <br />
                    {contactInfo?.address?.line2}
                  </p>
                </div>

                <a
                  href={`mailto:${contactInfo?.email}`}
                  className="flex items-center gap-2 text-[9px] text-white/45 transition-colors hover:text-[#ED6D32]"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#ED6D32]" strokeWidth={1.7} />
                  <span className="break-all">{contactInfo?.email}</span>
                </a>

                <a
                  href={`tel:${contactInfo?.phone?.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-[9px] text-white/45 transition-colors hover:text-[#ED6D32]"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#ED6D32]" strokeWidth={1.7} />
                  {contactInfo?.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[8px] text-white/25">{copyrightText}</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="text-[8px] text-white/25 transition-colors hover:text-white/60">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[8px] text-white/25 transition-colors hover:text-white/60">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;