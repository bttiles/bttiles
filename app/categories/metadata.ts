import { Metadata } from 'next'
import { generateMetadata as genMeta } from '../../lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Tile Categories - Browse Premium Tuff Tiles & Pavers by Category | Bismillah Tuff Tiles',
  description: 'Browse our comprehensive collection of tiles by category. Choose from Standard Pavers, Tuff Tiles, GRC Jali, and more. Premium construction materials available in Pakistan with nationwide delivery.',
  keywords: [
    'tile categories',
    'tuff tiles categories',
    'pavers types',
    'grc jali designs',
    'construction materials pakistan',
    'tile catalog',
    'building materials categories',
    'architectural tiles'
  ],
  url: 'https://bttufftiles.vercel.app/categories'
})
