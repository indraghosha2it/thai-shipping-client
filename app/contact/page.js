// import Contact from "@/components/contact";
// import React from "react";

// // 🔹 SEO metadata for Contact Us - Thai Shipping Services
// export const metadata = {
//   title: "Contact Us",
//   description:
//     "Get in touch with Thai Shipping Services for all your air, sea, and land shipping needs. Contact our team for inquiries about Thai imports, exports, food shipping, shipping regulations, and logistics providers across Thailand.",
//   keywords: [
//     "Thai Shipping Services",
//     "Contact Us",
//     "Thailand Shipping Inquiries",
//     "Air Shipping Thailand Contact",
//     "Sea Shipping Thailand Contact",
//     "Land Transportation Thailand",
//     "Thai Logistics Contact",
//     "Customer Support Thailand",
//     "Thai Imports Contact",
//     "Thai Exports Contact",
//     "Thai Food Shipping Contact",
//     "Shipping Regulations Thailand",
//     "Bangkok Shipping Office",
//     "Thailand Freight Support",
//     "Kintetsu World Express Thailand",
//     "World Freight Co. Ltd.",
//     "Asian Tigers Transpo",
//     "Seaborne Logistics",
//     "V.A.S. Services",
//     "B and J Services",
//   ],
//   alternates: {
//     canonical: "https://thaishipping.com/contact",
//   },
//   openGraph: {
//     title: "Contact Us | Thai Shipping Services",
//     description:
//       "Get in touch with Thai Shipping Services for all your air, sea, and land shipping needs. Contact our team for inquiries about Thai imports, exports, food shipping, and shipping regulations.",
//     url: "https://thaishipping.com/contact",
//     siteName: "Thai Shipping Services",
//     images: [
//       {
//         url: "/og-contact.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Thai Shipping Services - Contact Us",
//       },
//     ],
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Contact Us | Thai Shipping Services",
//     description:
//       "Contact Thai Shipping Services for air, sea, and land shipping inquiries, Thai imports and exports, and shipping regulations.",
//     images: ["/og-contact.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <Contact />

//       {/* 🔹 Schema Markup for Contact Page - Thai Shipping Services */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ContactPage",
//             name: "Contact Us - Thai Shipping Services",
//             description:
//               "Get in touch with Thai Shipping Services for all your air, sea, and land shipping needs. Contact our team for inquiries about Thai imports, exports, food shipping, shipping regulations, and logistics providers across Thailand.",
//             url: "https://thaishipping.com/contact",
//             publisher: {
//               "@type": "Organization",
//               name: "Thai Shipping Services",
//               url: "https://thaishipping.com",
//               logo: "https://thaishipping.com/logo.png",
//             },
//             mainEntity: {
//               "@type": "Organization",
//               name: "Thai Shipping Services",
//               contactPoint: [
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+66-2-123-4567",
//                   contactType: "customer service",
//                   email: "contact@thaishipping.com",
//                   availableLanguage: ["English", "Thai"],
//                   contactOption: "TollFree",
//                   areaServed: "Worldwide",
//                 },
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+66-2-123-4567",
//                   contactType: "sales",
//                   email: "sales@thaishipping.com",
//                   availableLanguage: ["English", "Thai"],
//                   areaServed: "Worldwide",
//                 },
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+66-2-123-4567",
//                   contactType: "technical support",
//                   email: "support@thaishipping.com",
//                   availableLanguage: ["English", "Thai"],
//                 },
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+66-2-123-4567",
//                   contactType: "booking",
//                   email: "booking@thaishipping.com",
//                   availableLanguage: ["English", "Thai"],
//                 },
//               ],
//               address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "Bangkok, Thailand",
//                 addressLocality: "Bangkok",
//                 addressRegion: "Bangkok",
//                 postalCode: "10110",
//                 addressCountry: "Thailand",
//               },
//               openingHoursSpecification: [
//                 {
//                   "@type": "OpeningHoursSpecification",
//                   dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//                   opens: "08:30",
//                   closes: "17:30",
//                 },
//               ],
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema for Contact - Thai Shipping Services */}
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
//                 item: "https://thaishipping.com",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Contact Us",
//                 item: "https://thaishipping.com/contact",
//               },
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 Local Business Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             name: "Thai Shipping Services",
//             image: "https://thaishipping.com/logo.png",
//             description: "Air, sea, and land shipping services in Thailand",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "Bangkok, Thailand",
//               addressLocality: "Bangkok",
//               addressRegion: "Bangkok",
//               postalCode: "10110",
//               addressCountry: "Thailand",
//             },
//             telephone: "+66-2-123-4567",
//             email: "contact@thaishipping.com",
//             openingHoursSpecification: [
//               {
//                 "@type": "OpeningHoursSpecification",
//                 dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//                 opens: "08:30",
//                 closes: "17:30",
//               },
//             ],
//             priceRange: "$$$",
//             areaServed: [
//               { "@type": "Country", name: "Thailand" },
//               { "@type": "Country", name: "China" },
//               { "@type": "Country", name: "United States" },
//               { "@type": "Country", name: "United Kingdom" },
//               { "@type": "Country", name: "Germany" },
//               { "@type": "Country", name: "Japan" },
//               { "@type": "Country", name: "South Korea" },
//               { "@type": "Country", name: "Malaysia" },
//             ],
//             hasMap: "https://maps.google.com/?q=Bangkok+Thailand",
//           }),
//         }}
//       />

