// import TermsOfService from "@/components/footer/terms";
// import React from "react";

// // 🔹 SEO metadata for Terms of Service
// export const metadata = {
//   title: "Terms of Service | Samudera Traffic Co., Ltd. Group",
//   description:
//     "Read the Terms of Service for Samudera Traffic Co., Ltd. Group. Understand our legal framework for international freight forwarding, logistics management, and Samudera Cargo operations across Thailand, China, USA, UK & Canada.",
//   keywords: [
//     "Samudera Traffic Co., Ltd.",
//     "Terms of Service",
//     "Terms and Conditions",
//     "Legal Terms",
//     "Freight Forwarding Terms",
//     "Logistics Agreement",
//     "Samudera Cargo Terms",
//     "Shipping Terms",
//     "Service Agreement",
//     "User Agreement",
//   ],
//   alternates: {
//     canonical: "https://samuderathai.com/terms-of-service",
//   },
//   openGraph: {
//     title: "Terms of Service | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Read the Terms of Service for Samudera Traffic Co., Ltd. Group. Understand our legal framework for international freight forwarding, logistics management, and Samudera Cargo operations.",
//     url: "https://samuderathai.com/terms-of-service",
//     siteName: "Samudera Traffic Co., Ltd. Group",
//     images: [
//       {
//         url: "/og-terms-of-service.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Samudera Traffic Co., Ltd. Group - Terms of Service",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Terms of Service | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Read the Terms of Service for Samudera Traffic Co., Ltd. Group. Understand our legal framework for international freight forwarding.",
//     images: ["/og-terms-of-service.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <TermsOfService />

