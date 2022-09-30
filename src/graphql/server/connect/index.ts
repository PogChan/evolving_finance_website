import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse, PageConfig } from 'next'
import { corsMiddleware } from '@graphql/server/middleware'
import { schema } from '@graphql/server/src'

// Apollo server
const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    // Token
    const token = req.headers.authorization || null

    // Return
    return { token }
  },
})

// Start apollo server
const startApolloServer = apolloServer.start()

// Handler
export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Cors middleware
  await corsMiddleware(req, res)
  // Start server
  await startApolloServer

  // Return
  return await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

// Config
export const config: PageConfig = { api: { bodyParser: false } }
