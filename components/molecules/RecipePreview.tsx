import type { Item } from '@/lib/queries/recipes/types'
import { Item as PageItem } from '@/lib/queries/page/types'

import ResponsiveImage from '@/components/atoms/ResponsiveImage'
import Link from 'next/link'

type RecipePreviewProps = {
  el: Item | PageItem
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
