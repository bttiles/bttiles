const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("❌ Please set MONGODB_URI in .env.local");
    process.exit(1);
}

// Define Category schema inline
const CategorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true, trim: true },
        description: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true },
        image: { type: String, default: "" },
        imagePublicId: { type: String, default: "" },
        isActive: { type: Boolean, default: true },
        sortOrder: { type: Number, default: 0 },
        textureCount: { type: Number, default: 0 },
    },
    { timestamps: true },
);

// Generate slug before saving
CategorySchema.pre("save", function (next) {
    if (this.isModified("name")) {
        this.slug = this.name
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim("-");
    }
    next();
});

const Category = mongoose.model("Category", CategorySchema);

// Categories data
const categoriesData = [
    {
        name: "Acoustic Tile Textures",
        description:
            "Sound-absorbing tiles perfect for studios, theaters, and noise-sensitive environments.",
        sortOrder: 1,
    },
    {
        name: "Ceiling Tile Textures",
        description:
            "Decorative and functional ceiling tiles for residential and commercial spaces.",
        sortOrder: 2,
    },
    {
        name: "Herringbone Tile Textures",
        description:
            "Classic herringbone pattern tiles that add timeless elegance to any space.",
        sortOrder: 3,
    },
    {
        name: "Hexagonal Tile Textures",
        description:
            "Modern hexagonal tiles for contemporary design with geometric appeal.",
        sortOrder: 4,
    },
    {
        name: "Laminate Tile Textures",
        description:
            "Durable laminate tiles that mimic natural materials with easy maintenance.",
        sortOrder: 5,
    },
    {
        name: "Marble Tile Textures",
        description:
            "Luxurious marble tiles bringing elegance and sophistication to premium projects.",
        sortOrder: 6,
    },
    {
        name: "Mosaic Tile Textures",
        description:
            "Intricate mosaic patterns perfect for feature walls and decorative applications.",
        sortOrder: 7,
    },
    {
        name: "Penny Round Tile Textures",
        description:
            "Small round tiles creating unique patterns and visual texture in bathrooms and kitchens.",
        sortOrder: 8,
    },
    {
        name: "Slate Tile Textures",
        description:
            "Natural slate tiles with rich textures for rustic and contemporary designs.",
        sortOrder: 9,
    },
    {
        name: "Square Tile Textures",
        description:
            "Versatile square tiles suitable for floors, walls, and various design applications.",
        sortOrder: 10,
    },
    {
        name: "Stone Tile Textures",
        description:
            "Natural stone tiles offering durability and organic beauty for any project.",
        sortOrder: 11,
    },
    {
        name: "Terracotta Tile Textures",
        description:
            "Traditional terracotta tiles with warm earth tones for Mediterranean and rustic styles.",
        sortOrder: 12,
    },
    {
        name: "Terrazzo Tile Textures",
        description:
            "Composite tiles with colorful aggregate chips for modern and sustainable design.",
        sortOrder: 13,
    },
    {
        name: "Yubi Tile Textures",
        description:
            "Specialized Yubi tiles with unique textures and contemporary appeal.",
        sortOrder: 14,
    },
    {
        name: "Zellige Tile Textures",
        description:
            "Handcrafted Moroccan tiles with distinctive glazes and artisanal character.",
        sortOrder: 15,
    },
];

function generateSlug(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
}


async function seedCategories() {
    try {
        console.log("🔗 Connecting to MongoDB...");
        await mongoose.connect(MONGODB_URI);
        console.log("✅ Connected to MongoDB");

        // Clear existing categories
        console.log("🧹 Clearing existing categories...");
        await Category.deleteMany({});
        console.log("✅ Existing categories cleared");

        // Seed categories
        console.log("📂 Seeding categories...");
        const categoriesWithSlugs = categoriesData.map((cat) => ({
            ...cat,
            slug: generateSlug(cat.name),
        }));
        await Category.insertMany(categoriesWithSlugs);

        console.log("✅ Categories seeded");

        console.log("\n🎉 Categories seeded successfully!");
        console.log(`📊 Created ${categoriesData.length} categories`);
        console.log("\n💡 Next steps:");
        console.log("1. Go to admin panel: http://localhost:3000/admin/categories");
        console.log("2. Add textures and assign them to categories");
        console.log("3. Visit categories page: http://localhost:3000/categories");
    } catch (error) {
        console.error("❌ Error seeding categories:", error);
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

seedCategories();
