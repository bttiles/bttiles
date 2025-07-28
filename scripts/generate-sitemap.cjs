const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;
const baseUrl = "https://bttufftiles.vercel.app";

// ✅ Define Texture & Category schema inline (no need to import TS files)
const TextureSchema = new mongoose.Schema({}, { strict: false });
const CategorySchema = new mongoose.Schema({}, { strict: false });

const Texture = mongoose.models.Texture || mongoose.model("Texture", TextureSchema);
const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);

async function generateSitemap() {
  try {
    if (!MONGODB_URI) throw new Error("❌ MONGODB_URI missing in .env.local");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Static pages
    const staticPages = [
      { url: baseUrl, changefreq: "daily", priority: 1, lastmod: new Date().toISOString() },
      { url: `${baseUrl}/about`, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() },
      { url: `${baseUrl}/contact`, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() },
    ];

    // Fetch dynamic pages
    const textures = await Texture.find({}, "updatedAt").lean();
    const texturePages = textures.map((t) => ({
      url: `${baseUrl}/texture/${t._id}`,
      changefreq: "weekly",
      priority: 0.6,
      lastmod: t.updatedAt?.toISOString(),
    }));

    const categories = await Category.find({}, "name updatedAt").lean();
    const categoryPages = categories
      .filter((c) => c.name?.trim() !== "")
      .map((c) => ({
        url: `${baseUrl}/categories?category=${encodeURIComponent(c.name)}`,
        changefreq: "weekly",
        priority: 0.7,
        lastmod: c.updatedAt?.toISOString(),
      }));

    const allPages = [...staticPages, ...texturePages, ...categoryPages];

    // Generate sitemap.xml
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
        .map(
          (p) => `<url>
  <loc>${p.url}</loc>
  ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ""}
  <changefreq>${p.changefreq}</changefreq>
  <priority>${p.priority}</priority>
</url>`
        )
        .join("\n")}
</urlset>`;

    fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), sitemapXml);

    // Generate robots.txt
    const robotsTxt = `
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}
`.trim();

    fs.writeFileSync(path.join(process.cwd(), "public/robots.txt"), robotsTxt);

    console.log("✅ sitemap.xml and robots.txt generated successfully!");
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    mongoose.connection.close();
  }
}

generateSitemap();
