 ///<reference types="cypress" />

describe('working with input', { testIsolation: false }, () => {
    it('Visit the website', () => {
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit('https://sistemtoko.com/register',{timeout:5000})
    });

    it('Should fill email', () => {
        cy.scrollTo('top');
        cy.get('input[name="email"]').clear()
        cy.get('input[name="email"]').type('d@gmail.com')
    });

    it('Should fill password', () => {
        cy.get('input[name="pswd"]').clear()
        cy.get('input[name="pswd"]').type('qwerty12345')
    });

    it('Should fill re-enter password', () => {
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('qwerty12345')
    });

    it('Should fill full name', () => {
        cy.get('input[name="name"]').clear()
        cy.get('input[name="name"]').type('Cak Jon')
    });

    it('Should fill number phone', () => {
        cy.get('input[name="phone"]').clear()
        cy.get('input[name="phone"]').type('081234567890')
    });

    it('Choose package', () => {
        cy.get('select[id="paket"]').select('3')
    });

    it('kode voucher',()=>{
        cy.get('#code_voucher').type('test')
        cy.screenshot();
    })

    it('Submit registration form', () => {
        cy.get('button[type="submit"]').click();
    });
});