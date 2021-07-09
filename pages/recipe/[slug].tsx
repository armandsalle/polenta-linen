import type { Recipe as RecipeType } from '@/lib/generated/graphql'
import type { GetStaticPaths, GetStaticProps } from 'next'

import { client } from '@/lib/client'
import Title from '@/components/atoms/Title'
import RecipeSlider from '@/components/molecules/RecipeSlider'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type RecipeProps = {
  recipe: RecipeType
}

const Recipe = ({ recipe }: RecipeProps): JSX.Element => {
  return (
    <main className="container recipe">
      <div className="recipe__header">
        <RecipeSlider images={recipe.sliderCollection.items} />
        <div className="recipe__title-wrapper">
          <Title as="h1">{recipe.title}</Title>
          <p className="recipe__subtitle">{recipe.subtitle}</p>
        </div>
      </div>

      <div className="recipe__content">
        <article className="recipe__ingredients">
          <Title as="h3">
            <sup>01</sup> Ingredients
          </Title>

          <div className="recipe__text">
            {documentToReactComponents(recipe.ingredients.json)}
          </div>
        </article>

        <div className="recipe__right">
          <article className="recipe__informations">
            <Title as="h3">
              <sup>02</sup> Preparation
            </Title>
            <div className="recipe__text">
              {documentToReactComponents(recipe.preparation.json)}
            </div>
          </article>

          <article className="recipe__plating">
            <Title as="h3">
              <sup>03</sup> Plating
            </Title>
            <div className="recipe__text">
              {documentToReactComponents(recipe.plating.json)}
            </div>
          </article>

          {recipe.cooksNote?.json && (
            <article className="recipe__note">
              <Title as="h3">Cook’s Notes</Title>
              <div className="recipe__text">
                {documentToReactComponents(recipe.cooksNote.json)}
              </div>
            </article>
          )}
        </div>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const items = await client.getAllRecipes()
  const [id] = items.filter((e) => e.uid === slug)
  const { recipe } = await client.getRecipe(id.sys.id)

  return {
    props: {
      recipe,
      SEO: recipe.seo,
      isRecipe: true,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await client.getAllRecipes()

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
