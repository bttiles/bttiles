import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  Download,
  Heart,
  Share2,
  Eye,
  ArrowLeft,
  Info,
  Palette,
  Ruler,
  FileImage,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Texture {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  resolution: string;
  fileSize: string;
  format: string;
  seamless: boolean;
  tags: string[];
  downloads: number;
  rating: number;
  price: string;
}

const sampleTextures: Texture[] = [
  {
    id: 1,
    name: "Smooth Concrete Panel Ceiling Texture",
    category: "Ceiling Tile Textures",
    image: "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
    description:
      "A high-quality smooth concrete panel ceiling texture perfect for modern architectural visualization. This seamless texture features subtle variations in tone and realistic concrete surface details that work excellently in both interior and exterior scenes.",
    resolution: "4096 x 4096",
    fileSize: "12.5 MB",
    format: "JPG, PNG, TIFF",
    seamless: true,
    tags: ["concrete", "ceiling", "modern", "architecture", "smooth"],
    downloads: 1250,
    rating: 4.8,
    price: "Free",
  },
  {
    id: 2,
    name: "Geometric Patterned Paver Texture, Beige & Black",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
    description:
      "An elegant geometric patterned paver texture featuring a sophisticated beige and black color scheme. This versatile texture is perfect for walkways, patios, and modern flooring designs in both residential and commercial projects.",
    resolution: "4096 x 4096",
    fileSize: "15.2 MB",
    format: "JPG, PNG, TIFF",
    seamless: true,
    tags: ["geometric", "paver", "beige", "black", "pattern", "square"],
    downloads: 2100,
    rating: 4.9,
    price: "$9.99",
  },
];

export default function TextureDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find texture by ID
  const texture = sampleTextures.find((t) => t.id === parseInt(id || "1"));

  useEffect(() => {
    if (!texture) {
      navigate("/");
    }
  }, [texture, navigate]);

  if (!texture) {
    return null;
  }

  // Sample additional images for carousel
  const images = [
    texture.image,
    "https://images.pexels.com/photos/6603943/pexels-photo-6603943.jpeg",
    "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
  ];

  const handleDownload = () => {
    console.log("Downloading texture:", texture.name);
    // Implement download logic
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: texture.name,
        text: texture.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
                placeholder="Search tile textures..."
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
          {/* Back Button & Breadcrumb */}
          <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-light hover:text-primary-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <nav className="text-sm text-gray-light">
              <a href="/" className="text-primary-blue hover:underline">
                Home
              </a>
              <span className="mx-2">/</span>
              <a
                href="/categories"
                className="text-primary-blue hover:underline"
              >
                Categories
              </a>
              <span className="mx-2">/</span>
              <a
                href="/categories"
                className="text-primary-blue hover:underline"
              >
                {texture.category}
              </a>
              <span className="mx-2">/</span>
              <span>{texture.name}</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="relative bg-dark-lighter rounded-lg overflow-hidden border border-dark">
                <img
                  src={images[currentImageIndex]}
                  alt={texture.name}
                  className="w-full aspect-square object-cover"
                />

                {/* Image Navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    {/* Image Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-primary-blue"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isLiked
                        ? "bg-red-500 text-white"
                        : "bg-black/50 text-white hover:bg-black/70"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? "border-primary-blue"
                          : "border-dark hover:border-gray-600"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                    {texture.category}
                  </span>
                  {texture.seamless && (
                    <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                      Seamless
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  {texture.name}
                </h1>

                {/* Rating & Stats */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(texture.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-light ml-2">
                      {texture.rating} ({texture.downloads} downloads)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-light">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">
                      {(texture.downloads * 3.2).toFixed(0)} views
                    </span>
                  </div>
                </div>

                <p className="text-gray-light leading-relaxed mb-8">
                  {texture.description}
                </p>

                {/* Price & Download */}
                <div className="bg-dark-lighter rounded-lg p-6 border border-dark mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary-blue">
                        {texture.price}
                      </div>
                      <div className="text-sm text-gray-light">
                        High Resolution
                      </div>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/30 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="bg-dark-lighter rounded-lg p-6 border border-dark mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary-blue" />
                  Technical Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Ruler className="w-4 h-4 text-primary-blue" />
                    <div>
                      <div className="text-sm text-gray-light">Resolution</div>
                      <div className="text-white font-medium">
                        {texture.resolution}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileImage className="w-4 h-4 text-primary-blue" />
                    <div>
                      <div className="text-sm text-gray-light">File Size</div>
                      <div className="text-white font-medium">
                        {texture.fileSize}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-4 h-4 text-primary-blue" />
                    <div>
                      <div className="text-sm text-gray-light">Formats</div>
                      <div className="text-white font-medium">
                        {texture.format}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Eye className="w-4 h-4 text-primary-blue" />
                    <div>
                      <div className="text-sm text-gray-light">Seamless</div>
                      <div className="text-white font-medium">
                        {texture.seamless ? "Yes" : "No"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {texture.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-light bg-dark border border-dark px-3 py-1 rounded-full hover:border-primary-blue transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Textures */}
          <section className="mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Related Textures
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleTextures
                .filter((t) => t.id !== texture.id)
                .slice(0, 4)
                .map((relatedTexture) => (
                  <a
                    key={relatedTexture.id}
                    href={`/texture/${relatedTexture.id}`}
                    className="group bg-dark-lighter rounded-lg overflow-hidden border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedTexture.image}
                        alt={relatedTexture.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-white mb-2 line-clamp-2">
                        {relatedTexture.name}
                      </h4>
                      <p className="text-xs text-gray-light">
                        {relatedTexture.category}
                      </p>
                    </div>
                  </a>
                ))}
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
