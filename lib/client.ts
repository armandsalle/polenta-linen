import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

import type { Story, StoryData } from './queries/story/types'

import { storyQuery } from './queries/story/gql'

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
}

export const client = new Client()
