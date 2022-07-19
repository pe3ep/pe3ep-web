import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation/Navigation'
import ProgressBar from '@badrap/bar-of-progress'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const progress = new ProgressBar({
  size: 2,
  color: '#EF4444',
  className: 'bar-of-progress',
  delay: 100,
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', progress.start)
    router.events.on('routeChangeComplete', progress.finish)
    router.events.on('routeChangeError', progress.finish)

    return () => {
      router.events.off('routeChangeStart', progress.start)
      router.events.off('routeChangeComplete', progress.finish)
      router.events.off('routeChangeError', progress.finish)
    }
  }, [router])

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
