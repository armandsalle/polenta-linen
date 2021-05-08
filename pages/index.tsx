import type { Home as HomeType } from '@/lib/queries/home/types'
import type { GetStaticProps } from 'next'

import Title from '@/components/atoms/Title'
import { client } from '@/lib/client'
import ResponsiveImage from '@/components/atoms/ResponsiveImage'
import FeaturedPage from '@/components/molecules/FeaturedPage'

type HomeProps = {
  home: HomeType
}

const Home = ({ home }: HomeProps): JSX.Element => {
  return (
    <section className="container home">
      <div className="home__header">
        <Title as="h1" isSplit={true}>
          {home.title}
        </Title>

        <div className="home__header__bg">
          <ResponsiveImage
            alt={home.heroImage.title}
            src={home.heroImage.url}
            className="home__header__bg__img"
          />
        </div>
      </div>

      <div className="home__featured">
        {home.featuredPageCollection.items.map((el, i) => (
          <FeaturedPage key={i} {...el} />
        ))}
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.getHome()

  return {
    props: {
      home,
      SEO: home.seo,
      isHeaderScrollable: false,
    },
  }
}

export default Home
