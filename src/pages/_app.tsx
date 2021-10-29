import Header from '../components/Header'
import '../styles/GlobalStyle.ts'
import {AppProps} from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import Head from 'next/head'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <GlobalStyle/>
      <Header/>
     <Component {...pageProps} />
     </>)
}

export default MyApp
