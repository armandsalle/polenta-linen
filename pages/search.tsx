import type { GetStaticProps } from 'next'

import { client } from '@/lib/client'
import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import RecipePreview from '@/components/molecules/RecipePreview'
import Title from '@/components/atoms/Title'
import { NavigationContext } from '@/contexts/animationContext'
import { AllRecipesQuery } from '@/lib/generated/graphql'
import Fuse from 'fuse.js'

type A = AllRecipesQuery['recipeCollection']['items']

type SearchPageProps = {
  items: A
}

const options = {
  includeScore: true,
  keys: ['title', 'tags', 'subtitle'],
}

const SearchPage = ({ items }: SearchPageProps): JSX.Element => {
  const { setUserNavigated } = useContext(NavigationContext)
  const router = useRouter()

  const [results, setResults] = useState<any[]>([])

  const handleRecipeCLick = useCallback(() => {
    setUserNavigated(true)
  }, [])

  const getResults = useCallback(() => {
    const query = router.query.q
    let parsedQuery = []

    if (Array.isArray(query)) {
      parsedQuery.push(query[0].split(' '))
    }

    if (typeof query === 'string') {
      parsedQuery = query.trim().split(/[ -]+/)
    }

    const fuse = new Fuse(items, options)

    const results = fuse.search(parsedQuery.join(' '))

    // const results = items.filter((recipe) => {
    //   const titles = recipe.title.toLowerCase().split(/[ -]+/)

    //   const u = recipe.tags.filter((t) => {
    //     return !!parsedQuery.includes(t.toLowerCase())
    //   })

    //   const p = titles.filter((t) => {
    //     return !!parsedQuery.includes(t)
    //   })

    //   return !!p.length || !!u.length
    // })

    return results.sort((a, b) => a.score - b.score)
  }, [items, router])

  useEffect(() => {
    if (router.query.q) {
      setResults(getResults())
    }
  }, [router, setResults, getResults])

  useEffect(() => {
    setUserNavigated(false)
  }, [])

  return (
    <main>
      <div className="search__header --search">
        <Title isSplit={true} as="h1">
          {results.length > 0 ? `SEARCH results` : `no search results  found`}
        </Title>
      </div>
      <div className="container search">
        {results.length > 0 &&
          results.map(({ item: el }, i) => {
            return <RecipePreview el={el} key={i} onClick={handleRecipeCLick} />
          })}
        {!(results.length > 0) &&
          items.map((el, i) => {
            return <RecipePreview el={el} key={i} onClick={handleRecipeCLick} />
          })}
      </div>
    </main>
  )
}

export default SearchPage

export const getStaticProps: GetStaticProps = async () => {
  const items = await client.getAllRecipes()
  const { home } = await client.getHome()

  return {
    props: {
      items,
      SEO: home.seo,
    },
  }
}
