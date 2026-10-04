
import LoginPage from "@/components/auth/login/page";
import React from "react";

// 🔹 SEO metadata for Login - Updated for Hanjin Shipping Thailand
export const metadata = {
  title: "Customer Login ",
  description:
    "Login to your Hanjin Shipping Thailand customer account. Track shipments in real-time, manage your logistics operations, access digital documents, and enjoy seamless supply chain management across Asia, America, and Europe.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Customer Login",
    "Login Portal",
    "Logistics Account",
    "Shipment Tracking",
    "Supply Chain Login",
    "Cargo Management",
    "Digital Logistics",
    "Account Access",
    "Real-time Tracking",
    "Container Shipping",
    "Freight Forwarding",
    "Maritime Logistics",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/auth/login",
  },
  openGraph: {
    title: "Customer Login | Hanjin Shipping Thailand",
    description:
      "Login to your Hanjin Shipping Thailand customer account. Track shipments in real-time, manage your logistics operations, access digital documents, and enjoy seamless supply chain management across Asia, America, and Europe.",
    url: "https://hanjinthailand.com/auth/login",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-login.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Customer Login",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Login | Hanjin Shipping Thailand",
    description:
      "Login to your Hanjin Shipping Thailand customer account. Track shipments in real-time and manage your logistics operations.",
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

      {/* 🔹 Schema Markup for Login Page - Updated for Hanjin Shipping */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Customer Login",
            description:
              "Login to your Hanjin Shipping Thailand customer account. Track shipments in real-time, manage your logistics operations, access digital documents, and enjoy seamless supply chain management across Asia, America, and Europe.",
            url: "https://hanjinthailand.com/auth/login",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/images/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Login Form",
              description: "Secure customer login portal with email and password authentication",
            },
            potentialAction: {
              "@type": "Action",
              name: "Login",
              description: "Customer authentication for logistics account access",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://hanjinthailand.com/auth/login",
                actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Login - Updated for Hanjin Shipping */}
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
                name: "Authentication",
                item: "https://hanjinthailand.com/auth",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Customer Login",
                item: "https://hanjinthailand.com/auth/login",
              },
            ],
          }),
        }}
      />
    </>
  );
}