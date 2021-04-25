import type { SEOContent } from '@/lib/queries/SEO/types'

import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
  SEO: SEOContent
}

const Layout = ({ children, SEO }: LayoutProps): JSX.Element => {
  return (
    <>
      {SEO && (
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500"
            rel="stylesheet"
          />

          <title>{SEO.title}</title>
          <meta name="description" content={SEO.description} />

          <meta property="og:title" content={SEO.title} />
          <meta property="og:description" content={SEO.description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={SEO.ogImage.url} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={SEO.title} />
          <meta name="twitter:description" content={SEO.description} />
        </Head>
      )}

      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
