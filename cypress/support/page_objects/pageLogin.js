import user from '../../fixtures/user.json'
class pageLogin{
typeUserName(){
cy.get('input[formcontrolname="username"]').type(user.name);
}
typePassword(){
cy.get('input[formcontrolname="password"]').type(user.password);
}
loginButton(){
return cy.get('app-login button').contains('Login');
}
}module.exports= new pageLogin();