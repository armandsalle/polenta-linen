import { gql } from '@apollo/client'
import { seoFragment } from '@/lib/queries/SEO/gql'

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
