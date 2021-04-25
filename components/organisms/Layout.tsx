import Head from 'next/head'
import Header from '@/components/organisms/Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
  SEO?: string
}

const Layout = ({ children, SEO }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500"
          rel="stylesheet"
        />
        <title>{SEO ? SEO : 'Polenta & Linen'}</title>
      </Head>

      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
