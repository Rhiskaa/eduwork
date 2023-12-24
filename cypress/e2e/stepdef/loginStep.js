/// <reference types="cypress" />

const{Given,When,Then} =require("@badeball/cypress-cucumber-preprocessor");
import loginPO from "../pageObject/loginPage";
const PoLogin = new loginPO;


Given('User have login page', () => {
    PoLogin.getLoginPage();
   // cy.screenshot();
});


When("User have username {string}", function (username) {
    PoLogin.getUserLogin(username);
});

When("password {string}", function (pass) {
    PoLogin.getPassLogin(pass);
});


When("Submit login",()=>{
    cy.screenshot();
    cy.get('#login-button').click();
})

Then("User will get notif error", () => {
    cy.get('h3').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    cy.screenshot();
});

Then("User successfully get Home page", () => {
    cy.get('span').should('contain.text','Products');
    cy.screenshot();
});