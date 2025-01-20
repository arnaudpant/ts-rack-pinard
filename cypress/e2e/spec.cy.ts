
describe('cypress page home not connected', () => {
  it('should render the good title h1 page accueil', () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-testid="cypress-title-home"]').should('exist')
      .should('have.text', "La gestion de cave à vin simplifiée: votre collection à portée de main !")
  })

  it('Should render buttons inscription, connexion, demonstration', () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-testid="cypress-inscription"]').should('exist')
    cy.get('[data-testid="cypress-connexion"]').should('exist')
    cy.get('[data-testid="cypress-demonstration"]').should('exist')
  })
})