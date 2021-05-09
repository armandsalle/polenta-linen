import Burger from '@/components/atoms/nav/Burger'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import PolentaIcon from '@/components/atoms/polenta/PolentaIcon'
import { useEffect, useState, useCallback, useContext } from 'react'
import classNames from 'classnames'
import { NavigationContext } from '@/contexts/animationContext'
import { useRouter } from 'next/router'

type HeaderProps = {
  isHeaderScrollable: boolean
}

const Header = ({ isHeaderScrollable }: HeaderProps): JSX.Element => {
  const router = useRouter()
  const { isUserNavigated } = useContext(NavigationContext)

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
      {!isUserNavigated && <Burger />}
      {isUserNavigated && (
        <button onClick={() => router.back()}>go back</button>
      )}
      <PolentaIcon />
      {!isUserNavigated && <SearchIcon />}
    </header>
  )
}

export default Header
