/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
  reactStrictMode: false,

  async headers() {
    return [
      {
        source: "/(sitemap\\.xml|robots\\.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600" },
          { key: "Content-Type", value: "application/xml" },
        ],
      },
    ];
  },
};

export default nextConfig; 
