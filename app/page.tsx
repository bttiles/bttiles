"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import { useTextures } from "../hooks/useTextures";
import { useCategories } from "../hooks/useCategories";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { categories } = useCategories();

  const { textures, loading, error, pagination } = useTextures({
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    search: searchQuery || undefined,
    page: currentPage,
    limit: itemsPerPage,
  });

  const totalPages = pagination?.total || 1;

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
      <Header />

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
              Bismillah Tuff Tiles
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
                className={`border border-dark rounded-lg px-4 py-3 text-sm text-left transition-all hover:border-primary-blue ${selectedCategory === "all"
                  ? "bg-primary-blue text-white"
                  : "bg-dark-lighter text-white"
                  }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`border border-dark rounded-lg px-4 py-3 text-sm text-left transition-all hover:border-primary-blue ${selectedCategory === category.name
                    ? "bg-primary-blue text-white"
                    : "bg-dark-lighter text-white"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </section>

          {/* Textures Grid */}
          <section>
            <h3 className="text-lg font-medium text-white mb-6">
              {loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <span>{textures.length}</span>
                  <span> Tile Textures</span>
                </>
              )}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {loading ? (
                [...Array(itemsPerPage)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-dark-lighter rounded-lg overflow-hidden border border-dark animate-pulse"
                  >
                    <div className="aspect-square bg-gray-700"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                ))
              ) : error ? (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-light">Failed to load textures</p>
                </div>
              ) : textures.length > 0 ? (
                [...textures] // clone the array
                  .sort(() => Math.random() - 0.5) // shuffle it
                  .map((texture, index) => (
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
                  ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-light">No textures found</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {!loading && totalPages > 1 && (
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

        {/* Testimonials Section */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
