"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Menu, X, Star, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { textures, categories, type Texture } from "../lib/temp-texture-data";

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Create featured and trending texture selections
  const featuredTextures = useMemo(() => {
    // Select some textures as featured (every 3rd texture)
    return textures.filter((texture, index) => index % 3 === 0);
  }, []);

  const trendingTextures = useMemo(() => {
    // Select some textures as trending (every 4th texture starting from index 1)
    return textures.filter((texture, index) => (index + 1) % 4 === 0);
  }, []);

  const filteredTextures = useMemo(() => {
    let filtered = textures;

    if (selectedFilter === "featured") {
      filtered = featuredTextures;
    } else if (selectedFilter === "trending") {
      filtered = trendingTextures;
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (texture) =>
          texture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          texture.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return filtered;
  }, [searchQuery, selectedFilter, featuredTextures, trendingTextures]);

  const totalPages = Math.ceil(filteredTextures.length / itemsPerPage);

  const currentPageTextures = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredTextures.slice(startIndex, endIndex);
  }, [filteredTextures, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedFilter]);

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
                placeholder="Search featured textures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              className="text-primary-blue text-sm font-medium"
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
                className="text-primary-blue text-sm font-medium"
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
            <span>Featured Textures</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Featured & Trending Textures
            </h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto">
              Discover our hand-picked selection of premium tile textures. From
              trending designs to customer favorites, find inspiration for your
              next project.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === "all"
                  ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                  : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
              }`}
            >
              All Textures
            </button>
            <button
              onClick={() => setSelectedFilter("featured")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === "featured"
                  ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                  : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
              }`}
            >
              <Star className="w-4 h-4" />
              Featured ({featuredTextures.length})
            </button>
            <button
              onClick={() => setSelectedFilter("trending")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedFilter === "trending"
                  ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                  : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Trending ({trendingTextures.length})
            </button>
          </div>

          {/* Textures Grid */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              {selectedFilter === "featured" && (
                <Star className="w-6 h-6 text-primary-blue" />
              )}
              {selectedFilter === "trending" && (
                <TrendingUp className="w-6 h-6 text-primary-blue" />
              )}
              {selectedFilter === "all" && (
                <Sparkles className="w-6 h-6 text-primary-blue" />
              )}
              {selectedFilter === "featured"
                ? "Featured Textures"
                : selectedFilter === "trending"
                  ? "Trending Textures"
                  : "All Premium Textures"}{" "}
              ({filteredTextures.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPageTextures.map((texture, index) => (
                <Link
                  key={texture.id}
                  href={`/texture/${texture.id}`}
                  className="group bg-dark-lighter rounded-xl overflow-hidden border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-blue/20 cursor-pointer block"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={texture.image}
                      alt={texture.name}
                      fill
                      priority={index < 3}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badge for featured/trending */}
                    {selectedFilter !== "all" && (
                      <div className="absolute top-4 right-4 z-10">
                        {selectedFilter === "featured" ? (
                          <div className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </div>
                        ) : (
                          <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                        {texture.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-blue transition-colors">
                      {texture.name}
                    </h3>
                    {texture.description && (
                      <p className="text-gray-light mb-4 text-sm leading-relaxed line-clamp-3">
                        {texture.description}
                      </p>
                    )}
                    {texture.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {texture.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-400 bg-dark border border-dark px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredTextures.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  No textures found
                </h3>
                <p className="text-gray-light">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}

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

          {/* Newsletter Signup */}
          <section className="mt-20">
            <div className="bg-gradient-to-r from-dark-lighter via-primary-blue/10 to-dark-lighter rounded-2xl p-8 border border-dark text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Stay Updated with New Textures
              </h2>
              <p className="text-gray-light mb-6 max-w-2xl mx-auto">
                Be the first to know about our latest texture releases, trending
                designs, and exclusive collections. Get notifications about new
                additions to our library.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-dark border border-dark rounded-lg text-white focus:outline-none focus:border-primary-blue transition-colors"
                />
                <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
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
