import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-dark px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-semibold text-primary-blue mb-6">
              Bismillah Tuff Tiles
            </h4>
            <p className="text-sm text-gray-light leading-relaxed">
              Premium tile collections for architects, designers, and
              contractors. Quality tiles for every project.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-medium text-white mb-3">
              Popular Categories
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories"
                  className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                >
                  Ceramic Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                >
                  Stone Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                >
                  Marble Tiles
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                >
                  Mosaic Tiles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-medium text-white mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-xs text-gray-light hover:text-primary-blue transition-colors"
                >
                  Help Center
                </Link>
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
                  WhatsApp
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
            © 2025 Bismillah Tuff Tiles. Premium tiles for your dream space.
          </p>
          <div className="flex gap-6 items-center">
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
            <span className="text-xs text-gray-light hidden md:inline">|</span>
            <span className="text-xs text-gray-light">
              Developed by{" "}
              <a
                href="https://syedmuhib.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-blue font-semibold transition-colors"
              >
                Syed Muhib Farooq
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
