 ///<reference types="cypress" />
 
 describe('Scenario Api Testing',()=>{

    it('Sucsessfully validate content', () => {
        var ability = {
           "name": "limber",
           "url": "https://pokeapi.co/api/v2/ability/7/"
        }   
        cy.request('GET', 'https://pokeapi.co/api/v2/ability/7', ability).then((response) => {
           failOnStatusCode: false
           expect(response.body.name).to.eq(ability.name)
        })
       })

       it('test1', () => {
         cy.request({ method:'GET', url:'https://gorest.co.in/public/v2/users'}).as('urlRequest')
         cy.get('@urlRequest').its('status').should('equal',200)
          cy.get('@urlRequest').its('body').should('have.text','Priya Nair')

       });

       it('Add a new user', () => {

         var user = {
           "name": 'Fathur Rohim',
           "job": 'Test Engineer'
         }
         cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
           expect(response.status).equal(201)
           expect(getResponse.body.data.name).to.equal(user.name);
           expect(getResponse.body.data.job).to.equal(user.job);
            
         });
       });

    // it('Test Case Methode GET', () => {
    //     cy.request({
    //         method:'GET', url:'https://reqres.in/api/users?page=2&per_pages=1&delay=3'
    //     }).as('urlRequest')
    //     cy.get('@urlRequest').its('status').should('equal',200)
    // });

    // it('Test Case Methode GET All Users', () => {
    //     cy.request({
    //         method:'GET', url:'https://reqres.in/api/unknown'
    //     }).as('urlRequest')
    //     cy.get('@urlRequest').its('status').should('equal',200)
    //     cy.get('@urlRequest').its('body.data[1].name').should('equal','fuchsia rose')
    // });


    // it('Test Case Methode GET All Users - Body', () => {
    //     cy.request({
    //         method:'GET', url:'https://reqres.in/api/users'
    //     }).as('urlRequest')
    //     cy.get('@urlRequest').its('status').should('equal',200)
    //     cy.get('@urlRequest').its('body').should('have.any.keys','per_page',6)
    //     cy.get('@urlRequest').its('body.data[1]').should('have.property','first_name','Janet')
    //     cy.get('@urlRequest').its('body.data[1]').should('have.a.property','last_name','Weaver')
    //     cy.get('@urlRequest').its('body.data[1]').should('have.deep.property','email','janet.weaver@reqres.in')
    //     cy.get('@urlRequest').its('body.data[1].first_name').should('equal','Janet')
    //     cy.get('@urlRequest').its('headers').should('have.any.keys','transfer-encoding','chunked')
    //     cy.get('@urlRequest').its('headers').should('have.a.property','connection','keep-alive')
    // });


    // it('Test Case Methode GET - Headers', () => {
    //     cy.request({
    //         method:'GET', url:'https://pokeapi.co/api/v2/pokemon/ditto',failOnStatusCode: false
    //     }).as('urlRequest')
    //     cy.get('@urlRequest').its('status').should('equal',200)
    //     cy.get('@urlRequest').its('headers').should('have.a.property','content-type','application/json; charset=utf-8')

    // });

    // it('Negative Response', () => {
    //     cy.then(()=>{
    //                 cy.request({method:'GET',url:'https://pokeapi.co/api/v2/pokemon/eduwork',failOnStatusCode: false})
    //             }).as('urlNegativeResp')
    //     cy.get('@urlNegativeResp').its('status').should('equal',404)
    // });



    // it('Test Case Methode POST - Cara 1', () => {
    //     var user ={
    //         "name": "rizkas",
    //         "job": "QA Leader"
    //     }

    //     cy.then(()=>{
    //         cy.request('POST','https://reqres.in/api/users',user)
    //     }).as('urlPOST')
    //     cy.get('@urlPOST').its('status').should('equal',201)
    //     cy.get('@urlPOST').its('body.name').should('equal','rizkas')
    //     cy.get('@urlPOST').its('body.job').should('equal','QA Leader')
    // });

    // it('Test Case Methode POST - Cara 2', () => {
    //     var user ={
    //         "name": "rizkas",
    //         "job": "QA Leader"
    //     }
    //     cy.request('POST','https://reqres.in/api/users',user).then((resp)=>{
    //         expect(resp.status).equal(201)
    //         expect(resp.body.name).equal('rizkas')
    //         expect(resp.body.job).equal('QA Leader')
    //     })
    // });

    // it('Test Case Methode PUT - Cara 1', () => {
    //     var user ={
    //         "name": "rizka s",
    //         "job": "QE Leader"
    //     }

    //     cy.then(()=>{
    //         cy.request('PUT','https://reqres.in/api/users/2',user)
    //     }).as('urlPOST')
    //     cy.get('@urlPOST').its('status').should('equal',200)
    //     cy.get('@urlPOST').its('body.name').should('equal','rizka s')
    //     cy.get('@urlPOST').its('body.job').should('equal','QE Leader')
    // });

    // it('Test Case Methode PUT - Cara 2', () => {
    //     var user ={
    //         "name": "rizka s",
    //         "job": "QE Leader"
    //     }
    //     cy.request('PUT','https://reqres.in/api/users/2',user).then((resp)=>{
    //         expect(resp.status).equal(200)
    //         expect(resp.body.name).equal('rizka s')
    //         expect(resp.body.job).equal('QE Leader')
    //     })
    // });


 })