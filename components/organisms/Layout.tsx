import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
  SEO?: string
}

const Layout = ({ children, SEO }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{SEO ? SEO : 'Polenta & Linen'}</title>
      </Head>

      <main>
        <nav>Nav</nav>
        {children}
        <footer>Footer</footer>
      </main>
    </>
  )
}

export default Layout