//       {/* 🔹 Schema Markup for Terms of Service Page */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Terms of Service",
//             description:
//               "Read the Terms of Service for Samudera Traffic Co., Ltd. Group. Understand our legal framework for international freight forwarding, logistics management, and Samudera Cargo operations across Thailand, China, USA, UK & Canada.",
//             url: "https://samuderathai.com/terms-of-service",
//             publisher: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//               url: "https://samuderathai.com",
//               logo: "https://samuderathai.com/logo.png",
//             },
//             mainEntity: {
//               "@type": "WebPageElement",
//               name: "Terms of Service Document",
//               description: "Legal terms and conditions for logistics services",
//             },
//             dateModified: "2026-02-02",
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema for Terms of Service */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             itemListElement: [
//               {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: "Home",
//                 item: "https://client.cargologisticscompany.com",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Terms of Service",
//                 item: "https://client.cargologisticscompany.com/terms-of-service",
//               },
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 Organization Schema for Legal Info */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Samudera Traffic Co., Ltd. Group",
//             url: "https://client.cargologisticscompany.com",
//             logo: "https://client.cargologisticscompany.com/logo.png",
//             description: "Leading logistics and supply chain solutions provider",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "Green Tower, 9th floor, 3656/27-28 Rama IV Road",
//               addressLocality: "Columbia",
//               addressRegion: "MD",
//               postalCode: "21045",
//               addressCountry: "USA",
//             },
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+66977830395",
//               contactType: "legal",
//               email: "info@samuderathai.com",
//               availableLanguage: ["English"],
//             },
//             legalName: "Samudera Traffic Co., Ltd. Group",
//             foundingDate: "2009",
//             termsOfService: "https://client.cargologisticscompany.com/terms-of-service",
//           }),
//         }}
//       />

//       {/* 🔹 Terms of Service Schema (Legal Document) */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "TermsOfService",
//             name: "Terms of Service of Samudera Traffic Co., Ltd. Group",
//             description:
//               "These Terms of Service govern the use of Samudera Traffic Co., Ltd. Group's freight forwarding platform and logistics services.",
//             url: "https://client.cargologisticscompany.com/terms-of-service",
//             lastReviewed: "2026-02-02",
//             inLanguage: "en-US",
//             jurisdiction: "USA",
//             applicableLegislation: ["UCC", "CISG"],
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+66977830395",
//               email: "info@samuderathai.com",
//               contactType: "legal support",
//             },
//           }),
//         }}
//       />
//     </>
//   );
// }



import TermsOfService from "@/components/footer/terms";
import React from "react";

// 🔹 SEO metadata for Terms of Service - Hanjin Shipping Thailand
export const metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Hanjin Shipping Thailand. Understand our legal framework for ocean freight, container shipping, and logistics services across Asia, America, and Europe. Legal terms for cargo transportation and freight forwarding.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Terms of Service",
    "Terms and Conditions",
    "Legal Terms",
    "Ocean Freight Terms",
    "Container Shipping Terms",
    "Logistics Agreement",
    "Hanjin Terms",
    "Shipping Terms",
    "Service Agreement",
    "User Agreement",
    "Cargo Transportation Terms",
    "Freight Forwarding Terms",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Hanjin Shipping Thailand",
    description:
      "Read the Terms of Service for Hanjin Shipping Thailand. Understand our legal framework for ocean freight, container shipping, and logistics services across Asia, America, and Europe.",
    url: "https://hanjinthailand.com/terms-of-service",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-terms-of-service.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Terms of Service",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Hanjin Shipping Thailand",
    description:
      "Legal terms and conditions for ocean freight and container shipping services.",
    images: ["/og-terms-of-service.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return (
    <>
      <TermsOfService />

      {/* 🔹 Schema Markup for Terms of Service Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service - Hanjin Shipping Thailand",
            description:
              "Read the Terms of Service for Hanjin Shipping Thailand. Understand our legal framework for ocean freight, container shipping, and logistics services across Asia, America, and Europe.",
            url: "https://hanjinthailand.com/terms-of-service",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Terms of Service Document",
              description: "Legal terms and conditions for ocean freight and container shipping services",
            },
            dateModified: "2024-01-01",
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Terms of Service - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://hanjinthailand.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Terms of Service",
                item: "https://hanjinthailand.com/terms-of-service",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Legal Info - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hanjin Shipping (Thailand) Co., Ltd.",
            url: "https://hanjinthailand.com",
            logo: "https://hanjinthailand.com/logo.png",
            description: "Leading ocean freight and container shipping solutions provider in Thailand",
            legalName: "Hanjin Shipping (Thailand) Co., Ltd.",
            foundingDate: "1988",
            foundingLocation: "Seoul, South Korea",
            address: {
              "@type": "PostalAddress",
              streetAddress: "6th Floor, Sirinrat Building, 3388/17-18 Rama IV Road, Khlong Tan",
              addressLocality: "Khlong Toei",
              addressRegion: "Bangkok",
              postalCode: "10110",
              addressCountry: "Thailand",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "legal",
              email: "legal@hanjinthailand.com",
              availableLanguage: ["English", "Thai"],
            },
            termsOfService: "https://hanjinthailand.com/terms-of-service",
            privacyPolicy: "https://hanjinthailand.com/privacy-policy",
          }),
        }}
      />

      {/* 🔹 Terms of Service Schema (Legal Document) - Hanjin Shipping */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            name: "Terms of Service - Hanjin Shipping Thailand",
            description:
              "These Terms of Service govern the use of Hanjin Shipping Thailand's ocean freight, container shipping, and logistics services.",
            url: "https://hanjinthailand.com/terms-of-service",
            lastReviewed: "2024-01-01",
            inLanguage: "en-US",
            jurisdiction: "Thailand",
            applicableLegislation: ["Thai Civil and Commercial Code", "Thai Maritime Law", "International Maritime Conventions"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              email: "legal@hanjinthailand.com",
              contactType: "legal support",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />

      {/* 🔹 Local Business Schema with Legal Terms */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hanjin Shipping (Thailand) Co., Ltd.",
            image: "https://hanjinthailand.com/logo.png",
            description: "Ocean freight and container shipping services in Thailand",
            address: {
              "@type": "PostalAddress",
              streetAddress: "6th Floor, Sirinrat Building, 3388/17-18 Rama IV Road, Khlong Tan",
              addressLocality: "Khlong Toei",
              addressRegion: "Bangkok",
              postalCode: "10110",
              addressCountry: "Thailand",
            },
            telephone: "+66-2-123-4567",
            email: "contact@hanjinthailand.com",
            priceRange: "$$$",
            areaServed: [
              { "@type": "Country", name: "Thailand" },
              { "@type": "Country", name: "China" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "France" },
              { "@type": "Country", name: "Netherlands" },
              { "@type": "Country", name: "Japan" },
              { "@type": "Country", name: "South Korea" },
            ],
            termsOfService: "https://hanjinthailand.com/terms-of-service",
          }),
        }}
      />

      {/* 🔹 Corporation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Hanjin Shipping (Thailand) Co., Ltd.",
            legalName: "Hanjin Shipping (Thailand) Co., Ltd.",
            url: "https://hanjinthailand.com",
            logo: "https://hanjinthailand.com/logo.png",
            description: "Global ocean freight and container shipping services provider",
            foundingDate: "1988",
            foundingLocation: "Seoul, South Korea",
            address: {
              "@type": "PostalAddress",
              streetAddress: "6th Floor, Sirinrat Building, 3388/17-18 Rama IV Road, Khlong Tan",
              addressLocality: "Khlong Toei",
              addressRegion: "Bangkok",
              postalCode: "10110",
              addressCountry: "Thailand",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "customer service",
              email: "contact@hanjinthailand.com",
            },
            knowsAbout: [
              "Ocean Freight",
              "Container Shipping",
              "Global Logistics",
              "Supply Chain Management",
              "Maritime Transport",
            ],
            termsOfService: "https://hanjinthailand.com/terms-of-service",
          }),
        }}
      />
    </>
  );
}