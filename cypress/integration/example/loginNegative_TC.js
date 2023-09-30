/// <reference types="cypress" />

describe('my first testsuite',async()=>
{

    it('my login testcase',function()
    {
        cy.visit("https://eros.narola.online:444/EasyCollab/")

        //right username and wrong password
        cy.get('#username').type("skp@narola.email")
        cy.get('#inputPassword').type("Sp@9586220020")
        cy.get('#UserRemember').click()
        cy.get('.btn').click()
        cy.get('#flashMessage').should('have.text', 'Invalid Email/Password. Email is not activated')
        cy.get('#flashMessage').then(function(element){
            const actualText=element.text()
            expect(actualText.includes("Invalid")).to.be.true
    
         })
       cy.wait(2000)
       // wrong username and right password
        cy.get('#username').type("srp@narola.email")
        cy.get('#inputPassword').type("Sp@9586220030")
        cy.get('#UserRemember').click()
        cy.get('.btn').click()
        cy.get('#flashMessage').should('have.text', 'Invalid Email/Password. Email is not activated')
        cy.get('#flashMessage').then(function(element){
            const actualText=element.text()
            expect(actualText.includes("Invalid")).to.be.true
    
         })
        cy.wait(2000)
        //both are invalid
        cy.get('#username').type("srp@narola.email")
        cy.get('#inputPassword').type("Sp@9586220020")
        cy.get('#UserRemember').click()
        cy.get('.btn').click()
        cy.get('#flashMessage').should('have.text', 'Invalid Email/Password. Email is not activated')
        cy.get('#flashMessage').then(function(element){
            const actualText=element.text()
            expect(actualText.includes("Invalid")).to.be.true
    
         })
        cy.wait(2000)
        //write blankspace
        cy.get('#username').type("          ")
        cy.get('#inputPassword').type("           ")
        cy.get('#UserRemember').click()
        cy.get('.btn').click()
        cy.get('#flashMessage').should('have.text', 'Please enter proper details')
        cy.get('#flashMessage').then(function(element){
            const actualText=element.text()
            expect(actualText.includes("Please")).to.be.true
    
         })
     })

})
