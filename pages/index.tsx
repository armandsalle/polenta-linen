import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="http://google.com" target="_blank" rel="noreferrer">
        hello
      </a>
    </div>
  )
}
