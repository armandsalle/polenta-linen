import Burger from '@/components/atoms/nav/Burger'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import PolentaIcon from '../atoms/polenta/PolentaIcon'

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Burger />
      <PolentaIcon />
      <SearchIcon />
    </header>
  )
}

export default Header
