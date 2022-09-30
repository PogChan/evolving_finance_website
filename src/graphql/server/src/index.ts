import { homePageTypeDefs, homePageResolver } from '@graphql/server/src/home-page'
import { makeExecutableSchema } from '@graphql-tools/schema'

// Types
const typeDefs = [{ ...homePageTypeDefs }]
// Resolvers
const resolvers = [{ ...homePageResolver }]

// Schema
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
