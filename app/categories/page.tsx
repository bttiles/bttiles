"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  Filter,
  SortAsc,
  SortDesc,
  Grid3X3,
  List,
  Heart,
  Eye,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTextures } from "../../hooks/useTextures";
import { useCategories } from "../../hooks/useCategories";
import Footer from "../../components/ui/Footer";
import Header from "@/ui/Header";

export default function CategoriesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFeatured, setShowFeatured] = useState(false);
  const [showTrending, setShowTrending] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { categories, loading: catLoading } = useCategories();
  const { textures, loading, error, pagination } = useTextures({
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    search: searchQuery || undefined,
    featured: showFeatured || undefined,
    trending: showTrending || undefined,
    page: currentPage,
    limit: itemsPerPage,
  });

  const totalPages = pagination?.total || 1;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, showFeatured, showTrending]);

  // Sort textures
  const sortedTextures = [...textures].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "views":
        comparison = a.views - b.views;
        break;
      case "likes":
        comparison = a.likes - b.likes;
        break;
      case "newest":
        comparison =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        break;
      default:
        comparison = 0;
    }
    return sortOrder === "desc" ? -comparison : comparison;
  });

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setShowFeatured(false);
    setShowTrending(false);
    setSortBy("name");
    setSortOrder("asc");
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Browse by Category
            </h1>
            <p className="text-gray-light text-lg">
              {catLoading
                ? "Loading categories..."
                : `Discover ${categories.length} categories of premium tiles with advanced filtering and sorting options.`}
            </p>
          </div>

          {/* Advanced Filters Bar */}
          <div className="bg-dark-lighter border border-dark rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Categories Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-dark border border-dark text-white rounded-lg px-3 py-2 focus:outline-none focus:border-primary-blue"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name} ({category.textureCount})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white mb-2">
                  Sort By
                </label>
                <div className="flex gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="flex-1 bg-dark border border-dark text-white rounded-lg px-3 py-2 focus:outline-none focus:border-primary-blue"
                  >
                    <option value="name">Name</option>
                    <option value="views">Views</option>
                    <option value="likes">Likes</option>
                    <option value="newest">Newest</option>
                  </select>
                  <button
                    onClick={() =>
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    }
                    className="bg-dark border border-dark text-white px-3 py-2 rounded-lg hover:border-primary-blue transition-colors"
                  >
                    {sortOrder === "asc" ? (
                      <SortAsc className="w-4 h-4" />
                    ) : (
                      <SortDesc className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Special Filters */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-white mb-2">
                  Special
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowFeatured(!showFeatured)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      showFeatured
                        ? "bg-yellow-500 text-white"
                        : "bg-dark border border-dark text-white hover:border-yellow-500"
                    }`}
                  >
                    <Star className="w-4 h-4 inline mr-1" />
                    Featured
                  </button>
                  <button
                    onClick={() => setShowTrending(!showTrending)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      showTrending
                        ? "bg-green-500 text-white"
                        : "bg-dark border border-dark text-white hover:border-green-500"
                    }`}
                  >
                    <TrendingUp className="w-4 h-4 inline mr-1" />
                    Trending
                  </button>
                </div>
              </div>

              {/* View Mode & Clear */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  View
                </label>
                <div className="flex gap-2">
                  <div className="flex border border-dark rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${
                        viewMode === "grid"
                          ? "bg-primary-blue text-white"
                          : "bg-dark text-gray-light hover:text-white"
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${
                        viewMode === "list"
                          ? "bg-primary-blue text-white"
                          : "bg-dark text-gray-light hover:text-white"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="px-3 py-2 bg-dark border border-dark text-gray-light rounded-lg hover:border-primary-blue hover:text-white transition-colors text-sm"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {loading
                  ? "Loading..."
                  : `${sortedTextures.length} Tile${sortedTextures.length !== 1 ? "s" : ""} Found`}
              </h2>
              {selectedCategory !== "all" && (
                <p className="text-primary-blue mt-1">in {selectedCategory}</p>
              )}
            </div>

            <div className="text-sm text-gray-light">
              {sortBy !== "name" && (
                <span>
                  Sorted by {sortBy} (
                  {sortOrder === "asc" ? "ascending" : "descending"})
                </span>
              )}
            </div>
          </div>

          {/* Textures Grid/List */}
          {loading ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={`bg-dark-lighter rounded-lg overflow-hidden border border-dark animate-pulse ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div
                    className={`bg-gray-700 ${
                      viewMode === "list" ? "w-48 h-32" : "aspect-square"
                    }`}
                  ></div>
                  {viewMode === "list" && (
                    <div className="p-4 flex-1">
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-2/3 mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  )}
                  {viewMode === "grid" && (
                    <div className="p-4">
                      <div className="h-4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <X className="w-12 h-12 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Failed to load tiles
              </h3>
              <p className="text-gray-light">Please try again later</p>
            </div>
          ) : sortedTextures.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {sortedTextures.map((texture, index) => (
                <Link
                  key={texture._id}
                  href={`/texture/${texture._id}`}
                  className={`group bg-dark-lighter rounded-lg overflow-hidden border border-dark transition-all duration-300 hover:border-primary-blue hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-blue/10 ${
                    viewMode === "list" ? "flex" : "block"
                  }`}
                >
                  <div
                    className={`overflow-hidden relative ${
                      viewMode === "list"
                        ? "w-48 h-32 flex-shrink-0"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={texture.image}
                      alt={texture.name}
                      fill
                      priority={index < 4}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {texture.featured && (
                        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                          ⭐ Featured
                        </span>
                      )}
                      {texture.trending && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          🔥 Trending
                        </span>
                      )}
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {texture.views}
                      </div>
                      <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {texture.likes}
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-primary-blue transition-colors">
                      {texture.name}
                    </h4>
                    <p className="text-sm text-gray-light mb-2">
                      {texture.category}
                    </p>

                    {viewMode === "list" && (
                      <p className="text-sm text-gray-light line-clamp-2 mb-3">
                        {texture.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {texture.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {texture.likes.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                No tiles found
              </h3>
              <p className="text-gray-light mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearFilters}
                className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-primary-blue-dark transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className={`px-4 py-2 text-sm border border-dark rounded-lg transition-colors ${
                  currentPage === 1
                    ? "text-gray-500 cursor-not-allowed opacity-50"
                    : "text-white hover:border-primary-blue cursor-pointer hover:bg-primary-blue/10"
                } bg-dark-lighter`}
              >
                Previous
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 text-sm border border-dark rounded-lg min-w-[40px] transition-colors ${
                      currentPage === page
                        ? "bg-primary-blue text-white border-primary-blue"
                        : "bg-dark-lighter text-white hover:border-primary-blue hover:bg-primary-blue/10"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                className={`px-4 py-2 text-sm border border-dark rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? "text-gray-500 cursor-not-allowed opacity-50"
                    : "text-white hover:border-primary-blue cursor-pointer hover:bg-primary-blue/10"
                } bg-dark-lighter`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
