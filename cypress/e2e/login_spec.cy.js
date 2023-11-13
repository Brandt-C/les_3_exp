describe('Launch Application', () => {
  it('passes', () => {
    cy.visit('https://demo.applitools.com/index.html');
    cy.get('#username').type('validUsername');
    cy.get('#password').type('validPassword');
    cy.get('#log-in').click();
  })
})