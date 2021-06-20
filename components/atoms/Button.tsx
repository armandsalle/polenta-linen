import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ButtonProps = {
  title: string
  uid: string
  cn: string
}

const Button = ({ title, uid, cn }: ButtonProps): JSX.Element => {
  const router = useRouter()

  return (
    <Link href={`/${uid}`} scroll={false}>
      <a
        className={classNames(
          'recipe__btn',
          cn,
          router.asPath === `/${uid}` && 'active'
        )}
      >
        {title}
      </a>
    </Link>
  )
}

export default Button
