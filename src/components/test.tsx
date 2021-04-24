import React from "react"

type TestProps = {
  name: string
}

const Test = ({ name }: TestProps): JSX.Element => {
  return <h1>{name}</h1>
}

export default Test
