/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*", // Express server
      },
    ];
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

export default nextConfig;
