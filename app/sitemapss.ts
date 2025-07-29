import { MetadataRoute } from 'next'
import connectDB from '../lib/mongodb'
import Texture from '../lib/models/Texture'
import Category from '../lib/models/Category'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bismillahtufftiles.vercel.app'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/featured`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]

  try {
    await connectDB()

    // Get all textures
    const textures = await Texture.find({}, 'slug updatedAt').lean()
    const texturePages = textures.map((texture) => ({
      url: `${baseUrl}/texture/${texture._id}`,
      lastModified: texture.updatedAt || new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    // Get all categories
    const categories = await Category.find({}, 'slug updatedAt').lean()
const categoryPages = categories
  .filter((category) => category.name && category.name.trim() !== "")
  .map((category) => ({
    url: `${baseUrl}/categories?category=${encodeURIComponent(category.name)}`,
    lastModified: category.updatedAt?.toISOString() || new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));


    return [...staticPages, ...texturePages, ...categoryPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticPages
  }
}
