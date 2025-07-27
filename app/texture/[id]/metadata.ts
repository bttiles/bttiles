import { Metadata } from 'next'
import connectDB from '../../../lib/mongodb'
// import Texture from '../../../lib/models/Texture'
import Texture, { ITexture } from '../../../lib/models/Texture';
import { generateMetadata as genMeta, structuredData } from '../../../lib/seo'
// import type { ITexture } from '../../../lib/models/Texture'; // adjust path if needed

interface Props {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        await connectDB()

        const texture = await Texture.findById(params.id).lean<ITexture>();


        if (!texture) {
            return genMeta({
                title: 'Texture Not Found - Bismillah Tuff Tiles',
                description: 'The requested texture could not be found. Browse our collection of premium tiles and pavers.'
            })
        }

        const title = `${texture.name} - Premium ${texture.category} | Bismillah Tuff Tiles Pakistan`
        const description = `${texture.description} High-quality ${texture.category.toLowerCase()} available in Pakistan. Contact us for pricing and bulk orders. ${texture.name} with ${texture.views} views.`

        return genMeta({
            title,
            description,
            keywords: [
                texture?.name.toLowerCase(),
                texture.category.toLowerCase(),
                'tiles pakistan',
                'pavers',
                'construction materials',
                ...(texture.tags || [])
            ],
            image: texture.image,
            url: `https://bttufftiles.vercel.app/texture/${texture._id}`,
            type: 'product',
            price: 'Contact for pricing',
            availability: 'in stock',
            category: texture.category
        })
    } catch (error) {
        console.error('Error generating texture metadata:', error)
        return genMeta({
            title: 'Texture Details - Bismillah Tuff Tiles',
            description: 'View detailed information about our premium tiles and construction materials.'
        })
    }
}

export function generateTextureStructuredData(texture: any) {
    return structuredData.product({
        name: texture.name,
        description: texture.description,
        image: texture.image,
        category: texture.category,
        sku: texture._id
    })
}
