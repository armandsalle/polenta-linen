import { seoFragment } from '@/lib/shared/SEO/gql'
import { gql } from '@apollo/client'

export const pageQuery = gql`
  query Page($id: String!) {
    heritage(id: $id) {
      recipesCollection {
        items {
          title
          uid
          thumbnail {
            title
            url
          }
        }
      }
      ${seoFragment}
    }
  }
`
