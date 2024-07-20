/// <reference types="cypress" />

// Create custom commands
// @ts-ignore
Cypress.Commands.add('dataCy', (selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(`[data-cy=${selector}]`)
})
// Declare types
declare namespace Cypress {
  interface Chainable {
    dataCy(value: string): Chainable<Element>
  }
}
