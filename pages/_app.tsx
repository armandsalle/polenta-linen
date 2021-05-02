import type { AppProps } from 'next/app'

import Layout from '@/components/organisms/Layout'
import '@/styles/globals.scss'
import 'swiper/swiper.min.css'
// import 'swiper/components/pagination/pagination.min.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
