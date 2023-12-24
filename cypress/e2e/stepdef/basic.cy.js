 ///<reference types="cypress" />

 require('@cypress/xpath');
 
 describe('Scenario Saucedemo',()=>{

   beforeEach(() => {
      cy.clearAllCookies;
      cy.clearAllLocalStorage;
      cy.clearAllSessionStorage;

    })

    it('Test Case - Should fill checkbox', () => {     
      cy.visit('http://zero.webappsecurity.com/login.html',{timeout:50000});
      cy.xpath("//input[@id='user_login']").click()
      cy.xpath("//input[@id='user_login']").type("Rizka")
      cy.xpath("//input[@id='user_password']").click()
      cy.xpath("//input[@id='user_password']").type("test")
      cy.xpath("//input[@id='user_remember_me']").click();
      cy.screenshot();
    });

    it('Test Case - DropDownList', () => {     
      cy.visit('https://parabank.parasoft.com/parabank/admin.htm',{timeout:50000});
      cy.scrollTo('bottom');
      cy.screenshot();
      cy.get('#loanProvider').select('Local')// Based on text
      cy.get('#loanProcessor').select('down')// Based on value
    //  cy.get('#accessMode1').check()
      cy.get('[value="soap"]').check()
      cy.scrollTo('0','5%');
      cy.screenshot();
    });

  //  it('test soucedemo', () => {
  //     cy.reload();
  //     cy.get('title').wait(5000).should('contain.text','Swag Labs');
  //     cy.get('#user-name').wait(1000).clear;
  //     cy.get('#user-name').wait(1000).type("standard_user");
  //     cy.get('#password').wait(1000).clear;
  //     cy.get('#password').wait(1000).type("secret_sauce");
  //     cy.get('#password').wait(1000).submit;
  //     cy.get('#login-button',{timeout:5000}).click();
  //     cy.get('#add-to-cart-sauce-labs-backpack').wait(1000).should('contain.text','Add to cart');
  //  });


  //  it('test soucedemo2', () => {
  //     cy.reload;
  //     cy.get('title').wait(5000).should('contain.text','Swag Labs');

  //     cy.fixture('parameter').then(parameter => {
  //       const usrValid = parameter.usernamaValid
  //       const pass = parameter.pass
  //       cy.loginPage(usrValid,pass)
  //     }) 
  //     cy.get('#login-button',{timeout:5000}).click();
  //     cy.get('#add-to-cart-sauce-labs-backpack').wait(1000).should('contain.text','Add to cart');
  //   });
 
});