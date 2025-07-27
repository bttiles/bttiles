"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of tuff tiles do you manufacture in Pakistan?",
    answer: "We manufacture a comprehensive range of tuff tiles including Standard Pavers, decorative GRC Jali, ceramic tiles, marble textures, hexagonal tiles, and custom patterned designs. All our products are made with high-quality materials and meet international standards for durability and aesthetics."
  },
  {
    question: "Do you provide nationwide delivery across Pakistan?", 
    answer: "Yes, we provide reliable delivery services across Pakistan including major cities like Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Sialkot, and Gujranwala. We offer free delivery for bulk orders above minimum quantity."
  },
  {
    question: "What are your wholesale rates for bulk tile orders?",
    answer: "We offer competitive wholesale pricing for bulk orders with significant discounts based on quantity. Our rates are among the best in Pakistan's construction materials market. Contact us via WhatsApp at +92-317-6697001 for detailed pricing based on your specific requirements."
  },
  {
    question: "Can I get tile samples before placing a large order?",
    answer: "Absolutely! We encourage customers to inspect quality through samples before bulk orders. You can visit our showroom to see our complete range or contact us to arrange sample delivery to your location. This ensures you make an informed decision about our premium tiles."
  },
  {
    question: "What makes Bismillah Tuff Tiles different from other manufacturers?",
    answer: "We combine state-of-the-art manufacturing technology with years of experience in the Pakistani construction industry. Our tiles offer superior durability, aesthetic appeal, and competitive pricing. We also provide excellent customer service, timely delivery, and comprehensive after-sales support."
  },
  {
    question: "Are your tiles suitable for both indoor and outdoor use?",
    answer: "Yes, our tile collection includes products suitable for various applications. Our tuff tiles and pavers are perfect for outdoor use including driveways, pathways, and commercial spaces. We also offer ceramic tiles and marble textures ideal for indoor flooring and wall applications."
  },
  {
    question: "What is the typical delivery time for tile orders in Pakistan?",
    answer: "Delivery time varies based on location and order size. For major cities like Lahore, Karachi, and Islamabad, standard delivery takes 2-5 business days. For smaller cities and custom orders, it may take 5-10 business days. We always provide tracking information for your orders."
  },
  {
    question: "Do you offer installation services for your tiles?",
    answer: "While we primarily focus on manufacturing and supply, we can connect you with certified installation partners in major Pakistani cities. We also provide detailed installation guidelines and technical support to ensure proper installation of our tiles."
  }
];

export default function SEOFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions About Tuff Tiles Pakistan
          </h2>
          <p className="text-gray-light text-lg max-w-3xl mx-auto">
            Get answers to common questions about our premium tiles, manufacturing process, 
            delivery options, and services across Pakistan.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-dark border border-dark-lighter rounded-lg p-6 text-left hover:border-primary-blue transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-light flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="bg-dark border border-dark-lighter border-t-0 rounded-b-lg p-6 -mt-2">
                  <p className="text-gray-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-white mb-4">
            Still have questions about our tiles?
          </h3>
          <p className="text-gray-light mb-6">
            Contact our expert team for personalized assistance with your tile and construction material needs.
          </p>
          <a
            href="https://wa.me/+923176697001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Expert Advice on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
