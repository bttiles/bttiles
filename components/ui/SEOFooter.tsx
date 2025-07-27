import Link from 'next/link';

export default function SEOFooter() {
  const currentYear = new Date().getFullYear();

  const tileCategories = [
    'Tuff Tiles',
    'Standard Pavers',
    'GRC Jali',
    'Ceramic Tiles',
    'Marble Textures',
    'Interlocking Tiles'
  ];

  const serviceCities = [
    'Lahore Tiles',
    'Karachi Pavers',
    'Islamabad Tiles',
    'Rawalpindi Pavers',
    'Faisalabad Tiles',
    'Multan Pavers',
    'Sialkot Tiles',
    'Gujranwala Pavers'
  ];

  const keywords = [
    'tuff tiles manufacturer pakistan',
    'pavers supplier lahore',
    'construction materials karachi',
    'ceramic tiles islamabad',
    'building materials rawalpindi',
    'flooring solutions pakistan',
    'outdoor tiles supplier',
    'commercial pavers pakistan'
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Bismillah Tuff Tiles</h3>
            <p className="text-gray-400 text-sm mb-4">
              Leading manufacturer of premium tuff tiles, pavers, and construction materials in Pakistan since 2010.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">📞 +92-317-6697001</p>
              <p className="text-gray-400">✉️ info@bttufftiles.com</p>
              <p className="text-gray-400">🏭 Manufacturing Facility, Pakistan</p>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tile Categories</h4>
            <ul className="space-y-2">
              {tileCategories.map((category) => (
                <li key={category}>
                  <Link 
                    href="/categories" 
                    className="text-gray-400 hover:text-primary-blue text-sm transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceCities.map((city) => (
                <li key={city}>
                  <Link 
                    href="/contact" 
                    className="text-gray-400 hover:text-primary-blue text-sm transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-blue text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-gray-400 hover:text-primary-blue text-sm transition-colors">
                  Featured Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-primary-blue text-sm transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-blue text-sm transition-colors">
                  Contact & Wholesale
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-primary-blue text-sm transition-colors">
                  Installation Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h5 className="text-white font-medium mb-4">Popular Searches</h5>
            <div className="flex flex-wrap justify-center gap-2">
              {keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bismillah Tuff Tiles. All rights reserved. Premium tiles manufacturer in Pakistan.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/help" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/help" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
