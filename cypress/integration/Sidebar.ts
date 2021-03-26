/// <reference types="cypress" />

describe('Sidebar', () => {
  beforeEach(() => {
    cy.visit('/test-sidebar');
    cy.wait(1000);
  });

  it('should display the parts correctly', () => {
    cy.get('[data-testid=sidebar]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-testid=header]').should('be.visible');
        cy.get('[data-testid=content]').should('be.visible');
        cy.get('[data-testid=footer]').should('be.visible');
      });
  });

  it('should show the content correctly', () => {
    cy.get('[data-testid=sidebar]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-testid=header]')
          .should('be.visible')
          .should('have.text', 'App Name')
          .within(() => {
            cy.get('span').should('have.class', 'i-bars');
          });
        cy.get('[data-testid=content]')
          .should('be.visible')
          .within(($content) => {
            expect($content.children()).have.length(3);

            cy.get('.sidebar-btn-l1')
              .should('have.length', 1)
              .should('have.text', 'First Level')
              .within(() => {
                cy.get('span').should('have.class', 'i-accounts');
              });

            cy.get('.sidebar-btn-l2')
              .should('have.length', 2)
              .then(($bts) => {
                $bts.each((i, el) => {
                  cy.wrap(el).should('have.text', 'Second Level');
                });
              });
          });
        cy.get('[data-testid=footer]').should('be.visible').should('have.text', 'v1.3.4');
      });
  });

  it('should have the right behavior', () => {
    cy.get('[data-testid=content]').within(() => {
      cy.get('.sidebar-btn-l1').as('btn1');
      cy.get('.sidebar-btn-l2').then(($btns) => {
        cy.wrap($btns[0]).as('btn2');
        cy.wrap($btns[1]).as('btn3');
      });
    });

    cy.get('@btn1').click().should('have.class', 'selected');

    cy.get('[data-testid=result]').should('have.text', 'titulo').as('result');

    cy.get('@btn2').click().should('have.class', 'selected');

    cy.get('@result').should('have.text', 'category 1');

    cy.get('@btn3').click().should('have.class', 'selected');

    cy.get('@result').should('have.text', 'category 2');
  });
});
