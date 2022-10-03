// Libs
import type { NextPage } from 'next'
import container from '@styles/modules/container.module.scss'
import { addApolloState, initializeApollo } from '@graphql/client/connect'
import { GetFooterDocument, GetHeaderDocument, GetHomePageDocument, useGetHomePageQuery } from '@generated/graphql'
import { NetworkStatus } from '@apollo/client'

// Page
const Home: NextPage = () => {
  // Get home page
  const { data, networkStatus } = useGetHomePageQuery({
    variables: {
      input: {
        search: '',
      },
    },
  })

  // Return
  return (
    <>
      <div className={`${container.container_main}`}>
        <div className={container.container_top}>
          {networkStatus !== NetworkStatus.loading && data ? (
            <h1>{data.getHomePage?.data[0]?.title}</h1>
          ) : (
            <h3>{'Loading...'}</h3>
          )}
        </div>
      </div>
    </>
  )
}

export default Home

// Ssr
export async function getStaticProps() {
  const apolloClient = initializeApollo()
  // Home page data
  await apolloClient.query({
    query: GetHomePageDocument,
    variables: {
      input: {
        search: '',
      },
    },
  })
  // Header data
  await apolloClient.query({ query: GetHeaderDocument })
  // Footer data
  await apolloClient.query({ query: GetFooterDocument })

  // Return
  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}
