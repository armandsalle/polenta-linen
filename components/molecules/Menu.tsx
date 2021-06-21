import Header from '@/components/organisms/Header'
import Link from 'next/link'
import { useCallback } from 'react'

const Menu = (): JSX.Element => {
  const handleBurgerClose = useCallback(async () => {
    document.body.style.overflowY = 'auto'

    if (window) {
      const menuTimeline = await import('animations/menu')
      menuTimeline.menuTimelineHide.play()
    }
  }, [])

  return (
    <div className="menu">
      <div className="menu__overlay"></div>
      <Header isHeaderScrollable={false} isOpen={true} />
      <div className="menu__links">
        <Link href="/">
          <a className="menu__link" onClick={handleBurgerClose}>
            <p className="menu__link__title">Home</p>
            <div className="separator"></div>
            <span className="menu__link__number">1</span>
          </a>
        </Link>
        <Link href="/all">
          <a className="menu__link" onClick={handleBurgerClose}>
            <p className="menu__link__title">All recipes</p>
            <div className="separator"></div>
            <span className="menu__link__number">2</span>
          </a>
        </Link>
        <Link href="/heritage">
          <a className="menu__link" onClick={handleBurgerClose}>
            <p className="menu__link__title">Heritage recipes</p>
            <div className="separator"></div>
            <span className="menu__link__number">3</span>
          </a>
        </Link>
        <Link href="/story">
          <a className="menu__link" onClick={handleBurgerClose}>
            <p className="menu__link__title">My story</p>
            <div className="separator"></div>
            <span className="menu__link__number">4</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Menu
