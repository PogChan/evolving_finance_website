import { gql } from 'apollo-server-micro'

export const footerTypeDefs = gql`
  #  Links
  type Links {
    name: String!
    href: String!
  }
  type SocialLinks {
    href: String!
    icon: String!
  }
  #  Footer
  type Footer {
    id: String!
    footerSocialTitle: String!
    footerSocialIcons: [SocialLinks!]
    footerBottomLinks: [Links!]
  }
  #  Data header
  type DataFooter {
    data: [Footer]!
  }

  #  Query
  type Query {
    getFooter: DataFooter
  }
`
