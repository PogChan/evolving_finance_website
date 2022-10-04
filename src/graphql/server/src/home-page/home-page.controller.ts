import { gql } from 'apollo-server-micro'

export const homePageTypeDefs = gql`
  #  Link
  type btnLink {
    href: String!
    name: String!
  }
  #  Main block
  type MainBlock {
    subTitle: String!
    title: String!
    underTitle: String!
    primaryBtn: btnLink!
    secondaryBtn: btnLink!
    bgImg: String!
  }
  #  Home page
  type HomePage {
    id: String!
    mainBlock: MainBlock!
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
