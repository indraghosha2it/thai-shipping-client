// import MyInvoicesPage from "@/components/profile/invoice";
// import React from "react";

// // 🔹 SEO metadata for My Invoices
// export const metadata = {
//   title: "My Invoices | Samudera Traffic Co., Ltd. Group",
//   description:
//     "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status, download PDF copies, view payment history, and manage your logistics billing online.",
//   keywords: [
//     "Samudera Traffic Co., Ltd.",
//     "My Invoices",
//     "Shipping Invoices",
//     "Logistics Billing",
//     "Invoice Management",
//     "Payment History",
//     "Freight Invoices",
//     "Cargo Billing",
//     "Transportation Invoices",
//     "Logistics Payments",
//   ],
//   alternates: {
//     canonical: "https://samuderathai.com/invoices",
//   },
//   openGraph: {
//     title: "My Invoices | Samudera Traffic Co., Ltd. Group",
//     description:
//       "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status, download PDF copies, view payment history, and manage your logistics billing online.",
//     url: "https://samuderathai.com/invoices",
//     siteName: "Samudera Traffic Co., Ltd. Group",
//     images: [
//       {
//         url: "/og-invoices.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Samudera Traffic Co., Ltd. Group - My Invoices",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "My Invoices | Samudera Traffic Co., Ltd. Group",
//     description:
//       "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status and download PDF copies.",
//     images: ["/og-invoices.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <MyInvoicesPage />

//       {/* 🔹 Schema Markup for My Invoices Page */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "My Invoices",
//             description:
//               "View and manage your shipping invoices with Samudera Traffic Co., Ltd. Group. Track invoice status, download PDF copies, view payment history, and manage your logistics billing online.",
//             url: "https://samuderathai.com/invoices",
//             publisher: {
//               "@type": "Organization",
//               name: "Samudera Traffic Co., Ltd. Group",
//               url: "https://samuderathai.com",
//               logo: "https://samuderathai.com/logo.png",
//             },
//             mainEntity: {
//               "@type": "ItemList",
//               name: "Customer Invoices",
//               description: "List of invoices for shipping and logistics services",
//             },
//           }),
//         }}
//       />

//       {/* 🔹 Breadcrumb Schema for My Invoices */}
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
//                 name: "Customer Dashboard",
//                 item: "https://samuderathai.com/customer/dashboard",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 3,
//                 name: "My Invoices",
//                 item: "https://samuderathai.com/invoices",
//               },
//             ],
//           }),
//         }}
//       />

//       {/* 🔹 Organization Schema for Invoices */}
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
//             paymentAccepted: ["Credit Card", "Bank Transfer", "Wire Transfer"],
//             priceRange: "$$",
//             areaServed: {
//               "@type": "Country",
//               name: "Worldwide",
//             },
//             contactPoint: {
//               "@type": "ContactPoint",
//               telephone: "+66977830395",
//               contactType: "billing support",
//               email: "billing@cargologisticscompany.com",
//               availableLanguage: ["English"],
//             },
//           }),
//         }}
//       />
//     </>
//   );
// }



import MyInvoicesPage from "@/components/profile/invoice";
import React from "react";

// 🔹 SEO metadata for My Invoices - Hanjin Shipping Thailand
export const metadata = {
  title: "My Invoices",
  description:
    "View and manage your ocean freight shipping invoices with Hanjin Shipping Thailand. Track invoice status, download PDF copies, view payment history, and manage your container shipping billing online.",
  keywords: [
    "Hanjin Shipping Thailand",
    "My Invoices",
    "Ocean Freight Invoices",
    "Container Shipping Invoices",
    "Logistics Billing",
    "Invoice Management",
    "Payment History",
    "Freight Invoices",
    "Shipping Charges",
    "Cargo Billing",
    "Transportation Invoices",
    "Hanjin Billing Portal",
    "Container Charges",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/invoices",
  },
  openGraph: {
    title: "My Invoices | Hanjin Shipping Thailand",
    description:
      "View and manage your ocean freight shipping invoices with Hanjin Shipping Thailand. Track invoice status, download PDF copies, view payment history, and manage your container shipping billing online.",
    url: "https://hanjinthailand.com/invoices",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-invoices.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - My Invoices",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Invoices | Hanjin Shipping Thailand",
    description:
      "View and manage your ocean freight shipping invoices with Hanjin Shipping Thailand. Track invoice status and download PDF copies.",
    images: ["/og-invoices.jpg"],
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
      <MyInvoicesPage />

      {/* 🔹 Schema Markup for My Invoices Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Invoices - Hanjin Shipping Thailand",
            description:
              "View and manage your ocean freight shipping invoices with Hanjin Shipping Thailand. Track invoice status, download PDF copies, view payment history, and manage your container shipping billing online.",
            url: "https://hanjinthailand.com/invoices",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Customer Invoices",
              description: "List of invoices for ocean freight and container shipping services",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for My Invoices - Hanjin Shipping Thailand */}
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
                name: "My Invoices",
                item: "https://hanjinthailand.com/invoices",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Invoices - Hanjin Shipping Thailand */}
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
            paymentAccepted: ["Bank Transfer", "Wire Transfer", "Credit Card", "Letter of Credit"],
            priceRange: "$$$",
            areaServed: [
              { "@type": "Country", name: "Thailand" },
              { "@type": "Country", name: "China" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "Japan" },
              { "@type": "Country", name: "South Korea" },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "billing support",
              email: "billing@hanjinthailand.com",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />

      {/* 🔹 Invoice Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Ocean Freight Billing Service",
            provider: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
            },
            serviceType: "Invoice Management",
            description: "Online invoice management system for ocean freight and container shipping charges",
            audience: {
              "@type": "Audience",
              name: "Hanjin Shipping Customers",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Billing Features",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Invoice Viewing",
                  description: "View all shipping invoices online",
                },
                {
                  "@type": "Offer",
                  name: "PDF Download",
                  description: "Download invoice PDF copies",
                },
                {
                  "@type": "Offer",
                  name: "Payment Tracking",
                  description: "Track payment status",
                },
                {
                  "@type": "Offer",
                  name: "Payment History",
                  description: "View complete payment history",
                },
              ],
            },
          }),
        }}
      />

      {/* 🔹 FinancialProduct Schema for Invoicing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            name: "Ocean Freight Billing Service",
            provider: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
            },
            feesAndCommissionsSpecification: "Shipping charges vary based on container type, route, and volume. Contact customer service for detailed rate information.",
            annualPercentageRate: "N/A",
            areaServed: "Worldwide",
          }),
        }}
      />

      {/* 🔹 WebApplication Schema for Invoice Portal */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Hanjin Invoice Portal",
            url: "https://hanjinthailand.com/invoices",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description: "Customer portal for managing ocean freight shipping invoices",
            features: [
              "Invoice viewing",
              "PDF download",
              "Payment status tracking",
              "Payment history",
              "Invoice search and filter",
            ],
          }),
        }}
      />
    </>
  );
}