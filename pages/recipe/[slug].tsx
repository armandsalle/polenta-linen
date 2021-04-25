import type { Recipe as RecipeType } from '@/lib/queries/recipe/types'
import type { GetStaticPaths, GetStaticProps } from 'next'

import { client } from '@/lib/client'
import Title, { asLevel } from '@/components/atoms/Title'

type RecipeProps = {
  recipe: RecipeType
}

const Recipe = ({ recipe }: RecipeProps): JSX.Element => {
  return (
    <div>
      <Title as={asLevel.h1} isSplit={true}>
        {recipe.title}
      </Title>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const { items } = await client.getAllRecipes()
  const [id] = items.filter((e) => e.uid === slug)
  const { recipe } = await client.getRecipe(id.sys.id)

  return {
    props: {
      recipe,
      SEO: recipe.seo,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await client.getAllRecipes()

  const paths = items.map((e) => ({
    params: {
      slug: e.uid,
      id: e.sys.id,
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Recipe
