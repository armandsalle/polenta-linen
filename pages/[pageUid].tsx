import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Page as PageType } from '@/lib/queries/page/types'

import { client } from '@/lib/client'
import Link from 'next/link'

type PageProps = {
  page: PageType
}

const Page = ({ page }: PageProps): JSX.Element => {
  return (
    <div>
      {page.recipesCollection.items.map((el, i) => {
        return (
          <Link href={`/recipe/${el.uid}`} key={i}>
            <a>
              <img src={el.thumbnail.url} alt={el.thumbnail.title} />
              <p>{el.title}</p>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params: { pageUid },
}) => {
  const { pages } = await client.getPages()
  const [id] = pages.filter((e) => e.uid === pageUid)
  const { page } = await client.getPage(id.sys.id)

  return {
    props: {
      page,
      SEO: page.seo,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.getPages()

  const paths = pages.map((e) => ({
    params: {
      pageUid: e.uid,
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export default Page
