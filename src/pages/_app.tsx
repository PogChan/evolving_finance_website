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
  // Watch from scroll
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // GraphQL entry point
  const client = useApollo(pageProps)

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
