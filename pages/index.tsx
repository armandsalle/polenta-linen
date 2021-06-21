import type { GetStaticProps } from 'next'
import Title from '@/components/atoms/Title'
import { client } from '@/lib/client'
import ResponsiveImage from '@/components/atoms/ResponsiveImage'
import FeaturedPage from '@/components/molecules/FeaturedPage'
import { useContext, useEffect } from 'react'
import { NavigationContext } from '@/contexts/animationContext'
import { Home as HomeType } from '@/lib/generated/graphql'

type HomeProps = {
  home: HomeType
}

const Home = ({ home }: HomeProps): JSX.Element => {
  const { setUserNavigated } = useContext(NavigationContext)

  useEffect(() => {
    setUserNavigated(false)
  }, [])

  return (
    <main className="container home">
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
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.getHome()

  return {
    props: {
      home,
      SEO: home.seo,
      isHeaderScrollable: true,
    },
  }
}

export default Home
