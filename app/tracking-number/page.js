// import TrackingPage from "@/components/trackingPage";
// import React from "react";

// // 🔹 SEO metadata for Track Shipment
// export const metadata = {
//   title: "Track Shipment | Samudera Traffic Co., Ltd. Group",
//   description:
//     "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number to get live updates on your cargo location, status, and estimated delivery time.",
//   keywords: [
//     "Samudera Traffic Co., Ltd.",
//     "Track Shipment",
//     "Tracking Number",
//     "Shipment Tracking",
//     "Cargo Tracking",
//     "Freight Tracking",
//     "Real-time Tracking",
//     "Package Tracking",
//     "Logistics Tracking",
//     "Delivery Status",
//   ],
//   alternates: {
//     canonical: "https://samuderathai.com/tracking-number",
//   },
//   openGraph: {
//     title: "Track Shipment | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number to get live updates on your cargo location, status, and estimated delivery time.",
//     url: "https://samuderathai.com/tracking-number",
//     siteName: "Samudera Traffic Co., Ltd. Group",
//     images: [
//       {
//         url: "/og-tracking.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Samudera Traffic Co., Ltd. Group - Track Shipment",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Track Shipment | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number for live updates.",
//     images: ["/og-tracking.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <TrackingPage />

//       {/* 🔹 Schema Markup for Tracking Page */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "Track Shipment",
//             description:
//               "Track your shipment in real-time with Samudera Traffic Co., Ltd. Group. Enter your tracking number to get live updates on your cargo location, status, and estimated delivery time.",
//             url: "https://samuderathai.com/tracking-number",
//             publisher: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//               url: "https://samuderathai.com",
//               logo: "https://samuderathai.com/logo.png",
//             },
//             mainEntity: {
//               "@type": "WebPageElement",
//               name: "Shipment Tracking Form",
//               description: "Real-time shipment tracking by tracking number",
//             },
//             potentialAction: {
//               "@type": "Action",
//               name: "Track Shipment",
//               description: "Track your shipment by entering tracking number",
//               target: {
//                 "@type": "EntryPoint",
//                 urlTemplate: "https://samuderathai.com/tracking-number",
//                 actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
//               },
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema for Tracking */}
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
//                 name: "Track Shipment",
//                 item: "https://samuderathai.com/tracking-number",
//               },
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 Tracking Service Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Service",
//             serviceType: "Shipment Tracking",
//             provider: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//             },
//             areaServed: {
//               "@type": "Country",
//               name: "Worldwide",
//             },
//             description: "Real-time shipment tracking service for cargo and freight",
//             potentialAction: {
//               "@type": "TrackAction",
//               name: "Track Shipment",
//               target: {
//                 "@type": "EntryPoint",
//                 urlTemplate: "https://samuderathai.com/tracking-number/{tracking_number}",
//                 actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
//               },
//             },
//           }),
//         }}
//       />
//     </>
//   );
// }


import TrackingPage from "@/components/trackingPage";
import React from "react";

// 🔹 SEO metadata for Track Shipment - Hanjin Shipping Thailand
export const metadata = {
  title: "Track Shipment",
  description:
    "Track your ocean freight shipment in real-time with Hanjin Shipping Thailand. Enter your container number or tracking number to get live updates on cargo location, vessel status, and estimated arrival time for shipments across Asia, America, and Europe.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Track Shipment",
    "Container Tracking",
    "Ocean Freight Tracking",
    "Tracking Number",
    "Shipment Tracking",
    "Cargo Tracking",
    "Freight Tracking",
    "Real-time Tracking",
    "Container Status",
    "Hanjin Tracking",
    "Vessel Tracking",
    "Logistics Tracking",
    "Delivery Status",
    "Cargo Location",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/tracking-number",
  },
  openGraph: {
    title: "Track Shipment | Hanjin Shipping Thailand",
    description:
      "Track your ocean freight shipment in real-time with Hanjin Shipping Thailand. Enter your container number or tracking number for live updates on cargo location and vessel status.",
    url: "https://hanjinthailand.com/tracking-number",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-tracking.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Track Shipment",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Shipment | Hanjin Shipping Thailand",
    description:
      "Real-time ocean freight tracking for container shipments across Asia, America, and Europe.",
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

      {/* 🔹 Schema Markup for Tracking Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Track Shipment - Hanjin Shipping Thailand",
            description:
              "Track your ocean freight shipment in real-time with Hanjin Shipping Thailand. Enter your container number or tracking number for live updates on cargo location and vessel status.",
            url: "https://hanjinthailand.com/tracking-number",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Container Tracking Form",
              description: "Real-time ocean freight container tracking by tracking number",
            },
            potentialAction: {
              "@type": "Action",
              name: "Track Container",
              description: "Track your container shipment by entering tracking number",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://hanjinthailand.com/tracking-number",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Tracking - Hanjin Shipping Thailand */}
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
                name: "Track Shipment",
                item: "https://hanjinthailand.com/tracking-number",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Tracking Service Schema - Hanjin Shipping */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Ocean Freight Container Tracking",
            provider: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
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
            description: "Real-time container tracking service for ocean freight shipments",
            potentialAction: {
              "@type": "TrackAction",
              name: "Track Container",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://hanjinthailand.com/tracking-number/{tracking_number}",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
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
            name: "Hanjin Shipping Thailand - Tracking Service",
            url: "https://hanjinthailand.com/tracking-number",
            description: "Real-time container tracking service for ocean freight shipments",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "customer service",
              email: "tracking@hanjinthailand.com",
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
              urlTemplate: "https://hanjinthailand.com/tracking-number?tracking={tracking_number}",
            },
            "query-input": "required name=tracking_number",
          }),
        }}
      />
    </>
  );
}