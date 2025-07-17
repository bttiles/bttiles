/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ Remove or comment this block
  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:8080/api/:path*", // Express server (not needed)
  //     },
  //   ];
  // },

  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
