import { Item } from '@/lib/queries/pages/types'
import Button from '@/components/atoms/Button'

type PagesProps = {
  pages: Item[]
}

const RecipesNavigation = ({ pages }: PagesProps): JSX.Element => {
  return (
    <div className="navigation__recipe">
      {pages.map((el, i) => {
        return <Button key={i} title={el.title} uid={el.uid} />
      })}
    </div>
  )
}

export default RecipesNavigation
