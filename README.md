# Proyecto de Testing Automatizado con Cypress  
### Diseño e Implementación de Software — Tecnicatura en Análisis de Sistemas

Este proyecto corresponde a la materia **Diseño e Implementación de Software**, donde se desarrollaron **pruebas funcionales de Frontend y API** usando **Cypress**.

Los casos de prueba fueron previamente **escritos y gestionados en Jira**, y las validaciones manuales de API se realizaron en **Postman** antes de su automatización.

---

## Tecnologías utilizadas

- **Cypress**  
- **JavaScript**  
- **Page Object Model (POM)**  
- **Postman** (para validación de APIs)  
- **Jira** (para diseño de casos de prueba)

---

### Estructura del proyecto
├─ e2e/
│   ├─ prueba_api.cy.js
│   └─ prueba_front.cy.js
├─ fixtures/
├─ support/
│   ├─ commands.js
│   ├─ e2e.js
│   └─ page_objects/
│       ├─ pageHome.js
│       ├─ pageLogin.js
│       ├─ pageCheckout.js
│       └─ pageWishlist.js
cypress.config.js
package.json


#  **Casos de Prueba Automatizados**

##  **API – 3 Casos**

### **1️. Error al comprar carrito sin token**
- Método: **POST**
- Validación:
  - El endpoint rechaza la compra cuando no se envía un token válido.
  - Status code y mensaje de error esperado.

---

### **2️. Eliminar carrito sin enviar token**
- Método: **DELETE**
- Validación:
  - El sistema devuelve error al intentar eliminar un carrito sin autenticación.
  - Verificación del status code y body.

---

### **3️. Login con credenciales inválidas**
- Método: **POST**
- Validación:
  - Intento de login con usuario/contraseña incorrectos.
  - Status code 4xx y mensaje de error correspondiente.

---

# 🔷 **Frontend – 3 Casos**

### **1️. Comprar carrito exitosamente y visualizar orden de compra**
- Flujo completo desde agregar productos hasta el checkout.
- Validación del resumen de compra.
- Confirmación de que la orden se genera correctamente.

---

### **2️. Agregar productos a favoritos y vaciar lista**
- Agregar varios ítems a la wishlist.
- Validar que aparecen en la lista.
- Vaciar favoritos y confirmar que queda vacía.

---

### ** 3️. Carrito vacío al iniciar sesión desde la página de Checkout**
- Intento de compra sin estar logueado.
- Redirección a login.
- Verificación de que el carrito vuelve a estar vacío tras iniciar sesión.

---

##  Cómo ejecutar el proyecto

### **1️. Instalar dependencias
 npm install
### **2️. Abrir Cypress
 npx cypress open

 ---

## Gestión del proyecto

### ** Jira**
Los 6 casos de prueba fueron definidos en Jira con:
- Precondiciones
- Pasos
- Resultado esperado

### ** Postman**
Las API fueron validadas manualmente para:
- Confirmar comportamiento esperado
- Validar status codes
- Comprobar estructura de respuesta
- Detectar errores antes de automatizar

---

##  Autora

**Daniela Jiménez**  
Tecnicatura en Análisis de Sistemas  
Materia: Diseño e Implementación de Software

---

## Repositorio

*https://github.com/DanielaJimenez123/cypress-daniela-jimenez.git*





