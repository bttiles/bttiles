const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load environment variables
require("dotenv").config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ Please set MONGODB_URI in .env.local");
  process.exit(1);
}

// Define schemas (inline for this script)
const TextureSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    imagePublicId: { type: String },
    resolution: { type: String, default: "4096x4096" },
    format: { type: String, default: "PNG, JPG" },
    tags: [String],
    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    adminNotes: { type: String, default: "" },
  },
  { timestamps: true },
);

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date },
  },
  { timestamps: true },
);

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);



const Texture = mongoose.model("Texture", TextureSchema);
const User = mongoose.model("User", UserSchema);

// Sample texture data
const texturesData = [
  {
    name: "Smooth Concrete Panel Ceiling Texture",
    category: "Ceiling Tile Textures",
    image: "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
    description:
      "High-quality smooth concrete panel texture perfect for modern ceiling designs. Features realistic surface details and professional lighting with seamless tiling capabilities.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "ceiling", "modern", "smooth", "architectural"],
    featured: true,
    trending: false,
    likes: Math.floor(Math.random() * 150) + 50,
    views: Math.floor(Math.random() * 2000) + 500,
    adminNotes: "Popular item - consider promoting",
  },
  {
    name: "Geometric Patterned Paver Texture, Beige & Black",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
    description:
      "Beautiful geometric patterned paver texture in beige and black colors. Ideal for exterior and interior flooring applications with modern design appeal.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["geometric", "paver", "pattern", "beige", "black", "modern"],
    featured: false,
    trending: true,
    likes: Math.floor(Math.random() * 120) + 30,
    views: Math.floor(Math.random() * 1800) + 400,
    adminNotes: "Trending well",
  },
  {
    name: "Patterned Aggregate Concrete Paver Texture",
    category: "Stone Tile Textures",
    image: "https://images.pexels.com/photos/6603943/pexels-photo-6603943.jpeg",
    description:
      "Durable aggregate concrete paver with distinctive pattern. Perfect for outdoor patios, walkways, and commercial spaces requiring robust surface solutions.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "paver", "aggregate", "stone", "outdoor", "durable"],
    featured: true,
    trending: false,
    likes: Math.floor(Math.random() * 100) + 40,
    views: Math.floor(Math.random() * 1500) + 300,
    adminNotes: "High quality texture",
  },
  {
    name: "Brushed Clay Tile Texture",
    category: "Terracotta Tile Textures",
    image: "https://images.pexels.com/photos/6023580/pexels-photo-6023580.jpeg",
    description:
      "Rustic brushed clay tile with natural earth tones. Ideal for Mediterranean and traditional design schemes with authentic handcrafted appearance.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: [
      "clay",
      "terracotta",
      "rustic",
      "earth",
      "traditional",
      "handcrafted",
    ],
    featured: false,
    trending: true,
    likes: Math.floor(Math.random() * 90) + 25,
    views: Math.floor(Math.random() * 1200) + 250,
    adminNotes: "Authentic style",
  },
  {
    name: "Hexagonal White Marble Tile",
    category: "Hexagonal Tile Textures",
    image: "https://images.pexels.com/photos/6175107/pexels-photo-6175107.jpeg",
    description:
      "Elegant hexagonal white marble tiles with subtle veining. Perfect for luxury bathrooms and modern kitchen backsplashes with premium finish.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["hexagonal", "marble", "white", "luxury", "veining", "premium"],
    featured: true,
    trending: true,
    likes: Math.floor(Math.random() * 200) + 80,
    views: Math.floor(Math.random() * 2500) + 700,
    adminNotes: "Premium product - high demand",
  },
  {
    name: "Dark Slate Stone Tiles",
    category: "Slate Tile Textures",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
    description:
      "Natural dark slate stone tiles with rich texture and color variations. Excellent for both interior and exterior applications with weather resistance.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["slate", "stone", "dark", "natural", "texture", "weather-resistant"],
    featured: false,
    trending: false,
    likes: Math.floor(Math.random() * 75) + 15,
    views: Math.floor(Math.random() * 1000) + 200,
    adminNotes: "Classic option",
  },
  {
    name: "Mosaic Tile Pattern - Blue & White",
    category: "Mosaic Tile Textures",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    description:
      "Intricate mosaic tile pattern in blue and white combinations. Perfect for swimming pools, bathrooms, and decorative accent walls.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["mosaic", "blue", "white", "pattern", "decorative", "pool"],
    featured: true,
    trending: false,
    likes: Math.floor(Math.random() * 110) + 35,
    views: Math.floor(Math.random() * 1600) + 350,
    adminNotes: "Pool applications",
  },
  {
    name: "Herringbone Wood-Look Tile",
    category: "Herringbone Tile Textures",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    description:
      "Classic herringbone pattern with wood-look ceramic tiles. Combines traditional elegance with modern durability for floors and walls.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: [
      "herringbone",
      "wood-look",
      "ceramic",
      "traditional",
      "elegant",
      "durable",
    ],
    featured: false,
    trending: true,
    likes: Math.floor(Math.random() * 95) + 20,
    views: Math.floor(Math.random() * 1300) + 280,
    adminNotes: "Traditional meets modern",
  },
  {
    name: "Polished Marble Subway Tiles",
    category: "Marble Tile Textures",
    image: "https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg",
    description:
      "Classic polished marble subway tiles with clean lines and luxurious finish. Timeless choice for kitchens and bathrooms.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["marble", "subway", "polished", "clean", "luxurious", "timeless"],
    featured: true,
    trending: false,
    likes: Math.floor(Math.random() * 130) + 45,
    views: Math.floor(Math.random() * 1900) + 450,
    adminNotes: "Timeless classic",
  },
  {
    name: "Terrazzo Aggregate Floor Tiles",
    category: "Terrazzo Tile Textures",
    image: "https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg",
    description:
      "Modern terrazzo tiles with colorful aggregate chips. Sustainable and stylish option for contemporary interiors with unique patterns.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: [
      "terrazzo",
      "aggregate",
      "colorful",
      "sustainable",
      "contemporary",
      "unique",
    ],
    featured: false,
    trending: true,
    likes: Math.floor(Math.random() * 85) + 18,
    views: Math.floor(Math.random() * 1100) + 220,
    adminNotes: "Sustainable choice",
  },
];
const categoriesData = [
  {
    name: "Acoustic Tile Textures",
    description: "Acoustic tiles designed to absorb sound and reduce noise.",
  },
  {
    name: "Ceiling Tile Textures",
    description: "Stylish ceiling tiles for various room aesthetics.",
  },
  {
    name: "Herringbone Tile Textures",
    description: "Distinctive herringbone pattern tiles for modern spaces.",
  },
  {
    name: "Hexagonal Tile Textures",
    description: "Six-sided tiles perfect for kitchens and bathrooms.",
  },
  {
    name: "Laminate Tile Textures",
    description: "Durable laminate tiles with realistic textures.",
  },
  {
    name: "Marble Tile Textures",
    description: "Luxurious marble tiles for classic interiors.",
  },
  {
    name: "Mosaic Tile Textures",
    description: "Creative mosaic patterns for artistic flair.",
  },
  {
    name: "Penny Round Tile Textures",
    description: "Circular penny tiles for retro-inspired looks.",
  },
  {
    name: "Slate Tile Textures",
    description: "Natural slate surfaces for rustic spaces.",
  },
  {
    name: "Square Tile Textures",
    description: "Classic square tiles for versatile use.",
  },
  {
    name: "Stone Tile Textures",
    description: "Natural stone surfaces with rugged appeal.",
  },
  {
    name: "Terracotta Tile Textures",
    description: "Warm, earthy terracotta tiles with traditional style.",
  },
  {
    name: "Terrazzo Tile Textures",
    description: "Colorful terrazzo surfaces with speckled charm.",
  },
  {
    name: "Yubi Tile Textures",
    description: "Minimalist tile textures with a Japanese aesthetic.",
  },
  {
    name: "Zellige Tile Textures",
    description: "Handmade Moroccan tiles with unique textures.",
  },
];


