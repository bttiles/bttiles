export interface Texture {
  id: number;
  name: string;
  category: string;
  image: string;
  description?: string;
  resolution?: string;
  fileSize?: string;
  format?: string;
  tags?: string[];
}

export const textures: Texture[] = [
  {
    id: 1,
    name: "Smooth Concrete Panel Ceiling Texture",
    category: "Ceiling Tile Textures",
    image: "https://images.pexels.com/photos/7380356/pexels-photo-7380356.jpeg",
    description:
      "High-quality smooth concrete panel texture perfect for modern ceiling designs. Features realistic surface details and professional lighting.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "ceiling", "modern", "smooth", "architectural"],
  },
  {
    id: 2,
    name: "Geometric Patterned Paver Texture, Beige & Black",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/4489336/pexels-photo-4489336.jpeg",
    description:
      "Beautiful geometric patterned paver texture in beige and black colors. Ideal for exterior and interior flooring applications.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["geometric", "paver", "pattern", "beige", "black"],
  },
  {
    id: 3,
    name: "Patterned Aggregate Concrete Paver Texture",
    category: "Stone Tile Textures",
    image: "https://images.pexels.com/photos/6603943/pexels-photo-6603943.jpeg",
    description:
      "Durable aggregate concrete paver with distinctive pattern. Perfect for outdoor patios, walkways, and commercial spaces.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["concrete", "paver", "aggregate", "stone", "outdoor"],
  },
  {
    id: 4,
    name: "Brushed Clay Tile Texture",
    category: "Terracotta Tile Textures",
    image: "https://images.pexels.com/photos/6023580/pexels-photo-6023580.jpeg",
    description:
      "Rustic brushed clay tile with natural earth tones. Ideal for Mediterranean and traditional design schemes.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["clay", "terracotta", "rustic", "earth", "traditional"],
  },
  {
    id: 5,
    name: "Hexagonal White Marble Tile",
    category: "Hexagonal Tile Textures",
    image: "https://images.pexels.com/photos/6175107/pexels-photo-6175107.jpeg",
    description:
      "Elegant hexagonal white marble tiles with subtle veining. Perfect for luxury bathrooms and modern kitchen backsplashes.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["hexagonal", "marble", "white", "luxury", "veining"],
  },
  {
    id: 6,
    name: "Mosaic Glass Tile Blue Pattern",
    category: "Mosaic Tile Textures",
    image:
      "https://images.pexels.com/photos/14579397/pexels-photo-14579397.jpeg",
    description:
      "Vibrant blue mosaic glass tiles creating stunning visual patterns. Ideal for pool areas and accent walls.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["mosaic", "glass", "blue", "pattern", "accent"],
  },
  {
    id: 7,
    name: "Herringbone Wood Tile Floor",
    category: "Herringbone Tile Textures",
    image: "https://images.pexels.com/photos/7746947/pexels-photo-7746947.jpeg",
    description:
      "Classic herringbone pattern wood-look tiles. Combines traditional elegance with modern durability.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["herringbone", "wood", "classic", "floor", "pattern"],
  },
  {
    id: 8,
    name: "Penny Round Ceramic Tile White",
    category: "Penny Round Tile Textures",
    image: "https://images.pexels.com/photos/7086367/pexels-photo-7086367.jpeg",
    description:
      "Small penny round ceramic tiles in crisp white. Perfect for vintage-inspired bathrooms and retro designs.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["penny", "round", "ceramic", "white", "vintage"],
  },
  {
    id: 9,
    name: "Natural Slate Tile Dark Gray",
    category: "Slate Tile Textures",
    image: "https://images.pexels.com/photos/6788528/pexels-photo-6788528.jpeg",
    description:
      "Natural slate tile with rich dark gray tones and organic texture. Ideal for contemporary and industrial designs.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["slate", "natural", "gray", "organic", "industrial"],
  },
  {
    id: 10,
    name: "Laminate Wood Tile Oak",
    category: "Laminate Tile Textures",
    image:
      "https://images.pexels.com/photos/11285345/pexels-photo-11285345.png",
    description:
      "Realistic oak wood-look laminate tiles. Combines the beauty of hardwood with tile durability.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["laminate", "wood", "oak", "realistic", "durable"],
  },
  {
    id: 11,
    name: "Terrazzo Tile Speckled Pattern",
    category: "Terrazzo Tile Textures",
    image: "https://images.pexels.com/photos/4977440/pexels-photo-4977440.jpeg",
    description:
      "Modern terrazzo tiles with colorful speckled pattern. Perfect for contemporary commercial and residential spaces.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["terrazzo", "speckled", "modern", "colorful", "contemporary"],
  },
  {
    id: 12,
    name: "Zellige Handmade Tile Green",
    category: "Zellige Tile Textures",
    image: "https://images.pexels.com/photos/2084238/pexels-photo-2084238.jpeg",
    description:
      "Handcrafted Zellige tiles in rich green with traditional glazed finish. Authentic Moroccan craftsmanship.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["zellige", "handmade", "green", "moroccan", "glazed"],
  },
  {
    id: 13,
    name: "Acoustic Foam Tile Texture",
    category: "Acoustic Tile Textures",
    image: "https://images.pexels.com/photos/1660916/pexels-photo-1660916.jpeg",
    description:
      "Specialized acoustic foam tiles for sound dampening. Ideal for recording studios and noise-sensitive environments.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["acoustic", "foam", "sound", "studio", "dampening"],
  },
  {
    id: 14,
    name: "Yubi Finger Tile Pattern",
    category: "Yubi Tile Textures",
    image:
      "https://images.pexels.com/photos/12969405/pexels-photo-12969405.jpeg",
    description:
      "Unique Yubi finger-pressed ceramic tiles with tactile surface texture. Creates distinctive shadows and visual interest.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["yubi", "finger", "ceramic", "tactile", "texture"],
  },
  {
    id: 15,
    name: "Carrara Marble Tile Veined",
    category: "Marble Tile Textures",
    image: "https://images.pexels.com/photos/4604566/pexels-photo-4604566.jpeg",
    description:
      "Premium Carrara marble tiles with elegant gray veining. The epitome of luxury and timeless sophistication.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["carrara", "marble", "veined", "luxury", "premium"],
  },
  {
    id: 16,
    name: "Square Ceramic Tile White",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/7245511/pexels-photo-7245511.jpeg",
    description:
      "Clean white square ceramic tiles with subtle texture. Versatile foundation for any design style.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["square", "ceramic", "white", "clean", "versatile"],
  },
  {
    id: 17,
    name: "Travertine Stone Tile Beige",
    category: "Stone Tile Textures",
    image: "https://images.pexels.com/photos/4705853/pexels-photo-4705853.jpeg",
    description:
      "Natural travertine stone tiles in warm beige tones. Features characteristic porous texture and earth-tone coloring.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["travertine", "stone", "beige", "natural", "warm"],
  },
  {
    id: 18,
    name: "Subway Tile White Glossy",
    category: "Square Tile Textures",
    image: "https://images.pexels.com/photos/7534571/pexels-photo-7534571.jpeg",
    description:
      "Classic white subway tiles with glossy finish. Timeless choice for kitchen backsplashes and bathroom walls.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["subway", "white", "glossy", "classic", "timeless"],
  },
  {
    id: 19,
    name: "Moroccan Mosaic Tile Pattern",
    category: "Mosaic Tile Textures",
    image:
      "https://images.pexels.com/photos/32891809/pexels-photo-32891809.jpeg",
    description:
      "Intricate Moroccan mosaic pattern with traditional geometric designs. Perfect for creating stunning focal points.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["moroccan", "mosaic", "pattern", "geometric", "traditional"],
  },
  {
    id: 20,
    name: "Hexagonal Cement Tile Black",
    category: "Hexagonal Tile Textures",
    image: "https://images.pexels.com/photos/8580731/pexels-photo-8580731.jpeg",
    description:
      "Bold black hexagonal cement tiles with matte finish. Perfect for modern industrial and minimalist designs.",
    resolution: "4096x4096",
    format: "PNG, JPG",
    tags: ["hexagonal", "cement", "black", "modern", "industrial"],
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

export function getTextureById(id: string | number): Texture | null {
  const numericId = typeof id === "string" ? parseInt(id) : id;
  return textures.find((texture) => texture.id === numericId) || null;
}

export function getTexturesByCategory(category: string): Texture[] {
  return textures.filter((texture) => texture.category === category);
}
