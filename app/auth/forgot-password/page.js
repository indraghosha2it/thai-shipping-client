import ForgotPassword from "@/components/auth/forgot-password/page";
import React from "react";

// 🔹 SEO metadata for Forgot Password - Hanjin Shipping Thailand
export const metadata = {
  title: "Forgot Password",
  description:
    "Reset your password for your Hanjin Shipping Thailand customer account. Enter your registered email to receive a verification code and create a new password to regain access to your ocean freight management account.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Forgot Password",
    "Reset Password",
    "Password Recovery",
    "Account Recovery",
    "Login Help",
    "Password Reset",
    "Customer Account",
    "Ocean Freight Account",
    "Secure Login",
    "Account Access",
    "Shipping Account Recovery",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/auth/forgot-password",
  },
  openGraph: {
    title: "Forgot Password | Hanjin Shipping Thailand",
    description:
      "Reset your password for your Hanjin Shipping Thailand customer account. Enter your registered email to receive a verification code and create a new password.",
    url: "https://hanjinthailand.com/auth/forgot-password",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-forgot-password.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Forgot Password",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgot Password | Hanjin Shipping Thailand",
    description:
      "Reset your password for your Hanjin Shipping Thailand customer account with email verification and secure password recovery.",
    images: ["/og-forgot-password.jpg"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <ForgotPassword />

      {/* 🔹 Schema Markup for Forgot Password - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Forgot Password - Hanjin Shipping Thailand",
            description:
              "Reset your password for your Hanjin Shipping Thailand customer account. Enter your registered email to receive a verification code and create a new password to regain access to your ocean freight management account.",
            url: "https://hanjinthailand.com/auth/forgot-password",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Password Reset Form",
              description: "Secure password recovery process with email verification and OTP authentication for ocean freight account",
            },
            potentialAction: {
              "@type": "Action",
              name: "Reset Password",
              description: "Three-step password reset process including email verification, OTP confirmation, and new password creation",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Forgot Password */}
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
                name: "Login",
                item: "https://hanjinthailand.com/auth/login",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Forgot Password",
                item: "https://hanjinthailand.com/auth/forgot-password",
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
              email: "support@hanjinthailand.com",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />

      {/* 🔹 Password Recovery Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Password Recovery Service",
            provider: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
            },
            serviceType: "Account Recovery",
            description: "Secure password recovery service for customer accounts with email verification and OTP authentication",
            audience: {
              "@type": "Audience",
              name: "Registered Customers",
            },
            potentialAction: {
              "@type": "Action",
              name: "Recover Password",
            },
          }),
        }}
      />
    </>
  );
}