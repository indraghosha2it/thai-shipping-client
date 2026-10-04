import ToastProvider from "@/components/common/ToastProvider";
import ProfilePage from "@/components/profile/profile";
import React, { Suspense } from "react";

// 🔹 SEO metadata for Profile - Hanjin Shipping Thailand
export const metadata = {
  title: "My Profile",
  description:
    "Manage your Hanjin Shipping Thailand customer profile. Update personal information, view company details, manage notification preferences, and access security settings for your ocean freight account.",
  keywords: [
    "Hanjin Shipping Thailand",
    "My Profile",
    "Profile Settings",
    "Account Management",
    "User Profile",
    "Ocean Freight Account",
    "Customer Profile",
    "Profile Update",
    "Account Settings",
    "Personal Information",
    "Company Profile",
    "Hanjin Customer Portal",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/profile",
  },
  openGraph: {
    title: "My Profile | Hanjin Shipping Thailand",
    description:
      "Manage your Hanjin Shipping Thailand customer profile. Update personal information, view company details, manage preferences, and access security settings for your ocean freight account.",
    url: "https://hanjinthailand.com/profile",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - My Profile",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Profile | Hanjin Shipping Thailand",
    description:
      "Manage your Hanjin Shipping Thailand customer profile. Update personal information and manage preferences for your ocean freight account.",
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

      {/* 🔹 Schema Markup for Profile Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "User Profile - Hanjin Shipping Thailand",
            description:
              "Manage your Hanjin Shipping Thailand customer profile. Update personal information, view company details, manage notification preferences, and access security settings for your ocean freight account.",
            url: "https://hanjinthailand.com/profile",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "ProfilePage",
              name: "Customer Profile",
              description: "User profile management for ocean freight customer account",
            },
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Profile - Hanjin Shipping Thailand */}
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
                name: "My Profile",
                item: "https://hanjinthailand.com/profile",
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

      {/* 🔹 Person Schema for Customer Profile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Hanjin Shipping Customer",
            url: "https://hanjinthailand.com/profile",
            worksFor: {
              "@type": "Organization",
              name: "Hanjin Shipping (Thailand) Co., Ltd.",
            },
            knowsAbout: [
              "Ocean Freight Management",
              "Container Shipping",
              "Global Logistics",
              "Supply Chain Management",
              "Maritime Transport",
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
              name: "Hanjin Shipping Thailand",
            },
            serviceType: "Account Management",
            description: "Secure profile management system for ocean freight customers to update personal and company information.",
            audience: {
              "@type": "Audience",
              name: "Hanjin Shipping Customers",
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
            name: "Hanjin Customer Profile Portal",
            url: "https://hanjinthailand.com/profile",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description: "Customer profile management portal for ocean freight account",
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