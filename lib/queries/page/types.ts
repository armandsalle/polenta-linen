import type { SEO } from '@/lib/shared/SEO/types'
import type { Photo } from '@/lib/shared/types/photo'

export interface PageData {
  data: PageContent
}

export interface PageContent {
  heritage: Page
}

export interface Page {
  recipesCollection: RecipesCollection
  seo: SEO
}

export interface RecipesCollection {
  items: Item[]
}

export interface Item {
  title: string
  thumbnail: Photo
  uid: string
}
