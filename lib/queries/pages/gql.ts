import { gql } from '@apollo/client'

export const pagesQuery = gql`
  query Pages {
    heritageCollection {
      items {
        uid
        order
        title
        sys {
          id
        }
      }
    }
  }
`
