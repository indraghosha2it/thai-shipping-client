import ReeferGeneralClient from './generalclient';

// 🔹 SEO metadata for Reefer General Information - Hanjin Shipping Thailand
export const metadata = {
  title: "Reefer Container General Information",
  description:
    "Comprehensive guide to Hanjin Shipping Thailand's reefer container services. Learn about temperature-controlled shipping, controlled atmosphere technology, temperature ranges for different products, and handling guidelines for perishable cargo.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Reefer Container",
    "Reefer General Information",
    "Temperature Controlled Container",
    "Controlled Atmosphere Container",
    "CA Container",
    "Reefer Service Guide",
    "Perishable Cargo Shipping",
    "Cold Chain Logistics",
    "Reefer Handling Guidelines",
    "Reefer Temperature Guide",
    "Frozen Cargo Shipping",
    "Chilled Cargo Shipping",
    "Reefer Monitoring",
    "Reefer Container Features",
    "Pharmaceutical Shipping",
    "Food Logistics",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/info/reefer/general",
  },
  openGraph: {
    title: "Reefer Container General Information | Hanjin Shipping Thailand",
    description:
      "Complete guide to reefer container services including temperature ranges, controlled atmosphere technology, and handling guidelines for perishable cargo.",
    url: "https://hanjinthailand.com/info/reefer/general",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-reefer-general.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Reefer Container General Information",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reefer Container General Information | Hanjin Shipping Thailand",
    description:
      "Learn about temperature-controlled shipping, CA technology, and handling guidelines for perishable cargo.",
    images: ["/og-reefer-general.jpg"],
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
  return <ReeferGeneralClient />;
}