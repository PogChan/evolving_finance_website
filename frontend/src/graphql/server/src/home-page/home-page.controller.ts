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
  #  Info list 2
  type InfoList2 {
    img: String!
    subTitle: String!
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
  #  Center block C
  type CenterBlockC {
    title: String!
    infoList: [InfoList2!]!
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
    centerBlockC: CenterBlockC!
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
