import { gql } from '@apollo/client'

export const recipesQuery = gql`
  query AllRecipes {
    recipeCollection {
      items {
        uid
        tags
        title
        thumbnail {
          url
        }
        sys {
          id
        }
      }
    }
  }
`
