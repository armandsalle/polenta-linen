import { seoFragment } from '@/lib/shared/SEO/gql'
import { gql } from '@apollo/client'

export const storyQuery = gql`
  query StoryQuery {
    story(id: "4UAL9RZSXVKduHbgZTW2TN") {
      title
      description {
        json
      }
      signature
      photo {
        title
        url(transform: { width: 560 })
      }
      ${seoFragment}
    }
  }
`
