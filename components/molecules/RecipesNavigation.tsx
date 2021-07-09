import Button from '@/components/atoms/Button'
import { HeritageQuery } from '@/lib/generated/graphql'

type PagesProps = {
  pages: HeritageQuery['heritageCollection']['items']
  classnames: string[]
}

const RecipesNavigation = ({ pages, classnames }: PagesProps): JSX.Element => {
  return (
    <div className="navigation__recipe">
      {pages.map((el, i) => {
        return (
          <Button key={i} title={el.title} uid={el.uid} cn={classnames[i]} />
        )
      })}
    </div>
  )
}

export default RecipesNavigation
