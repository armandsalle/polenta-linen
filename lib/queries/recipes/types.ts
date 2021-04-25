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
}

export interface Sys {
  id: string
}
