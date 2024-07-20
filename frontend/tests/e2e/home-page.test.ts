describe('Home page', () => {
  it('Visit page', () => {
    cy.visit('/')
    cy.url().should('include', '/')
  })
})

export {}
