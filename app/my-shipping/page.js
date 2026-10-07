import ToastProvider from "@/components/common/ToastProvider";
import ShipmentsPage from "@/components/myShipping/myShipping";
import React, { Suspense } from "react";

// 🔹 SEO metadata for My Shipments - Thai Shipping Services
export const metadata = {
  title: "My Shipments",
  description:
    "Track and manage your shipments with Thai Shipping Services. View real-time shipment status, track air, sea, and land cargo, monitor transit progress, and manage your shipping operations from one dashboard.",
  keywords: [
    "Thai Shipping Services",
    "My Shipments",
    "Track Shipment",
    "Shipment Tracking Thailand",
    "Package Tracking",
    "Freight Tracking",
    "Cargo Tracking",
    "Thai Logistics Dashboard",
    "Shipment Status",
    "Real-time Tracking",
    "Air Freight Tracking",
    "Sea Freight Tracking",
    "Land Transport Tracking",
    "Thai Import Tracking",
    "Thai Export Tracking",
    "Bangkok Shipment Tracking",
  ],
  alternates: {
    canonical: "https://thaishipping.com/shipments",
  },
  openGraph: {
    title: "My Shipments | Thai Shipping Services",
    description:
      "Track and manage your shipments with Thai Shipping Services. View real-time shipment status, track cargo, monitor transit progress, and manage your shipping operations from one dashboard.",
    url: "https://thaishipping.com/shipments",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-shipments.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - My Shipments",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Shipments | Thai Shipping Services",
    description:
      "Track and manage your shipments with Thai Shipping Services. View real-time shipment status and track cargo.",
    images: ["/og-shipments.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Suspense>
        <ToastProvider />
      </Suspense>
      <ShipmentsPage />

      {/* 🔹 Schema Markup for Shipments Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Shipments Dashboard",
            description:
              "Track and manage your shipments with Thai Shipping Services. View real-time shipment status, track air, sea, and land cargo, monitor transit progress, and manage your shipping operations.",
            url: "https://thaishipping.com/shipments",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Customer Shipments",
              description:
                "List of all customer shipments with tracking information",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Shipments */}
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
                name: "Customer Dashboard",
                item: "https://thaishipping.com/customer/dashboard",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "My Shipments",
                item: "https://thaishipping.com/shipments",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Shipments */}
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
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              contactType: "customer support",
              email: "info@thaishipping.com",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />
    </>
  );
}