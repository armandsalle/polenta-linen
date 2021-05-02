import type { GetStaticProps } from 'next'
import type { Story as StoryType } from '@/lib/queries/story/types'

import { client } from '@/lib/client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ResponsiveImage from '@/components/atoms/ResponsiveImage'
import Title from '@/components/atoms/Title'

type StoryProps = {
  story: StoryType
}

const Story = ({ story }: StoryProps): JSX.Element => {
  return (
    <section className="container story">
      <div className="story__hero">
        <ResponsiveImage
          className="story__image"
          src={story.photo.url}
          alt={story.photo.title}
        />
      </div>
      <div className="story__content">
        <Title isSplit={true} as="h1">
          {story.title}
        </Title>
        <div className="story__text">
          {documentToReactComponents(story.description.json)}
        </div>
        <p className="signature">{story.signature}</p>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { story } = await client.getStory()

  return {
    props: {
      story,
      SEO: story.seo,
    },
  }
}

export default Story
