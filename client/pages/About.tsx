import { useState } from "react";
import { Search, Menu, X, Users, Target, Award, Globe } from "lucide-react";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              href="#"
              className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
            >
              Categories
            </a>
            <a href="/about" className="text-primary-blue text-sm font-medium">
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
          <div className="lg:hidden mt-4 pb-4 border-t border-dark">
            <nav className="flex flex-col gap-4 mt-4">
              <a
                href="/"
                className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-lighter text-sm hover:text-primary-blue transition-colors"
              >
                Categories
              </a>
              <a
                href="/about"
                className="text-primary-blue text-sm font-medium"
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
          <nav className="text-sm text-gray-light mb-10">
            <a href="/" className="text-primary-blue hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>About</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              About TileTextures
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
                  At TileTextures, we believe that great design starts with
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
                      50k+
                    </div>
                    <div className="text-sm text-gray-light">Downloads</div>
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
              Why Choose TileTextures?
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

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-10 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-dark-lighter rounded-lg p-8 border border-dark">
                <p className="text-gray-light leading-relaxed mb-6">
                  TileTextures was founded in 2020 by a team of architects and
                  3D artists who were frustrated by the lack of high-quality,
                  easily accessible tile textures for their projects. We started
                  with a simple goal: create a comprehensive library of
                  professional tile textures that would save designers time and
                  improve their work quality.
                </p>
                <p className="text-gray-light leading-relaxed mb-6">
                  What began as a small collection has grown into one of the
                  most comprehensive tile texture libraries on the web, serving
                  thousands of designers, architects, and 3D artists around the
                  world.
                </p>
                <p className="text-gray-light leading-relaxed">
                  Today, we continue to expand our collection while maintaining
                  our commitment to quality and accessibility. Every texture in
                  our library is tested in real-world design scenarios to ensure
                  it meets professional standards.
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
                Join thousands of designers who trust TileTextures for their
                projects. Browse our collection and discover the perfect
                textures for your next design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="bg-primary-blue text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors"
                >
                  Browse Textures
                </a>
                <button className="border border-dark text-white px-8 py-3 rounded-lg text-sm font-semibold hover:border-primary-blue transition-colors">
                  Contact Us
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
