import FlatRackContainerClient from './flatrackclient';

// 🔹 SEO metadata for Flat Rack Container Specifications - Hanjin Shipping Thailand
export const metadata = {
  title: "Flat Rack Container Specifications",
  description:
    "Explore Hanjin Shipping Thailand's flat rack containers for heavy machinery and oversized cargo. Detailed specifications for 20FT and 40FT flat rack containers with high payload capacity up to 39,020 KG.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Flat Rack Container",
    "Flat Rack Shipping Container",
    "20FT Flat Rack",
    "40FT Flat Rack",
    "Heavy Machinery Container",
    "Oversized Cargo Container",
    "Flat Rack Specifications",
    "Industrial Equipment Container",
    "Open Top Flat Rack",
    "Collapsible Flat Rack",
    "Heavy Lift Container",
    "Project Cargo Container",
    "Breakbulk Container",
    "Flat Rack Capacity",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/info/container/flat-rack",
  },
  openGraph: {
    title: "Flat Rack Container Specifications | Hanjin Shipping Thailand",
    description:
      "Complete flat rack container specifications for heavy machinery and oversized cargo. 20FT and 40FT flat racks with high payload capacity.",
    url: "https://hanjinthailand.com/info/container/flat-rack",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-flatrack-container.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Flat Rack Container Specifications",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flat Rack Container Specifications | Hanjin Shipping Thailand",
    description:
      "Detailed technical specifications for 20FT and 40FT flat rack containers for heavy equipment and industrial cargo.",
    images: ["/og-flatrack-container.jpg"],
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
  return <FlatRackContainerClient />;
}