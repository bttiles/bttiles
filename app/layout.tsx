import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import WhatsAppButton from "../components/WhatsAppButton";
import { ReactQueryProvider } from "./providers";
import { generateMetadata as genMeta, structuredData } from "../lib/seo";
import PerformanceOptimization from "../components/PerformanceOptimization";
import LocalSEO from "../components/LocalSEO";
import LocalBusinessStructuredData from "../components/LocalBusinessStructuredData";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = genMeta({
  title: "Tuff Tiles Pakistan | Bismillah Tuff Tiles Karachi | #1 Tuff Tiles Manufacturer",
  description: "#1 Tuff Tiles in Pakistan! Bismillah Tuff Tiles Karachi - Best tuff tiles manufacturer. Premium quality tuff tiles, pavers & construction materials. Karachi, Lahore, Islamabad delivery. Call +92-317-6697001 for instant quotes on tuff tiles.",
  keywords: [
    'tuff tiles',
    'tuff tiles karachi',
    'bismillah tuff tiles',
    'tuff tiles pakistan',
    'best tuff tiles karachi',
    'tuff tiles manufacturer pakistan',
    'bt tuff tiles',
    'tuff tiles lahore',
    'tuff tiles islamabad',
    'pavers tuff tiles',
    'bismillah tuff tiles karachi',
    'karachi tuff tiles supplier',
    'premium tuff tiles pakistan',
    'wholesale tuff tiles karachi'
  ],
  url: "https://bismillahtufftiles.vercel.app/"
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
        <link rel="canonical" href="https://bismillahtufftiles.vercel.app/" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="30.3753;69.3451" />
        <meta name="ICBM" content="30.3753, 69.3451" />
        <link rel="alternate" href="https://bismillahtufftiles.vercel.app/" hrefLang="en-pk" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
      </head>
      <body>
        <LocalSEO />
        <LocalBusinessStructuredData />
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
