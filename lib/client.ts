import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

import type { Item as PageItem, PagesData } from '@/lib/queries/pages/types'
import type { Page, PageData } from '@/lib/queries/page/types'
import type { Story, StoryData } from '@/lib/queries/story/types'
import type { Recipe, RecipeData } from '@/lib/queries/recipe/types'
import type { Item, RecipesData } from '@/lib/queries/recipes/types'
import type { Home, HomeData } from '@/lib/queries/home/types'

import { storyQuery } from '@/lib/queries/story/gql'
import { homeQuery } from '@/lib/queries/home/gql'
import { recipesQuery } from '@/lib/queries/recipes/gql'
import { recipeQuery } from '@/lib/queries/recipe/gql'
import { pagesQuery } from '@/lib/queries/pages/gql'
import { pageQuery } from '@/lib/queries/page/gql'

export class Client {
  uri: string
  token: string
  client: ApolloClient<NormalizedCacheObject>

  constructor() {
    this.uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`
    this.token = process.env.ACCESS_TOKEN
    this.client = new ApolloClient({
      uri: this.uri,
      headers: {
        authorization: `Bearer ${this.token}`,
      },
      cache: new InMemoryCache(),
    })
  }

  getStory = async (): Promise<{ story: Story }> => {
    const { data }: StoryData = await this.client.query({
      query: storyQuery,
    })

    const story = data.story

    return { story }
  }

  getHome = async (): Promise<{ home: Home }> => {
    const { data }: HomeData = await this.client.query({
      query: homeQuery,
    })

    const home = data.home

    return { home }
  }

  getAllRecipes = async (): Promise<{ items: Item[] }> => {
    const { data }: RecipesData = await this.client.query({
      query: recipesQuery,
    })

    const items = data.recipeCollection.items

    return { items }
  }

  getRecipe = async (id: string): Promise<{ recipe: Recipe }> => {
    const { data }: RecipeData = await this.client.query({
      query: recipeQuery,
      variables: { id },
    })

    const recipe = data.recipe

    return { recipe }
  }

  getPages = async (): Promise<{ pages: PageItem[] }> => {
    const { data }: PagesData = await this.client.query({
      query: pagesQuery,
    })

    const pages = data.heritageCollection.items

    return { pages }
  }

  getPage = async (id: string): Promise<{ page: Page }> => {
    const { data }: PageData = await this.client.query({
      query: pageQuery,
      variables: { id },
    })

    const page = data.heritage

    return { page }
  }
}

export const client = new Client()
