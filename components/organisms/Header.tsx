import Burger from '@/components/atoms/nav/Burger'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import PolentaIcon from '@/components/atoms/polenta/PolentaIcon'
import { useEffect, useState, useCallback } from 'react'
import classNames from 'classnames'

type HeaderProps = {
  isHeaderScrollable: boolean
}

const Header = ({ isHeaderScrollable }: HeaderProps): JSX.Element => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = useCallback(() => {
    window.scrollY >= 180 ? setNavbar(true) : setNavbar(false)
  }, [setNavbar])

  useEffect(() => {
    if (isHeaderScrollable) {
      window.addEventListener('scroll', changeBackground)
    }

    return () => {
      if (isHeaderScrollable) {
        window.removeEventListener('scroll', changeBackground)
      }
    }
  }, [isHeaderScrollable])

  return (
    <header
      className={classNames(
        'header',
        isHeaderScrollable && navbar && 'header__scroll',
        !isHeaderScrollable && 'header__background'
      )}
    >
      <Burger />
      <PolentaIcon />
      <SearchIcon />
    </header>
  )
}

export default Header
