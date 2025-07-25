"use client";
import { Users, Target, Award, Globe } from "lucide-react";
import Link from "next/link";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";

export default function AboutPage() {

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
            <span>About</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              About Bismillah Tuff Tiles
            </h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto">
              We're passionate about providing high-quality tile textures for
              architects, designers, and 3D artists worldwide. Our mission is to
              make beautiful, professional textures accessible to everyone.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-light leading-relaxed mb-4">
                  At Bismillah Tuff Tiles, we believe that great design starts with
                  great materials. Our curated collection of tile textures helps
                  bring architectural visions to life, whether you're designing
                  a modern kitchen, a traditional bathroom, or a cutting-edge
                  commercial space.
                </p>
                <p className="text-gray-light leading-relaxed">
                  We work with professional photographers and texture artists to
                  ensure every texture in our library meets the highest
                  standards for quality, resolution, and realism.
                </p>
              </div>
              <div className="bg-dark-lighter rounded-lg p-8 border border-dark">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-blue mb-2">
                      1000+
                    </div>
                    <div className="text-sm text-gray-light">
                      Texture Samples
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-blue mb-2">
                      15
                    </div>
                    <div className="text-sm text-gray-light">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-blue mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-light">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-blue mb-2">
                      99%
                    </div>
                    <div className="text-sm text-gray-light">
                      Customer Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-10 text-center">
              Why Choose Bismillah Tuff Tiles?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Premium Quality
                </h3>
                <p className="text-sm text-gray-light">
                  All textures are carefully curated and professionally
                  photographed for maximum realism.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Universal Compatibility
                </h3>
                <p className="text-sm text-gray-light">
                  Compatible with Blender, Maya, Cinema 4D, 3ds Max, Unity,
                  Unreal Engine, and more.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Community Driven
                </h3>
                <p className="text-sm text-gray-light">
                  Built for designers, by designers. Our community helps shape
                  our collection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Always Updated
                </h3>
                <p className="text-sm text-gray-light">
                  New textures added regularly, with trending styles and
                  materials.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="bg-dark-lighter rounded-lg p-12 border border-dark">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-light mb-8 max-w-2xl mx-auto">
                Join thousands of designers who trust Bismillah Tuff Tiles for their
                projects. Browse our collection and discover the perfect
                textures for your next design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-primary-blue text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors"
                >
                  Browse Textures
                </Link>
                <Link href="/contact" className="border border-dark text-white px-8 py-3 rounded-lg text-sm font-semibold hover:border-primary-blue transition-colors">
                  Contact Us
                </Link>
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
