

// import Banner from '@/components/home/banner';
// import History from '@/components/home/history';
// import LogisticTimeline from '@/components/home/logiaticTimeline';
// import Service from '@/components/home/service';
// import Ecommerce from '@/components/home/ecommerce';
// import Warehouse from '@/components/home/warehouse';
// import Facts from '@/components/home/facts';

// import Quote from '@/components/home/quote';
// import GlobalTradeSection from '@/components/home/GlobalTradeSection';
// import TrustedSection from '@/components/home/TrustedSection';

// import React from "react";
// import TransportationModes from '@/components/home/TransportationModes';

// // 🔹 SEO metadata for Home Page - Hanjin Shipping Thailand
// export const metadata = {
//   title: "Hanjin Shipping Thailand | Global Ocean Freight & Container Shipping Solutions",
//   description:
//     "Hanjin Shipping Thailand provides reliable ocean freight services, container shipping, global logistics solutions, and supply chain management across Asia, America, and Europe. Trusted shipping partner since 1988.",
//   keywords: [
//     "Hanjin Shipping Thailand",
//     "Ocean Freight",
//     "Container Shipping",
//     "Sea Freight",
//     "Global Logistics",
//     "Supply Chain Management",
//     "Cargo Shipping",
//     "International Shipping",
//     "Freight Forwarding",
//     "Thailand Shipping",
//     "Bangkok Freight",
//     "Asia Shipping",
//     "America Shipping",
//     "Europe Shipping",
//     "Hanjin Group",
//   ],
//   alternates: {
//     canonical: "https://hanjinthailand.com",
//   },
//   openGraph: {
//     title: "Hanjin Shipping Thailand | Global Ocean Freight & Container Shipping Solutions",
//     description:
//       "Hanjin Shipping Thailand provides reliable ocean freight services, container shipping, global logistics solutions, and supply chain management across Asia, America, and Europe.",
//     url: "https://hanjinthailand.com",
//     siteName: "Hanjin Shipping Thailand",
//     images: [
//       {
//         url: "/og-home.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Hanjin Shipping Thailand - Global Ocean Freight Solutions",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Hanjin Shipping Thailand | Global Ocean Freight Solutions",
//     description:
//       "Reliable ocean freight and container shipping services across Asia, America, and Europe.",
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
//          <History />
     
//         <TransportationModes />
//             <TrustedSection />

       
   
    
      
//       <Service />

//        <GlobalTradeSection />
   
     
  
   
//       <Facts />
  
//       <Quote />
//       {/* <Warehouse /> */}

      

//       {/* 🔹 Schema Markup for Home Page - Hanjin Shipping Thailand */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Hanjin Shipping Thailand",
//             description:
//               "Hanjin Shipping Thailand provides reliable ocean freight services, container shipping, global logistics solutions, and supply chain management across Asia, America, and Europe.",
//             url: "https://hanjinthailand.com",
//             publisher: {
//               "@type": "Organization",
//               name: "Hanjin Shipping Thailand",
//               url: "https://hanjinthailand.com",
//               logo: "https://hanjinthailand.com/logo.png",
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Organization Schema - Hanjin Shipping Thailand */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Hanjin Shipping Thailand",
//             url: "https://hanjinthailand.com",
//             logo: "https://hanjinthailand.com/logo.png",
//             description: "Leading ocean freight and container shipping solutions provider in Thailand",
//             foundingDate: "1988",
//             foundingLocation: "Seoul, South Korea",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "6th Floor, Sirinrat Building, 3388/17-18 Rama IV Road, Khlong Tan",
//               addressLocality: "Khlong Toei",
//               addressRegion: "Bangkok",
//               postalCode: "10110",
//               addressCountry: "Thailand",
//             },
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+66-2-123-4567",
//               contactType: "customer service",
//               email: "contact@hanjinthailand.com",
//               availableLanguage: ["English", "Thai"],
//             },
//             sameAs: [
//               "https://www.facebook.com/HanjinShipping",
//               "https://www.linkedin.com/company/hanjin-shipping",
//               "https://twitter.com/HanjinShipping",
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 LocalBusiness Schema - Hanjin Shipping Thailand */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             name: "Hanjin Shipping Thailand",
//             image: "https://hanjinthailand.com/logo.png",
//             description: "Global ocean freight and container shipping services",
//             address: {
//               "@type": "PostalAddress",
//               streetAddress: "6th Floor, Sirinrat Building, 3388/17-18 Rama IV Road, Khlong Tan",
//               addressLocality: "Khlong Toei",
//               addressRegion: "Bangkok",
//               postalCode: "10110",
//               addressCountry: "Thailand",
//             },
//             telephone: "+66-2-123-4567",
//             email: "contact@hanjinthailand.com",
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
//               {
//                 "@type": "Country",
//                 name: "Thailand",
//               },
//               {
//                 "@type": "Country",
//                 name: "China",
//               },
//               {
//                 "@type": "Country",
//                 name: "United States",
//               },
//               {
//                 "@type": "Country",
//                 name: "United Kingdom",
//               },
//               {
//                 "@type": "Country",
//                 name: "Japan",
//               },
//               {
//                 "@type": "Country",
//                 name: "South Korea",
//               },
//               {
//                 "@type": "Country",
//                 name: "Germany",
//               },
//             ],
//             hasOfferCatalog: {
//               "@type": "OfferCatalog",
//               name: "Shipping & Logistics Services",
//               itemListElement: [
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Ocean Freight",
//                     description: "FCL and LCL container shipping worldwide",
//                   },
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Container Shipping",
//                     description: "Dry, reefer, open top, and flat rack containers",
//                   },
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Supply Chain Management",
//                     description: "End-to-end logistics solutions",
//                   },
//                 },
//                 {
//                   "@type": "Offer",
//                   itemOffered: {
//                     "@type": "Service",
//                     name: "Global Logistics",
//                     description: "International freight and cargo services",
//                   },
//                 },
//               ],
//             },
//             globalLocationNumber: "THA-001",
//             hasMap: "https://maps.google.com/?q=6th+Floor+Sirinrat+Building+Rama+IV+Road+Khlong+Tan+Khlong+Toei+Bangkok+10110",
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema - Home Page */}
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
//                 item: "https://hanjinthailand.com",
//               },
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 Shipping Service Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Service",
//             name: "Ocean Freight Services",
//             provider: {
//               "@type": "Organization",
//               name: "Hanjin Shipping Thailand",
//             },
//             areaServed: {
//               "@type": "Country",
//               name: "Worldwide",
//             },
//             hasOfferCatalog: {
//               "@type": "OfferCatalog",
//               name: "Shipping Routes",
//               itemListElement: [
//                 {
//                   "@type": "Offer",
//                   name: "Intra-Asia Service",
//                   description: "Container shipping across Asian ports",
//                 },
//                 {
//                   "@type": "Offer",
//                   name: "America Service",
//                   description: "Trans-Pacific shipping to USA and Canada",
//                 },
//                 {
//                   "@type": "Offer",
//                   name: "Europe Service",
//                   description: "Asia to Europe container shipping",
//                 },
//               ],
//             },
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
import Warehouse from '@/components/home/warehouse';
import Facts from '@/components/home/facts';

