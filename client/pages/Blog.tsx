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
  {
    id: 3,
    title: "New Arrivals: Sustainable Eco-Friendly Tile Textures",
    excerpt:
      "Explore our latest collection of environmentally conscious tile textures made from recycled materials.",
    content: "",
    image: "https://images.pexels.com/photos/2084238/pexels-photo-2084238.jpeg",
    category: "New Arrivals",
    author: "Emma Davis",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["eco-friendly", "sustainable", "new", "recycled"],
    featured: true,
  },
  {
    id: 4,
    title: "Choosing the Right Tile Size for Small Spaces",
    excerpt:
      "Maximize your small spaces with strategic tile sizing. Learn which patterns create illusions of spaciousness.",
    content: "",
    image: "https://images.pexels.com/photos/7245511/pexels-photo-7245511.jpeg",
    category: "Design Tips",
    author: "David Wilson",
    date: "2024-01-05",
    readTime: "4 min read",
    tags: ["small spaces", "design", "sizing", "patterns"],
    featured: false,
  },
  {
    id: 5,
    title: "Hexagonal Tiles: The Geometric Trend Taking Over",
    excerpt:
      "Hexagonal tiles are making a comeback. Discover creative ways to incorporate this timeless shape into modern designs.",
    content: "",
    image: "https://images.pexels.com/photos/8580731/pexels-photo-8580731.jpeg",
    category: "Trends",
    author: "Lisa Rodriguez",
    date: "2024-01-03",
    readTime: "7 min read",
    tags: ["hexagonal", "geometric", "modern", "design"],
    featured: false,
  },
  {
    id: 6,
    title: "Winter Care: Protecting Outdoor Tiles from Frost",
    excerpt:
      "Essential tips for maintaining outdoor tile installations during winter months and preventing frost damage.",
    content: "",
    image: "https://images.pexels.com/photos/4705853/pexels-photo-4705853.jpeg",
    category: "Care Tips",
    author: "Tom Anderson",
    date: "2023-12-28",
    readTime: "5 min read",
    tags: ["winter", "outdoor", "protection", "frost"],
    featured: false,
  },
];

const categories = [
  "All",
  "Trends",
  "Care Tips",
  "New Arrivals",
  "Design Tips",
];

export default function Blog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
      <header className="fixed top-0 left-0 right-0 bg-dark-lighter/95 backdrop-blur-sm border-b border-dark z-50 px-6 py-3">
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
            <a
              href="/"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              Home
            </a>
            <a
              href="/categories"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              Categories
            </a>
            <a href="/blog" className="text-primary-blue text-sm font-medium">
              Blog
            </a>
            <a
              href="/about"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              About
            </a>
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
          <div className="lg:hidden mt-4 pb-4 border-t border-dark animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-4 mt-4">
              <a
                href="/"
                className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
              >
                Home
              </a>
              <a
                href="/categories"
                className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
              >
                Categories
              </a>
              <a href="/blog" className="text-primary-blue text-sm font-medium">
                Blog
              </a>
              <a
                href="/about"
                className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
              >
                About
              </a>
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
          <nav className="text-sm text-gray-light mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <a href="/" className="text-primary-blue hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h1 className="text-4xl font-bold text-white mb-6">
              Tile Trends & Tips
            </h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest tile trends, expert care tips, and
              exciting new arrivals in our comprehensive design blog.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                    : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                }`}
              >
                {category === "Trends" && <TrendingUp className="w-4 h-4" />}
                {category === "Care Tips" && <Lightbulb className="w-4 h-4" />}
                {category === "New Arrivals" && (
                  <Sparkles className="w-4 h-4" />
                )}
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
              <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary-blue" />
                Featured Posts
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <article
                    key={post.id}
                    className="group bg-dark-lighter rounded-xl overflow-hidden border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-blue/20"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

          {/* Regular Posts */}
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
            <h2 className="text-2xl font-semibold text-white mb-8">
              All Posts ({filteredPosts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-dark-lighter rounded-xl overflow-hidden border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-light mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-400 bg-dark border border-dark px-2 py-1 rounded flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-light">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  No posts found
                </h3>
                <p className="text-gray-light">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-1000">
            <div className="bg-gradient-to-r from-dark-lighter via-primary-blue/10 to-dark-lighter rounded-2xl p-8 border border-dark text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-light mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest tile trends, care
                tips, and new arrivals delivered straight to your inbox.
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
                  <a
                    href="/categories"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Ceramic Tiles
                  </a>
                </li>
                <li>
                  <a
                    href="/categories"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Stone Tiles
                  </a>
                </li>
                <li>
                  <a
                    href="/categories"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Mosaic Tiles
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-medium text-white mb-3">Support</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/help"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/license"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    License
                  </a>
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
                href="/privacy"
                className="text-xs text-gray-light hover:text-primary-blue transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
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
