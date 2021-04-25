import type { Document } from '@contentful/rich-text-types'
import type { Photo } from '@/lib/shared/types/photo'
import type { SEO } from '@/lib/shared/SEO/types'

export interface RecipeData {
  data: RecipeContent
}

export interface RecipeContent {
  recipe: Recipe
}

export interface Recipe {
  title: string
  subtitle: string
  thumbnail: Photo
  cooksNote: null
  plating: Ingredients
  preparation: Ingredients
  ingredients: Ingredients
  sliderCollection: SliderCollection
  seo: SEO
}

export interface Ingredients {
  json: Document
}

export interface SliderCollection {
  items: Photo[]
}