async function seedDatabase() {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    console.log("🧹 Clearing existing data...");
    await Texture.deleteMany({});
    await User.deleteMany({});
    console.log("✅ Existing data cleared");

    // Create admin user
    console.log("👤 Creating admin user...");
    const adminEmail = process.env.ADMIN_EMAIL || "admin@tiletextures.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    const hashedPassword = await bcrypt.hash(adminPassword, 12);
    await User.create({
      email: adminEmail,
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
      isActive: true,
    });
    console.log("✅ Admin user created");



    // Clear existing categories
    console.log("🧹 Clearing existing categories...");
    await Category.deleteMany({});
    console.log("✅ Categories cleared");

    // Seed categories
    console.log("📁 Seeding categories...");
    await Category.insertMany(categoriesData);
    console.log(`✅ ${categoriesData.length} categories seeded`);


    // Seed textures
    console.log("🖼️ Seeding textures...");
    await Texture.insertMany(texturesData);
    console.log("✅ Textures seeded");

    // Display summary
    console.log("\n🎉 Database seeded successfully!");
    console.log(`📁 Created ${categoriesData.length} categories`);
    console.log(`📊 Created ${texturesData.length} textures`);

    console.log(`👤 Admin user: ${adminEmail}`);
    console.log(`🔑 Admin password: ${adminPassword}`);
    console.log(`🌐 Admin panel: http://localhost:3000/admin/login`);
    console.log("\n💡 Next steps:");
    console.log("1. Copy .env.local.example to .env.local");
    console.log("2. Update MongoDB connection string");
    console.log("3. Add Cloudinary credentials (optional)");
    console.log("4. Run: npm run dev");
    console.log("5. Visit admin panel to manage textures");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Add error handling for unhandled promises
process.on("unhandledRejection", (error) => {
  console.error("❌ Unhandled Promise Rejection:", error);
  process.exit(1);
});

seedDatabase();
