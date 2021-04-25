import type { GetStaticProps } from 'next'
import type { Story as StoryType } from '@/lib/queries/story/types'

import { client } from '@/lib/client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ResponsiveImage from '@/components/atoms/ResponsiveImage'

type StoryProps = {
  story: StoryType
}

const Story = ({ story }: StoryProps): JSX.Element => {
  return (
    <div>
      <h1>{story.title}</h1>

      {documentToReactComponents(story.description.json)}
      <ResponsiveImage
        className="m"
        src={story.photo.url}
        alt={story.photo.title}
      />
      <p>{story.signature}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { story } = await client.getStory()
  // const { layout, site } = await client.getLayout()

  return {
    props: {
      story,
      // layoutContent: layout,
      // siteContent: site,
      SEO: story.title,
    },
  }
}

export default Story
