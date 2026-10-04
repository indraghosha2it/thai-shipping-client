// import Banner from '@/components/home/banner';
// import History from '@/components/home/history';
// import LogisticTimeline from '@/components/home/logiaticTimeline';
// import Service from '@/components/home/service';
// import Ecommerce from '@/components/home/ecommerce';
// import Shipping from '@/components/home/shipping';
// import Warehouse from '@/components/home/warehouse';
// import Facts from '@/components/home/facts';

// import Quote from '@/components/home/quote';

// import React from "react";

// // 🔹 SEO metadata for Home Page
// export const metadata = {
//   title: "Samudera Traffic Co., Ltd. Group | Global Freight Forwarding & Supply Chain Solutions",
//   description:
//     "Samudera Traffic Co., Ltd. Group provides international freight forwarding, sea freight, air freight, warehousing, customs clearance, and supply chain solutions worldwide. Trusted logistics partner for businesses across USA, UK, Canada, China, and Thailand.",
//   keywords: [
//     "Samudera Traffic Co., Ltd.",
//     "Freight Forwarding",
//     "Sea Freight",
//     "Air Freight",
//     "Warehousing",
//     "Supply Chain Solutions",
//     "Logistics Company",
//     "International Shipping",
//     "Customs Clearance",
//     "Global Logistics",
//   ],
//   alternates: {
//     canonical: "https://samuderathai.com",
//   },
//   openGraph: {
//     title: "Samudera Traffic Co., Ltd. Group | Global Freight Forwarding & Supply Chain Solutions",
//     description:
//       "Samudera Traffic Co., Ltd. Group provides international freight forwarding, sea freight, air freight, warehousing, customs clearance, and supply chain solutions worldwide.",
//     url: "https://samuderathai.com",
//     siteName: "Samudera Traffic Co., Ltd. Group",
//     images: [
//       {
//         url: "/og-home.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Samudera Traffic Co., Ltd. Group - Global Logistics Solutions",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Samudera Traffic Co., Ltd. Group | Global Logistics Solutions",
//     description:
//       "International freight forwarding and supply chain solutions from Samudera Traffic Co., Ltd. Group.",
//     images: ["/og-home.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <Banner />
//       <History />
//       <Service />
   
     
//       <Shipping />
   
//       <Facts />
  
//       <Quote />
//       {/* <Warehouse /> */}

      

//       {/* 🔹 Schema Markup for Home Page */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Samudera Traffic Co., Ltd. Group",
//             description:
//               "Samudera Traffic Co., Ltd. Group provides international freight forwarding, sea freight, air freight, warehousing, customs clearance, and supply chain solutions worldwide.",
//             url: "https://samuderathai.com",
//             publisher: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//               url: "https://samuderathai.com",
//               logo: "https://samuderathai.com/logo.png",
//             },
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
//             name: "Samudera Traffic Co., Ltd. Group",
//             url: "https://samuderathai.com",
//             logo: "https://samuderathai.com/logo.png",
//             description: "Leading logistics and supply chain solutions provider",
//             foundingDate: "2009",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "Green Tower, 9th floor, 3656/27-28 Rama IV Road",
//               addressLocality: "Klongton-Klong Toey",
//               addressRegion: "Bangkok",
//               postalCode: "10110",
//               addressCountry: "Thailand",
//             },
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+66977830395",
//               contactType: "customer service",
//               email: "info@samuderathai.com",
//               availableLanguage: ["English"],
//             },
//             sameAs: [
//               "https://www.facebook.com/cargologistics",
//               "https://www.linkedin.com/company/cargo-logistics-group",
//               "https://twitter.com/cargologistics",
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 LocalBusiness Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             name: "Samudera Traffic Co., Ltd. Group",
//             image: "https://samuderathai.com/logo.png",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "Green Tower, 9th floor, 3656/27-28 Rama IV Road",
//               addressLocality: "Klongton-Klong Toey",
//               addressRegion: "Bangkok",
//               postalCode: "10110",
//               addressCountry: "Thailand",
//             },
//             telephone: "+66977830395",
//             email: "info@samuderathai.com",
//             openingHoursSpecification: [
//               {
//                 "@type": "OpeningHoursSpecification",
//                 dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//                 opens: "07:00",
//                 closes: "22:00",
//               },
//             ],
//             priceRange: "$$",
//             areaServed: {
//               "@type": "Country",
//               name: "Worldwide",
//             },
//             hasOfferCatalog: {
//               "@type": "OfferCatalog",
//               name: "Logistics Services",
//               itemListElement: [
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Sea Freight",
//                     description: "FCL and LCL container shipping",
//                   },
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Air Freight",
//                     description: "Express air cargo delivery",
//                   },
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Warehousing",
//                     description: "Strategic storage solutions",
//                   },
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Customs Clearance",
//                     description: "Professional customs brokerage",
//                   },
//                 },
//               ],
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema */}
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
//             ],
//           }),
//         }}
//       />
//     </>
//   );
// }



