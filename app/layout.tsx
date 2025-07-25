import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/ui/toaster";
import { Toaster as Sonner } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import WhatsAppButton from "@/WhatsAppButton";
import { ReactQueryProvider } from "./providers";
import "leaflet/dist/leaflet.css";


export const metadata: Metadata = {
  title: "Bismillah Tuff Tiles - Premium Tile & Marble Textures | Order Custom Designs",
  description:
    "Explore our premium collection of tile and marble textures. From ceramic to mosaic, hexagonal to herringbone - contact us to order custom tiles for your project.",
  keywords:
    "tile textures, marble textures, ceramic tiles, mosaic tiles, hexagonal tiles, custom tile orders, architectural materials",
  openGraph: {
    title: "Bismillah Tuff Tiles - Premium Tile & Marble Textures",
    description:
      "Explore and order premium tile textures for your architectural projects",
    type: "website",
  },
};

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
      <body>
        <ReactQueryProvider>
          <TooltipProvider>
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
