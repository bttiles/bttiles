import mongoose from "mongoose";

const TextureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Acoustic Tile Textures",
        "Ceiling Tile Textures",
        "Herringbone Tile Textures",
        "Hexagonal Tile Textures",
        "Laminate Tile Textures",
        "Marble Tile Textures",
        "Mosaic Tile Textures",
        "Penny Round Tile Textures",
        "Slate Tile Textures",
        "Square Tile Textures",
        "Stone Tile Textures",
        "Terracotta Tile Textures",
        "Terrazzo Tile Textures",
        "Yubi Tile Textures",
        "Zellige Tile Textures",
      ],
    },
    image: {
      type: String,
      required: true,
    },
    imagePublicId: {
      type: String,
    },
    resolution: {
      type: String,
      default: "4096x4096",
    },
    format: {
      type: String,
      default: "PNG, JPG",
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    trending: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    adminNotes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

// Create indexes for better performance
TextureSchema.index({ category: 1 });
TextureSchema.index({ featured: 1 });
TextureSchema.index({ trending: 1 });
TextureSchema.index({ isActive: 1 });
TextureSchema.index({ name: "text", description: "text", tags: "text" });

export default mongoose.models.Texture ||
  mongoose.model("Texture", TextureSchema);
