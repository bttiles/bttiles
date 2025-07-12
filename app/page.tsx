"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Menu, X, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import { useTextures, type TextureData } from "../hooks/useTextures";
import { likeTexture, saveTexture, getSessionId } from "../lib/session";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use dynamic data
  const { textures, loading, error, pagination, total } = useTextures({
    category: selectedCategory === "all" ? undefined : selectedCategory,
    search: searchQuery || undefined,
    page: currentPage,
    limit: 12,
  });

  // Categories from API data
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(textures.map((texture) => texture.category)),
    );
    return uniqueCategories.sort();
  }, [textures]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const getPaginationButtons = () => {
    if (!pagination) return [];

    const maxButtons = 5;
    const buttons = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(pagination.total, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    return buttons;
  };

  const handleLike = async (textureId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    try {
      await likeTexture(textureId);
      // Optionally refetch data or update local state
    } catch (error) {
      console.error("Failed to like texture:", error);
    }
  };

  const handleSave = async (textureId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    try {
      await saveTexture(textureId);
      // Optionally refetch data or update local state
    } catch (error) {
      console.error("Failed to save texture:", error);
    }
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
              Featured
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
                Featured
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
              <span>{total}</span>
              <span> Tile Textures</span>
            </h3>

            {/* Loading State */}
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-dark-lighter rounded-lg overflow-hidden border border-dark animate-pulse"
                  >
                    <div className="aspect-square bg-gray-700"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-16">
                <div className="text-red-400 mb-4">
                  <X className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Failed to load textures
                  </h3>
                  <p className="text-gray-light">{error}</p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-primary-blue-dark transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Textures Grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {textures.map((texture, index) => (
                  <div
                    key={texture._id}
                    className="bg-dark-lighter rounded-lg overflow-hidden border border-dark transition-all duration-200 hover:border-primary-blue hover:-translate-y-1 cursor-pointer group relative"
                  >
                    <Link href={`/texture/${texture._id}`} className="block">
                      <div className="aspect-square overflow-hidden relative">
                        <Image
                          src={texture.image}
                          alt={texture.name}
                          fill
                          priority={index < 4}
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-medium text-white mb-2 leading-snug">
                          {texture.name}
                        </h4>
                        <p className="text-xs text-gray-light mb-2">
                          {texture.category}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{texture.views} views</span>
                          <span>{texture.likes} likes</span>
                        </div>
                      </div>
                    </Link>

                    {/* Interaction Buttons */}
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => handleLike(texture._id, e)}
                        className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination && pagination.total > 1 && (
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
                  disabled={currentPage === (pagination?.total || 1)}
                  onClick={() =>
                    setCurrentPage(
                      Math.min(pagination?.total || 1, currentPage + 1),
                    )
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
