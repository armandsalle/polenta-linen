import Title, { asLevel } from '@/components/atoms/Title'

const Ui = (): JSX.Element => {
  return (
    <div>
      <Title isSplit={true} as={asLevel.h1}>
        eating at my table. a collection of recipes.
      </Title>
      <Title isSplit={true} as={asLevel.h2}>
        my favorite heritage recipes.
      </Title>
      <Title isSplit={false} as={asLevel.h3}>
        ingredients.
      </Title>
      <Title isSplit={false} as={asLevel.h4}>
        oat pancakes.
      </Title>
    </div>
  )
}

export default Ui
