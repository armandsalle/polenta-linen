import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li>
          <Link href="/">
            <a className="footer__link footer__link__effect">HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/all">
            <a className="footer__link footer__link__effect">ALL RECIPES</a>
          </Link>
        </li>
        <li>
          <Link href="/heritage">
            <a className="footer__link footer__link__effect">
              HERITAGE RECIPES
            </a>
          </Link>
        </li>
        <li>
          <Link href="/story">
            <a className="footer__link footer__link__effect">MY STORY</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
