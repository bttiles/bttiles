export interface Texture {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
  resolution?: string;
  format?: string;
  tags?: string[];
}

export const textures: Texture[] = [
  {
    id: "1",
    name: "Smooth Concrete Panel Ceiling Texture",
    category: "Ceiling Tile Textures",
    image: "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
    description:
      "High-quality smooth concrete panel texture perfect for modern ceiling designs.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "ceiling", "modern", "smooth", "architectural"],
  },
  {
    id: "2",
    name: "Geometric Patterned Paver Texture",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
    description:
      "Beautiful geometric patterned paver texture in beige and black colors.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["geometric", "paver", "pattern", "beige", "black"],
  },
  {
    id: "3",
    name: "Patterned Aggregate Concrete Paver Texture",
    category: "Stone Tile Textures",
    image: "https://images.pexels.com/photos/6603943/pexels-photo-6603943.jpeg",
    description: "Durable aggregate concrete paver with distinctive pattern.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "paver", "aggregate", "stone", "outdoor"],
  },
];

export const categories = [
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
];

export function getTextureById(id: string): Texture | null {
  return textures.find((texture) => texture.id === id) || null;
}
