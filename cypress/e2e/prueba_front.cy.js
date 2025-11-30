import user from '../fixtures/user.json'
import urls from '../fixtures/urls.json'
import books from '../fixtures/books.json'
import checkoutData from '../fixtures/checkoutData.json'
const pageHome = require('../support/page_objects/pageHome')
const pageCheckout = require('../support/page_objects/pageCheckout')
const pageWishlist = require('../support/page_objects/pageWishlist')
describe('Pruebas de front-end', () => {
  it('Comprar carrito exitosamente y visualizar orden de compra', () => {
    cy.apiLoginAndDelete(`shoppingcart/${user.id}`);                                                             
    cy.visit(urls.login);
    cy.login(user.name, user.password);
    cy.url().should('include', urls.home);
    pageHome.amountCart(0);
    cy.addBookToCart(books.book1);
    pageHome.amountCart(1);
    pageHome.openCart();
    pageCheckout.verifyBookInSummary(books.book1);
    pageHome.clickCheckout().click()
    cy.url().should('include', urls.checkout);

    pageCheckout.fillForm(checkoutData);
    pageCheckout.clickPlaceOrder();
    cy.url().should('include', urls.myOrders);
    pageCheckout.order();
    pageCheckout.expandFirstOrder();
    pageCheckout.verifyBookInSummary(books.book1);
  })
  it('Agregar productos a favoritos y vaciar lista',()=>{
    cy.apiLoginAndDelete(`Wishlist/${user.id}`);
    cy.visit(urls.login);
    cy.login(user.name, user.password);
    pageWishlist.getFavCounter().contains('0').should('be.visible');
    pageWishlist.verifyBookIsVisible(books.book1);
    pageWishlist.getFavIconUnselected().first().click();
    pageWishlist.verifyToastAdded();
    pageWishlist.getFavCounter().contains('1').should('be.visible');
    pageWishlist.verifyBookIsVisible(books.book2);
    pageWishlist.getFavIconUnselected().eq(0).click();
    pageWishlist.verifyToastAdded();
    pageWishlist.getFavCounter().contains('2').should('be.visible');
    pageWishlist.getFavButtonTop().click();
    pageWishlist.verifyBookInWishlist(books.book1);
    pageWishlist.verifyBookInWishlist(books.book2);
    pageWishlist.getClearWishlistButton().click();
    pageWishlist.verifyWishlistCleared();
    pageWishlist.getFavCounter().contains('0').should('be.visible');
    pageWishlist.getContinueShoppingButton().click();
    cy.url().should('include', urls.home);

   
  })
  it('caso 3- Carrito vacío al iniciar sesión desde la página de Checkout.',()=>{
    cy.visit(urls.home);
    cy.addBookToCart(books.book1);
    pageHome.amountCart(1);
    pageHome.openCart();
    pageCheckout.verifyBookInSummary(books.book1);
    pageHome.clickCheckout().click();
    cy.url().should('include', urls.login);
    cy.login(user.name, user.password);
    cy.url().should('include', urls.checkout);
    pageHome.amountCart(0);
    pageCheckout.verifyFormDisabled();
  })

  
})