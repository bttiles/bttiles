"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/Testimonials";

interface Texture {
  id: number;
  name: string;
  category: string;
  image: string;
}

const categories = [
  "Acoustic Tile Textures",
  "Ceiling Tile Textures",
  "Herringbone Tile Textures",
  "Hexagonal Tile Textures",
  "Laminate Tile Textures",
  "Marble Tile Textures",
  "Mosaic Tile Textures",
  "Penny Round Tile Textures",
  "Slate Tile Textures",
  "Square Tile Textures",
  "Stone Tile Textures",
  "Terracotta Tile Textures",
  "Terrazzo Tile Textures",
  "Yubi Tile Textures",
  "Zellige Tile Textures",
];

const textures: Texture[] = [
  {
    id: 1,
    name: "Smooth Concrete Panel Ceiling Texture",
    category: "Ceiling Tile Textures",
    image: "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
  },
  {
    id: 2,
    name: "Geometric Patterned Paver Texture, Beige & Black",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
  },
  {
    id: 3,
    name: "Patterned Aggregate Concrete Paver Texture",
    category: "Stone Tile Textures",
    image: "https://images.pexels.com/photos/6603943/pexels-photo-6603943.jpeg",
  },
  {
    id: 4,
    name: "Brushed Clay Tile Texture",
    category: "Terracotta Tile Textures",
    image: "https://images.pexels.com/photos/6023580/pexels-photo-6023580.jpeg",
  },
  {
    id: 5,
    name: "Hexagonal White Marble Tile",
    category: "Hexagonal Tile Textures",
    image: "https://images.pexels.com/photos/6175107/pexels-photo-6175107.jpeg",
  },
  {
    id: 6,
    name: "Mosaic Glass Tile Blue Pattern",
    category: "Mosaic Tile Textures",
    image:
      "https://images.pexels.com/photos/14579397/pexels-photo-14579397.jpeg",
  },
  {
    id: 7,
    name: "Herringbone Wood Tile Floor",
    category: "Herringbone Tile Textures",
    image: "https://images.pexels.com/photos/7746947/pexels-photo-7746947.jpeg",
  },
  {
    id: 8,
    name: "Penny Round Ceramic Tile White",
    category: "Penny Round Tile Textures",
    image: "https://images.pexels.com/photos/7086367/pexels-photo-7086367.jpeg",
  },
  {
    id: 9,
    name: "Natural Slate Tile Dark Gray",
    category: "Slate Tile Textures",
    image: "https://images.pexels.com/photos/6788528/pexels-photo-6788528.jpeg",
  },
  {
    id: 10,
    name: "Laminate Wood Tile Oak",
    category: "Laminate Tile Textures",
    image:
      "https://images.pexels.com/photos/11285345/pexels-photo-11285345.png",
  },
  {
    id: 11,
    name: "Terrazzo Tile Speckled Pattern",
    category: "Terrazzo Tile Textures",
    image: "https://images.pexels.com/photos/4977440/pexels-photo-4977440.jpeg",
  },
  {
    id: 12,
    name: "Zellige Handmade Tile Green",
    category: "Zellige Tile Textures",
    image: "https://images.pexels.com/photos/2084238/pexels-photo-2084238.jpeg",
  },
  {
    id: 13,
    name: "Acoustic Foam Tile Texture",
    category: "Acoustic Tile Textures",
    image: "https://images.pexels.com/photos/1660916/pexels-photo-1660916.jpeg",
  },
  {
    id: 14,
    name: "Yubi Finger Tile Pattern",
    category: "Yubi Tile Textures",
    image:
      "https://images.pexels.com/photos/12969405/pexels-photo-12969405.jpeg",
  },
  {
    id: 15,
    name: "Carrara Marble Tile Veined",
    category: "Marble Tile Textures",
    image: "https://images.pexels.com/photos/4604566/pexels-photo-4604566.jpeg",
  },
  {
    id: 16,
    name: "Square Ceramic Tile White",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/7245511/pexels-photo-7245511.jpeg",
  },
  {
    id: 17,
    name: "Travertine Stone Tile Beige",
    category: "Stone Tile Textures",
    image: "https://images.pexels.com/photos/4705853/pexels-photo-4705853.jpeg",
  },
  {
    id: 18,
    name: "Subway Tile White Glossy",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/7534571/pexels-photo-7534571.jpeg",
  },
  {
    id: 19,
    name: "Moroccan Mosaic Tile Pattern",
    category: "Mosaic Tile Textures",
    image:
      "https://images.pexels.com/photos/32891809/pexels-photo-32891809.jpeg",
  },
  {
    id: 20,
    name: "Hexagonal Cement Tile Black",
    category: "Hexagonal Tile Textures",
    image: "https://images.pexels.com/photos/8580731/pexels-photo-8580731.jpeg",
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemsPerPage = 12;

  const filteredTextures = useMemo(() => {
    let filtered = textures;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (texture) => texture.category === selectedCategory,
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (texture) =>
          texture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          texture.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredTextures.length / itemsPerPage);

  const currentPageTextures = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredTextures.slice(startIndex, endIndex);
  }, [filteredTextures, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const getPaginationButtons = () => {
    const maxButtons = 5;
    const buttons = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    return buttons;
  };

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark border border-dark text-white text-sm rounded-lg focus:outline-none focus:border-primary-blue transition-colors"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-primary-blue text-sm font-medium">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-dark">
            <nav className="flex flex-col gap-4 mt-4">
              <Link href="/" className="text-primary-blue text-sm font-medium">
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
              <button className="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors self-start">
                Sign In
              </button>
            </nav>
          </div>
        )}
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
            <span>Tile</span>
          </nav>

          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-medium text-white mb-3">
              Tile Textures
            </h1>
            <p className="text-sm text-gray-light leading-relaxed max-w-4xl">
              Browse a variety of tile textures, including ceramic, and mosaic,
              with styles such as square, hexagonal, and patterned. Perfect for
              floors, walls, and decorative surfaces. Compatible with Blender,
              Maya, Cinema 4D, 3ds Max, Sketchup, Unity, Unreal Engine, and
              more.
            </p>
          </div>

          {/* Categories Section */}
          <section className="mb-10">
            <h3 className="text-lg font-medium text-white mb-6">
              <span>{categories.length}</span>
              <span> Tile Categories</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`border border-dark rounded-lg px-4 py-3 text-sm text-left transition-all hover:border-primary-blue ${
                  selectedCategory === "all"
                    ? "bg-primary-blue text-white"
                    : "bg-dark-lighter text-white"
                }`}
              >
                All Categories
              </button>
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`border border-dark rounded-lg px-4 py-3 text-sm text-left transition-all hover:border-primary-blue ${
                    selectedCategory === category
                      ? "bg-primary-blue text-white"
                      : "bg-dark-lighter text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Textures Grid */}
          <section>
            <h3 className="text-lg font-medium text-white mb-6">
              <span>{filteredTextures.length}</span>
              <span> Tile Textures</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {currentPageTextures.map((texture) => (
                <Link
                  key={texture.id}
                  href={`/texture/${texture.id}`}
                  className="bg-dark-lighter rounded-lg overflow-hidden border border-dark transition-all duration-200 hover:border-primary-blue hover:-translate-y-1 cursor-pointer group block"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={texture.image}
                      alt={texture.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-medium text-white mb-2 leading-snug">
                      {texture.name}
                    </h4>
                    <p className="text-xs text-gray-light">
                      {texture.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mb-10">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={`px-3 py-2 text-sm border border-dark rounded-lg transition-colors ${
                    currentPage === 1
                      ? "text-gray-500 cursor-not-allowed opacity-50"
                      : "text-white hover:border-primary-blue cursor-pointer"
                  } bg-dark-lighter`}
                >
                  Previous
                </button>

                {getPaginationButtons().map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm border border-dark rounded-lg min-w-[40px] transition-colors ${
                      currentPage === page
                        ? "bg-primary-blue text-white border-primary-blue"
                        : "bg-dark-lighter text-white hover:border-primary-blue"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  className={`px-3 py-2 text-sm border border-dark rounded-lg transition-colors ${
                    currentPage === totalPages
                      ? "text-gray-500 cursor-not-allowed opacity-50"
                      : "text-white hover:border-primary-blue cursor-pointer"
                  } bg-dark-lighter`}
                >
                  Next
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Testimonials Section */}
        <Testimonials />
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter border-t border-dark px-6 py-12">
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

            <div>
              <h5 className="text-sm font-medium text-white mb-3">
                Categories
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/categories"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Ceramic Tiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Stone Tiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Mosaic Tiles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-medium text-white mb-3">Support</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/help"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/license"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    License
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-medium text-white mb-3">Connect</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dark pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-light">
              © 2024 TileTextures. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-gray-light hover:text-primary-blue transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-light hover:text-primary-blue transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
