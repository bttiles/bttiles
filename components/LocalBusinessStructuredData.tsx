"use client";

export default function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bismillah Tuff Tiles",
    "alternateName": ["Bismillah Tuff Tiles Karachi", "BT Tuff Tiles"],
    "description": "Pakistan's #1 tuff tiles manufacturer. Bismillah Tuff Tiles Karachi produces premium quality tuff tiles, pavers, and construction materials with nationwide delivery.",
    "url": "https://bismillahtufftiles.vercel.app",
    "logo": "https://bismillahtufftiles.vercel.app/Logo.png",
    "image": "https://bismillahtufftiles.vercel.app/Logo.png",
    "telephone": "+92-317-6697001",
    "email": "info@bismillahtufftiles.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan",
      "addressRegion": "Sindh",
      "addressLocality": "Karachi"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8607",
      "longitude": "67.0011"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "City", 
        "name": "Karachi"
      },
      {
        "@type": "City",
        "name": "Lahore"  
      },
      {
        "@type": "City",
        "name": "Islamabad"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tuff Tiles Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Tuff Tiles",
            "category": "Construction Materials",
            "description": "Premium quality tuff tiles for residential and commercial use"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Product",
            "name": "Pavers",
            "category": "Construction Materials",
            "description": "Durable concrete pavers and interlocking tiles"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "GRC Jali",
            "category": "Construction Materials",
            "description": "Decorative GRC jali patterns for architectural designs"
          }
        }
      ]
    },
    "makesOffer": {
      "@type": "Offer",
      "name": "Tuff Tiles Manufacturing & Supply",
      "description": "Premium tuff tiles manufacturing and nationwide delivery across Pakistan",
      "areaServed": "Pakistan",
      "availableDeliveryMethod": "Shipping"
    },
    "brand": {
      "@type": "Brand",
      "name": "Bismillah Tuff Tiles"
    },
    "sameAs": [
      "https://www.facebook.com/bismillahtiles",
      "https://www.instagram.com/bismillahtiles"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Bank Transfer"],
    "currenciesAccepted": "PKR"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
