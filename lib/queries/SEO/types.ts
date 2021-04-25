export interface SEO {
  seo: SEOContent
}

export interface SEOContent {
  title: string
  description: string
  ogImage: OgImage
}

export interface OgImage {
  url: string
}
