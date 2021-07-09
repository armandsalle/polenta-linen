import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

import {
  StoryDocument,
  HomeDocument,
  AllRecipesDocument,
  AllRecipesQuery,
  RecipeDocument,
  RecipeQuery,
  HeritageQuery,
  HeritageDocument,
  PageDocument,
  PageQuery,
  HomeQuery,
  StoryQuery,
} from './generated/graphql'

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

  getStory = async (): Promise<StoryQuery> => {
    const { data } = await this.client.query<StoryQuery>({
      query: StoryDocument,
    })

    return data
  }

  getHome = async (): Promise<HomeQuery> => {
    const { data } = await this.client.query<HomeQuery>({
      query: HomeDocument,
    })

    return data
  }

  getAllRecipes = async (): Promise<
    AllRecipesQuery['recipeCollection']['items']
  > => {
    const { data } = await this.client.query<AllRecipesQuery>({
      query: AllRecipesDocument,
    })

    return data.recipeCollection.items
  }

  getRecipe = async (
    id: string
  ): Promise<{ recipe: RecipeQuery['recipe'] }> => {
    const { data } = await this.client.query<RecipeQuery>({
      query: RecipeDocument,
      variables: { id },
    })

    return { recipe: data.recipe }
  }

  getPages = async (): Promise<{
    pages: HeritageQuery['heritageCollection']['items']
  }> => {
    const { data } = await this.client.query<HeritageQuery>({
      query: HeritageDocument,
    })

    return { pages: data.heritageCollection.items }
  }

  getPage = async (id: string): Promise<{ page: PageQuery['heritage'] }> => {
    const { data } = await this.client.query<PageQuery>({
      query: PageDocument,
      variables: { id },
    })

    return { page: data.heritage }
  }
}

export const client = new Client()
