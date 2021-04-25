import { seoFragment } from '@/lib/shared/SEO/gql'
import { gql } from '@apollo/client'

export const recipeQuery = gql`
  query Recipe($id: String!) {
    recipe(id: $id) {
        title
        subtitle
        thumbnail {
          title
          url
        }
        cooksNote {
          json
        }
        plating {
          json
        }
        preparation {
          json
        }
        ingredients {
          json
        }
        sliderCollection {
          items {
            title
            url
          }
        }
        ${seoFragment}
    }
  }
`
