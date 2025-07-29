"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of tuff tiles does Bismillah Tuff Tiles Karachi manufacture?",
    answer: "Bismillah Tuff Tiles Karachi manufactures premium tuff tiles including Standard Pavers, decorative GRC Jali, ceramic tiles, marble textures, hexagonal tuff tiles, and custom patterned designs. Our tuff tiles are made with high-quality materials meeting international standards for durability."
  },
  {
    question: "Do you deliver tuff tiles nationwide from Karachi?",
    answer: "Yes, Bismillah Tuff Tiles provides nationwide tuff tiles delivery from our Karachi facility to all Pakistan cities including Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Sialkot, and Gujranwala. Free tuff tiles delivery for bulk orders."
  },
  {
    question: "What are Bismillah Tuff Tiles wholesale rates for bulk tuff tiles?",
    answer: "Bismillah Tuff Tiles offers Pakistan's most competitive wholesale tuff tiles pricing with significant bulk discounts. Our tuff tiles rates are among the best in Pakistan's market. Contact us at +92-317-6697001 for detailed tuff tiles pricing."
  },
  {
    question: "Can I get tuff tiles samples from Bismillah Tuff Tiles Karachi?",
    answer: "Absolutely! Bismillah Tuff Tiles encourages customers to inspect our tuff tiles quality through samples before bulk orders. Visit our Karachi showroom to see our complete tuff tiles range or contact us for sample delivery. Make informed decisions about our premium tuff tiles."
  },
  {
    question: "Why choose Bismillah Tuff Tiles Karachi over other tuff tiles manufacturers?",
    answer: "Bismillah Tuff Tiles Karachi combines state-of-the-art tuff tiles manufacturing with years of Pakistani construction industry experience. Our tuff tiles offer superior durability, aesthetic appeal, and Pakistan's most competitive pricing with excellent customer service."
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
            Tuff Tiles FAQ | Bismillah Tuff Tiles Karachi Pakistan
          </h2>
          <p className="text-gray-light text-lg max-w-3xl mx-auto">
            Get answers about Bismillah Tuff Tiles Karachi - Pakistan's leading tuff tiles manufacturer.
            Learn about our tuff tiles quality, delivery, and services across Pakistan.
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
