import { useMemo } from 'react'
import { ApolloClient, createHttpLink, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { setContext } from '@apollo/client/link/context'
import { clientLocalStore } from '@services'

// Apollo state
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
// Apollo client
let apolloClient: ApolloClient<NormalizedCacheObject>
// Apollo error
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})
// BE link
const httpLink = createHttpLink({
  uri: `${process.env.SITE_URL}/api/graphql`,
  credentials: 'same-origin',
})
// FE link
const authLink = setContext((_, { headers }) => {
  // Token
  const token = clientLocalStore({ params: 'get', name: 'token' }) || null

  // Return
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  }
})
// Create apollo client
function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, typeof window === 'undefined' ? httpLink : authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
    ssrForceFetchDelay: 100,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
      },
      mutate: {
        awaitRefetchQueries: true,
      },
    },
  })
}
// Initialize apollo
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // Gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // Combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    })
    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}
// Add apollo state only SSR and SSG
export function addApolloState(
  client: { cache: { extract: () => any } },
  pageProps: { props: any; revalidate?: number },
) {
  if (pageProps?.props) pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()

  return pageProps
}
// Apollo hook
export function useApollo(pageProps: { [x: string]: any }) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  return useMemo(() => initializeApollo(state), [state])
}