import Quote from '@/components/home/quote';
import GlobalTradeSection from '@/components/home/GlobalTradeSection';
import TrustedSection from '@/components/home/TrustedSection';

import React from "react";
import TransportationModes from '@/components/home/TransportationModes';

// 🔹 SEO metadata for Home Page - Thai Shipping Services
export const metadata = {
  title: "Thai Shipping Services | Air, Sea & Land Freight Solutions in Thailand",
  description:
    "Thailand's trusted shipping services for air, sea, and land freight. Exporters and importers rely on professional Thai shipping companies for global and local deliveries. Learn about top Thai shipping providers, regulations, and food shipping.",
  keywords: [
    "Thai Shipping Services",
    "Thailand Shipping",
    "Air Shipping Thailand",
    "Sea Shipping Thailand",
    "Thai Freight Services",
    "Thai Exports",
    "Thai Imports",
    "Thai Food Shipping",
    "Shipping Regulations Thailand",
    "Kintetsu World Express Thailand",
    "World Freight Co. Ltd.",
    "Asian Tigers Transpo",
    "Seaborne Logistics",
    "V.A.S. Services",
    "B and J Services",
    "Heavy Transportation Thailand",
    "Thai Logistics",
    "Bangkok Shipping",
    "International Shipping Thailand",
  ],
  alternates: {
    canonical: "https://thaishipping.com",
  },
  openGraph: {
    title: "Thai Shipping Services | Air, Sea & Land Freight Solutions in Thailand",
    description:
      "Thailand's trusted shipping services for air, sea, and land freight. Exporters and importers rely on professional Thai shipping companies for global and local deliveries.",
    url: "https://thaishipping.com",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - Air, Sea & Land Freight Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Shipping Services | Air, Sea & Land Freight Solutions",
    description:
      "Reliable air, sea, and land shipping services across Thailand and worldwide.",
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
      <Facts />
      <Quote />
      {/* <Warehouse /> */}

      {/* 🔹 Schema Markup for Home Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Thai Shipping Services",
            description:
              "Thailand's trusted shipping services for air, sea, and land freight. Exporters and importers rely on professional Thai shipping companies for global and local deliveries.",
            url: "https://thaishipping.com",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
          }),
        }}
      />

      {/* 🔹 Organization Schema - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thai Shipping Services",
            url: "https://thaishipping.com",
            logo: "https://thaishipping.com/logo.png",
            description: "Leading provider of air, sea, and land shipping services in Thailand",
            foundingDate: "1990",
            foundingLocation: "Bangkok, Thailand",
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
              "https://twitter.com/ThaiShipping",
            ],
          }),
        }}
      />

      {/* 🔹 LocalBusiness Schema - Thai Shipping Services */}
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
              {
                "@type": "Country",
                name: "Thailand",
              },
              {
                "@type": "Country",
                name: "United States",
              },
              {
                "@type": "Country",
                name: "China",
              },
              {
                "@type": "Country",
                name: "Japan",
              },
              {
                "@type": "Country",
                name: "Malaysia",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Shipping Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Air Shipping",
                    description: "Air freight services for international and domestic deliveries",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sea Shipping",
                    description: "Sea freight services for global exports and imports",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Land Shipping",
                    description: "Local and regional land transportation services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Thai Food Shipping",
                    description: "Frozen and canned Thai food shipping worldwide",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Heavy Transportation",
                    description: "Specialized heavy equipment shipping",
                  },
                },
              ],
            },
            globalLocationNumber: "THA-001",
            hasMap: "https://maps.google.com/?q=Bangkok+Thailand",
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
                item: "https://thaishipping.com",
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
            name: "Thai Shipping Services",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
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
                  name: "Air Shipping",
                  description: "Air freight services for international and domestic deliveries",
                },
                {
                  "@type": "Offer",
                  name: "Sea Shipping",
                  description: "Sea freight services for global exports and imports",
                },
                {
                  "@type": "Offer",
                  name: "Land Shipping",
                  description: "Local and regional land transportation services",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}