class library{

    GetClickonLibraryandsnacks(){
        cy.get(':nth-child(8) > .dropdown-toggle').click()
    }

    GetClickonLibrary(){
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
    }

    GetClickonMylibrary(){
        cy.get(':nth-child(8) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
    }

    GetClickonOrdersSnacks(){
        cy.get(':nth-child(8) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()
    }

    GetClickonMyorder(){
        cy.get(':nth-child(8) > .dropdown-toggle').click() 
        cy.get('.active > .dropdown-menu > :nth-child(4) > a').click()
    }

    GetClickOnFromdate(){
        cy.get('#from_date').click()
        cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()
    }    

    GetClickonTodate(){
        cy.get('#to_date').click()
        cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click()
    }

    GetClickonSubmit(){
        cy.get('#project-button').click()
    }

}
export default library;
