import Burger from '@/components/atoms/nav/Burger'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import PolentaIcon from '@/components/atoms/polenta/PolentaIcon'
import { useEffect, useState } from 'react'

const Header = (): JSX.Element => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    window.scrollY >= 180 ? setNavbar(true) : setNavbar(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', () => changeBackground)
    }
  }, [changeBackground])

  return (
    <header className={navbar ? 'header header__scroll' : 'header'}>
      <Burger />
      <PolentaIcon />
      <SearchIcon />
    </header>
  )
}

export default Header
