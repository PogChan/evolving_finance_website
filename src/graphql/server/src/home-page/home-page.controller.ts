import { gql } from 'apollo-server-micro'

export const homePageTypeDefs = gql`
  #  Link
  type btnLink {
    href: String!
    name: String!
  }
  #  Info list
  type InfoList {
    icon: String!
    title: String!
    text: String!
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
  #  Center block a
  type CenterBlockA {
    title: String!
    underTitle: String!
    infoList: [InfoList!]!
  }
  #  Bottom block
  type BottomBlock {
    title: String!
    listClients: [InfoList!]!
  }
  #  Home page
  type HomePage {
    id: String!
    mainBlock: MainBlock!
    centerBlockA: CenterBlockA!
    centerBlockB: String!
    blockBottom: BottomBlock!
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
