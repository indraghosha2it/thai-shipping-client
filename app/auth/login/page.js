import LoginPage from "@/components/auth/login/page";
import React from "react";

// 🔹 SEO metadata for Login - Thai Shipping Services
export const metadata = {
  title: "Customer Login",
  description:
    "Login to your Thai Shipping Services customer account. Track shipments in real-time, manage your air, sea, and land logistics operations, access digital documents, and enjoy seamless shipping management across Thailand and worldwide.",
  keywords: [
    "Thai Shipping Services",
    "Customer Login",
    "Login Portal",
    "Thai Logistics Account",
    "Shipment Tracking Thailand",
    "Supply Chain Login",
    "Cargo Management",
    "Digital Logistics",
    "Account Access",
    "Real-time Tracking",
    "Air Freight Login",
    "Sea Freight Login",
    "Land Transport Login",
    "Thai Import Export Login",
    "Bangkok Shipping Login",
  ],
  alternates: {
    canonical: "https://thaishipping.com/auth/login",
  },
  openGraph: {
    title: "Customer Login | Thai Shipping Services",
    description:
      "Login to your Thai Shipping Services customer account. Track shipments in real-time, manage your air, sea, and land logistics operations, and access digital documents.",
    url: "https://thaishipping.com/auth/login",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-login.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - Customer Login",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Login | Thai Shipping Services",
    description:
      "Login to your Thai Shipping Services customer account. Track shipments in real-time and manage your logistics operations.",
    images: ["/og-login.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <LoginPage />

      {/* 🔹 Schema Markup for Login Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Customer Login",
            description:
              "Login to your Thai Shipping Services customer account. Track shipments in real-time, manage your air, sea, and land logistics operations, access digital documents, and enjoy seamless shipping management across Thailand and worldwide.",
            url: "https://thaishipping.com/auth/login",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/images/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Login Form",
              description:
                "Secure customer login portal with email and password authentication",
            },
            potentialAction: {
              "@type": "Action",
              name: "Login",
              description:
                "Customer authentication for logistics account access",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://thaishipping.com/auth/login",
                actionPlatform: [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform",
                ],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Login - Thai Shipping Services */}
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
                name: "Customer Login",
                item: "https://thaishipping.com/auth/login",
              },
            ],
          }),
        }}
      />
    </>
  );
}