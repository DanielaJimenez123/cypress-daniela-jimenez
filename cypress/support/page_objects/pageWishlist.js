class PageWishlist {
  getBookList() {
    return cy.get('.d-flex.justify-content-start.card-deck-container.mb-4')
  }

  verifyBookIsVisible(bookName) {
    this.getBookList().contains(bookName).should('be.visible')
  }
  verifyBookInWishlist(bookName) {
  cy.contains('a', bookName).should('be.visible');
  }

  getContinueShoppingButton() {
  return cy.get('button').contains('Continue shopping')
  }

  getFavIconUnselected() {
    return cy.get('.favourite-unselected')
  }

  getFavIconSelected() {
    return cy.get('.favourite-selected')
  }

  getFavCounter() {
    return cy.get('#mat-badge-content-1')
  }

  getFavButtonTop() {
    return cy.get('button').contains('favorite')
  }

  getClearWishlistButton() {
    return cy.get('button').contains('Clear Wishlist')
  }

  verifyToastAdded() {
    cy.contains('Added to Wishlist!!!').should('be.visible')
  }

  verifyWishlistCleared() {
    cy.contains('Wishlist cleared!!!').should('be.visible')
    cy.contains('Your wishlist is empty.').should('be.visible')
  }
}

module.exports = new PageWishlist();

