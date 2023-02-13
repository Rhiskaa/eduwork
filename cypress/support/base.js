Cypress.Commands.add('login',(userName,pass) =>{
    cy.get('#user-name').wait(1000).clear;
    cy.get('#user-name').wait(1000).type(userName);
    cy.get('#password').wait(1000).clear;
    cy.get('#password').wait(1000).type(pass);
})

