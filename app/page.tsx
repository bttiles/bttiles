"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import { useTextures } from "../hooks/useTextures";
import { useCategories } from "../hooks/useCategories";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import SEOFAQSection from "../components/SEOFAQSection";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductCatalogStructuredData from "../components/ProductCatalogStructuredData";

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
      <ProductCatalogStructuredData />
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Tuff Tiles Pakistan", href: "/categories" },
              {
                name:
                  selectedCategory !== "all"
                    ? selectedCategory
                    : "All Categories",
                href: "#",
                current: true,
              },
            ]}
          />

          {/* Page Header */}
          <div className="relative mb-16 mt-12 text-center">
            {/* Gradient background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 via-transparent to-transparent pointer-events-none"></div>

            <h1 className="relative text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Premium <span className="text-primary-blue">Tuff Tiles</span> in Pakistan
            </h1>

            <p className="relative text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Factory-direct <strong>tuff tiles, pavers & GRC jali</strong> with
              <span className="text-primary-blue font-medium"> nationwide delivery</span>.
              Trusted by homeowners & contractors across Pakistan.
            </p>

            {/* CTA buttons */}
            <div className="relative flex flex-wrap justify-center gap-4">
              <Link
                href="/categories"
                className="px-6 py-3 rounded-xl bg-primary-blue text-white font-semibold shadow-lg hover:bg-primary-blue/90 transition"
              >
                Explore Tile Collection
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-dark-lighter border border-gray-700 text-gray-200 hover:border-primary-blue hover:text-white transition"
              >
                Get a Free Quote
              </Link>
            </div>
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
                          alt={`${texture.name} - Premium ${texture.category} tile texture manufactured by Bismillah Tuff Tiles Pakistan. High-quality ${texture.category.toLowerCase()} suitable for residential and commercial projects.`}
                          fill
                          priority={index < 4}
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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

        {/* SEO Content Sections */}
        <section className="bg-dark-lighter py-16 mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Premium Tuff Tiles Manufacturing
                </h3>
                <p className="text-gray-light text-sm">
                  <strong>High-quality tuff tiles Pakistan</strong> manufactured
                  with German technology for superior durability and aesthetic
                  appeal. Ideal for{" "}
                  <em>
                    outdoor pathways, parking areas, driveways, garden
                    landscapes
                  </em>
                  , and commercial plaza flooring.
                  <Link
                    href="/categories"
                    className="text-primary-blue hover:underline"
                  >
                    View all tile categories
                  </Link>
                  .
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  GRC Jali & Decorative Elements
                </h3>
                <p className="text-gray-light text-sm">
                  Intricate{" "}
                  <strong>GRC (Glass Reinforced Concrete) jali patterns</strong>{" "}
                  for modern architectural designs in Pakistan. Custom laser-cut
                  designs, geometric patterns, traditional motifs available for
                  mosques, homes, and commercial buildings.
                  <Link
                    href="/featured"
                    className="text-primary-blue hover:underline"
                  >
                    See featured designs
                  </Link>
                  .
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Standard & Interlocking Pavers
                </h3>
                <p className="text-gray-light text-sm">
                  Durable{" "}
                  <strong>concrete pavers and interlocking tiles</strong> for
                  residential and commercial use in Pakistan. Available in 20+
                  colors, multiple finishes, anti-slip surfaces for pool areas,
                  and heavy-duty industrial applications.
                  <Link
                    href="/help"
                    className="text-primary-blue hover:underline"
                  >
                    Installation guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Bismillah Tuff Tiles?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  ISO Certified Manufacturing Excellence
                </h3>
                <p className="text-gray-light text-sm mb-4">
                  <strong>
                    State-of-the-art tile manufacturing facility in Pakistan
                  </strong>{" "}
                  with ISO 9001:2015 certification, producing
                  <em>
                    premium tuff tiles that exceed international quality
                    standards
                  </em>
                  . Our German machinery and experienced craftsmen ensure
                  consistent quality, precise dimensions, and reliable delivery
                  schedules across Pakistan.
                </p>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Comprehensive Product Portfolio
                </h3>
                <p className="text-gray-light text-sm">
                  From{" "}
                  <Link
                    href="/categories"
                    className="text-primary-blue hover:underline"
                  >
                    ceramic floor tiles
                  </Link>{" "}
                  to natural stone textures, decorative pavers to architectural
                  jali - we manufacture <strong>500+ tile designs</strong>{" "}
                  covering all construction material needs for residential
                  homes, commercial complexes, and industrial projects in
                  Pakistan.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Factory Direct Pricing Pakistan
                </h3>
                <p className="text-gray-light text-sm mb-4">
                  <strong>Direct manufacturer pricing</strong> with up to 40%
                  savings on retail rates. Special wholesale discounts for
                  <em>bulk orders above 5000 sq ft</em>. Competitive rates for
                  contractors, builders, and architects across Pakistan.
                  <Link
                    href="/contact"
                    className="text-primary-blue hover:underline"
                  >
                    Get wholesale quote
                  </Link>
                  .
                </p>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Pakistan-wide Express Delivery
                </h3>
                <p className="text-gray-light text-sm">
                  <strong>Fastest tile delivery in Pakistan</strong> - same day
                  dispatch from our warehouse. Serving all major cities: Lahore
                  (2 days), Karachi (3 days), Islamabad (1 day), with{" "}
                  <em>free delivery for orders above 2000 sq ft</em>.
                  Professional installation services available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <SEOFAQSection />

        {/* Testimonials Section */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
