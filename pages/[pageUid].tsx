import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Page as PageType } from '@/lib/queries/page/types'

import { client } from '@/lib/client'
import Link from 'next/link'
import Title from '@/components/atoms/Title'
import RecipesNavigation from '@/components/molecules/RecipesNavigation'
import ResponsiveImage from '@/components/atoms/ResponsiveImage'
import { Item } from '@/lib/queries/pages/types'

type PageProps = {
  page: PageType
  pages: Item[]
}

const Page = ({ page, pages }: PageProps): JSX.Element => {
  const filteredPages = pages.filter((e) => e.uid !== 'all')
  return (
    <section>
      <div className="recipe-preview__header">
        <Title isSplit={true} as="h1">
          all recipes
        </Title>
        <RecipesNavigation pages={filteredPages} />
      </div>
      <div className="container recipe-preview">
        {page.recipesCollection.items.map((el, i) => {
          return (
            <Link href={`/recipe/${el.uid}`} key={i}>
              <a className="recipe-preview__link">
                <ResponsiveImage
                  className="recipe-preview__image"
                  src={el.thumbnail.url}
                  alt={el.thumbnail.title}
                />
                <p className="recipe-preview__title">{el.title}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params: { pageUid },
}) => {
  const { pages } = await client.getPages()
  const [id] = pages.filter((e) => e.uid === pageUid)
  const { page } = await client.getPage(id.sys.id)

  return {
    props: {
      pages,
      page,
      SEO: page.seo,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.getPages()

  const paths = pages.map((e) => ({
    params: {
      pageUid: e.uid,
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Page
