import Footer from '@db/footer/footer.json'

export const footerResolver = {
  Query: {
    // Get header
    getFooter: async () => {
      const data = await Footer

      return { data }
    },
  },
}
