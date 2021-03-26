/// <reference types="cypress" />

describe('Modal', () => {
  beforeEach(() => {
    cy.visit('/test-modal');
    cy.wait(1000);
  });

  it('when starting the screen the modal should not be visible', () => {
    cy.get('[data-testid=modalref]').should('not.be.visible');
  });

  it('the modal should open when clicking on the button', () => {
    cy.get('[data-testid=openModalBtn]').click();
    cy.wait(1000);
    cy.get('[data-testid=modalref]').should('be.visible');
  });

  it('the modal should be displayed correctly', () => {
    cy.get('[data-testid=openModalBtn]').click();
    cy.wait(1000);
    cy.get('[data-testid=modalref]').within(() => {
      cy.get('h1').should('have.text', 'teste');
      cy.get('[data-testid=closebtn]').should('be.visible');
    });
  });

  it('when clicking on the backdrop the modal should close', () => {
    cy.get('[data-testid=openModalBtn]').click();
    cy.wait(1000);
    cy.get('[data-testid=backdrop]').click({ force: true });
    cy.wait(1000);
    cy.get('[data-testid=modalref]').should('not.be.visible');
  });

  it('when clicking on the close button the modal should close', () => {
    cy.get('[data-testid=openModalBtn]').click();
    cy.wait(1000);
    cy.get('[data-testid=closebtn]').click();
    cy.wait(1000);
    cy.get('[data-testid=modalref]').should('not.be.visible');
  });
});
