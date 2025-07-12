import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/ui/toaster";
import { Toaster as Sonner } from "@/ui/sonner";
import { TooltipProvider } from "@/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WhatsAppButton from "@/WhatsAppButton";
import { ReactQueryProvider } from "./providers";

export const metadata: Metadata = {
  title: "TileTextures - Premium Tile & Marble Textures | Order Custom Designs",
  description:
    "Explore our premium collection of tile and marble textures. From ceramic to mosaic, hexagonal to herringbone - contact us to order custom tiles for your project.",
  keywords:
    "tile textures, marble textures, ceramic tiles, mosaic tiles, hexagonal tiles, custom tile orders, architectural materials",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "TileTextures - Premium Tile & Marble Textures",
    description:
      "Explore and order premium tile textures for your architectural projects",
    type: "website",
  },
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
