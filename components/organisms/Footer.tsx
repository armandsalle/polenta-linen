import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div>
          <Link href="/">
            <a className="footer__link footer__link__effect">HOME</a>
          </Link>
        </div>
        <div>
          <Link href="/all">
            <a className="footer__link footer__link__effect">ALL RECIPES</a>
          </Link>
        </div>
        <div>
          <Link href="/heritage">
            <a className="footer__link footer__link__effect">
              HERITAGE RECIPES
            </a>
          </Link>
        </div>
        <div>
          <Link href="/story">
            <a className="footer__link footer__link__effect">MY STORY</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
