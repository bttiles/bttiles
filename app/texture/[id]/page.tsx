"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Search,
  Menu,
  X,
  MessageCircle,
  Share,
  Heart,
  Eye,
  Loader2,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TextureImage, useTexture, useTextures } from "../../../hooks/useTextures";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";

type ImageObject = {
  url: string;
  alt?: string;
  isPrimary?: boolean;
};

// export interface TextureImage {
//   url: string;
//   alt?: string;
//   isPrimary?: boolean;
//   publicId?: string; // ✅ add this line
//   _id?: string;
// }


export default function TextureDetailPage() {
  const params = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const { texture, loading, error } = useTexture(params.id as string);

  // Get similar textures from same category
  const { textures: similarTextures } = useTextures({
    category: texture?.category,
    limit: 4,
  });

  // Filter out current texture from similar textures
  const filteredSimilarTextures = similarTextures.filter(
    (t) => t._id !== texture?._id,
  );

  const allImages: TextureImage[] = [
    ...(texture?.image
      ? [
        {
          url: texture.image,
          alt: "Primary",
          isPrimary: true,
          _id: "primary",
        },
      ]
      : []),
    ...(Array.isArray(texture?.images)
      ? texture.images.map((img) => ({
        url: img.url,
        alt: img.alt || "View",
        isPrimary: false,
        _id: img._id || "",
      }))
      : []),
  ];


  useEffect(() => {
    if (texture) {
      setLikesCount(texture.likes);
      checkLikeStatus();
    }
  }, [texture]);

  const checkLikeStatus = async () => {
    try {
      const response = await fetch(`/api/textures/${params.id}/like`);
      const data = await response.json();
      if (data.success) {
        setLiked(data.data.liked);
      }
    } catch (error) {
      console.error("Error checking like status:", error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/textures/${params.id}/like`, {
        method: "POST",
      });
      const data = await response.json();

      if (data.success) {
        setLiked(data.data.liked);
        setLikesCount(data.data.likes);
      }
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  const handleWhatsAppOrder = () => {
    if (!texture) return;

    const message = encodeURIComponent(
      `🏠 Hello! I'm interested in ordering this tile:

📱 *${texture.name}*
🏷️ Category: ${texture.category}
🔗 Reference: ${window.location.href}

Could you please provide:
• Pricing information
• Availability
• Sample options
• Installation guidance

Thank you!`,
    );

    window.open(`https://wa.me/+923176697001?text=${message}`, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: texture?.name,
        text: `Check out this beautiful tile: ${texture?.name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1,
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-light">Loading tile details...</p>
        </div>
      </div>
    );
  }

  if (error || !texture) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tile Not Found</h1>
          <p className="text-gray-light mb-6">
            Sorry, this tile is not available or has been removed.
          </p>
          <Link
            href="/"
            className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-primary-blue-dark transition-colors"
          >
            Browse All Tiles
          </Link>
        </div>
      </div>
    );
  }

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
            <Link
              href="/categories"
              className="text-primary-blue hover:underline"
            >
              Categories
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-blue">{texture.category}</span>
            <span className="mx-2">/</span>
            <span>{texture.name}</span>
          </nav>

          {/* Tile Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-dark-lighter border border-dark">
                <Image
                  src={allImages[currentImageIndex]?.url}
                  alt={allImages[currentImageIndex]?.alt || texture.name}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Navigation arrows for multiple images */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-sm">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail grid (if multiple images) */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded border-2 overflow-hidden transition-all ${currentImageIndex === index
                        ? "border-primary-blue"
                        : "border-dark hover:border-gray-500"
                        }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt || `Texture image ${index + 1}`}
                        width={200}
                        height={200}
                        className="object-cover rounded"
                      />
                    </button>
                  ))}
                </div>
              )}


            </div>


            {/* Details */}
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="text-xs text-primary-blue bg-primary-blue/10 px-3 py-1 rounded-full">
                  {texture.category}
                </span>
                {texture.featured && (
                  <span className="text-xs text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full flex items-center">
                    ⭐ Featured
                  </span>
                )}
                {texture.trending && (
                  <span className="text-xs text-green-500 bg-green-500/10 px-3 py-1 rounded-full flex items-center">
                    🔥 Trending
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">
                {texture.name}
              </h1>

              <p className="text-gray-light mb-8 leading-relaxed text-lg">
                {texture.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-dark-lighter p-4 rounded-lg border border-dark">
                  <h3 className="text-sm font-medium text-white mb-2">Views</h3>
                  <div className="flex items-center text-primary-blue">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="text-lg font-semibold">
                      {texture.views.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="bg-dark-lighter p-4 rounded-lg border border-dark">
                  <h3 className="text-sm font-medium text-white mb-2">Likes</h3>
                  <div className="flex items-center text-primary-blue">
                    <Heart className="w-4 h-4 mr-2" />
                    <span className="text-lg font-semibold">
                      {likesCount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {texture.tags && texture.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {texture.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-light bg-dark border border-dark px-3 py-1 rounded-full hover:border-primary-blue transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Primary Action */}
              <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  🏠 Ready to Order This Tile?
                </h3>
                <p className="text-gray-light text-sm mb-4">
                  Get instant pricing, availability, and samples through
                  WhatsApp
                </p>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </button>
              </div>

              {/* Secondary Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleShare}
                  className="flex-1 border border-dark text-white px-4 py-3 rounded-lg font-medium hover:border-primary-blue transition-colors flex items-center justify-center gap-2"
                >
                  <Share className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={handleLike}
                  className={`flex-1 border border-dark px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${liked
                    ? "bg-red-500 text-white border-red-500"
                    : "text-white hover:border-primary-blue"
                    }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
                  {liked ? "Liked" : "Like"}
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-4 bg-dark-lighter rounded-lg border border-dark">
                <h4 className="text-sm font-medium text-white mb-3">
                  Need Help?
                </h4>
                <div className="space-y-2 text-sm text-gray-light">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+92 317 6697001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Visit our showroom for samples</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Products Section */}
          {filteredSimilarTextures.length > 0 && (
            <section className="border-t border-dark pt-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                More from {texture.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredSimilarTextures.map((similarTexture) => (
                  <Link
                    key={similarTexture._id}
                    href={`/texture/${similarTexture._id}`}
                    className="bg-dark-lighter rounded-lg overflow-hidden border border-dark transition-all duration-200 hover:border-primary-blue hover:-translate-y-1 cursor-pointer group block"
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <Image
                        src={similarTexture.image}
                        alt={similarTexture.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-medium text-white mb-2 leading-snug">
                        {similarTexture.name}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-light">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {similarTexture.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {similarTexture.likes}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
