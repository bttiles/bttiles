"use client";

import { useState } from "react";
import {
  Search,
  Menu,
  X,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2024 Tile Trends: Bold Patterns and Natural Textures",
    excerpt:
      "Discover the hottest tile trends for 2024, from geometric patterns to organic textures that bring nature indoors.",
    content: "",
    image: "https://images.pexels.com/photos/6175107/pexels-photo-6175107.jpeg",
    category: "Trends",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["trends", "2024", "patterns", "natural"],
    featured: true,
  },
  {
    id: 2,
    title: "The Ultimate Guide to Tile Care and Maintenance",
    excerpt:
      "Learn professional tips for keeping your tiles looking pristine with proper cleaning techniques and maintenance schedules.",
    content: "",
    image: "https://images.pexels.com/photos/4604566/pexels-photo-4604566.jpeg",
    category: "Care Tips",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["maintenance", "cleaning", "care", "tips"],
    featured: false,
  },
];

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
                placeholder="Search blog posts..."
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
                className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/blog"
                className="text-primary-blue text-sm font-medium"
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
            <span>Blog</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Tile Trends & Tips
            </h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest tile trends, expert care tips, and
              exciting new arrivals in our comprehensive design blog.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary-blue" />
                Featured Posts
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article
                    key={post.id}
                    className="group bg-dark-lighter rounded-xl overflow-hidden border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-light mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-light">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
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
