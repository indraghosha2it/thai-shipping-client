import OpenTopContainerClient from './opentopclient';

// 🔹 SEO metadata for Open Top Container Specifications - Hanjin Shipping Thailand
export const metadata = {
  title: "Open Top Container Specifications",
  description:
    "Explore Hanjin Shipping Thailand's open top containers for oversized and heavy cargo. Detailed specifications for 20FT and 40FT open top containers with removable roof for top loading. Ideal for machinery, timber, and overheight cargo.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Open Top Container",
    "Open Top Shipping Container",
    "20FT Open Top",
    "40FT Open Top",
    "Open Top Container Specifications",
    "Top Loading Container",
    "Overheight Cargo Container",
    "Open Top Dimensions",
    "Removable Roof Container",
    "Open Top Container Capacity",
    "Machinery Container",
    "Timber Container",
    "Industrial Cargo Container",
    "Open Top Payload",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/info/container/open-top",
  },
  openGraph: {
    title: "Open Top Container Specifications | Hanjin Shipping Thailand",
    description:
      "Complete open top container specifications for oversized and heavy cargo. 20FT and 40FT open tops with removable roof for easy top loading.",
    url: "https://hanjinthailand.com/info/container/open-top",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-opentop-container.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Open Top Container Specifications",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Top Container Specifications | Hanjin Shipping Thailand",
    description:
      "Detailed technical specifications for 20FT and 40FT open top containers for overheight and oversized cargo.",
    images: ["/og-opentop-container.jpg"],
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
  return <OpenTopContainerClient />;
}