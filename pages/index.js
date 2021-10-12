import Head from 'next/head'
import styles from '../styles/Home.module.css'


//COMPONENTS
import Main from "../components/Main"
import Brief from "../components/Brief"
import Card from "../components/Card"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <div>
      <Head>
        <title>The Great Indian Traffic</title>
        <meta name="By Dazzler Kumar" content="Indian Traffice Guide" />
        <link rel="icon" href="/tgit.png" />
      </Head>

      
      <Main/>
      <Brief/>
      
      <Card/>
      <Footer/>
  
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
