import ToastProvider from "@/components/common/ToastProvider";
import ProfilePage from "@/components/profile/profile";
import React, { Suspense } from "react";

// 🔹 SEO metadata for Profile - Thai Shipping Services
export const metadata = {
  title: "My Profile",
  description:
    "Manage your Thai Shipping Services customer profile. Update personal information, view company details, manage notification preferences, and access security settings for your shipping account.",
  keywords: [
    "Thai Shipping Services",
    "My Profile",
    "Profile Settings",
    "Account Management",
    "User Profile",
    "Thai Shipping Account",
    "Customer Profile",
    "Profile Update",
    "Account Settings",
    "Personal Information",
    "Company Profile",
    "Thai Shipping Customer Portal",
  ],
  alternates: {
    canonical: "https://thaishipping.com/profile",
  },
  openGraph: {
    title: "My Profile | Thai Shipping Services",
    description:
      "Manage your Thai Shipping Services customer profile. Update personal information, view company details, manage preferences, and access security settings for your shipping account.",
    url: "https://thaishipping.com/profile",
    siteName: "Thai Shipping Services",
    images: [
      {
        url: "/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - My Profile",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile | Thai Shipping Services",
    description:
      "Manage your Thai Shipping Services customer profile. Update personal information and manage preferences for your shipping account.",
    images: ["/og-profile.jpg"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <Suspense>
        <ToastProvider />
      </Suspense>
      <ProfilePage />

      {/* 🔹 Schema Markup for Profile Page - Thai Shipping Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "User Profile - Thai Shipping Services",
            description:
              "Manage your Thai Shipping Services customer profile. Update personal information, view company details, manage notification preferences, and access security settings for your shipping account.",
            url: "https://thaishipping.com/profile",
            publisher: {
              "@type": "Organization",
              name: "Thai Shipping Services",
              url: "https://thaishipping.com",
              logo: "https://thaishipping.com/logo.png",
            },
            mainEntity: {
              "@type": "ProfilePage",
              name: "Customer Profile",
              description:
                "User profile management for shipping customer account",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Profile - Thai Shipping Services */}
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
                name: "My Profile",
                item: "https://thaishipping.com/profile",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Profile */}
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
              email: "support@thaishipping.com",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />

      {/* 🔹 Person Schema for Customer Profile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Thai Shipping Customer",
            url: "https://thaishipping.com/profile",
            worksFor: {
              "@type": "Organization",
              name: "Thai Shipping Services",
            },
            knowsAbout: [
              "Air Shipping",
              "Sea Shipping",
              "Land Transportation",
              "Thai Imports",
              "Thai Exports",
              "Thai Food Shipping",
              "Shipping Regulations",
            ],
          }),
        }}
      />

      {/* 🔹 Profile Page Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Customer Profile Management",
            provider: {
              "@type": "Organization",
              name: "Thai Shipping Services",
            },
            serviceType: "Account Management",
            description:
              "Secure profile management system for shipping customers to update personal and company information.",
            audience: {
              "@type": "Audience",
              name: "Thai Shipping Customers",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Profile Management Features",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Personal Information",
                  description: "Update name, contact details, and preferences",
                },
                {
                  "@type": "Offer",
                  name: "Company Information",
                  description: "Manage company profile and business details",
                },
                {
                  "@type": "Offer",
                  name: "Security Settings",
                  description: "Update password and security preferences",
                },
                {
                  "@type": "Offer",
                  name: "Notification Preferences",
                  description: "Manage email and notification settings",
                },
              ],
            },
          }),
        }}
      />

      {/* 🔹 WebApplication Schema for Profile Portal */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Thai Shipping Customer Profile Portal",
            url: "https://thaishipping.com/profile",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Customer profile management portal for shipping account",
            features: [
              "Profile information management",
              "Company details management",
              "Password change",
              "Notification preferences",
              "Account security settings",
            ],
          }),
        }}
      />
    </>
  );
}