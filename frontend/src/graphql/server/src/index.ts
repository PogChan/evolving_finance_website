// Libs
import { homePageTypeDefs, homePageResolver } from '@graphql/server/src/home-page'
import { headerTypeDefs, headerResolver } from '@graphql/server/src/header'
import { footerTypeDefs, footerResolver } from '@graphql/server/src/footer'

// Types
export const typeDefs = [{ ...homePageTypeDefs }, { ...headerTypeDefs }, { ...footerTypeDefs }]
// Resolvers
export const resolvers = [{ ...homePageResolver }, { ...headerResolver }, { ...footerResolver }]
