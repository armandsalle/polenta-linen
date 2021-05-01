type asLevel = 'h1' | 'h2' | 'h3' | 'h4'

type TitleProps = {
  children: string
  isSplit?: boolean
  as: asLevel
}

const Title = ({ children, isSplit = false, as }: TitleProps): JSX.Element => {
  const text = children.trim().split(' ')
  const end = text.splice(-1, 1)
  const start = text.join(' ')

  const result = (
    <>
      {isSplit && (
        <>
          {start} <span className="italic">{end}</span>
        </>
      )}
      {!isSplit && children.trim()}
    </>
  )
  switch (as) {
    case 'h1':
      return <h1 className="h1">{result}</h1>
    case 'h2':
      return <h2 className="h2">{result}</h2>
    case 'h3':
      return <h3 className="h3">{result}</h3>
    case 'h4':
      return <h4 className="h4">{result}</h4>

    default:
      return <h1 className="h1">{result}</h1>
  }
}

export default Title