import Banner from '@/components/home/banner';
import History from '@/components/home/history';
import LogisticTimeline from '@/components/home/logiaticTimeline';
import Service from '@/components/home/service';
import Ecommerce from '@/components/home/ecommerce';
import Shipping from '@/components/home/shipping';
import Warehouse from '@/components/home/warehouse';
import Facts from '@/components/home/facts';

import Quote from '@/components/home/quote';
import GlobalTradeSection from '@/components/home/GlobalTradeSection';
import TrustedSection from '@/components/home/TrustedSection';

import React from "react";
import TransportationModes from '@/components/home/TransportationModes';

// 🔹 SEO metadata for Home Page - Hanjin Shipping Thailand
export const metadata = {
  title: "Hanjin Shipping Thailand | Global Ocean Freight & Container Shipping Solutions",
  description:
    "Hanjin Shipping Thailand provides reliable ocean freight services, container shipping, global logistics solutions, and supply chain management across Asia, America, and Europe. Trusted shipping partner since 1988.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Ocean Freight",
    "Container Shipping",
    "Sea Freight",
    "Global Logistics",
    "Supply Chain Management",
    "Cargo Shipping",
    "International Shipping",
    "Freight Forwarding",
    "Thailand Shipping",
    "Bangkok Freight",
    "Asia Shipping",
    "America Shipping",
    "Europe Shipping",
    "Hanjin Group",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com",
  },
  openGraph: {
    title: "Hanjin Shipping Thailand | Global Ocean Freight & Container Shipping Solutions",
    description:
      "Hanjin Shipping Thailand provides reliable ocean freight services, container shipping, global logistics solutions, and supply chain management across Asia, America, and Europe.",
    url: "https://hanjinthailand.com",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Global Ocean Freight Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanjin Shipping Thailand | Global Ocean Freight Solutions",
    description:
      "Reliable ocean freight and container shipping services across Asia, America, and Europe.",
    images: ["/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Banner />
         <History />
     
        <TransportationModes />
            <TrustedSection />

       
   
    
      
      <Service />

       <GlobalTradeSection />
   
     
      {/* <Shipping /> */}
   
      <Facts />
  
      <Quote />
      {/* <Warehouse /> */}

      

      {/* 🔹 Schema Markup for Home Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hanjin Shipping Thailand",
            description:
              "Hanjin Shipping Thailand provides reliable ocean freight services, container shipping, global logistics solutions, and supply chain management across Asia, America, and Europe.",
            url: "https://hanjinthailand.com",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
          }),
        }}
      />

      {/* 🔹 Organization Schema - Hanjin Shipping Thailand */}
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
              availableLanguage: ["English", "Thai"],
            },
            sameAs: [
              "https://www.facebook.com/HanjinShipping",
              "https://www.linkedin.com/company/hanjin-shipping",
              "https://twitter.com/HanjinShipping",
            ],
          }),
        }}
      />

      {/* 🔹 LocalBusiness Schema - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hanjin Shipping Thailand",
            image: "https://hanjinthailand.com/logo.png",
            description: "Global ocean freight and container shipping services",
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
              {
                "@type": "Country",
                name: "Thailand",
              },
              {
                "@type": "Country",
                name: "China",
              },
              {
                "@type": "Country",
                name: "United States",
              },
              {
                "@type": "Country",
                name: "United Kingdom",
              },
              {
                "@type": "Country",
                name: "Japan",
              },
              {
                "@type": "Country",
                name: "South Korea",
              },
              {
                "@type": "Country",
                name: "Germany",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Shipping & Logistics Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Ocean Freight",
                    description: "FCL and LCL container shipping worldwide",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Container Shipping",
                    description: "Dry, reefer, open top, and flat rack containers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Supply Chain Management",
                    description: "End-to-end logistics solutions",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Global Logistics",
                    description: "International freight and cargo services",
                  },
                },
              ],
            },
            globalLocationNumber: "THA-001",
            hasMap: "https://maps.google.com/?q=6th+Floor+Sirinrat+Building+Rama+IV+Road+Khlong+Tan+Khlong+Toei+Bangkok+10110",
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema - Home Page */}
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
            ],
          }),
        }}
      />

      {/* 🔹 Shipping Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Ocean Freight Services",
            provider: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
            },
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Shipping Routes",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Intra-Asia Service",
                  description: "Container shipping across Asian ports",
                },
                {
                  "@type": "Offer",
                  name: "America Service",
                  description: "Trans-Pacific shipping to USA and Canada",
                },
                {
                  "@type": "Offer",
                  name: "Europe Service",
                  description: "Asia to Europe container shipping",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}