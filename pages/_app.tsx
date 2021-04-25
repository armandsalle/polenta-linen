import type { AppProps } from 'next/app'

import Layout from '@/components/organisms/Layout'
import '@/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
