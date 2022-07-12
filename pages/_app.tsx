import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navgation/Navigation'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-neutral-900 text-neutral-50 selection:bg-red-500 selection:text-white antialiased">
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </div>
    </>
  )
}

export default MyApp
