import type { GetStaticPaths, GetStaticProps } from 'next'

import { client } from '@/lib/client'
import Title from '@/components/atoms/Title'
import RecipesNavigation from '@/components/molecules/RecipesNavigation'
import RecipePreview from '@/components/molecules/RecipePreview'

import { useCallback, useContext, useEffect } from 'react'
import { NavigationContext } from '@/contexts/animationContext'
import { HeritageQuery, PageQuery } from '@/lib/generated/graphql'

type PageProps = {
  page: PageQuery['heritage']
  pages: HeritageQuery['heritageCollection']['items']
}

const Page = ({ page, pages }: PageProps): JSX.Element => {
  const filteredPages = pages.filter((e) => e.uid !== 'all')
  const orderedPages = filteredPages.sort((a, b) => a.order - b.order)
  const pagesClassnames = [...orderedPages].map((e) => e.uid.replace('/', ''))

  const { setUserNavigated } = useContext(NavigationContext)

  useEffect(() => {
    setUserNavigated(false)
  }, [])

  const handleRecipeCLick = useCallback(() => {
    setUserNavigated(true)
  }, [])

  return (
    <section>
      <div className="recipe-preview__header">
        <Title isSplit={true} as="h1">
          all recipes
        </Title>
        <RecipesNavigation pages={orderedPages} classnames={pagesClassnames} />
      </div>
      <div className="container recipe-preview">
        {page.recipesCollection.items.map((el, i) => {
          return <RecipePreview el={el} key={i} onClick={handleRecipeCLick} />
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
