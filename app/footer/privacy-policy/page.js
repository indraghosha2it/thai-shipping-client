
import PrivacyPolicy from "@/components/footer/policy";
import React from "react";

// 🔹 SEO metadata for Privacy Policy - Hanjin Shipping Thailand
export const metadata = {
  title: "Privacy Policy",
  description:
    "Read Hanjin Shipping Thailand's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about data security, your rights under Thailand's PDPA, and our commitment to privacy for ocean freight and logistics services.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Privacy Policy",
    "Data Protection",
    "Information Security",
    "Privacy Statement",
    "Data Privacy",
    "Thailand PDPA",
    "Personal Data Protection Act",
    "PDPA Compliance",
    "Cookie Policy",
    "Privacy Rights",
    "Data Collection",
    "Customer Data Protection",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Hanjin Shipping Thailand",
    description:
      "Read Hanjin Shipping Thailand's Privacy Policy to understand how we collect, use, and protect your personal information under Thailand's PDPA.",
    url: "https://hanjinthailand.com/privacy-policy",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Privacy Policy",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Hanjin Shipping Thailand",
    description:
      "Learn how Hanjin Shipping Thailand protects your personal information in compliance with Thailand's PDPA.",
    images: ["/og-privacy-policy.jpg"],
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
      <PrivacyPolicy />

      {/* 🔹 Schema Markup for Privacy Policy Page - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - Hanjin Shipping Thailand",
            description:
              "Read Hanjin Shipping Thailand's Privacy Policy to understand how we collect, use, and protect your personal information under Thailand's PDPA.",
            url: "https://hanjinthailand.com/privacy-policy",
            publisher: {
              "@type": "Organization",
              name: "Hanjin Shipping Thailand",
              url: "https://hanjinthailand.com",
              logo: "https://hanjinthailand.com/logo.png",
            },
            mainEntity: {
              "@type": "WebPageElement",
              name: "Privacy Policy Document",
              description: "Comprehensive privacy policy outlining data collection, usage, and protection practices under Thailand PDPA",
            },
            dateModified: "2024-01-01",
          }),
        }}
      />

      {/* 🔹 Breadcrumb Schema for Privacy Policy - Hanjin Shipping Thailand */}
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
                name: "Privacy Policy",
                item: "https://hanjinthailand.com/privacy-policy",
              },
            ],
          }),
        }}
      />

      {/* 🔹 Organization Schema for Legal Info - Hanjin Shipping Thailand */}
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
            legalName: "Hanjin Shipping (Thailand) Co., Ltd.",
            foundingDate: "1988",
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
              contactType: "privacy",
              email: "dpo@hanjinthailand.com",
              availableLanguage: ["English", "Thai"],
            },
            privacyPolicy: "https://hanjinthailand.com/privacy-policy",
            termsOfService: "https://hanjinthailand.com/terms-of-service",
          }),
        }}
      />

      {/* 🔹 Privacy Policy Schema (Legal Document) - Hanjin Shipping Thailand */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            name: "Privacy Policy of Hanjin Shipping Thailand",
            description:
              "This Privacy Policy describes how Hanjin Shipping Thailand collects, uses, and protects personal information of its customers and website visitors in compliance with Thailand's Personal Data Protection Act (PDPA).",
            url: "https://hanjinthailand.com/privacy-policy",
            lastReviewed: "2024-01-01",
            inLanguage: "en-US",
            jurisdiction: "Thailand",
            legislation: ["Thailand Personal Data Protection Act B.E. 2562 (2019)", "PDPA"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              email: "dpo@hanjinthailand.com",
              contactType: "privacy officer",
              availableLanguage: ["English", "Thai"],
            },
          }),
        }}
      />

      {/* 🔹 Local Business Schema with Privacy Info */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hanjin Shipping (Thailand) Co., Ltd.",
            image: "https://hanjinthailand.com/logo.png",
            description: "Ocean freight and container shipping services in Thailand",
            address: {
              "@type": "PostalAddress",
              streetAddress: "6th Floor, Sirinrat Building, 3388/17-18 Rama IV Road, Khlong Tan",
              addressLocality: "Khlong Toei",
              addressRegion: "Bangkok",
              postalCode: "10110",
              addressCountry: "Thailand",
            },
            telephone: "+66-2-123-4567",
            email: "contact@hanjinthailand.com",
            privacyPolicy: "https://hanjinthailand.com/privacy-policy",
            areaServed: [
              { "@type": "Country", name: "Thailand" },
              { "@type": "Country", name: "China" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "Japan" },
              { "@type": "Country", name: "South Korea" },
            ],
          }),
        }}
      />

      {/* 🔹 Data Protection Officer Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Role",
            name: "Data Protection Officer",
            roleName: "Data Protection Officer (DPO)",
            description: "Responsible for overseeing PDPA compliance and data protection matters",
            organization: {
              "@type": "Organization",
              name: "Hanjin Shipping (Thailand) Co., Ltd.",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+66-2-123-4567",
              email: "dpo@hanjinthailand.com",
              contactType: "privacy officer",
            },
          }),
        }}
      />

      {/* 🔹 Corporation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Hanjin Shipping (Thailand) Co., Ltd.",
            legalName: "Hanjin Shipping (Thailand) Co., Ltd.",
            url: "https://hanjinthailand.com",
            logo: "https://hanjinthailand.com/logo.png",
            description: "Global ocean freight and container shipping services provider",
            foundingDate: "1988",
            foundingLocation: "Seoul, South Korea",
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
              contactType: "customer service",
              email: "contact@hanjinthailand.com",
            },
            privacyPolicy: "https://hanjinthailand.com/privacy-policy",
          }),
        }}
      />

      {/* 🔹 PDPA Compliance Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Thing",
            name: "PDPA Compliance",
            description: "Compliance with Thailand's Personal Data Protection Act B.E. 2562 (2019)",
            subjectOf: {
              "@type": "PrivacyPolicy",
              name: "Hanjin Shipping Thailand Privacy Policy",
            },
          }),
        }}
      />
    </>
  );
}