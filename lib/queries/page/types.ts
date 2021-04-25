import type { SEO } from '@/lib/shared/SEO/types'

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
  thumbnail: Thumbnail
  uid: string
}

export interface Thumbnail {
  title: string
  url: string
}