//       {/* 🔹 Organization Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Thai Shipping Services",
//             url: "https://thaishipping.com",
//             logo: "https://thaishipping.com/logo.png",
//             description:
//               "Air, sea, and land shipping services in Thailand — your guide to Thai imports, exports, food shipping, and shipping regulations.",
//             foundingDate: "1990",
//             email: "contact@thaishipping.com",
//             telephone: "+66-2-123-4567",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "Bangkok, Thailand",
//               addressLocality: "Bangkok",
//               addressRegion: "Bangkok",
//               postalCode: "10110",
//               addressCountry: "Thailand",
//             },
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+66-2-123-4567",
//               contactType: "customer service",
//               email: "contact@thaishipping.com",
//               availableLanguage: ["English", "Thai"],
//             },
//             sameAs: [
//               "https://www.facebook.com/ThaiShipping",
//               "https://www.linkedin.com/company/thai-shipping",
//             ],
//           }),
//         }}
//       />
//     </>
//   );
// }


import Contact from "@/components/contact";
import React from "react";

// 🔹 SEO metadata for Contact Us - Thai Shipping Services
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Thai Shipping Services for all your air, sea, and land shipping needs. Contact our team for inquiries about Thai imports, exports, food shipping, shipping regulations, and logistics providers across Thailand.",
  keywords: [
    "Thai Shipping Services",
    "Contact Us",
    "Thailand Shipping Inquiries",
    "Air Shipping Thailand Contact",
    "Sea Shipping Thailand Contact",
    "Land Transportation Thailand",
    "Thai Logistics Contact",
    "Customer Support Thailand",
    "Thai Imports Contact",
    "Thai Exports Contact",
    "Thai Food Shipping Contact",
    "Shipping Regulations Thailand",
    "Bangkok Shipping Office",
    "Thailand Freight Support",
    "Kintetsu World Express Thailand",
    "World Freight Co. Ltd.",
    "Asian Tigers Transpo",
    "Seaborne Logistics",
    "V.A.S. Services",
    "B and J Services",
  ],
  alternates: {
    canonical: "https://thaishipping.com/contact",
  },
  openGraph: {
    title: "Contact Us | Thai Shipping Services",
    description:
      "Get in touch with Thai Shipping Services for all your air, sea, and land shipping needs. Contact our team for inquiries about Thai imports, exports, food shipping, and shipping regulations.",
    url: "https://thaishipping.com/contact",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - Contact Us",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Thai Shipping Services",
    description:
      "Contact Thai Shipping Services for air, sea, and land shipping inquiries, Thai imports and exports, and shipping regulations.",
    images: ["/og-contact.jpg"],
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
      <Contact />

      {/* 🔹 Schema Markup for Contact Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us - Thai Shipping Services",
            description:
              "Get in touch with Thai Shipping Services for all your air, sea, and land shipping needs. Contact our team for inquiries about Thai imports, exports, food shipping, shipping regulations, and logistics providers across Thailand.",
            url: "https://thaishipping.com/contact",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
            mainEntity: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "customer service",
                  email: "contact@thaishipping.com",
                  availableLanguage: ["English", "Thai"],
                  contactOption: "TollFree",
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "sales",
                  email: "sales@thaishipping.com",
                  availableLanguage: ["English", "Thai"],
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "technical support",
                  email: "support@thaishipping.com",
                  availableLanguage: ["English", "Thai"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "booking",
                  email: "booking@thaishipping.com",
                  availableLanguage: ["English", "Thai"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bangkok, Thailand",
                addressLocality: "Bangkok",
                addressRegion: "Bangkok",
                postalCode: "10110",
                addressCountry: "Thailand",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:30",
                  closes: "17:30",
                },
              ],
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Contact - Thai Shipping Services */}
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
                item: "https://thaishipping.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item: "https://thaishipping.com/contact",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Thai Shipping Services",
            image: "https://thaishipping.com/logo.png",
            description: "Air, sea, and land shipping services in Thailand",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bangkok, Thailand",
              addressLocality: "Bangkok",
              addressRegion: "Bangkok",
              postalCode: "10110",
              addressCountry: "Thailand",
            },
            telephone: "+66-2-123-4567",
            email: "contact@thaishipping.com",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:30",
                closes: "17:30",
              },
            ],
            priceRange: "$$$",
            areaServed: [
              { "@type": "Country", name: "Thailand" },
              { "@type": "Country", name: "China" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "Japan" },
              { "@type": "Country", name: "South Korea" },
              { "@type": "Country", name: "Malaysia" },
            ],
            hasMap: "https://maps.google.com/?q=Bangkok+Thailand",
          }),
        }}
      />

      {/* 🔹 Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thai Shipping Services",
            url: "https://thaishipping.com",
            logo: "https://thaishipping.com/logo.png",
            description:
              "Air, sea, and land shipping services in Thailand — your guide to Thai imports, exports, food shipping, and shipping regulations.",
            foundingDate: "1990",
            email: "contact@thaishipping.com",
            telephone: "+66-2-123-4567",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bangkok, Thailand",
              addressLocality: "Bangkok",
              addressRegion: "Bangkok",
              postalCode: "10110",
              addressCountry: "Thailand",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "customer service",
              email: "contact@thaishipping.com",
              availableLanguage: ["English", "Thai"],
            },
            sameAs: [
              "https://www.facebook.com/ThaiShipping",
              "https://www.linkedin.com/company/thai-shipping",
            ],
          }),
        }}
      />
    </>
  );
}