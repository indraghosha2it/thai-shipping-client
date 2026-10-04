import ShelfLifeTemperatureClient from './tempsettingclient';

// 🔹 SEO metadata for Shelf Life & Temperature Setting - Hanjin Shipping Thailand
export const metadata = {
  title: "Shelf Life & Container Temperature Setting Guide",
  description:
    "Comprehensive reference guide for perishable cargo shelf life and optimal reefer container temperature settings. Detailed tables for vegetables, fruits, meat, poultry, and dairy products with recommended temperature ranges, air ventilation, and defrost intervals.",
  keywords: [
    "Hanjin Shipping Thailand",
    "Shelf Life Guide",
    "Container Temperature Setting",
    "Reefer Temperature Guide",
    "Perishable Cargo Storage",
    "Vegetable Storage Temperature",
    "Fruit Storage Temperature",
    "Meat Storage Temperature",
    "Reefer Container Settings",
    "Cold Chain Temperature Guide",
    "Fresh Produce Storage",
    "Frozen Food Temperature",
    "Dairy Storage Temperature",
    "Air Ventilation for Reefer",
    "Defrost Interval Guide",
    "Commodity Temperature Chart",
  ],
  alternates: {
    canonical: "https://hanjinthailand.com/info/reefer/temp-setting",
  },
  openGraph: {
    title: "Shelf Life & Container Temperature Setting Guide | Hanjin Shipping Thailand",
    description:
      "Complete reference guide for perishable cargo shelf life and optimal reefer container temperature settings for vegetables, fruits, meat, poultry, and dairy products.",
    url: "https://hanjinthailand.com/info/reefer/temp-setting",
    siteName: "Hanjin Shipping Thailand",
    images: [
      {
        url: "/og-temp-setting.jpg",
        width: 1200,
        height: 630,
        alt: "Hanjin Shipping Thailand - Shelf Life & Temperature Setting Guide",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shelf Life & Container Temperature Setting Guide | Hanjin Shipping Thailand",
    description:
      "Temperature setting guide for vegetables, fruits, meat, poultry, and dairy products with air ventilation and defrost intervals.",
    images: ["/og-temp-setting.jpg"],
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
  return <ShelfLifeTemperatureClient />;
}