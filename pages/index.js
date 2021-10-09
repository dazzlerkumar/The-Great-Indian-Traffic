import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//COMPONENTS
import Main from "../components/Main"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Great Indian Traffic</title>
        <meta name="By Dazzler Kumar" content="Indian Traffice Guide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <Main/>
      
      {/*
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>*/}
      
    </div>
  )
}
