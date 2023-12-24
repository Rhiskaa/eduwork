// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginPage',(userName,pass) =>{
    cy.get('#user-name').wait(1000).clear;
    cy.get('#user-name').wait(1000).type(userName);
    cy.get('#password').wait(1000).clear;
    cy.get('#password').wait(1000).type(pass);
    cy.get('#login-button').click()
})

Cypress.Commands.add('popUpPaymentType',(id,TypePayment) =>{
    cy.get(id).then(cy.wrap).then((element) => {
        cy.get(element.children('#app').prevObject.prevObject[0].body.querySelector(id).contentWindow.document).then((res) => {
              cy.wrap(res.selector.body).contains(TypePayment).click()
        })
     })
})