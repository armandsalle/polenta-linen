import type { Photo } from '@/lib/shared/types/photo'
import type { Sys } from '@/lib/shared/types/Sys'

export interface RecipesData {
  data: RecipesContent
}

export interface RecipesContent {
  recipeCollection: Recipes
}

export interface Recipes {
  items: Item[]
}

export interface Item {
  uid: string
  sys: Sys
  title: string
  thumbnail: Photo
  tags: string[]
}
