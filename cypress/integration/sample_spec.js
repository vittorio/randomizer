describe('My first test', () => {
  it("Visits the Kitchen Sink", () => {
   cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
});