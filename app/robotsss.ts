import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/']
      },
      {
        userAgent: 'Bingbot', 
        allow: '/',
        disallow: ['/admin/', '/api/']
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/']
      }
    ],
    sitemap: 'https://bttufftiles.vercel.app/sitemap.xml',
    host: 'https://bttufftiles.vercel.app'
  }
}
