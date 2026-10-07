
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/common/navbar";
// import Topbar from "@/components/common/topbar";
// import Footer from "@/components/common/footer";
// import ClientLayout from "@/components/layout/ClientLayout";
// import { Suspense } from "react";
// import ToastProvider from "@/components/common/ToastProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   metadataBase: new URL("https://hanjinthailand.com"),
//   title: {
//     default: "Hanjin Shipping Thailand | Global Ocean Freight & Logistics Solutions",
//     template: "%s | Hanjin Shipping Thailand",
//   },
//   description:
//     "Hanjin Shipping Thailand provides reliable ocean freight services, global logistics solutions, container shipping, and supply chain management across Asia, America, and Europe.",
//   applicationName: "Hanjin Shipping Thailand",
//   alternates: {
//     canonical: "/",
//   },
//   keywords: [
//     "Hanjin Shipping Thailand",
//     "ocean freight",
//     "container shipping",
//     "global logistics",
//     "sea freight",
//     "cargo shipping",
//     "supply chain management",
//     "freight forwarding",
//     "international shipping",
//     "logistics solutions",
//     "Thailand shipping",
//     "Bangkok freight",
//     "Asia shipping",
//     "America shipping",
//     "Europe shipping",
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://hanjinthailand.com",
//     siteName: "Hanjin Shipping Thailand",
//     title: "Hanjin Shipping Thailand | Global Ocean Freight & Logistics Solutions",
//     description:
//       "Hanjin Shipping Thailand provides reliable ocean freight services, global logistics solutions, container shipping, and supply chain management across Asia, America, and Europe.",
//     images: [
//       {
//         url: "/og-home.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Hanjin Shipping Thailand - Global Ocean Freight Solutions",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Hanjin Shipping Thailand | Global Ocean Freight & Logistics Solutions",
//     description:
//       "Reliable ocean freight services, container shipping, and supply chain management across Asia, America, and Europe.",
//     images: ["/og-home.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
//   category: "Logistics & Shipping",
//   verification: {
//     google: "your-google-verification-code", // Add your Google Search Console verification code
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning >
//         <ClientLayout>
//           <Suspense>
//             <ToastProvider />
//           </Suspense>
//           {children}
//         </ClientLayout>
//         <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){
//         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
//         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
//         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
//     })(window, document, "clarity", "script", "wpezs8kjsr");` }} />
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Topbar from "@/components/common/topbar";
import Footer from "@/components/common/footer";
import ClientLayout from "@/components/layout/ClientLayout";
import { Suspense } from "react";
import ToastProvider from "@/components/common/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thaishipping.com"),
  title: {
    default: "Thai Shipping Services | Air, Sea & Land Freight Solutions in Thailand",
    template: "%s | Thai Shipping ",
  },
  description:
    "Thailand's trusted shipping services for air, sea, and land freight. Exporters and importers rely on professional Thai shipping companies for global and local deliveries. Learn about top Thai shipping providers, regulations, and food shipping.",
  applicationName: "Thai Shipping Services",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Thai Shipping Services",
    "Thailand Shipping",
    "Air Shipping Thailand",
    "Sea Shipping Thailand",
    "Thai Freight Services",
    "Thai Exports",
    "Thai Imports",
    "Thai Food Shipping",
    "Shipping Regulations Thailand",
    "Kintetsu World Express Thailand",
    "World Freight Co. Ltd.",
    "Asian Tigers Transpo",
    "Seaborne Logistics",
    "V.A.S. Services",
    "B and J Services",
    "Heavy Transportation Thailand",
    "Thai Logistics",
    "Bangkok Shipping",
    "International Shipping Thailand",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thaishipping.com",
    siteName: "Thai Shipping Services",
    title: "Thai Shipping Services | Air, Sea & Land Freight Solutions in Thailand",
    description:
      "Thailand's trusted shipping services for air, sea, and land freight. Exporters and importers rely on professional Thai shipping companies for global and local deliveries.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Shipping Services - Air, Sea & Land Freight Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Shipping Services | Air, Sea & Land Freight Solutions",
    description:
      "Reliable air, sea, and land shipping services across Thailand and worldwide.",
    images: ["/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Logistics & Shipping",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning >
        <ClientLayout>
          <Suspense>
            <ToastProvider />
          </Suspense>
          {children}
        </ClientLayout>
        <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wpezs8kjsr");` }} />
      </body>
    </html>
  );
}