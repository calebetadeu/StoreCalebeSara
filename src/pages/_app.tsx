import Header from '../components/Header'
import '../styles/GlobalStyle.ts'
import {AppProps} from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
    <GlobalStyle/>
      <Header/>
     <Component {...pageProps} />
     </>)
}

export default MyApp
