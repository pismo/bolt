/// <reference types="cypress" />

import { IInput } from '../../dist/js/bolt';

describe('Modal', () => {
  beforeEach(() => {
    cy.visit('/test-input');
    cy.wait(1000);
  });

  it('the input should be visible and behaving as expected', () => {
    cy.get('[data-testid=input-test]')
      .should('be.visible')
      .within(() => {
        cy.get('input').type('teste').should('have.value', 'teste');
      });
  });

  it('the label and helpertext should be displayed correctly', () => {
    cy.get('[data-testid=input-test]').within((container) => {
      const $container = container;
      const $label = 'nome';
      const $helpertext = 'escreva seu nome';

      $container[0].dataset.label = $label;
      cy.get('label').should('be.visible').should('have.text', $label);

      $container[0].dataset.helpertext = $helpertext;
      cy.get('p').should('be.visible').should('have.text', $helpertext);
    });
  });

  it('the close button should behave correctly', () => {
    cy.get('[data-testid=input-test]').within((container) => {
      const $container = container;
      $container[0].dataset.clearicon = 'true';
      cy.get('.tw-i-close').should('be.visible').as('closeicon');

      cy.get('input').type('testing').should('have.value', 'testing');

      cy.get('@closeicon').click();

      cy.get('input').should('have.value', '');
    });
  });

  it('the starticon should behave correctly', () => {
    cy.get('[data-testid=input-test]').within((container) => {
      const $container = container;
      $container[0].dataset.starticon = 'umbrella';

      cy.get('.tw-i-umbrella').should('be.visible').as('starticon');

      cy.window()
        .its('inputobj')
        .then((input: IInput) => {
          const $input = input;
          $input.onStartIconClick = () => {};

          cy.spy($input, 'onStartIconClick');

          cy.get('@starticon')
            .click()
            .then(() => {
              /* eslint-disable-next-line */
              expect($input.onStartIconClick).to.be.called;
            });
        });
    });
  });

  it('the endicon should behave correctly', () => {
    cy.get('[data-testid=input-test]').within((container) => {
      const $container = container;
      $container[0].dataset.endicon = 'eye';

      cy.get('.tw-i-eye').should('be.visible').as('endicon');

      cy.window()
        .its('inputobj')
        .then((input: IInput) => {
          const $input = input;
          $input.onEndIconClick = () => {
            $container[0].dataset.endicon = 'eye-off';
          };

          cy.spy($input, 'onEndIconClick');

          cy.get('@endicon')
            .click()
            .then(() => {
              // eslint-disable-next-line
              expect($input.onEndIconClick).to.be.called;
            })
            .should('have.class', 'tw-i-eye-off');
        });
    });
  });

  it('the number type should only accept numbers', () => {
    cy.get('[data-testid=input-test]').within((container) => {
      const $container = container;
      $container[0].dataset.type = 'password';
      cy.wrap($container).as('container');

      cy.get('input')
        .as('input')
        .type('123456')
        .should('have.value', '123456')
        .clear()
        .should('have.attr', 'type')
        .then(($type) => {
          expect($type).eq('password');
        });
    });

    cy.get('@container').within((container) => {
      const $container = container;
      $container[0].dataset.type = 'number';

      cy.get('@input').type('1a2b3c').should('have.value', '123');
    });
  });

  it('onChange should be called for each character entered', () => {
    cy.get('[data-testid=input-test]').within(() => {
      cy.window()
        .its('inputobj')
        .then((input: IInput) => {
          const $input = input;
          $input.onChange = () => {};

          cy.wrap($input).as('input');

          cy.spy($input, 'onChange');
        });

      cy.get('input').type('123456');

      cy.get('@input').then(($input) => {
        expect($input.onChange).to.have.been.callCount(6);
      });
    });
  });
});
