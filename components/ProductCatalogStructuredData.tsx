"use client";

export default function ProductCatalogStructuredData() {
  const productCatalog = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tuff Tiles Pakistan",
    "brand": {
      "@type": "Brand", 
      "name": "Bismillah Tuff Tiles"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Bismillah Tuff Tiles Karachi"
    },
    "description": "Premium tuff tiles manufactured by Bismillah Tuff Tiles Karachi. Best quality tuff tiles in Pakistan with nationwide delivery.",
    "category": "Construction Materials",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "PKR",
      "seller": {
        "@type": "Organization",
        "name": "Bismillah Tuff Tiles Karachi"
      },
      "areaServed": "Pakistan"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1", 
      "ratingCount": "150"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Material",
        "value": "Concrete"
      },
      {
        "@type": "PropertyValue", 
        "name": "Usage",
        "value": "Indoor and Outdoor"
      },
      {
        "@type": "PropertyValue",
        "name": "Origin",
        "value": "Karachi, Pakistan"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of tuff tiles does Bismillah Tuff Tiles Karachi manufacture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bismillah Tuff Tiles Karachi manufactures premium tuff tiles including Standard Pavers, decorative GRC Jali, ceramic tiles, marble textures, hexagonal tuff tiles, and custom patterned designs."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you deliver tuff tiles nationwide from Karachi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Bismillah Tuff Tiles provides nationwide tuff tiles delivery from our Karachi facility to all Pakistan cities including Lahore, Islamabad, Rawalpindi, Faisalabad, and other major cities."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Bismillah Tuff Tiles Karachi over other tuff tiles manufacturers?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Bismillah Tuff Tiles Karachi combines state-of-the-art tuff tiles manufacturing with years of Pakistani construction industry experience, offering superior durability and Pakistan's most competitive pricing."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCatalog)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
    </>
  );
}
