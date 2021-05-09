import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ButtonProps = {
  title: string
  uid: string
}

const Button = ({ title, uid }: ButtonProps): JSX.Element => {
  const router = useRouter()

  return (
    <Link href={`/${uid}`} scroll={true}>
      <a
        className={classNames(
          'recipe__btn',
          router.asPath === `/${uid}` && 'active'
        )}
      >
        {title}
      </a>
    </Link>
  )
}

export default Button
