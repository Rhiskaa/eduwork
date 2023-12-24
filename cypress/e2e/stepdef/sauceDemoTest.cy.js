/// <reference types="cypress" />

describe('saucedemo test', ()=>{
    beforeEach ( function() {
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit('https://www.saucedemo.com/',{timeout:5000})
        cy.fixture('parameter').then(function (testdata) {
            this.testdata = testdata;
        })
});


    it('Login with valid data', function() {
        cy.get('input[name="user-name"]').click()
            cy.get('input[name="user-name"]').type(this.testdata.userName)
            cy.get('input[name="password"]').click()
            cy.get('input[name="password"]').type(this.testdata.pass)
            cy.get('input[name="login-button"]').click()

    });

    it('Call fixture inside it with invalid data',function(){
        cy.fixture("parameter").then(user=>{
            const usrname = user.userNameInvalid
            const password = user.pass
            cy.loginSauceDemo(usrname,password);
            cy.get('[data-test="error"]').should('contains.text','Username and password do not match any user in this service')
        })
    })

    it('Sample it with class function without call function',function(){
        cy.fixture("parameter").then(user=>{
            const usrname = user.userNameInvalid
            const password = user.pass
            cy.loginPage(usrname,password);
            cy.get('[data-test="error"]').should('contains.text','Username and password do not match any user in this service')
        })
    })



});