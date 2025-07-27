import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/ui/toaster";
import { Toaster as Sonner } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import WhatsAppButton from "@/WhatsAppButton";
import { ReactQueryProvider } from "./providers";
import { generateMetadata as genMeta, structuredData } from "../lib/seo";
import PerformanceOptimization from "@/PerformanceOptimization";
import LocalSEO from "@/LocalSEO";
import ErrorBoundary from "@/ErrorBoundary";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = genMeta({
  title: "Bismillah Tuff Tiles - #1 Tuff Tiles & Pavers Manufacturer Pakistan | Factory Direct Prices",
  description: "🏭 Leading tuff tiles manufacturer in Pakistan since 2010. ✅ Premium pavers, GRC jali, ceramic tiles ✅ ISO certified quality ✅ Lahore, Karachi, Islamabad delivery ✅ Wholesale rates ✅ Free installation guide. Call +92-317-6697001 for bulk discounts.",
  keywords: [
    'tuff tiles manufacturer pakistan',
    'pavers supplier lahore karachi islamabad',
    'tiles factory pakistan wholesale',
    'grc jali designs pakistan',
    'construction materials rawalpindi faisalabad',
    'ceramic tiles multan sialkot gujranwala',
    'marble textures flooring pakistan',
    'interlocking tiles parking commercial',
    'outdoor pavers driveways pathways',
    'interior wall floor tiles pakistan',
    'building materials supplier pakistan',
    'architectural decorative tiles',
    'concrete pavers heavy duty industrial',
    'bismillah tuff tiles factory direct',
    'pakistani tile manufacturers exporters',
    'anti slip tiles pool deck outdoor',
    'garden landscape tiles pakistan',
    'plaza commercial flooring solutions'
  ],
  url: "https://bttufftiles.vercel.app"
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Tuff Tiles Pakistan",
              "description": "Premium tuff tiles manufactured by BT Tuff Tiles and Bismillah Tuff Tiles in Pakistan",
              "brand": {
                "@type": "Brand",
                "name": "Bismillah Tuff Tiles"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "BT Tuff Tiles Pakistan"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "PKR",
                "lowPrice": "50",
                "highPrice": "500",
                "availability": "https://schema.org/InStock"
              }
            }),
          }}
        />
        <link rel="canonical" href="https://bttufftiles.vercel.app" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="30.3753;69.3451" />
        <meta name="ICBM" content="30.3753, 69.3451" />
        <link rel="alternate" href="https://bttufftiles.vercel.app" hrefLang="en-pk" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />

        {/* Performance & Core Web Vitals */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Business Verification */}
        <meta name="google-site-verification" content="google1eab263bc7e7047f" />

        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
      </head>
      <body>
        <LocalSEO />
        <ReactQueryProvider>
          <TooltipProvider>
            <PerformanceOptimization />
            <Toaster />
            <Sonner />
            <WhatsAppButton />
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
