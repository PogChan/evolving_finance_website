import type { AppProps } from 'next/app'
import '@styles/globals.scss'
// Apollo provider
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@graphql/client/connect'

// App
function MyApp({ Component, pageProps }: AppProps) {
  // GraphQL entry point
  const client = useApollo(pageProps)

  // Return
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
