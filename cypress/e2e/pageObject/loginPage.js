/// <reference types="cypress" />
import { clearConfigCache } from "prettier";

class loginPage{

    constructor(){
        this.idUser = "#password";
    }

    getLoginPage(){
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit('https://www.saucedemo.com/');
    }

    getUserLogin(usrName){
        cy.get('#user-name').clear();
        cy.get('#user-name').type(usrName)
    }

    getPassLogin(pass){
        cy.get(this.idUser).clear();
        cy.get(this.idUser).type(pass)
    }
}
export default loginPage;