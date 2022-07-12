import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-neutral-900 text-neutral-50 selection:bg-red-500 selection:text-white antialiased">
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </div>
    </>
  )
}

export default MyApp
