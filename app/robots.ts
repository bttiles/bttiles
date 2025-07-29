import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/admin/', '/_next/', '/admin/login'],
    },
    sitemap: 'https://bismillahtufftiles.vercel.app/sitemap.xml',
    host: 'https://bismillahtufftiles.vercel.app',
  }
}
