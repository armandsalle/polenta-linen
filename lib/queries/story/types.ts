import { Document } from '@contentful/rich-text-types'

export interface StoryData {
  data: StoryContent
}

export interface StoryContent {
  story: Story
}

export interface Story {
  title: string
  description: Description
  signature: string
  photo: Photo
}

export interface Description {
  json: Document
}

export interface Photo {
  url: string
}
