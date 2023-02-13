 ///<reference types="cypress" />
 
 describe('Scenario Saucedemo',()=>{

   beforeEach(() => {
      
      cy.visit('/',{timeout:5000});
      cy.clearAllCookies;
      cy.clearAllLocalStorage;
      cy.clearAllSessionStorage;

    })

   it('test soucedemo', () => {
      cy.reload();
      cy.get('title').wait(5000).should('contain.text','Swag Labs');
      cy.get('#user-name').wait(1000).clear;
      
      cy.get('#user-name').wait(1000).type("standard_user");
      cy.get('#password').wait(1000).clear;
      cy.get('#password').wait(1000).type("secret_sauce");
      cy.get('#password').wait(1000).submit;
      cy.get('#login-button',{timeout:5000}).click();
      cy.get('#add-to-cart-sauce-labs-backpack').wait(1000).should('contain.text','Add to cart');
   });


   it('test soucedemo2', () => {
    cy.reload;
    cy.get('title').wait(5000).should('contain.text','Swag Labs');

    cy.fixture('parameter').then(parameter => {
      const usrValid = parameter.usernamaValid;
      const pass = parameter.pass;
      cy.login(usrValid,pass);
    })
    cy.get('#login-button',{timeout:5000}).click();
    cy.get('#add-to-cart-sauce-labs-backpack').wait(1000).should('contain.text','Add to cart');
 
  
    });
});