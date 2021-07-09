import type { AllRecipesQuery, PageQuery } from '@/lib/generated/graphql'

import ResponsiveImage from '@/components/atoms/ResponsiveImage'
import Link from 'next/link'

type RecipePreviewProps = {
  el:
    | AllRecipesQuery['recipeCollection']['items'][0]
    | PageQuery['heritage']['recipesCollection']['items'][0]
  onClick: () => void
}

const RecipePreview = ({ el, onClick }: RecipePreviewProps): JSX.Element => {
  return (
    <Link href={`/recipe/${el.uid}`}>
      <a className="search__link" onClick={onClick}>
        <ResponsiveImage
          className="search__image"
          src={el.thumbnail.url}
          alt={el.thumbnail.title}
        />
        <p className="search__title">{el.title}</p>
      </a>
    </Link>
  )
}

export default RecipePreview
