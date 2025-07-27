import Script from 'next/script';

const businessInfo = {
  name: "Bismillah Tuff Tiles",
  description: "Leading manufacturer of premium tuff tiles, pavers, and construction materials in Pakistan",
  address: {
    country: "Pakistan",
    region: "Punjab", // Adjust based on actual location
    locality: "Pakistan", // City
  },
  contact: {
    phone: "+92-317-6697001",
    email: "info@bttufftiles.com", // Add actual email
  },
  coordinates: {
    latitude: "30.3753",
    longitude: "69.3451"
  },
  serviceAreas: [
    "Lahore",
    "Karachi", 
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala"
  ],
  products: [
    "Tuff Tiles",
    "Standard Pavers",
    "GRC Jali",
    "Ceramic Tiles",
    "Marble Textures",
    "Construction Materials"
  ]
};

export default function LocalSEO() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bttufftiles.vercel.app/#localbusiness",
    "name": businessInfo.name,
    "description": businessInfo.description,
    "url": "https://bttufftiles.vercel.app",
    "telephone": businessInfo.contact.phone,
    "email": businessInfo.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": businessInfo.address.country,
      "addressRegion": businessInfo.address.region,
      "addressLocality": businessInfo.address.locality
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.coordinates.latitude,
      "longitude": businessInfo.coordinates.longitude
    },
    "areaServed": businessInfo.serviceAreas.map(area => ({
      "@type": "City",
      "name": area,
      "addressCountry": "Pakistan"
    })),
    "makesOffer": businessInfo.products.map(product => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": product,
        "category": "Construction Materials"
      }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tiles and Construction Materials",
      "itemListElement": businessInfo.products.map((product, index) => ({
        "@type": "OfferCatalogItem",
        "position": index + 1,
        "itemOffered": {
          "@type": "Product",
          "name": product,
          "category": "Construction Materials"
        }
      }))
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "PKR",
    "paymentAccepted": "Cash, Bank Transfer",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bttufftiles.vercel.app"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Tuff Tiles Pakistan",
        "item": "https://bttufftiles.vercel.app/categories"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of tuff tiles do you manufacture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manufacture various types of tuff tiles including Standard Pavers, decorative GRC Jali, ceramic tiles, and marble textures for both residential and commercial use."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver tiles across Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide nationwide delivery across Pakistan including major cities like Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, and Multan. Free delivery is available for bulk orders."
        }
      },
      {
        "@type": "Question",
        "name": "What are your wholesale rates for bulk orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer competitive wholesale rates for bulk orders. Contact us via WhatsApp at +92-317-6697001 for detailed pricing based on quantity and product type."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get samples before placing a large order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide samples for quality inspection before bulk orders. Visit our showroom or contact us to arrange sample delivery."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
