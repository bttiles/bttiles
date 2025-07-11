import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function License() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-light mb-10">
            <a href="/" className="text-primary-blue hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>License</span>
          </nav>

          {/* Page Content */}
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-8">
              License Terms
            </h1>

            <div className="bg-dark-lighter rounded-lg p-8 border border-dark mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Standard License
              </h2>
              <p className="text-gray-light mb-4">
                Our standard license allows you to use our textures for both
                personal and commercial projects with the following permissions:
              </p>
              <ul className="text-gray-light space-y-2 mb-6">
                <li>✓ Use in unlimited personal and commercial projects</li>
                <li>✓ Modify, edit, and adapt the textures</li>
                <li>✓ Use in digital and print media</li>
                <li>✓ Use in games, apps, and software</li>
                <li>✓ Use in architectural visualization</li>
              </ul>
              <p className="text-sm text-gray-light">
                This license is automatically granted with every texture
                download.
              </p>
            </div>

            <div className="bg-dark-lighter rounded-lg p-8 border border-dark">
              <h2 className="text-2xl font-semibold text-white mb-6">
                What You Cannot Do
              </h2>
              <ul className="text-gray-light space-y-2">
                <li>✗ Redistribute or resell the original texture files</li>
                <li>✗ Include in template or theme packages for resale</li>
                <li>✗ Claim ownership of the original textures</li>
                <li>✗ Use for training AI models without permission</li>
              </ul>
            </div>
          </div>
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
