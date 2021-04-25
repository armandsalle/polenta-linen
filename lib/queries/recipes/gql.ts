import { gql } from '@apollo/client'

export const recipesQuery = gql`
  query AllRecipes {
    recipeCollection {
      items {
        uid
        sys {
          id
        }
      }
    }
  }
`
