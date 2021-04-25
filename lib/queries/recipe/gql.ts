import { seoFragment } from '@/lib/queries/SEO/gql'
import { gql } from '@apollo/client'

export const recipeQuery = gql`
  query Recipe($id: String!) {
    recipe(id: $id) {
      recipe(id: "erRu6EJFZaRzbuICgthta") {
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
  }
`
