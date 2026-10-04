// import CustomerBookingsPage from "@/components/booking/myBooking";
// import React from "react";

// // 🔹 SEO metadata for My Shipments
// export const metadata = {
//   title: "My Shipments | Samudera Traffic Co., Ltd. Group",
//   description:
//     "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View booking details, track real-time status, accept/reject quotes, download invoices, and manage your logistics operations.",
//   keywords: [
//     "Samudera Traffic Co., Ltd.",
//     "My Shipments",
//     "Track Shipment",
//     "Booking Management",
//     "Shipment Tracking",
//     "Logistics Dashboard",
//     "Freight Tracking",
//     "Cargo Status",
//     "Delivery Tracking",
//     "Shipment History",
//   ],
//   alternates: {
//     canonical: "https://samuderathai.com/bookings/my_bookings",
//   },
//   openGraph: {
//     title: "My Shipments | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View booking details, track real-time status, accept/reject quotes, download invoices, and manage your logistics operations.",
//     url: "https://samuderathai.com/bookings/my_bookings",
//     siteName: "Samudera Traffic Co., Ltd. Group",
//     images: [
//       {
//         url: "/og-my-bookings.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Samudera Traffic Co., Ltd. Group - My Shipments",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "My Shipments | Samudera Traffic Co., Ltd. Group",
//     description:
//       "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View booking details, track real-time status, and manage your logistics operations.",
//     images: ["/og-my-bookings.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <CustomerBookingsPage />

//       {/* 🔹 Schema Markup for My Shipments Page */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "My Shipments Dashboard",
//             description:
//               "Track and manage your shipments with Samudera Traffic Co., Ltd. Group. View booking details, track real-time status, accept/reject quotes, download invoices, and manage your logistics operations.",
//             url: "https://samuderathai.com/bookings/my_bookings",
//             publisher: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//               url: "https://samuderathai.com",
//               logo: "https://samuderathai.com/logo.png",
//             },
//             mainEntity: {
//               "@type": "WebPageElement",
//               name: "Shipments Dashboard",
//               description: "Customer dashboard for tracking and managing logistics shipments",
//             },
//             potentialAction: {
//               "@type": "Action",
//               name: "Manage Shipments",
//               description: "View, track, and manage all logistics shipments",
//               target: {
//                 "@type": "EntryPoint",
//                 urlTemplate: "https://samuderathai.com/bookings/my_bookings",
//                 actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
//               },
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema for My Shipments */}
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
//                 name: "Bookings",
//                 item: "https://samuderathai.com/bookings",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 3,
//                 name: "My Shipments",
//                 item: "https://samuderathai.com/bookings/my_bookings",
//               },
//             ],
//           }),
//         }}
//       />
//     </>
//   );
// }



import CustomerBookingsPage from "@/components/booking/myBooking";
import React from "react";

// 🔹 SEO metadata for My Bookings - Hanjin Shipping Thailand
export const metadata = {
  title: "My Bookings",
  description:
    "View and manage your ocean freight bookings with Hanjin Shipping Thailand. Track container booking status, view shipment details, accept/reject quotes, download invoices, and manage your global shipping operations across Asia, America, and Europe.",
  keywords: [
    "Hanjin Shipping Thailand",
    "My Bookings",
    "Container Booking",
    "Ocean Freight Booking",
    "Booking Management",
    "Shipment Tracking",
    "Logistics Dashboard",
    "Cargo Booking",
    "Container Status",
    "Freight Booking",
    "Shipping Bookings",
    "Hanjin Customer Portal",
    "Booking History",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/bookings/my_bookings",
  },
  openGraph: {
    title: "My Bookings | Hanjin Shipping Thailand",
    description:
      "View and manage your ocean freight bookings with Hanjin Shipping Thailand. Track container booking status, view shipment details, accept/reject quotes, and download invoices.",
    url: "https://hanjinthailand.com/bookings/my_bookings",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-my-bookings.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - My Bookings Dashboard",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Bookings | Hanjin Shipping Thailand",
    description:
      "View and manage your ocean freight bookings with Hanjin Shipping Thailand. Track container status and manage shipping operations.",
    images: ["/og-my-bookings.jpg"],
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
      <CustomerBookingsPage />

      {/* 🔹 Schema Markup for My Bookings Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Bookings Dashboard - Hanjin Shipping Thailand",
            description:
              "View and manage your ocean freight bookings with Hanjin Shipping Thailand. Track container booking status, view shipment details, accept/reject quotes, download invoices, and manage your global shipping operations.",
            url: "https://hanjinthailand.com/bookings/my_bookings",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Bookings Dashboard",
              description: "Customer dashboard for viewing and managing ocean freight container bookings",
            },
            potentialAction: {
              "@type": "Action",
              name: "Manage Bookings",
              description: "View, track, and manage all ocean freight container bookings",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://hanjinthailand.com/bookings/my_bookings",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for My Bookings - Hanjin Shipping Thailand */}
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
                name: "Customer Portal",
                item: "https://hanjinthailand.com/customer-portal",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "My Bookings",
                item: "https://hanjinthailand.com/bookings/my_bookings",
              },
            ],
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
            name: "Hanjin Shipping (Thailand) Co., Ltd.",
            url: "https://hanjinthailand.com",
            logo: "https://hanjinthailand.com/logo.png",
            description: "Leading ocean freight and container shipping solutions provider in Thailand",
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
              contactType: "customer support",
              email: "booking@hanjinthailand.com",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />

      {/* 🔹 Booking Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Ocean Freight Booking Management",
            provider: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
            },
            serviceType: "Booking Management",
            description: "Online portal for customers to view and manage ocean freight container bookings.",
            audience: {
              "@type": "Audience",
              name: "Hanjin Shipping Customers",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Booking Management Features",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "View Bookings",
                  description: "View all ocean freight container bookings",
                },
                {
                  "@type": "Offer",
                  name: "Track Booking Status",
                  description: "Track current status of each booking",
                },
                {
                  "@type": "Offer",
                  name: "Quote Management",
                  description: "Accept or reject shipping quotes",
                },
                {
                  "@type": "Offer",
                  name: "Invoice Download",
                  description: "Download booking invoices",
                },
                {
                  "@type": "Offer",
                  name: "Booking History",
                  description: "View complete booking history",
                },
              ],
            },
          }),
        }}
      />

      {/* 🔹 WebApplication Schema for Booking Portal */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Hanjin Booking Portal",
            url: "https://hanjinthailand.com/bookings/my_bookings",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description: "Customer portal for managing ocean freight container bookings",
            features: [
              "View all bookings",
              "Track booking status",
              "Accept/reject quotes",
              "Download invoices",
              "Booking history",
              "Real-time updates",
            ],
          }),
        }}
      />

      {/* 🔹 Action Schema for Booking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Action",
            name: "Create Ocean Freight Booking",
            description: "Create a new ocean freight container booking",
            target: "https://hanjinthailand.com/create-booking",
          }),
        }}
      />
    </>
  );
}