import Burger from '@/components/atoms/nav/Burger'
import Close from '@/components/atoms/nav/Close'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import PolentaIcon from '@/components/atoms/polenta/PolentaIcon'
import SearchBar from '@/components/molecules/SearchBar'
import classNames from 'classnames'
import { NavigationContext } from '@/contexts/animationContext'
import { useRouter } from 'next/router'
import { useEffect, useState, useCallback, useContext } from 'react'

type HeaderProps = {
  isHeaderScrollable: boolean
  isOpen?: boolean
}

const Header = ({
  isHeaderScrollable,
  isOpen = false,
}: HeaderProps): JSX.Element => {
  const router = useRouter()
  const { isUserNavigated } = useContext(NavigationContext)

  const [navbar, setNavbar] = useState<boolean>(false)
  const [searchMode, setSearchMode] = useState<boolean>(false)

  const changeBackground = useCallback(() => {
    window.scrollY >= 180 ? setNavbar(true) : setNavbar(false)
  }, [setNavbar])

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
  }, [isHeaderScrollable, isOpen])

  return (
    <>
      {!searchMode && (
        <header
          className={classNames(
            'header',
            isHeaderScrollable && navbar && !isOpen && 'header__scroll',
            !isHeaderScrollable && 'header__background'
          )}
        >
          {!isUserNavigated && !isOpen && <Burger onClick={handleBurgerOpen} />}
          {isUserNavigated && (
            <Close onClick={() => router.back()}>Close</Close>
          )}
          {isOpen && <Close onClick={handleBurgerClose}>Close</Close>}
          <PolentaIcon />
          {!isUserNavigated && !isOpen && (
            <SearchIcon onClick={handleSearchIconCLick} />
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
