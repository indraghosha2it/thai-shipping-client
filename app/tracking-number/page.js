


// import TrackingPage from "@/components/trackingPage";
// import React from "react";

// // 🔹 SEO metadata for Track Shipment - Hanjin Shipping Thailand
// export const metadata = {
//   title: "Track Shipment",
//   description:
//     "Track your ocean freight shipment in real-time with Hanjin Shipping Thailand. Enter your container number or tracking number to get live updates on cargo location, vessel status, and estimated arrival time for shipments across Asia, America, and Europe.",
//   keywords: [
//     "Hanjin Shipping Thailand",
//     "Track Shipment",
//     "Container Tracking",
//     "Ocean Freight Tracking",
//     "Tracking Number",
//     "Shipment Tracking",
//     "Cargo Tracking",
//     "Freight Tracking",
//     "Real-time Tracking",
//     "Container Status",
//     "Hanjin Tracking",
//     "Vessel Tracking",
//     "Logistics Tracking",
//     "Delivery Status",
//     "Cargo Location",
//   ],
//   alternates: {
//     canonical: "https://hanjinthailand.com/tracking-number",
//   },
//   openGraph: {
//     title: "Track Shipment | Hanjin Shipping Thailand",
//     description:
//       "Track your ocean freight shipment in real-time with Hanjin Shipping Thailand. Enter your container number or tracking number for live updates on cargo location and vessel status.",
//     url: "https://hanjinthailand.com/tracking-number",
//     siteName: "Hanjin Shipping Thailand",
//     images: [
//       {
//         url: "/og-tracking.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Hanjin Shipping Thailand - Track Shipment",
//       },
//     ],
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Track Shipment | Hanjin Shipping Thailand",
//     description:
//       "Real-time ocean freight tracking for container shipments across Asia, America, and Europe.",
//     images: ["/og-tracking.jpg"],
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
//       <TrackingPage />

//       {/* 🔹 Schema Markup for Tracking Page - Hanjin Shipping Thailand */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Track Shipment - Hanjin Shipping Thailand",
//             description:
//               "Track your ocean freight shipment in real-time with Hanjin Shipping Thailand. Enter your container number or tracking number for live updates on cargo location and vessel status.",
//             url: "https://hanjinthailand.com/tracking-number",
//             publisher: {
//               "@type": "Organization",
//               name: "Hanjin Shipping Thailand",
//               url: "https://hanjinthailand.com",
//               logo: "https://hanjinthailand.com/logo.png",
//             },
//             mainEntity: {
//               "@type": "WebPageElement",
//               name: "Container Tracking Form",
//               description: "Real-time ocean freight container tracking by tracking number",
//             },
//             potentialAction: {
//               "@type": "Action",
//               name: "Track Container",
//               description: "Track your container shipment by entering tracking number",
//               target: {
//                 "@type": "EntryPoint",
//                 urlTemplate: "https://hanjinthailand.com/tracking-number",
//                 actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
//               },
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema for Tracking - Hanjin Shipping Thailand */}
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
//               {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Track Shipment",
//                 item: "https://hanjinthailand.com/tracking-number",
//               },
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 Tracking Service Schema - Hanjin Shipping */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Service",
//             serviceType: "Ocean Freight Container Tracking",
//             provider: {
//               "@type": "Organization",
//               name: "Hanjin Shipping Thailand",
//               url: "https://hanjinthailand.com",
//             },
//             areaServed: [
//               { "@type": "Country", name: "Thailand" },
//               { "@type": "Country", name: "China" },
//               { "@type": "Country", name: "United States" },
//               { "@type": "Country", name: "Canada" },
//               { "@type": "Country", name: "United Kingdom" },
//               { "@type": "Country", name: "Germany" },
//               { "@type": "Country", name: "France" },
//               { "@type": "Country", name: "Netherlands" },
//               { "@type": "Country", name: "Japan" },
//               { "@type": "Country", name: "South Korea" },
//               { "@type": "Country", name: "Singapore" },
//               { "@type": "Country", name: "Malaysia" },
//               { "@type": "Country", name: "Vietnam" },
//               { "@type": "Country", name: "Indonesia" },
//             ],
//             description: "Real-time container tracking service for ocean freight shipments",
//             potentialAction: {
//               "@type": "TrackAction",
//               name: "Track Container",
//               target: {
//                 "@type": "EntryPoint",
//                 urlTemplate: "https://hanjinthailand.com/tracking-number/{tracking_number}",
//                 actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
//               },
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Organization Schema for Tracking */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Hanjin Shipping Thailand - Tracking Service",
//             url: "https://hanjinthailand.com/tracking-number",
//             description: "Real-time container tracking service for ocean freight shipments",
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+66-2-123-4567",
//               contactType: "customer service",
//               email: "tracking@hanjinthailand.com",
//               availableLanguage: ["English", "Thai"],
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Potential Action Schema for Search */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "SearchAction",
//             target: {
//               "@type": "EntryPoint",
//               urlTemplate: "https://hanjinthailand.com/tracking-number?tracking={tracking_number}",
//             },
//             "query-input": "required name=tracking_number",
//           }),
//         }}
//       />
//     </>
//   );
// }


