"use client";
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
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}
const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse our collection and note the product code. You can then contact us via WhatsApp or call directly to confirm availability and pricing.",
    category: "Ordering",
  },
  {
    id: 2,
    question: "Is online payment available?",
    answer:
      "Currently, we support payments via bank transfer or cash on delivery (COD) in select cities. Online payments will be available soon.",
    category: "Payments",
  },
  {
    id: 3,
    question: "Do you deliver to my city?",
    answer:
      "We deliver to most cities across the country. Contact us with your location, and we’ll confirm delivery options and estimated timelines.",
    category: "Delivery",
  },
  {
    id: 4,
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 3–7 business days depending on your location and product availability. Custom orders may take longer.",
    category: "Delivery",
  },
  {
    id: 5,
    question: "Can I visit your showroom?",
    answer:
      "Yes, we welcome visits to our showroom. Please call ahead to schedule a visit so we can assist you better.",
    category: "Support",
  },
  {
    id: 6,
    question: "Can I return or exchange tiles after purchase?",
    answer:
      "Returns are accepted only for damaged goods reported within 24 hours of delivery. Exchanges may be possible depending on stock.",
    category: "Returns",
  },
  {
    id: 7,
    question: "Do you offer installation services?",
    answer:
      "Contact us for installation services. We can connect you with trusted contractors in your area.",
    category: "Support",
  },
  {
    id: 8,
    question: "Can I customize the tile size or color?",
    answer:
      "Yes! For bulk orders, we offer customization options. Reach out via WhatsApp or call to discuss your specific requirements.",
    category: "Customization",
  },
];


const categories = [
  "All",
  "Ordering",
  "Payments",
  "Delivery",
  "Returns",
  "Customization",
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
      <Header />
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
              and get the help you need to make the most of BT Tuff Tiles.
            </p>
          </div>

          {/* Quick Help Cards */}
          <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Order Process Guide */}
              <div className="bg-dark-lighter rounded-lg p-6 border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Order Process Guide
                </h3>
                <p className="text-sm text-gray-light">
                  Learn how to place tile and marble orders quickly through WhatsApp.
                </p>
              </div>

              {/* Purchase Terms */}
              <div className="bg-dark-lighter rounded-lg p-6 border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Purchase Terms
                </h3>
                <p className="text-sm text-gray-light">
                  Know what’s included with your order, delivery scope, and limitations.
                </p>
              </div>

              {/* Payment & Delivery Info */}
              <div className="bg-dark-lighter rounded-lg p-6 border border-dark hover:border-primary-blue transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Payment & Delivery
                </h3>
                <p className="text-sm text-gray-light">
                  Get details on accepted payment methods and how delivery works.
                </p>
              </div>

              {/* Contact Support (unchanged) */}
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
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
                Can't find what you're looking for? Our team is here to help you with any
                questions or product inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-blue text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-primary-blue-dark transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="https://wa.me/923176697001" // Replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-dark text-white px-8 py-3 rounded-lg text-sm font-semibold hover:border-green-500 hover:text-green-400 transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.85 11.85 0 0012 0C5.37 0 0 5.37 0 12a11.85 11.85 0 001.65 6.05L0 24l6.34-1.64A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zm-8.52 19.6c-1.62 0-3.21-.42-4.61-1.22l-.33-.19-3.76.98.99-3.66-.21-.37A9.8 9.8 0 012.2 12c0-5.39 4.41-9.8 9.8-9.8s9.8 4.41 9.8 9.8-4.41 9.8-9.8 9.8zm5.55-7.44c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.7.15s-.8.98-.98 1.19c-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.66-2.06s-.02-.46.13-.61c.13-.13.3-.33.45-.5.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.7-1.69-.95-2.31-.25-.6-.5-.52-.7-.53-.18-.01-.38-.01-.58-.01s-.53.07-.81.38c-.28.3-1.06 1.04-1.06 2.55s1.08 2.96 1.24 3.16c.15.2 2.12 3.23 5.14 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.17-1.44-.07-.14-.27-.21-.57-.36z" />
                  </svg>
                  Chat on WhatsApp
                </a>
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
