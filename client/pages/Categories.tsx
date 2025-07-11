import { useState, useRef, useEffect } from "react";
import {
  Search,
  Menu,
  X,
  ArrowRight,
  Grid3X3,
  Eye,
  Download,
} from "lucide-react";

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
  {
    id: 7,
    name: "Mosaic Tile Textures",
    description: "Small decorative tile arrangements",
    image:
      "https://images.pexels.com/photos/14579397/pexels-photo-14579397.jpeg",
    textureCount: 92,
    featured: false,
  },
  {
    id: 8,
    name: "Penny Round Tile Textures",
    description: "Small circular tiles for detailed surfaces",
    image: "https://images.pexels.com/photos/7086367/pexels-photo-7086367.jpeg",
    textureCount: 43,
    featured: false,
  },
  {
    id: 9,
    name: "Slate Tile Textures",
    description: "Natural stone with rustic appeal",
    image: "https://images.pexels.com/photos/6788528/pexels-photo-6788528.jpeg",
    textureCount: 61,
    featured: false,
  },
  {
    id: 10,
    name: "Square Tile Textures",
    description: "Classic square patterns and layouts",
    image: "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
    textureCount: 156,
    featured: true,
  },
  {
    id: 11,
    name: "Stone Tile Textures",
    description: "Natural stone finishes and textures",
    image: "https://images.pexels.com/photos/6603943/pexels-photo-6603943.jpeg",
    textureCount: 112,
    featured: false,
  },
  {
    id: 12,
    name: "Terracotta Tile Textures",
    description: "Earthy clay tiles with warm tones",
    image: "https://images.pexels.com/photos/6023580/pexels-photo-6023580.jpeg",
    textureCount: 34,
    featured: false,
  },
  {
    id: 13,
    name: "Terrazzo Tile Textures",
    description: "Composite material with decorative chips",
    image: "https://images.pexels.com/photos/4977440/pexels-photo-4977440.jpeg",
    textureCount: 29,
    featured: false,
  },
  {
    id: 14,
    name: "Yubi Tile Textures",
    description: "Textured finger-like surface patterns",
    image:
      "https://images.pexels.com/photos/12969405/pexels-photo-12969405.jpeg",
    textureCount: 18,
    featured: false,
  },
  {
    id: 15,
    name: "Zellige Tile Textures",
    description: "Handmade glazed terra cotta tiles",
    image: "https://images.pexels.com/photos/2084238/pexels-photo-2084238.jpeg",
    textureCount: 52,
    featured: false,
  },
];

export default function Categories() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "featured" && category.featured);
    return matchesSearch && matchesFilter;
  });

  const totalTextures = categories.reduce(
    (sum, cat) => sum + cat.textureCount,
    0,
  );

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
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
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark border border-dark text-white text-sm rounded-lg focus:outline-none focus:border-primary-blue transition-all duration-300 focus:shadow-lg focus:shadow-primary-blue/20"
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
              className="text-primary-blue text-sm font-medium"
            >
              Categories
            </a>
            <a
              href="/about"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              About
            </a>
            <button className="bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/30 hover:scale-105">
              Sign In
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-primary-blue transition-colors"
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
                className="text-primary-blue text-sm font-medium"
              >
                Categories
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
            <span>Categories</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-primary-blue to-white bg-clip-text text-transparent">
              Tile Categories
            </h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of {categories.length} tile
              texture categories featuring over {totalTextures.toLocaleString()}{" "}
              high-quality textures
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === "all"
                    ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                    : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setSelectedFilter("featured")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === "featured"
                    ? "bg-primary-blue text-white shadow-lg shadow-primary-blue/30"
                    : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                }`}
              >
                Featured
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <section ref={observerRef}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCategories.map((category, index) => (
                <a
                  key={category.id}
                  href="/"
                  className={`group relative bg-dark-lighter rounded-2xl overflow-hidden border border-dark transition-all duration-500 hover:border-primary-blue hover:shadow-2xl hover:shadow-primary-blue/20 hover:-translate-y-2 cursor-pointer block ${
                    isVisible
                      ? "animate-in fade-in slide-in-from-bottom-8"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Featured Badge */}
                  {category.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-primary-blue text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-3">
                        <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-blue transition-colors duration-200">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-blue transition-colors duration-200">
                          <Grid3X3 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
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
                        <Download className="w-4 h-4 text-primary-blue" />
                        <span className="text-sm font-medium text-white">
                          {category.textureCount} textures
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full transition-all duration-300 ${
                              i < Math.floor(category.textureCount / 30)
                                ? "bg-primary-blue"
                                : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCategories.length === 0 && (
              <div className="text-center py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-24 h-24 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  No categories found
                </h3>
                <p className="text-gray-light">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </section>

          {/* Stats Section */}
          <section className="mt-20 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="bg-gradient-to-r from-dark-lighter via-primary-blue/10 to-dark-lighter rounded-2xl p-8 border border-dark">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    {categories.length}
                  </div>
                  <div className="text-sm text-gray-light">Categories</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    {totalTextures.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-light">Total Textures</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    4K+
                  </div>
                  <div className="text-sm text-gray-light">Resolution</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    100%
                  </div>
                  <div className="text-sm text-gray-light">Quality</div>
                </div>
              </div>
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

            <div>
              <h5 className="text-sm font-medium text-white mb-3">
                Categories
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Ceramic Tiles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Stone Tiles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
                    href="#"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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