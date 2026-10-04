
import DryContainerClient from './dryclient';

// 🔹 SEO metadata for Dry Container Specifications - Hanjin Shipping Thailand
export const metadata = {
  title: "Dry Container Specifications",
  description:
    "Explore Hanjin Shipping Thailand's complete range of dry containers. Detailed specifications for 20FT, 40FT, 40FT Aluminum, 40FT High Cube, and 45FT High Cube containers. Interior dimensions, capacity, and weight details for efficient cargo planning.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Dry Container",
    "Container Specifications",
    "20FT Container",
    "40FT Container",
    "40FT High Cube Container",
    "45FT High Cube Container",
    "Dry Container Dimensions",
    "Container Capacity",
    "Shipping Container Sizes",
    "Container Weight",
    "Cargo Container",
    "Standard Container",
    "Aluminum Container",
    "High Cube Container",
    "Container Technical Data",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/info/container/dry",
  },
  openGraph: {
    title: "Dry Container Specifications | Hanjin Shipping Thailand",
    description:
      "Complete dry container specifications for 20FT, 40FT, 40FT Aluminum, 40FT High Cube, and 45FT High Cube containers. Interior dimensions, capacity, and weight details.",
    url: "https://hanjinthailand.com/info/container/dry",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-dry-container.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Dry Container Specifications",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dry Container Specifications | Hanjin Shipping Thailand",
    description:
      "Detailed technical specifications for all dry container types - 20FT, 40FT, 40FT High Cube, and 45FT High Cube.",
    images: ["/og-dry-container.jpg"],
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
  return <DryContainerClient />;
}