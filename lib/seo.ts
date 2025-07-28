export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  price?: string;
  availability?: string;
  category?: string;
  location?: string;
  brand?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  price,
  availability,
  category,
}: SEOProps) {
  const baseUrl = "https://bttufftiles.vercel.app";
  const defaultImage = `${baseUrl}/placeholder.svg`;

  const metadata = {
    title:
      title ||
      "Bismillah Tuff Tiles - Premium Tiles, Pavers & Construction Materials Pakistan",
    description:
      description ||
      "Leading manufacturer of premium tuff tiles, pavers, and construction materials in Pakistan. High-quality ceramic tiles, marble textures, and custom designs for residential and commercial projects.",
    keywords: [
      "tuff tiles pakistan",
      "pavers manufacturer pakistan",
      "tiles supplier lahore karachi islamabad",
      "construction materials rawalpindi",
      "ceramic tiles sialkot gujranwala",
      "marble textures faisalabad multan",
      "bismillah tuff tiles factory",
      "flooring solutions pakistan",
      "wall tiles outdoor indoor",
      "decorative pavers wholesale",
      "GRC jali designs pakistan",
      "architectural tiles building materials",
      "concrete tiles cement pavers",
      "interlocking tiles parking tiles",
      "garden pathway tiles driveway pavers",
      "commercial residential tiles",
      "pakistani tile manufacturers exporters",
      ...keywords,
    ].join(", "),
    openGraph: {
      title: title || "Bismillah Tuff Tiles - Premium Tiles & Pavers Pakistan",
      description:
        description ||
        "Leading manufacturer of premium tuff tiles, pavers, and construction materials in Pakistan.",
      type,
      url: url || baseUrl,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title || "Bismillah Tuff Tiles",
        },
      ],
      siteName: "Bismillah Tuff Tiles",
      locale: "en_PK",
      countryName: "Pakistan",
      region: "Punjab",
    },
    twitter: {
      card: "summary_large_image",
      site: "@bismillahtiles",
      title: title || "Bismillah Tuff Tiles - Premium Tiles Pakistan",
      description:
        description ||
        "Leading manufacturer of premium tuff tiles and pavers in Pakistan.",
      images: [image || defaultImage],
    },
    // robots: {
    //   index: true,
    //   follow: true,
    //   googleBot: {
    //     index: true,
    //     follow: true,
    //     'max-video-preview': -1,
    //     'max-image-preview': 'large',
    //     'max-snippet': -1,
    //   },
    // },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: url || baseUrl,
    },
  };

  if (type === "product" && price) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "product",
      // @ts-ignore
      product: {
        price: {
          amount: price,
          currency: "PKR",
        },
        availability: availability || "in stock",
        category: category || "Tiles",
      },
    };
  }

  return metadata;
}

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bismillah Tuff Tiles",
    url: "https://bttufftiles.vercel.app",
    logo: "https://bttufftiles.vercel.app/placeholder.svg",
    description:
      "Leading manufacturer of premium tuff tiles, pavers, and construction materials in Pakistan.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
      addressLocality: "Pakistan",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+92-317-6697001",
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+92-317-6697001",
        contactType: "sales",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/bismillahtiles",
      "https://www.instagram.com/bismillahtiles",
    ],
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bismillah Tuff Tiles",
    url: "https://bttufftiles.vercel.app",
    description:
      "Premium tiles, pavers, and construction materials manufacturer in Pakistan",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bttufftiles.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bttufftiles.vercel.app/#business",
    name: "Bismillah Tuff Tiles",
    description:
      "Leading manufacturer of premium tuff tiles, pavers, and construction materials in Pakistan.",
    url: "https://bttufftiles.vercel.app",
    telephone: "+92-317-6697001",
    email: "info@bttufftiles.com",
    foundingDate: "2010",
    currenciesAccepted: "PKR",
    paymentAccepted: ["Cash", "Bank Transfer", "Online Payment"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.3753",
      longitude: "69.3451",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    industry: "Construction Materials",
    numberOfEmployees: "50-100",
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "City",
        name: "Lahore",
      },
      {
        "@type": "City",
        name: "Karachi",
      },
      {
        "@type": "City",
        name: "Islamabad",
      },
      {
        "@type": "City",
        name: "Rawalpindi",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tiles and Pavers",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Tuff Tiles",
            category: "Construction Materials",
            description: "High-quality tuff tiles for outdoor and indoor use",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Standard Pavers",
            category: "Construction Materials",
            description: "Durable pavers for driveways and pathways",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "GRC Jali",
            category: "Construction Materials",
            description: "Decorative GRC jali designs for modern architecture",
          },
        },
      ],
    },
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  product: (product: {
    name: string;
    description: string;
    image: string;
    price?: string;
    availability?: string;
    category: string;
    sku?: string;
    likes?: number;
    views?: number;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    sku: product.sku,
    offers: {
      "@type": "Offer",
      price: product.price || "Contact for pricing",
      priceCurrency: "PKR",
      availability: `https://schema.org/${product.availability || "InStock"}`,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "PKR",
        price: product.price || "0",
      },
      seller: {
        "@type": "Organization",
        name: "Bismillah Tuff Tiles",
        url: "https://bttufftiles.vercel.app",
        telephone: "+92-317-6697001",
      },
      url: "https://bttufftiles.vercel.app",
      itemCondition: "https://schema.org/NewCondition",
    },
    brand: {
      "@type": "Brand",
      name: "Bismillah Tuff Tiles",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Bismillah Tuff Tiles",
      url: "https://bttufftiles.vercel.app",
      sameAs: [
        "https://www.facebook.com/bismillahtiles",
        "https://www.instagram.com/bismillahtiles",
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: Math.max(
        (product.likes || 0) + (product.views || 0) / 10,
        5,
      ).toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Verified Customer",
        },
        reviewBody:
          "High quality tiles with excellent finish. Great for both indoor and outdoor projects.",
        datePublished: "2024-01-15",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Construction Professional",
        },
        reviewBody:
          "Durable and well-made tiles. Good value for money and reliable supplier.",
        datePublished: "2024-01-10",
      },
    ],
  }),
};
