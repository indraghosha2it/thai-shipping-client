import RegisterPage from "@/components/auth/register/page";
import React from "react";

// 🔹 SEO metadata for Registration - Thai Shipping Services
export const metadata = {
  title: "Create Account",
  description:
    "Join Thai Shipping Services today. Create your customer account to access real-time shipment tracking, air, sea, and land logistics solutions, competitive shipping rates, and dedicated customer support across Thailand and worldwide.",
  keywords: [
    "Thai Shipping Services",
    "Create Account",
    "Register",
    "Sign Up",
    "Thai Logistics Account",
    "Customer Registration",
    "Shipping Account Thailand",
    "Supply Chain Registration",
    "Thai Logistics",
    "Freight Registration",
    "Air Shipping Registration",
    "Sea Shipping Registration",
    "Land Transport Registration",
    "Thai Import Export Account",
    "Bangkok Shipping Account",
  ],
  alternates: {
    canonical: "https://thaishipping.com/auth/register",
  },
  openGraph: {
    title: "Create Account | Thai Shipping Services",
    description:
      "Join Thai Shipping Services today. Create your customer account to access real-time shipment tracking, air, sea, and land logistics solutions, and competitive shipping rates.",
    url: "https://thaishipping.com/auth/register",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-register.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - Create Account",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Account | Thai Shipping Services",
    description:
      "Join Thai Shipping Services today. Create your customer account to access real-time shipment tracking and air, sea, and land logistics solutions.",
    images: ["/og-register.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <RegisterPage />

      {/* 🔹 Schema Markup for Registration Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Create Account",
            description:
              "Join Thai Shipping Services today. Create your customer account to access real-time shipment tracking, air, sea, and land logistics solutions, competitive shipping rates, and dedicated customer support.",
            url: "https://thaishipping.com/auth/register",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/images/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Registration Form",
              description:
                "Multi-step customer registration form for logistics account access",
            },
            potentialAction: {
              "@type": "Action",
              name: "Register",
              description:
                "Create new customer account for Thai shipping logistics services",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://thaishipping.com/auth/register",
                actionPlatform: [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform",
                ],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Registration - Thai Shipping Services */}
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
                name: "Authentication",
                item: "https://thaishipping.com/auth",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Create Account",
                item: "https://thaishipping.com/auth/register",
              },
            ],
          }),
        }}
      />
    </>
  );
}