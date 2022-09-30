import { gql } from 'apollo-server-micro'

export const homePageTypeDefs = gql`
  #  Home page
  type HomePage {
    id: String!
    title: String!
  }

  type Data {
    data: [HomePage]!
  }

  #  Query
  type Query {
    getHomePage(input: InputHomePage!): Data
  }

  #  Input all coins
  input InputHomePage {
    search: String
  }
`
