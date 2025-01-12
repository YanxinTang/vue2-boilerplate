describe('vue2-boilerplate', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000');
  });

  it('all form-control should not be disabled by default', () => {
    cy.get('.ant-form').within(() => {
      cy.get('.ant-input').should('not.be.disabled');
      cy.get('.ant-select').should('not.have.class', 'ant-select-disabled');
      cy.get('.ant-input-number-input').should('not.be.disabled');
      cy.get('.ant-switch').should('not.be.disabled');
      cy.get('.ant-slider').should('not.have.class', 'ant-slider-disabled');
      cy.get('.ant-radio-group .ant-radio-input').should('not.be.disabled');
      cy.get('.ant-checkbox-group .ant-checkbox-input')
        .not(':eq(1)')
        .should('not.be.disabled');
      cy.get('.ant-rate').should('not.have.class', 'ant-rate-disabled');
      cy.get('.ant-upload').should('not.have.class', 'ant-upload-disabled');
      cy.get('.ant-btn').should('not.be.disabled');
    });
  });

  it('all form-control should be disabled after click disable', () => {
    cy.get('.ant-layout-sider .ant-menu>.ant-menu-item')
      .contains('Disable')
      .click();

    cy.get('.ant-form').within(() => {
      cy.get('.ant-input').should('be.disabled');
      cy.get('.ant-select').should('have.class', 'ant-select-disabled');
      cy.get('.ant-input-number-input').should('be.disabled');
      cy.get('.ant-switch').should('be.disabled');
      cy.get('.ant-slider').should('have.class', 'ant-slider-disabled');
      cy.get('.ant-radio-group .ant-radio-input').should('be.disabled');
      cy.get('.ant-checkbox-group .ant-checkbox-input')
        .not(':eq(1)')
        .should('be.disabled');
      cy.get('.ant-rate').should('have.class', 'ant-rate-disabled');
      cy.get('.ant-upload').should('have.class', 'ant-upload-disabled');
      cy.get('.ant-btn').should('be.disabled');
    });
  });
});
