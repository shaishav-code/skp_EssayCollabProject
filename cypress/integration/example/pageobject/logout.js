class logout{
    GetClickonLogout(){
        cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(5) > a').click()

    }
}
export default logout;