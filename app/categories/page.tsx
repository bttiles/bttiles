"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTextures } from "../../hooks/useTextures";
import { categories as textureCategories } from "../../lib/temp-texture-data";
import { useCategories } from "../../hooks/useCategories";
import Footer from "@/ui/Footer";

export default function CategoriesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [visibleCount, setVisibleCount] = useState(12);
  const { categories, loading: catLoading, error: catError } = useCategories();



  const { textures, loading, error, pagination } = useTextures({
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    search: searchQuery || undefined,
    page: currentPage,
    limit: itemsPerPage,
  });


  const totalPages = pagination?.total || 1;


  const currentPageTextures = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return textures.slice(startIndex, endIndex);
  }, [textures, currentPage, itemsPerPage]);

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
            <Link
              href="/"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-primary-blue text-sm font-medium"
            >
              Categories
            </Link>
            <Link
              href="/featured"
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
              <Link
                href="/"
                className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="text-primary-blue text-sm font-medium"
              >
                Categories
              </Link>
              <Link
                href="/featured"
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
            <span>Categories</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">All Tile Texture Categories</h1>
            <p className="text-base text-gray-light max-w-2xl mx-auto">
              Dive deep into {categories.length} detailed categories to find the right texture for your specific needs.
            </p>

          </div>

          {/* Categories Section */}
          <section className="mb-10">
            <h3 className="text-lg font-medium text-white mb-6">
              {catLoading ? "Loading..." : `${categories.length} Tile Categories`}
            </h3>

            {/* Grid for all category cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* All Categories Card */}
              <div
                onClick={() => setSelectedCategory("all")}
                className={`cursor-pointer p-5 rounded-xl border transition hover:border-primary-blue bg-dark-lighter hover:bg-primary-blue group ${selectedCategory === "all" ? "ring-2 ring-primary-blue" : ""
                  }`}
              >
                <h4 className="text-white text-base font-semibold group-hover:text-white">
                  All Categories
                </h4>
                <p className="text-gray-light text-sm mt-1">View everything together</p>
              </div>

              {/* Dynamic Categories */}
              {categories.slice(0, visibleCount).map((category) => (
                <div
                  key={category._id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`cursor-pointer p-5 rounded-xl border transition hover:border-primary-blue bg-dark-lighter hover:bg-primary-blue group ${selectedCategory === category.name ? "ring-2 ring-primary-blue" : ""
                    }`}
                >
                  <h4 className="text-white text-base font-semibold group-hover:text-white">
                    {category.name}
                  </h4>
                  <p className="text-gray-light text-sm mt-1">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {categories.length > visibleCount && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="px-5 py-2 text-sm font-medium rounded-full border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white transition-all"
                >
                  Show More Categories
                </button>
              </div>
            )}
          </section>



          {/* Textures Grid */}
          <section>
            <h3 className="text-lg font-medium text-white mb-6">
              <span>{textures.length}</span>
              <span> Tile Textures</span>
              {selectedCategory !== "all" && (
                <span className="text-primary-blue">
                  {" "}
                  in {selectedCategory}
                </span>
              )}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {textures?.map((texture, index) => (
                <Link
                  key={texture._id}
                  href={`/texture/${texture._id}`}
                  className="bg-dark-lighter rounded-lg overflow-hidden border border-dark transition-all duration-200 hover:border-primary-blue hover:-translate-y-1 cursor-pointer group block"
                >
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
                    <p className="text-xs text-gray-light">
                      {texture.category}
                    </p>
                  </div>
                </Link>
              ))}

            </div>

            {/* No Results */}
            {textures.length === 0 && (
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
                  className={`px-3 py-2 text-sm border border-dark rounded-lg transition-colors ${currentPage === 1
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
                    className={`px-3 py-2 text-sm border border-dark rounded-lg min-w-[40px] transition-colors ${currentPage === page
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
                  className={`px-3 py-2 text-sm border border-dark rounded-lg transition-colors ${currentPage === totalPages
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
      </main>

      <Footer />
    </div>
  );
}
