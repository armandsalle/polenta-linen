import type { GetStaticProps } from 'next'
import type { Story as StoryType } from '@/lib/queries/story/types'

import Image from 'next/image'
import { client } from '@/lib/client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type StoryProps = {
  story: StoryType
}

const Story = ({ story }: StoryProps): JSX.Element => {
  return (
    <div>
      <div style={{ position: 'relative', width: '580px', height: '790px' }}>
        <Image
          src={story.photo.url}
          alt={story.photo.title || story.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1>{story.title}</h1>

      {documentToReactComponents(story.description.json)}

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
