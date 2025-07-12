"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Menu, X, ArrowRight, Grid3X3, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { textures, categories as textureCategories } from "@/texture-data";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  textureCount: number;
  featured: boolean;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Acoustic Tile Textures",
    description: "Sound-absorbing tiles for studios and offices",
    image: "https://images.pexels.com/photos/1660916/pexels-photo-1660916.jpeg",
    textureCount: 45,
    featured: false,
  },
  {
    id: 2,
    name: "Ceiling Tile Textures",
    description: "Professional ceiling solutions and panels",
    image: "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
    textureCount: 67,
    featured: true,
  },
  {
    id: 3,
    name: "Herringbone Tile Textures",
    description: "Classic zigzag patterns for floors and walls",
    image: "https://images.pexels.com/photos/7746947/pexels-photo-7746947.jpeg",
    textureCount: 89,
    featured: true,
  },
  {
    id: 4,
    name: "Hexagonal Tile Textures",
    description: "Geometric six-sided tile designs",
    image: "https://images.pexels.com/photos/6175107/pexels-photo-6175107.jpeg",
    textureCount: 56,
    featured: false,
  },
  {
    id: 5,
    name: "Laminate Tile Textures",
    description: "Durable synthetic material finishes",
    image:
      "https://images.pexels.com/photos/11285345/pexels-photo-11285345.png",
    textureCount: 78,
    featured: false,
  },
  {
    id: 6,
    name: "Marble Tile Textures",
    description: "Luxury natural stone with elegant veining",
    image: "https://images.pexels.com/photos/4604566/pexels-photo-4604566.jpeg",
    textureCount: 134,
    featured: true,
  },
];

export default function CategoriesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "featured" && category.featured);
    return matchesSearch && matchesFilter;
  });

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
                placeholder="Search categories..."
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
            <h1 className="text-5xl font-bold text-white mb-6">
              Tile Categories
            </h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of tile texture categories
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === "all"
                    ? "bg-primary-blue text-white"
                    : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setSelectedFilter("featured")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === "featured"
                    ? "bg-primary-blue text-white"
                    : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                }`}
              >
                Featured
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCategories.map((category) => (
                <Link
                  key={category.id}
                  href="/"
                  className="group relative bg-dark-lighter rounded-2xl overflow-hidden border border-dark transition-all duration-500 hover:border-primary-blue hover:shadow-2xl hover:-translate-y-2 cursor-pointer block"
                >
                  {/* Featured Badge */}
                  {category.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-primary-blue text-white text-xs px-3 py-1 rounded-full font-medium">
                      Featured
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-primary-blue transition-colors duration-300">
                        {category.name}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" />
                    </div>

                    <p className="text-sm text-gray-light mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-primary-blue" />
                        <span className="text-sm font-medium text-white">
                          {category.textureCount} textures
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
