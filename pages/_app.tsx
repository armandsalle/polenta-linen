import type { AppProps } from 'next/app'

import Layout from '@/components/organisms/Layout'
import { NavigationProvider } from '@/contexts/animationContext'

import '@/styles/globals.scss'
import 'swiper/swiper.min.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NavigationProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </NavigationProvider>
  )
}

export default MyApp