import TrackingPage from "@/components/trackingPage";
import React from "react";

// 🔹 SEO metadata for Track Shipment - Thai Shipping Services
export const metadata = {
  title: "Track Shipment",
  description:
    "Track your shipment in real-time with Thai Shipping Services. Enter your tracking number to get live updates on cargo location, shipment status, and estimated arrival for air, sea, and land shipments across Thailand and worldwide.",
  keywords: [
    "Thai Shipping Services",
    "Track Shipment",
    "Thailand Shipment Tracking",
    "Thai Cargo Tracking",
    "Tracking Number",
    "Shipment Tracking Thailand",
    "Cargo Tracking",
    "Freight Tracking",
    "Real-time Tracking",
    "Air Freight Tracking",
    "Sea Freight Tracking",
    "Land Transport Tracking",
    "Thai Logistics Tracking",
    "Delivery Status Thailand",
    "Cargo Location",
    "Thai Import Tracking",
    "Thai Export Tracking",
    "Bangkok Shipment Tracking",
  ],
  alternates: {
    canonical: "https://thaishipping.com/tracking-number",
  },
  openGraph: {
    title: "Track Shipment | Thai Shipping Services",
    description:
      "Track your shipment in real-time with Thai Shipping Services. Enter your tracking number for live updates on cargo location and shipment status.",
    url: "https://thaishipping.com/tracking-number",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-tracking.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - Track Shipment",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Shipment | Thai Shipping Services",
    description:
      "Real-time shipment tracking for air, sea, and land cargo across Thailand and worldwide.",
    images: ["/og-tracking.jpg"],
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
      <TrackingPage />

      {/* 🔹 Schema Markup for Tracking Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Track Shipment - Thai Shipping Services",
            description:
              "Track your shipment in real-time with Thai Shipping Services. Enter your tracking number for live updates on cargo location and shipment status.",
            url: "https://thaishipping.com/tracking-number",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Shipment Tracking Form",
              description:
                "Real-time shipment tracking by tracking number for air, sea, and land cargo",
            },
            potentialAction: {
              "@type": "Action",
              name: "Track Shipment",
              description:
                "Track your shipment by entering tracking number",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://thaishipping.com/tracking-number",
                actionPlatform: [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform",
                ],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Tracking - Thai Shipping Services */}
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
                name: "Track Shipment",
                item: "https://thaishipping.com/tracking-number",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Tracking Service Schema - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Shipment Tracking",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
            },
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
              { "@type": "Country", name: "Singapore" },
              { "@type": "Country", name: "Malaysia" },
              { "@type": "Country", name: "Vietnam" },
              { "@type": "Country", name: "Indonesia" },
            ],
            description:
              "Real-time shipment tracking service for air, sea, and land freight",
            potentialAction: {
              "@type": "TrackAction",
              name: "Track Shipment",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://thaishipping.com/tracking-number/{tracking_number}",
                actionPlatform: [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform",
                ],
              },
            },
          }),
        }}
      />

      {/* 🔹 Organization Schema for Tracking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thai Shipping Services - Tracking Service",
            url: "https://thaishipping.com/tracking-number",
            description:
              "Real-time shipment tracking service for air, sea, and land freight",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "customer service",
              email: "tracking@thaishipping.com",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />

      {/* 🔹 Potential Action Schema for Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://thaishipping.com/tracking-number?tracking={tracking_number}",
            },
            "query-input": "required name=tracking_number",
          }),
        }}
      />
    </>
  );
}