import Burger from '@/components/atoms/nav/Burger'
import Close from '@/components/atoms/nav/Close'
import SearchIcon from '@/components/atoms/search/SearchIcon'
import PolentaIcon from '@/components/atoms/polenta/PolentaIcon'
import { useEffect, useState, useCallback, useContext } from 'react'
import classNames from 'classnames'
import { NavigationContext } from '@/contexts/animationContext'
import { useRouter } from 'next/router'

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

  const [navbar, setNavbar] = useState(false)

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
    <header
      className={classNames(
        'header',
        isHeaderScrollable && navbar && !isOpen && 'header__scroll',
        !isHeaderScrollable && 'header__background'
      )}
    >
      {!isUserNavigated && !isOpen && <Burger onClick={handleBurgerOpen} />}
      {isUserNavigated && (
        <button onClick={() => router.back()}>go back</button>
      )}
      {isOpen && <Close onClick={handleBurgerClose}>Close</Close>}
      <PolentaIcon />
      {!isUserNavigated && !isOpen && <SearchIcon />}
    </header>
  )
}

export default Header
