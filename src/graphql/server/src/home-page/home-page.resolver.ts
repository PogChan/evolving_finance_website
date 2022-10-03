import HomePage from '@db/home-page/home-page.json'
import { QueryGetHomePageArgs } from '@generated/graphql'

export const homePageResolver = {
  Query: {
    // Get home page
    getHomePage: async (parent: any, { input }: QueryGetHomePageArgs) => {
      console.log(input.search)
      const data = await HomePage

      return { data }
    },
  },
}
