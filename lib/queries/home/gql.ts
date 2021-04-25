import { seoFragment } from '@/lib/queries/SEO/gql'
import { gql } from '@apollo/client'

export const homeQuery = gql`
query Home {
  home(id: "5PKbLvtccQnkKj7rDgcrti") {
    title
    heroImage {
     title
      url(transform: { width: 1920 })
    }
    featuredPageCollection {
      items {
        title
        description
        page {
          uid
        }
        thumbnail {
          title
          url(transform: { width: 686 })
        }
      }
    }
    ${seoFragment}
  }
}`
