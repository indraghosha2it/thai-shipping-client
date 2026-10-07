import CreateBooking from "@/components/booking/createBooking";

import React from "react";

// 🔹 SEO metadata for Create Booking - Thai Shipping Services
export const metadata = {
  title: "Create Shipping Booking",
  description:
    "Create a new shipping booking with Thai Shipping Services. Book air, sea, and land transportation, container shipping, and logistics solutions across Thailand and worldwide with real-time tracking.",
  keywords: [
    "Thai Shipping Services",
    "Create Booking",
    "Shipping Booking Thailand",
    "Container Shipping Booking",
    "Sea Freight Booking",
    "Air Freight Booking",
    "Land Transport Booking",
    "FCL Booking",
    "LCL Booking",
    "Thai Logistics Booking",
    "Freight Booking",
    "Shipment Booking",
    "Thai Shipping Booking",
    "Container Booking Thailand",
    "Bangkok Shipping Booking",
  ],
  alternates: {
    canonical: "https://thaishipping.com/create-booking",
  },
  openGraph: {
    title: "Create Shipping Booking | Thai Shipping Services",
    description:
      "Create a new shipping booking with Thai Shipping Services. Book air, sea, and land transportation, container shipping, and logistics solutions across Thailand and worldwide.",
    url: "https://thaishipping.com/create-booking",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-create-booking.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - Create Shipping Booking",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Shipping Booking | Thai Shipping Services",
    description:
      "Create a new shipping booking with Thai Shipping Services. Book air, sea, and land shipping services across Thailand and worldwide.",
    images: ["/og-create-booking.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <CreateBooking />

      {/* 🔹 Schema Markup for Create Booking Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Create Shipping Booking",
            description:
              "Create a new shipping booking with Thai Shipping Services. Book air, sea, and land transportation, container shipping, and logistics solutions across Thailand and worldwide.",
            url: "https://thaishipping.com/create-booking",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Booking Form",
              description:
                "Multi-step booking form for air, sea, and land shipping services",
            },
            potentialAction: {
              "@type": "Action",
              name: "Create Booking",
              description:
                "Book shipping services including air freight, sea freight, land transport, and container shipping",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://thaishipping.com/create-booking",
                actionPlatform: [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform",
                ],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Create Booking - Thai Shipping Services */}
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
                name: "Services",
                item: "https://thaishipping.com/shipping-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Create Booking",
                item: "https://thaishipping.com/create-booking",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Service Schema for Booking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Shipping Booking Service",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
            },
            serviceType: "Shipping Booking",
            description:
              "Online booking service for air, sea, and land shipping, including container and freight services",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Shipping Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Air Shipping",
                  description:
                    "Air freight services for international and domestic deliveries",
                },
                {
                  "@type": "Offer",
                  name: "Sea Shipping",
                  description:
                    "Sea freight services for global exports and imports",
                },
                {
                  "@type": "Offer",
                  name: "Land Transportation",
                  description:
                    "Local and regional land transportation services",
                },
                {
                  "@type": "Offer",
                  name: "Container Shipping",
                  description:
                    "FCL and LCL container shipping services",
                },
                {
                  "@type": "Offer",
                  name: "Heavy Transportation",
                  description:
                    "Specialist heavy equipment shipping",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}