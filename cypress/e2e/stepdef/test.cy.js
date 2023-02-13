 ///<reference types="cypress" />

 beforeEach(() => {
      
    cy.visit('/login.html',{timeout:5000});
    cy.clearAllCookies;
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
    cy.clearCookies;
  })


 describe ('test case',()=>{
    it('visit web', () => {
        cy.url().should('include','login.html');
     });

     it('verify field user', () => {
        cy.get('#user_login').clear();
        cy.get('#user_login').click();
     });

    specify('test with specify step', () => {
        cy.get('#user_login').click();
        cy.get('#user_login').type('RizkaS');
    });

 })