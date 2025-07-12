import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ReactQueryProvider } from "./providers";

export const metadata: Metadata = {
  title: "TileTextures - High-Quality Tile Textures for 3D Artists",
  description:
    "Browse a variety of tile textures, including ceramic, and mosaic, with styles such as square, hexagonal, and patterned. Perfect for floors, walls, and decorative surfaces.",
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
