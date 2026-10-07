import MyInvoicesPage from "@/components/profile/invoice";
import React from "react";

// 🔹 SEO metadata for My Invoices - Thai Shipping Services
export const metadata = {
  title: "My Invoices",
  description:
    "View and manage your shipping invoices with Thai Shipping Services. Track invoice status, download PDF copies, view payment history, and manage your air, sea, and land shipping billing online.",
  keywords: [
    "Thai Shipping Services",
    "My Invoices",
    "Shipping Invoices",
    "Thai Shipping Invoices",
    "Logistics Billing",
    "Invoice Management",
    "Payment History",
    "Freight Invoices",
    "Shipping Charges",
    "Cargo Billing",
    "Transportation Invoices",
    "Thai Shipping Billing Portal",
    "Air Freight Invoices",
    "Sea Freight Invoices",
    "Land Transport Invoices",
  ],
  alternates: {
    canonical: "https://thaishipping.com/invoices",
  },
  openGraph: {
    title: "My Invoices | Thai Shipping Services",
    description:
      "View and manage your shipping invoices with Thai Shipping Services. Track invoice status, download PDF copies, view payment history, and manage your shipping billing online.",
    url: "https://thaishipping.com/invoices",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-invoices.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - My Invoices",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Invoices | Thai Shipping Services",
    description:
      "View and manage your shipping invoices with Thai Shipping Services. Track invoice status and download PDF copies.",
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

      {/* 🔹 Schema Markup for My Invoices Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Invoices - Thai Shipping Services",
            description:
              "View and manage your shipping invoices with Thai Shipping Services. Track invoice status, download PDF copies, view payment history, and manage your shipping billing online.",
            url: "https://thaishipping.com/invoices",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Customer Invoices",
              description:
                "List of invoices for air, sea, and land shipping services",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for My Invoices - Thai Shipping Services */}
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
                name: "Customer Portal",
                item: "https://thaishipping.com/customer-portal",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "My Invoices",
                item: "https://thaishipping.com/invoices",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Invoices - Thai Shipping Services */}
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
            paymentAccepted: [
              "Bank Transfer",
              "Wire Transfer",
              "Credit Card",
              "Letter of Credit",
            ],
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
              { "@type": "Country", name: "Malaysia" },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "billing support",
              email: "billing@thaishipping.com",
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
            name: "Shipping Billing Service",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
            },
            serviceType: "Invoice Management",
            description:
              "Online invoice management system for air, sea, and land shipping charges",
            audience: {
              "@type": "Audience",
              name: "Thai Shipping Customers",
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
            name: "Shipping Billing Service",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
            },
            feesAndCommissionsSpecification:
              "Shipping charges vary based on service type, route, and volume. Contact customer service for detailed rate information.",
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
            name: "Thai Shipping Invoice Portal",
            url: "https://thaishipping.com/invoices",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Customer portal for managing shipping invoices",
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