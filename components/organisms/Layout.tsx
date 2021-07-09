import type { Seo } from '@/lib/generated/graphql'

import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Menu from '@/components/molecules/Menu'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
  SEO: Seo
  isHeaderScrollable?: boolean
  isRecipe?: boolean
}

const Layout = ({
  children,
  SEO,
  isHeaderScrollable = false,
  isRecipe = false,
}: LayoutProps): JSX.Element => {
  return (
    <>
      {SEO && (
        <Head>
          <link rel="preload" as="font" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <title>{SEO.title}</title>
          <meta name="description" content={SEO.description} />
          <meta property="og:title" content={SEO.title} />
          <meta property="og:description" content={SEO.description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={SEO.ogImage.url} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={SEO.title} />
          <meta name="twitter:description" content={SEO.description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
      )}

      <Header isHeaderScrollable={isHeaderScrollable} isRecipe={isRecipe} />
      {children}
      <Footer />
      <Menu />
    </>
  )
}

export default Layout
