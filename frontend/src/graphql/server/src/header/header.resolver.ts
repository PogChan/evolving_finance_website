import Header from '@db/header/header.json'

export const headerResolver = {
  Query: {
    // Get header
    getHeader: async () => {
      const data = await Header

      return { data }
    },
  },
}
