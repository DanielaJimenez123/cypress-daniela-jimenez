#  QA Automation Project – Frontend & API Testing with Cypress

Este proyecto consiste en la automatización de pruebas funcionales de Frontend y API utilizando Cypress, aplicando buenas prácticas de testing y el patrón Page Object Model (POM).

Fue desarrollado en el contexto de mi formación en la Tecnicatura en Análisis de Sistemas.

---
## Objetivo

Validar el correcto funcionamiento de las funcionalidades críticas del sistema mediante pruebas automatizadas, asegurando la calidad del producto.

---

## Tecnologías utilizadas

- **Cypress**  
- **JavaScript**  
- **Page Object Model (POM)**  
- **Postman** (para validación de APIs)  
- **Jira** (para diseño de casos de prueba)

---

### Estructura del proyecto
```
cypress
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
```

#  **Casos de prueba automatizados**

##  **API Testing**

Se automatizaron los siguientes escenarios:

- Compra de carrito sin token  
  Validación de rechazo por falta de autenticación

- Eliminación de carrito sin token  
  Verificación de status code y mensaje de error

- Login con credenciales inválidas  
  Validación de manejo correcto de errores

---

# 🔷 **Frontend Testing**

- Compra completa de productos  
  Flujo end-to-end desde selección hasta checkout

- Gestión de lista de favoritos 
  Agregar y eliminar productos

- Intento de compra sin sesión iniciada  
  Validación de redirección y estado del carrito

---

##  Cómo ejecutar el proyecto

### **1️. Instalar dependencias
 npm install
### **2️. Abrir Cypress
 npx cypress open

 ---

## Gestión del proyecto

## Los casos de prueba fueron:

• Diseñados en Jira  
• Validados manualmente en Postman  
• Automatizados en Cypress  


---
# Sobre mí

Este proyecto forma parte de mi formación como QA Automation Tester.

Actualmente busco mi primera oportunidad profesional en QA.

##  Autora

Daniela Jiménez
Tecnicatura en Análisis de Sistemas  
Materia: Diseño e Implementación de Software

---

## LinkedIn  
https://www.linkedin.com/in/daniela-jiménez-miranda-321a0a35b




