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
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = genMeta({
  title: "Bismillah Tuff Tiles - Premium Tuff Tiles & Pavers Manufacturer Pakistan",
  description: "Leading manufacturer of premium tuff tiles, pavers, GRC jali, and construction materials in Pakistan. High-quality ceramic tiles, marble textures, and custom designs for residential and commercial projects. Contact us for wholesale rates.",
  keywords: [
    'tuff tiles pakistan',
    'pavers manufacturer',
    'tiles supplier pakistan',
    'grc jali',
    'construction materials pakistan',
    'ceramic tiles lahore',
    'marble textures islamabad',
    'floor tiles karachi',
    'wall tiles rawalpindi',
    'outdoor pavers',
    'interior tiles',
    'wholesale tiles',
    'building materials',
    'architectural tiles'
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
