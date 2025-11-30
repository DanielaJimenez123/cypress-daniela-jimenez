const pageLogin = require('../support/page_objects/pageLogin')
const pageHome = require('../support/page_objects/pageHome')
Cypress.Commands.add('login', (username, password) => { 
    pageLogin.typeUserName();
    pageLogin.typePassword();
    pageLogin.loginButton().click();
 })
Cypress.Commands.add('apiLoginAndDelete', (endpoint) => {
  cy.request({
    method: 'POST',
    url: 'https://app.bookdbqa.online/api/login',
    body: {
      username: 'Dani',
      password: 'Jerseyyy1'
    }
  }).then((loginResponse) => {
    expect(loginResponse.status).to.eq(200)

    const token = loginResponse.body.token
    const authToken = `Bearer ${token}`

    return cy.request({
      method: 'DELETE',
      url: `https://app.bookdbqa.online/api/${endpoint}`,
      headers: {
        'content-type': 'application/json',
        authorization: authToken
      }
    })
  }).then((deleteResponse) => {
    expect(deleteResponse.status).to.be.oneOf([200, 204])
  })
})
Cypress.Commands.add('addBookToCart', (book) => {
  pageHome.getBookList().contains(book).should('be.visible');
  pageHome.getAddToCartButton().click();
  pageHome.getToastAddedToCart().should('be.visible');
});
Cypress.Commands.add('checkOutAPI', (userId) => {
  cy.request({
    method: 'POST',
    url: `https://app.bookdbqa.online/api/CheckOut/${userId}`,
    failOnStatusCode: false,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: ''
    },
    body: {
      orderDetails: [
        {
          book: {
            bookId: 2,
            title: "Harry Potter and the Chamber of Secrets",
            author: "JKR",
            category: "Mystery",
            price: 236,
            coverFileName: "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg"
          },
          quantity: 1
        }
      ],
      cartTotal: 2483
    }
  }).then((response) => {
      expect(response.status).to.eq(401)
  })
})
Cypress.Commands.add('apiDeleteCartWithoutToken', (userId) => {
  cy.request({
    method: 'DELETE',
    url: `https://app.bookdbqa.online/api/shoppingcart/${userId}`,
    failOnStatusCode: false,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: ''
    }
  });
  
});

Cypress.Commands.add('apiLoginInvalid', (username, password) => {
  return cy.request({
    method: 'POST',
    url: 'https://app.bookdbqa.online/api/login',
    failOnStatusCode: false, 
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    },
    body: {
      username,
      password
    }
  });
});



// Cypress.Commands.add('login', (email, password) => { ... })
