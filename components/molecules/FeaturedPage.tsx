import type { Home } from '@/lib/generated/graphql'

import Link from 'next/link'
import Title from '@/components/atoms/Title'
import ResponsiveImage from '../atoms/ResponsiveImage'

const FeaturedPage = ({
  title,
  thumbnail,
  page,
  description,
}: Home['featuredPageCollection']['items'][0]): JSX.Element => {
  return (
    <div className="featured-page-wrapper">
      <Link href={`/${page.uid}`}>
        <a className="featured-page">
          <div className="featured-page__thumbnail">
            <ResponsiveImage
              src={thumbnail.url}
              alt={thumbnail.title}
              className="featured-page__thumbnail__img"
            />
          </div>
          <div className="featured-page__text">
            <Title as="h2" isSplit={true}>
              {title}
            </Title>
            <p className="subtitle">{description}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default FeaturedPage
