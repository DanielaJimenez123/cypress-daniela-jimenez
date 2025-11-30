class pageHome{
     getBookList(){
       return cy.get('.d-flex.justify-content-start.card-deck-container.mb-4')
     }
    amountCart(amount){
      cy.get('#mat-badge-content-0').contains(amount).should('be.visible')
    }
    addToCartButton(){
      return cy.get('button').contains(' Add to Cart')
    }
    checkToastAddedToCart(){
      cy.contains('One Item added to cart').should('be.visible')
    }
    openCart() {
      return cy.get('button').contains('shopping_cart').click();
    }
    clickCheckout() {
     return cy.get('button').contains('CheckOut');
    }
   getBookList() {
     return cy.get('.d-flex.justify-content-start.card-deck-container.mb-4');
    }

   getAddToCartButton() {
     return cy.contains('button', ' Add to Cart');
    } 

   getToastAddedToCart() {
     return cy.contains('One Item added to cart');
    }

}module.exports = new pageHome();