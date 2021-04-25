import type { Document } from '@contentful/rich-text-types'
import type { SEOContent } from '@/lib/shared/SEO/types'
import type { Photo } from '@/lib/shared/types/photo'

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
  seo: SEOContent
}

export interface Description {
  json: Document
}
