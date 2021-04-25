import type { Photo } from '@/lib/shared/types/photo'
import type { SEO } from '@/lib/shared/SEO/types'

export interface HomeData {
  data: HomeContent
}

export interface HomeContent {
  home: Home
}

export interface Home {
  title: string
  heroImage: Photo
  featuredPageCollection: FeaturedPageCollection
  seo: SEO
}

export interface FeaturedPageCollection {
  items: Item[]
}

export interface Item {
  title: string
  description: string
  page: Page
  thumbnail: Photo
}

export interface Page {
  uid: string
}
