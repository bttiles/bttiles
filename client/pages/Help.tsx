import { useState } from "react";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Download,
  CreditCard,
  FileText,
  MessageCircle,
} from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I download textures?",
    answer:
      "To download textures, simply browse our collection, click on any texture you like, and press the download button. Free textures can be downloaded immediately, while premium textures require a purchase.",
    category: "Downloads",
  },
  {
    id: 2,
    question: "What file formats are available?",
    answer:
      "We provide textures in multiple formats including JPG, PNG, TIFF, and sometimes PSD. Most textures come in high resolution (4K) and are available in seamless patterns.",
    category: "Downloads",
  },
  {
    id: 3,
    question: "Can I use these textures commercially?",
    answer:
      "Yes! Our standard license allows commercial use for most textures. Please check the specific license terms for each texture, as some may have additional restrictions.",
    category: "Licensing",
  },
  {
    id: 4,
    question: "How do I get a refund?",
    answer:
      "We offer refunds within 30 days of purchase if you're not satisfied with your texture. Contact our support team with your order details to process a refund.",
    category: "Billing",
  },
  {
    id: 5,
    question: "Are the textures seamless?",
    answer:
      "Most of our textures are seamless and tillable. Look for the 'Seamless' badge on texture pages to confirm. Seamless textures can be repeated infinitely without visible seams.",
    category: "Technical",
  },
  {
    id: 6,
    question: "What resolution are the textures?",
    answer:
      "Our textures are typically available in 4K resolution (4096x4096 pixels) or higher. Some special collections may include 8K versions for ultra-high-detail projects.",
    category: "Technical",
  },
  {
    id: 7,
    question: "How do I contact support?",
    answer:
      "You can reach our support team through our contact page, live chat, or by emailing support@tiletextures.com. We typically respond within 24 hours.",
    category: "Support",
  },
  {
    id: 8,
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We offer volume discounts for purchases over $100. Contact our sales team for custom pricing on large orders or enterprise licensing.",
    category: "Billing",
  },
];

const categories = [
  "All",
  "Downloads",
  "Licensing",
  "Billing",
  "Technical",
  "Support",
];

export default function Help() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
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
                placeholder="Search help articles..."
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
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-light mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <a href="/" className="text-primary-blue hover:underline">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>Help Center</span>
          </nav>

          {/* Page Header */}
          <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h1 className="text-4xl font-bold text-white mb-6">Help Center</h1>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions, learn how to use our platform,
              and get the help you need to make the most of TileTextures.
            </p>
          </div>

          {/* Quick Help Cards */}
          <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-dark-lighter rounded-lg p-6 border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Download Guide
                </h3>
                <p className="text-sm text-gray-light">
                  Learn how to download and use our textures in your projects
                </p>
              </div>

              <div className="bg-dark-lighter rounded-lg p-6 border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  License Terms
                </h3>
                <p className="text-sm text-gray-light">
                  Understand what you can and can't do with our textures
                </p>
              </div>

              <div className="bg-dark-lighter rounded-lg p-6 border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Billing Help
                </h3>
                <p className="text-sm text-gray-light">
                  Questions about payments, refunds, and subscriptions
                </p>
              </div>

              <div className="bg-dark-lighter rounded-lg p-6 border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Contact Support
                </h3>
                <p className="text-sm text-gray-light">
                  Get personalized help from our support team
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Frequently Asked Questions
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary-blue text-white"
                      : "bg-dark-lighter text-gray-light hover:text-white hover:bg-dark border border-dark"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-dark-lighter rounded-lg border border-dark overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-dark transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-primary-blue" />
                      </div>
                      <h3 className="text-white font-medium">{faq.question}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-primary-blue bg-primary-blue/10 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6 animate-in slide-in-from-top-4 duration-200">
                      <div className="ml-12 text-gray-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  No results found
                </h3>
                <p className="text-gray-light mb-6">
                  Try adjusting your search or browsing different categories
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue-dark transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </a>
              </div>
            )}
          </section>

          {/* Contact CTA */}
          <section className="mt-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700">
            <div className="bg-gradient-to-r from-dark-lighter via-primary-blue/10 to-dark-lighter rounded-2xl p-8 border border-dark">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Still need help?
              </h2>
              <p className="text-gray-light mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to
                help you with any questions or issues you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-blue text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors"
                >
                  Contact Support
                </a>
                <button className="border border-dark text-white px-8 py-3 rounded-lg text-sm font-semibold hover:border-primary-blue transition-colors">
                  Live Chat
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
