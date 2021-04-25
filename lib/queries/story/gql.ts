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
    }
  }
`
