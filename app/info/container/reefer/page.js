import ReeferContainerClient from './reeferclient';

// 🔹 SEO metadata for Reefer Container Specifications - Hanjin Shipping Thailand
export const metadata = {
  title: "Reefer Container Specifications",
  description:
    "Explore Hanjin Shipping Thailand's complete range of refrigerated reefer containers. Detailed specifications for 20FT Steel Reefer, 40FT Aluminum Reefer, and 40FT High Cube Reefer containers. Temperature-controlled shipping solutions for perishable goods.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Reefer Container",
    "Refrigerated Container",
    "Temperature Controlled Container",
    "20FT Steel Reefer",
    "40FT Aluminum Reefer",
    "40FT High Cube Reefer",
    "Reefer Container Specifications",
    "Cold Chain Shipping",
    "Perishable Cargo Container",
    "Reefer Container Dimensions",
    "Refrigerated Shipping",
    "Temperature Controlled Logistics",
    "Cold Storage Container",
    "Reefer Capacity",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/info/container/reefer",
  },
  openGraph: {
    title: "Reefer Container Specifications",
    description:
      "Complete reefer container specifications for temperature-controlled shipping. 20FT Steel Reefer, 40FT Aluminum Reefer, and 40FT High Cube Reefer containers with detailed dimensions and capacity.",
    url: "https://hanjinthailand.com/info/container/reefer",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-reefer-container.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Reefer Container Specifications",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reefer Container Specifications | Hanjin Shipping Thailand",
    description:
      "Detailed technical specifications for all reefer container types - 20FT Steel, 40FT Aluminum, and 40FT High Cube.",
    images: ["/og-reefer-container.jpg"],
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
  return <ReeferContainerClient />;
}