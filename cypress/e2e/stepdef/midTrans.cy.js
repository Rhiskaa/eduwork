 ///<reference types="cypress" />

const cypress = require('cypress');

 require('cypress-iframe')
 require('@cypress/xpath')
 describe('Scenario Saucedemo',()=>{

    beforeEach(() => {
       
       cy.visit('https://demo.midtrans.com/',{timeout:50000});
       cy.clearAllCookies;
       cy.clearAllLocalStorage;
       cy.clearAllSessionStorage;
     })

     it('Checkout with Bank Transfer', () => {
        cy.xpath("//a[@class='btn buy']").click()
        // cy.get('a[class="btn buy"]').click()
        cy.get('div[class="cart-checkout"]').should('be.visible')
        cy.get('div[class="cart-checkout"]',{timeout:5000}).click()
        cy.wait(10000)
        // cy.popUpPaymentType('#snap-midtrans','Credit/debit card')
        //cy.popUpPaymentType('#snap-midtrans','Bank transfer')
        cy.frameLoaded('#snap-midtrans')
        cy.iframe().contains('Credit/debit card').click()
        cy.iframe().find('div[class="card-number-input-container"]').click()
        cy.iframe().find('div[class="card-number-input-container"]').type('3423 4235 2542 5235')
        cy.iframe().find('#card-expiry').click()
        cy.iframe().find('#card-expiry').type('1223')
     });

     it('Checkout with Akulaku', () => {
      cy.get('a[class="btn buy"]').click()
      cy.get('div[class="cart-checkout"]').should('be.visible')
      cy.get('div[class="cart-checkout"]',{timeout:5000}).click()
      cy.frameLoaded('#snap-midtrans')
      cy.iframe().contains('Akulaku PayLater').click()
      cy.iframe().contains('Pay now',{timeout:50000}).click()
     
      const urlHttpsWww ="http://simulator.sandbox.midtrans.com/akulaku/ui/login?appId=82728746&refNo=d9785922-c1e2-4dbc-829a-b336fa74cd49&sign=iSs4biUbMLFAgQ8oHuRjB4timPEG-8cKdZPYCO-26QQBLy9h9g4wdbED5sl--LJMGXvjcogbeDycNOhjHjpLgg&lang=id";
      cy.request({
         url: urlHttpsWww,
         followRedirect: false,
       }).then((resp) => {
         expect(resp.status).to.eq(200);
         expect(resp.redirectedToUrl).to.eq(undefined);
       });

         cy.get('h1').should('contain.text','Akulaku');
         cy.get('#phoneNumber').click()
         cy.get('#phoneNumber').type('08122222222')
     
      //cy.location('pathname').should('contain', 'https://simulator.sandbox.midtrans.com/')
      
   });



});