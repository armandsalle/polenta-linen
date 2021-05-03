import Link from 'next/link'

type ButtonProps = {
  title: string
  uid: string
}

const Button = ({ title, uid }: ButtonProps): JSX.Element => {
  return (
    <Link href={`/${uid}`}>
      <a className="recipe__btn btn">{title}</a>
    </Link>
  )
}

export default Button
