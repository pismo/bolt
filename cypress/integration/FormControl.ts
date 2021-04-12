/// <reference types="cypress" />

import { IFormControl } from '../../dist/js/bolt';

describe('Modal', () => {
  beforeEach(() => {
    cy.visit('/test-form-control');
    cy.wait(1000);
  });

  it('all form items should be visible', () => {
    cy.get('[data-testid=complete-form]')
      .should('be.visible')
      .within(() => {
        cy.get('input').should('be.visible').should('have.length', 4);
        cy.get('button[type=submit]').should('be.visible');
      });
  });

  it('validation should work correctly', () => {
    cy.get('[data-testid=complete-form]').within(() => {
      cy.get('button[type=submit]').as('btn').click();

      cy.get('[data-error=true]').should('have.length', 4);

      cy.get('input[name=name]').type('Pismo');

      cy.get('@btn').click();

      cy.get('[data-error=true]').should('have.length', 3);

      cy.get('input[name=email]').type('a@b.com');

      cy.get('@btn').click();

      cy.get('[data-error=true]').should('have.length', 2);

      cy.get('input[name=pass]').type('1234');

      cy.get('@btn').click();

      cy.get('[data-error=true]').should('have.length', 1);

      cy.get('input[name=pass2]').type('1234');

      cy.get('@btn').click();

      cy.get('[data-testid=result]').should('have.text', 'formulário enviado com sucesso');
      cy.get('input').then(($inputs) => {
        $inputs.each((_, element) => {
          cy.wrap(element).should('have.value', '');
        });
      });
    });
  });

  it('the onSubmit event should work correctly', () => {
    const data = {
      name: 'Pismo',
      email: 'a@b.com',
      pass: '1234',
      pass2: '1234',
    };

    cy.window()
      .its('formControl')
      .then((formControl: IFormControl) => {
        cy.spy(formControl, 'onSubmit');

        cy.get('[data-testid=complete-form]').within(() => {
          cy.get('input').then(($inputs) => {
            $inputs.each((_, element) => {
              cy.wrap(element).type(data[element.name]);
            });
          });

          cy.get('button[type=submit]')
            .click()
            .then(() => {
              /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
              expect(formControl.onSubmit).to.be.called;
              expect(formControl.onSubmit).to.be.calledWith(data);
            });
        });
      });
  });

  it('should allow individual events', () => {
    cy.get('[data-testid=complete-form]').within(() => {
      cy.get('bolt-input[data-name=pass]').within(() => {
        cy.get('input').should('have.attr', 'type', 'password');

        cy.get('.tw-input-endIcon').as('btn').click();

        cy.get('input').should('have.attr', 'type', 'text');
      });
    });
  });

  it('should allow multiple schemas', () => {
    cy.get('[data-testid=schemas]').within(() => {
      cy.get('input[name=question]').as('question').type('cat');

      cy.get('button[type=submit]').as('btn').click();

      cy.get('[data-error=true]').should('have.length', 1).should('have.data', 'name', 'cat');

      cy.get('@question').clear().type('dog');

      cy.get('@btn').click();

      cy.get('[data-error=true]').should('have.length', 1).should('have.data', 'name', 'dog');
    });
  });
});
