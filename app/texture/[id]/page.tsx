"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Search, Menu, X, Download, Share, Heart, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Texture {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  resolution: string;
  fileSize: string;
  format: string;
  tags: string[];
}

const getTextureById = (id: string): Texture | null => {
  const textures: Texture[] = [
    {
      id: 1,
      name: "Smooth Concrete Panel Ceiling Texture",
      category: "Ceiling Tile Textures",
      image:
        "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
      description:
        "High-quality smooth concrete panel texture perfect for modern ceiling designs. Features realistic surface details and professional lighting.",
      resolution: "4096x4096",
      fileSize: "15 MB",
      format: "PNG, JPG",
      tags: ["concrete", "ceiling", "modern", "smooth", "architectural"],
    },
    {
      id: 2,
      name: "Geometric Patterned Paver Texture",
      category: "Square Tile Textures",
      image:
        "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
      description:
        "Beautiful geometric patterned paver texture in beige and black colors. Ideal for exterior and interior flooring applications.",
      resolution: "4096x4096",
      fileSize: "18 MB",
      format: "PNG, JPG",
      tags: ["geometric", "paver", "pattern", "beige", "black"],
    },
  ];

  return textures.find((t) => t.id === parseInt(id)) || null;
};

export default function TextureDetailPage() {
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const texture = getTextureById(params.id as string);

  if (!texture) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Texture Not Found</h1>
          <Link href="/" className="text-primary-blue hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-dark-lighter border-b border-dark z-50 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-lg font-semibold text-primary-blue">
            TileTextures
          </div>

          <div className="flex-1 max-w-2xl mx-6 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tile textures..."
                className="w-full pl-10 pr-4 py-2 bg-dark border border-dark text-white text-sm rounded-lg focus:outline-none focus:border-primary-blue transition-colors"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/blog"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              About
            </Link>
            <button className="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors">
              Sign In
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-light mb-10">
            <Link href="/" className="text-primary-blue hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/" className="text-primary-blue hover:underline">
              Textures
            </Link>
            <span className="mx-2">/</span>
            <span>{texture.name}</span>
          </nav>

          {/* Texture Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-dark-lighter">
              <Image
                src={texture.image}
                alt={texture.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <div className="mb-4">
                <span className="text-xs text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                  {texture.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white mb-4">
                {texture.name}
              </h1>

              <p className="text-gray-light mb-6 leading-relaxed">
                {texture.description}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-dark-lighter p-4 rounded-lg border border-dark">
                  <h3 className="text-sm font-medium text-white mb-2">
                    Resolution
                  </h3>
                  <p className="text-primary-blue">{texture.resolution}</p>
                </div>
                <div className="bg-dark-lighter p-4 rounded-lg border border-dark">
                  <h3 className="text-sm font-medium text-white mb-2">
                    File Size
                  </h3>
                  <p className="text-primary-blue">{texture.fileSize}</p>
                </div>
                <div className="bg-dark-lighter p-4 rounded-lg border border-dark">
                  <h3 className="text-sm font-medium text-white mb-2">
                    Format
                  </h3>
                  <p className="text-primary-blue">{texture.format}</p>
                </div>
                <div className="bg-dark-lighter p-4 rounded-lg border border-dark">
                  <h3 className="text-sm font-medium text-white mb-2">Views</h3>
                  <p className="text-primary-blue">1,234</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {texture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-light bg-dark border border-dark px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="border border-dark text-white px-6 py-3 rounded-lg font-semibold hover:border-primary-blue transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Save
                </button>
                <button className="border border-dark text-white px-6 py-3 rounded-lg font-semibold hover:border-primary-blue transition-colors flex items-center gap-2">
                  <Share className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter border-t border-dark px-6 py-12 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-semibold text-primary-blue mb-6">
                TileTextures
              </h4>
              <p className="text-sm text-gray-light leading-relaxed">
                The ultimate resource for high-quality tile textures. Perfect
                for architects, designers, and 3D artists.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
