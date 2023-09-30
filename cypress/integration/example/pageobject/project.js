class project{

    clickProjectOnMenu(){
        return cy.get(':nth-child(3) > .dropdown-toggle')
        
    }

    clickProjectOnDropdownMenu(){

        return cy.get('.open > .dropdown-menu > li > a')
}

    clickonSetcolumnsButton(){
        return cy.get('#projColumn')
    }

    Clickoncalcelbutton(){
        return cy.get('.col-sm-12 > .btn-white')
    }
}
export default project;