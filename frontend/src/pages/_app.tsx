import type { AppProps } from 'next/app'
import '@styles/globals.scss'
// Apollo provider
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@graphql/client/connect'
// Components
import { Seo } from '@components/elements'
import { Layout } from '@components/templates'

// App
function MyApp({ Component, pageProps }: AppProps) {
  // GraphQL entry point
  const client = useApollo(pageProps)

  // Return
  return (
    <>
      <Seo />

      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}

export default MyApp
