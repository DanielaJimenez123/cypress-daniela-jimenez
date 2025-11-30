import user from '../fixtures/user.json'
describe('Pruebas de APIs', () => {
    it('API | Error al comprar carrito sin token', () => {
         cy.checkOutAPI(user.id);
    })

    it('API | Eliminar carrito sin enviar token', () => {
          cy.apiDeleteCartWithoutToken(user.id).then((res) => {
          expect(res.status).to.eq(200); 
        });
    });

    
    it('API | Login con credenciales inválidas', () => {
          cy.apiLoginInvalid(user.name, 'passwordIncorrect').then((res) => {
          expect(res.status).to.eq(401);
        });
     });


});