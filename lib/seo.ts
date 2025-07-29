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
  const baseUrl = "https://bismillahtufftiles.vercel.app/";
  const defaultImage = `${baseUrl}/placeholder.svg`;

  const metadata = {
    title:
      title ||
      "Tuff Tiles | Bismillah Tuff Tiles Karachi | #1 Tuff Tiles Pakistan",
    description:
      description ||
      "#1 Tuff Tiles in Pakistan! Bismillah Tuff Tiles Karachi - Best tuff tiles manufacturer. Premium quality tuff tiles with nationwide delivery. Top choice for tuff tiles Karachi, Lahore, Islamabad.",
    keywords: [
      "tuff tiles",
      "tuff tiles karachi",
      "bismillah tuff tiles",
      "tuff tiles pakistan",
      "best tuff tiles karachi",
      "tuff tiles manufacturer pakistan",
      "bt tuff tiles",
      "karachi tuff tiles",
      "tuff tiles lahore",
      "tuff tiles islamabad",
      "premium tuff tiles",
      "wholesale tuff tiles",
      "bismillah tuff tiles karachi",
      "pakistan tuff tiles supplier",
      ...keywords,
    ].join(", "),
    openGraph: {
      title:
        title ||
        "Tuff Tiles Karachi | Bismillah Tuff Tiles | #1 Tuff Tiles Pakistan",
      description:
        description ||
        "Bismillah Tuff Tiles Karachi - Pakistan's #1 tuff tiles manufacturer. Best quality tuff tiles with nationwide delivery from Karachi.",
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
    },
    twitter: {
      card: "summary_large_image",
      site: "@bismillahtiles",
      title: title || "Tuff Tiles Karachi | Bismillah Tuff Tiles Pakistan",
      description:
        description ||
        "Bismillah Tuff Tiles Karachi - #1 tuff tiles manufacturer in Pakistan. Best quality tuff tiles nationwide delivery.",
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
    robots:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",

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
    url: "https://bismillahtufftiles.vercel.app/",
    logo: "https://bismillahtufftiles.vercel.app/Logo.png",
    description:
      "Bismillah Tuff Tiles Karachi - Pakistan's #1 tuff tiles manufacturer. Premium quality tuff tiles, pavers, and construction materials with nationwide delivery.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
      addressLocality: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-317-6697001",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://www.facebook.com/bismillahtiles",
      "https://www.instagram.com/bismillahtiles",
    ],
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bismillah Tuff Tiles Karachi - Tuff Tiles Pakistan",
    url: "https://bismillahtufftiles.vercel.app/",
    description:
      "Tuff Tiles Karachi - Bismillah Tuff Tiles Pakistan. #1 tuff tiles manufacturer serving Karachi, Lahore, Islamabad nationwide.",
    publisher: {
      "@type": "Organization",
      name: "Bismillah Tuff Tiles",
      logo: {
        "@type": "ImageObject",
        url: "https://bismillahtufftiles.vercel.app/Logo.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://bismillahtufftiles.vercel.app//?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bismillahtufftiles.vercel.app//#business",
    name: "Bismillah Tuff Tiles",
    description:
      "Leading manufacturer of premium tuff tiles, pavers, and construction materials in Pakistan.",
    url: "https://bismillahtufftiles.vercel.app/",
    telephone: "+92-317-6697001",
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
    servedCuisine: "Construction Materials",
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
      price: product.price,
      priceCurrency: "PKR",
      availability: `https://schema.org/${product.availability || "InStock"}`,
      seller: {
        "@type": "Organization",
        name: "Bismillah Tuff Tiles",
      },
    },
    brand: {
      "@type": "Brand",
      name: "Bismillah Tuff Tiles",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Bismillah Tuff Tiles",
    },
  }),
};
