import type { GetStaticProps } from 'next'
import type { Story as StoryType } from '@/lib/queries/story/types'

import Head from 'next/head'
import { client } from '@/lib/client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type StoryProps = {
  story: StoryType
}

const Story = ({ story }: StoryProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Polenta & Linen - Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src={story.photo.url} />
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
      // SEO: contact._seoMetaTags,
    },
  }
}

export default Story
