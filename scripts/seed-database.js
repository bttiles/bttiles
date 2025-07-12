const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load environment variables
require("dotenv").config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please set MONGODB_URI in .env.local");
  process.exit(1);
}

// Define schemas
const TextureSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    resolution: { type: String, default: "4096x4096" },
    format: { type: String, default: "PNG, JPG" },
    tags: [String],
    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
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
  },
  { timestamps: true },
);

const Texture = mongoose.model("Texture", TextureSchema);
const User = mongoose.model("User", UserSchema);

// Sample texture data (from your static data)
const texturesData = [
  {
    name: "Smooth Concrete Panel Ceiling Texture",
    category: "Ceiling Tile Textures",
    image: "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
    description:
      "High-quality smooth concrete panel texture perfect for modern ceiling designs. Features realistic surface details and professional lighting.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "ceiling", "modern", "smooth", "architectural"],
    featured: true,
    trending: false,
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 1000),
  },
  {
    name: "Geometric Patterned Paver Texture, Beige & Black",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
    description:
      "Beautiful geometric patterned paver texture in beige and black colors. Ideal for exterior and interior flooring applications.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["geometric", "paver", "pattern", "beige", "black"],
    featured: false,
    trending: true,
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 1000),
  },
  {
    name: "Patterned Aggregate Concrete Paver Texture",
    category: "Stone Tile Textures",
    image: "https://images.pexels.com/photos/6603943/pexels-photo-6603943.jpeg",
    description:
      "Durable aggregate concrete paver with distinctive pattern. Perfect for outdoor patios, walkways, and commercial spaces.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "paver", "aggregate", "stone", "outdoor"],
    featured: true,
    trending: false,
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 1000),
  },
  {
    name: "Brushed Clay Tile Texture",
    category: "Terracotta Tile Textures",
    image: "https://images.pexels.com/photos/6023580/pexels-photo-6023580.jpeg",
    description:
      "Rustic brushed clay tile with natural earth tones. Ideal for Mediterranean and traditional design schemes.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["clay", "terracotta", "rustic", "earth", "traditional"],
    featured: false,
    trending: true,
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 1000),
  },
  {
    name: "Hexagonal White Marble Tile",
    category: "Hexagonal Tile Textures",
    image: "https://images.pexels.com/photos/6175107/pexels-photo-6175107.jpeg",
    description:
      "Elegant hexagonal white marble tiles with subtle veining. Perfect for luxury bathrooms and modern kitchen backsplashes.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["hexagonal", "marble", "white", "luxury", "veining"],
    featured: true,
    trending: true,
    likes: Math.floor(Math.random() * 100),
    views: Math.floor(Math.random() * 1000),
  },
  // Add more textures here (truncated for brevity)
];

async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    console.log("Clearing existing data...");
    await Texture.deleteMany({});
    await User.deleteMany({});

    // Create admin user
    console.log("Creating admin user...");
    const adminEmail = process.env.ADMIN_EMAIL || "admin@tiletextures.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await User.create({
      email: adminEmail,
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
    });

    // Seed textures
    console.log("Seeding textures...");
    await Texture.insertMany(texturesData);

    console.log(`✅ Database seeded successfully!`);
    console.log(`📊 Created ${texturesData.length} textures`);
    console.log(`👤 Admin user: ${adminEmail}`);
    console.log(`🔑 Admin password: ${adminPassword}`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seedDatabase();
