import CustomerBookingsPage from "@/components/booking/myBooking";
import React from "react";

// 🔹 SEO metadata for My Bookings - Thai Shipping Services
export const metadata = {
  title: "My Bookings",
  description:
    "View and manage your shipping bookings with Thai Shipping Services. Track air, sea, and land shipment status, view booking details, accept/reject quotes, download invoices, and manage your shipping operations across Thailand and worldwide.",
  keywords: [
    "Thai Shipping Services",
    "My Bookings",
    "Shipping Booking Thailand",
    "Container Booking",
    "Air Freight Booking",
    "Sea Freight Booking",
    "Booking Management",
    "Shipment Tracking",
    "Thai Logistics Dashboard",
    "Cargo Booking",
    "Container Status",
    "Freight Booking",
    "Thai Shipping Bookings",
    "Customer Portal",
    "Booking History",
  ],
  alternates: {
    canonical: "https://thaishipping.com/bookings/my_bookings",
  },
  openGraph: {
    title: "My Bookings | Thai Shipping Services",
    description:
      "View and manage your shipping bookings with Thai Shipping Services. Track air, sea, and land shipment status, view booking details, accept/reject quotes, and download invoices.",
    url: "https://thaishipping.com/bookings/my_bookings",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-my-bookings.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - My Bookings Dashboard",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Bookings | Thai Shipping Services",
    description:
      "View and manage your shipping bookings with Thai Shipping Services. Track shipment status and manage shipping operations.",
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

      {/* 🔹 Schema Markup for My Bookings Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "My Bookings Dashboard - Thai Shipping Services",
            description:
              "View and manage your shipping bookings with Thai Shipping Services. Track air, sea, and land shipment status, view booking details, accept/reject quotes, download invoices, and manage your shipping operations.",
            url: "https://thaishipping.com/bookings/my_bookings",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Bookings Dashboard",
              description:
                "Customer dashboard for viewing and managing air, sea, and land shipping bookings",
            },
            potentialAction: {
              "@type": "Action",
              name: "Manage Bookings",
              description:
                "View, track, and manage all shipping bookings",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://thaishipping.com/bookings/my_bookings",
                actionPlatform: [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform",
                ],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for My Bookings - Thai Shipping Services */}
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
                name: "My Bookings",
                item: "https://thaishipping.com/bookings/my_bookings",
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
            name: "Thai Shipping Services",
            url: "https://thaishipping.com",
            logo: "https://thaishipping.com/logo.png",
            description:
              "Air, sea, and land shipping services in Thailand — your guide to Thai imports, exports, food shipping, and shipping regulations.",
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
              contactType: "customer support",
              email: "booking@thaishipping.com",
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
            name: "Shipping Booking Management",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
            },
            serviceType: "Booking Management",
            description:
              "Online portal for customers to view and manage air, sea, and land shipping bookings.",
            audience: {
              "@type": "Audience",
              name: "Thai Shipping Customers",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Booking Management Features",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "View Bookings",
                  description: "View all shipping bookings",
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
            name: "Thai Shipping Booking Portal",
            url: "https://thaishipping.com/bookings/my_bookings",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Customer portal for managing air, sea, and land shipping bookings",
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
            name: "Create Shipping Booking",
            description:
              "Create a new air, sea, or land shipping booking",
            target: "https://thaishipping.com/create-booking",
          }),
        }}
      />
    </>
  );
}