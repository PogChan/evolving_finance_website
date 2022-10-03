import { homePageTypeDefs, homePageResolver } from '@graphql/server/src/home-page'

// Types
export const typeDefs = [{ ...homePageTypeDefs }]
// Resolvers
export const resolvers = [{ ...homePageResolver }]
