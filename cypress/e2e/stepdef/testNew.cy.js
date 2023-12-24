/// <reference types="cypress" />

describe('saucedemo test', ()=>{
    before(() => {
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit('https://www.saucedemo.com/',{timeout:5000});
});


    it('Call fixture inside it with invalid data',()=>{
        cy.fixture("parameter").then(user=>{
            const usrname = user.userNameInvalid
            const password = user.pass
            cy.get('input[name="user-name"]').click()
            cy.get('input[name="user-name"]').type("standard_user")
            cy.get('input[name="password"]').click()
            cy.get('input[name="password"]').type("secret_sauce")
            cy.get('input[name="login-button"]').click()
           // cy.get('[data-test="error"]').should('contains.text','Username and password do not match any user in this service')
        })
    })

    it('Call fixture inside it with invalid data',()=>{
        cy.fixture("parameter").then(user=>{
            const usrname = user.userNameInvalid
            const password = user.pass
            cy.get('input[name="user-name"]').click()
            cy.get('input[name="user-name"]').type("standard_user")
            cy.get('input[name="password"]').click()
            cy.get('input[name="password"]').type("secret_sauce")
            cy.get('input[name="login-button"]').click()
           cy.get('.inventory_item').first().find('.btn_inventory').click();
        })
    })


});