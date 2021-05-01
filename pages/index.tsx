import type { Home as HomeType } from '@/lib/queries/home/types'
import type { GetStaticProps } from 'next'

import Title from '@/components/atoms/Title'
import { client } from '@/lib/client'

type HomeProps = {
  home: HomeType
}

const Home = ({ home }: HomeProps): JSX.Element => {
  return (
    <div>
      <Title as="h1" isSplit={true}>
        {home.title}
      </Title>
      {home.featuredPageCollection.items.map((el, i) => (
        <div key={i}>
          <Title as="h3" isSplit={true}>
            {el.title}
          </Title>
          {/* <Link href={el.page.uid}>
            <a>{el.description}</a>
          </Link> */}
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.getHome()

  return {
    props: {
      home,
      SEO: home.seo,
    },
  }
}

export default Home
