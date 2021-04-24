export enum asLevel {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}

type TitleProps = {
  children: string
  isSplit?: boolean
  as: asLevel
}

const Title = ({ children, isSplit = false, as }: TitleProps): JSX.Element => {
  const text = children.split(' ')
  const end = text.splice(-1, 1)
  const start = text.join(' ')

  const result = (
    <>
      {isSplit && (
        <>
          {start} <span className="italic">{end}</span>
        </>
      )}
      {!isSplit && children}
    </>
  )
  switch (as) {
    case asLevel.h1:
      return <h1 className="h1">{result}</h1>
    case asLevel.h2:
      return <h2 className="h2">{result}</h2>
    case asLevel.h3:
      return <h3 className="h3">{result}</h3>
    case asLevel.h4:
      return <h4 className="h4">{result}</h4>

    default:
      return <h1 className="h1">{result}</h1>
  }
}

export default Title
