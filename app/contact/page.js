// import Contact from "@/components/contact";
// import React from "react";

// // 🔹 SEO metadata for Contact Us
// export const metadata = {
//   title: "Contact Us | Samudera Traffic Co., Ltd. Group",
//   description:
//     "Get in touch with Samudera Traffic Co., Ltd. Group for all your shipping and logistics needs. Contact our support team for inquiries about sea freight, air freight, trucking, and multimodal shipping solutions.",
//   keywords: [
//     "Samudera Traffic Co., Ltd.",
//     "Contact Us",
//     "Logistics Support",
//     "Shipping Inquiries",
//     "Freight Services",
//     "Customer Support",
//     "Logistics Company Contact",
//     "Shipping Company",
//     "Cargo Services",
//     "Transportation Solutions",
//   ],
//   alternates: {
//     canonical: "https://samuderathai.com/contact",
//   },
//   openGraph: {
//     title: "Contact Us | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Get in touch with Samudera Traffic Co., Ltd. Group for all your shipping and logistics needs. Contact our support team for inquiries about sea freight, air freight, trucking, and multimodal shipping solutions.",
//     url: "https://samuderathai.com/contact",
//     siteName: "Samudera Traffic Co., Ltd. Group",
//     images: [
//       {
//         url: "/og-contact.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Samudera Traffic Co., Ltd. Group - Contact Us",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Contact Us | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Get in touch with Samudera Traffic Co., Ltd. Group for all your shipping and logistics needs. Contact our support team for inquiries.",
//     images: ["/og-contact.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <Contact />

//       {/* 🔹 Schema Markup for Contact Page */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ContactPage",
//             name: "Contact Us",
//             description:
//               "Get in touch with Samudera Traffic Co., Ltd. Group for all your shipping and logistics needs. Contact our support team for inquiries about sea freight, air freight, trucking, and multimodal shipping solutions.",
//             url: "https://samuderathai.com/contact",
//             publisher: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//               url: "https://samuderathai.com",
//               logo: "https://samuderathai.com/logo.png",
//             },
//             mainEntity: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//               contactPoint: [
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+66977830395",
//                   contactType: "customer service",
//                   email: "info@samuderathai.com",
//                   availableLanguage: ["English"],
//                   contactOption: "TollFree",
//                   areaServed: "Worldwide",
//                 },
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+66977830395",
//                   contactType: "sales",
//                   email: "info@samuderathai.com",
//                   availableLanguage: ["English"],
//                 },
//                 {
//                   "@type": "ContactPoint",
//                   telephone: "+66977830395",
//                   contactType: "technical support",
//                   email: "info@samuderathai.com",
//                   availableLanguage: ["English"],
//                 },
//               ],
//               address: {
//                 "@type": "PostalAddress",
//                 streetAddress: "Green Tower, 9th floor, 3656/27-28 Rama IV Road",
//                 addressLocality: "Klongton-Klong Toey",
//                 addressRegion: "Bangkok",
//                 postalCode: "10110",
//                 addressCountry: "Thailand",
//               },
//               openingHoursSpecification: [
//                 {
//                   "@type": "OpeningHoursSpecification",
//                   dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//                   opens: "07:00",
//                   closes: "22:00",
//                 },
//               ],
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema for Contact */}
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
//                 item: "https://samuderathai.com",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Contact Us",
//                 item: "https://samuderathai.com/contact",
//               },
//             ],
//           }),
//         }}
//       />
//     </>
//   );
// }


import Contact from "@/components/contact";
import React from "react";

// 🔹 SEO metadata for Contact Us - Hanjin Shipping Thailand
export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hanjin Shipping Thailand for all your ocean freight and container shipping needs. Contact our customer service team for inquiries about shipping schedules, bookings, cargo tracking, and logistics solutions across Asia, America, and Europe.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Contact Us",
    "Shipping Inquiries",
    "Ocean Freight Support",
    "Container Shipping Contact",
    "Customer Support Thailand",
    "Logistics Contact",
    "Hanjin Customer Service",
    "Shipping Company Thailand",
    "Cargo Services Contact",
    "Freight Forwarding Support",
    "Bangkok Shipping Office",
    "Laemchabang Port Contact",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/contact",
  },
  openGraph: {
    title: "Contact Us | Hanjin Shipping Thailand",
    description:
      "Get in touch with Hanjin Shipping Thailand for all your ocean freight and container shipping needs. Contact our customer service team for inquiries about shipping schedules, bookings, and cargo tracking.",
    url: "https://hanjinthailand.com/contact",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Contact Us",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hanjin Shipping Thailand",
    description:
      "Contact Hanjin Shipping Thailand for ocean freight, container shipping, and logistics inquiries.",
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

      {/* 🔹 Schema Markup for Contact Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us - Hanjin Shipping Thailand",
            description:
              "Get in touch with Hanjin Shipping Thailand for all your ocean freight and container shipping needs. Contact our customer service team for inquiries about shipping schedules, bookings, cargo tracking, and logistics solutions.",
            url: "https://hanjinthailand.com/contact",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "Organization",
              name: "Hanjin Shipping (Thailand) Co., Ltd.",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "customer service",
                  email: "contact@hanjinthailand.com",
                  availableLanguage: ["English", "Thai"],
                  contactOption: "TollFree",
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "sales",
                  email: "sales@hanjinthailand.com",
                  availableLanguage: ["English", "Thai"],
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "technical support",
                  email: "support@hanjinthailand.com",
                  availableLanguage: ["English", "Thai"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+66-2-123-4567",
                  contactType: "booking",
                  email: "booking@hanjinthailand.com",
                  availableLanguage: ["English", "Thai"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "6th Floor, Sirinrat Building, 3388/17-18 Rama IV Road, Khlong Tan",
                addressLocality: "Khlong Toei",
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

      {/* 🔹 Breadcrumb Schema for Contact - Hanjin Shipping Thailand */}
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
                name: "Contact Us",
                item: "https://hanjinthailand.com/contact",
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
            ],
            hasMap: "https://maps.google.com/?q=6th+Floor+Sirinrat+Building+Rama+IV+Road+Khlong+Tan+Khlong+Toei+Bangkok+10110",
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
            name: "Hanjin Shipping Thailand",
            url: "https://hanjinthailand.com",
            logo: "https://hanjinthailand.com/logo.png",
            description: "Leading ocean freight and container shipping solutions provider in Thailand",
            foundingDate: "1988",
            email: "contact@hanjinthailand.com",
            telephone: "+66-2-123-4567",
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
              availableLanguage: ["English", "Thai"],
            },
            sameAs: [
              "https://www.facebook.com/HanjinShipping",
              "https://www.linkedin.com/company/hanjin-shipping",
            ],
          }),
        }}
      />
    </>
  );
}