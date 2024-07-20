import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers, typeDefs } from '@graphql/server/src'

// Schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
