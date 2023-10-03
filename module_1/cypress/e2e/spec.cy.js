describe('Counter logic', () => {

  it('component renders initial value provided in props', () => {
    cy.visit('localhost:3000');
    cy.get('[data-testid="counter-result"]').should('have.text', "0");
  });

  it('click event decrements the displayed value', () => {
    cy.visit('localhost:3000');
    cy.get('[data-testid="counter-result"]').should('have.text', "0");
    cy.get('button[data-testid="decrease-Btn"]').click();
    cy.get('[data-testid="counter-result"]').should('have.text', "-1");
  });

  it('click event increases the displayed value', () => {
    cy.visit('localhost:3000');
    cy.get('[data-testid="counter-result"]').should('have.text', "0");
    cy.get('button[data-testid="increase-Btn"]').click();
    cy.get('[data-testid="counter-result"]').should('have.text', "1");
  });
})