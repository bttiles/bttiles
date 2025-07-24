"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Menu, X, Star, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTextures } from "../../hooks/useTextures";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";


export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { textures, loading, error } = useTextures({
    limit: 0, 
  });


  const featuredTextures = useMemo(() => {
    return textures.filter((texture) => texture.featured);
  }, [textures]);

  const trendingTextures = useMemo(() => {
    return textures.filter((texture) => texture.trending);
  }, [textures]);


  const filteredTextures = useMemo(() => {
    let filtered = textures;

    if (selectedFilter === "featured") {
      filtered = featuredTextures;
    } else if (selectedFilter === "trending") {
      filtered = trendingTextures;
    } else if (selectedFilter === "all") {
      // Merge featured + trending and remove duplicates by _id
      const all = [...featuredTextures, ...trendingTextures];
      const unique = Array.from(new Map(all.map(item => [item._id, item])).values());
      filtered = unique;
    }

    if (searchQuery) {
      filtered = filtered.filter((texture) =>
        `${texture.name} ${texture.category}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [textures, searchQuery, selectedFilter, featuredTextures, trendingTextures]);



  const totalPages = Math.max(1, Math.ceil(filteredTextures.length / itemsPerPage));


  const currentPageTextures = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTextures.slice(start, start + itemsPerPage);
  }, [filteredTextures, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedFilter]);


  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages]);

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

  if (loading) return <p className="text-center py-20 text-gray-light">Loading textures...</p>;
  if (error) return <p className="text-center py-20 text-red-500">Error loading textures.</p>;

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
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedFilter === "all"
                ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                }`}
            >
              All Textures
            </button>
            <button
              onClick={() => setSelectedFilter("featured")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedFilter === "featured"
                ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                }`}
            >
              <Star className="w-4 h-4" />
              Featured ({featuredTextures.length})
            </button>
            <button
              onClick={() => setSelectedFilter("trending")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${selectedFilter === "trending"
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
                  key={texture._id}
                  href={`/texture/${texture._id}`}
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
      <Footer />
    </div>
  );
}
