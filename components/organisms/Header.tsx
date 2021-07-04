import Burger from '@/components/atoms/nav/Burger'
import Close from '@/components/atoms/nav/Close'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import PolentaIcon from '@/components/atoms/polenta/PolentaIcon'
import SearchBar from '@/components/molecules/SearchBar'
import classNames from 'classnames'
import { NavigationContext } from '@/contexts/animationContext'
import { useRouter } from 'next/router'
import { useEffect, useState, useCallback, useContext, useRef } from 'react'

type HeaderProps = {
  isHeaderScrollable: boolean
  isOpen?: boolean
  isRecipe?: boolean
}

const Header = ({
  isHeaderScrollable,
  isOpen = false,
  isRecipe = false,
}: HeaderProps): JSX.Element => {
  const router = useRouter()
  const headerRef = useRef<null | HTMLElement>(null)
  const { isUserNavigated } = useContext(NavigationContext)

  const [navbar, setNavbar] = useState<boolean>(false)
  const [searchMode, setSearchMode] = useState<boolean>(false)
  const [scrollAmount, setScrollAmount] = useState<number>(30)

  const changeBackground = useCallback(() => {
    window.scrollY >= scrollAmount ? setNavbar(true) : setNavbar(false)
  }, [setNavbar, scrollAmount])

  const handleBurgerOpen = useCallback(async () => {
    document.body.style.overflowY = 'hidden'

    if (window) {
      const menuTimeline = await import('animations/menu')
      menuTimeline.menuTimelineShow.play()
    }
  }, [])

  const handleBurgerClose = useCallback(async () => {
    document.body.style.overflowY = 'auto'

    if (window) {
      const menuTimeline = await import('animations/menu')
      menuTimeline.menuTimelineHide.play()
    }
  }, [])

  const handleSearchIconCLick = useCallback(() => {
    setSearchMode(true)
  }, [])

  useEffect(() => {
    if (isHeaderScrollable || isOpen) {
      window.addEventListener('scroll', changeBackground)
    }

    return () => {
      if (isHeaderScrollable || isOpen) {
        window.removeEventListener('scroll', changeBackground)
      }
    }
  }, [isHeaderScrollable, isOpen, scrollAmount])

  useEffect(() => {
    const hero = document.querySelector('.home__header')
    const header = document.querySelector('header')
    const heroHeight =
      hero && header
        ? hero.getBoundingClientRect().height -
          header.getBoundingClientRect().height
        : 300
    setScrollAmount(heroHeight)
  }, [])

  useEffect(() => {
    headerRef?.current.classList.remove('header__scroll')
  }, [headerRef])

  return (
    <>
      {!searchMode && (
        <header
          className={classNames(
            'header',
            isHeaderScrollable && navbar && !isOpen && 'header__scroll',
            isHeaderScrollable && 'header__background',
            isUserNavigated && isRecipe && 'header--recipe'
          )}
          ref={headerRef}
        >
          {!isUserNavigated && !isOpen && (
            <div className="icon-wrapper" onClick={handleBurgerOpen}>
              <Burger />
            </div>
          )}
          {isUserNavigated && (
            <Close onClick={() => router.back()}>Close</Close>
          )}
          {isOpen && <Close onClick={handleBurgerClose}>Close</Close>}
          <PolentaIcon />
          {!isUserNavigated && !isOpen && (
            <div className="icon-wrapper" onClick={handleSearchIconCLick}>
              <SearchIcon />
            </div>
          )}
        </header>
      )}
      {searchMode && (
        <SearchBar searchMode={searchMode} setSearchMode={setSearchMode} />
      )}
    </>
  )
}

export default Header
