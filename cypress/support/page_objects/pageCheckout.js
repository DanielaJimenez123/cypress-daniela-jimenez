class PageCheckout {
  fillForm(data) {
    cy.get('input[formcontrolname="name"]').type(data.name);
    cy.get('input[formcontrolname="addressLine1"]').type(data.address1);
    cy.get('input[formcontrolname="addressLine2"]').type(data.address2);
    cy.get('input[formcontrolname="pincode"]').type(data.pincode);
    cy.get('input[formcontrolname="state"]').type(data.state);
  }

  clickPlaceOrder() {
   return cy.get('button').contains('Place Order').click().should('be.visible');
  }

  expandFirstOrder() {
    cy.get('.example-element-row').first().click().should('be.visible');
  }
  order() {
    cy.get('.example-element-row').should('be.visible');
  }
  verifyFormDisabled() {
    cy.get('input[formcontrolname="name"]').should('be.disabled');
    cy.get('input[formcontrolname="addressLine1"]').should('be.disabled');
    cy.get('input[formcontrolname="addressLine2"]').should('be.disabled');
    cy.get('input[formcontrolname="pincode"]').should('be.disabled');
    cy.get('input[formcontrolname="state"]').should('be.disabled');
  }
  verifyBookInSummary(bookName) {
    cy.contains('a', bookName).should('be.visible');
  }

}

module.exports = new PageCheckout();
