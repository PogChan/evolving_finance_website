import type { AppProps } from 'next/app'
import '@styles/globals.scss'
// Apollo provider
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@graphql/client/connect'
// Context
import { ContextProvider } from '@stores/context'
// Components
import { Seo } from '@components/elements'
import { Layout } from '@components/templates'
import { useEffect } from 'react'

// App
function MyApp({ Component, pageProps }: AppProps) {
  // GraphQL entry point
  const client = useApollo(pageProps)
  // Watch from scroll
  useEffect(() => {
    const html = document.querySelector('html')

    const scrollToTop = setTimeout(() => html?.scroll(0, 0), 110)
    return () => clearTimeout(scrollToTop)
  }, [])

  // Return
  return (
    <>
      <Seo />

      <ApolloProvider client={client}>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
