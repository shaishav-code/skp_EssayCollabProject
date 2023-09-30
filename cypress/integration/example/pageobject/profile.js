class profile{

    GetClickOnProfileIcon(){
        cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
        cy.get('.navbar-right > .dropdown > .dropdown-menu > :nth-child(2) > a').click()
    }

    GetChangepasswordPostiveScenario(){
        cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
        cy.get('.navbar-right > .dropdown > .dropdown-menu > :nth-child(3) > a').click()
        cy.get('#UserOldPassword').type('Sp@9586220030')
        cy.get('#password').type('kp@9586220030')
        cy.get('#UserConfirmPassword').type('kp@9586220030')
        cy.get('#btn_save').click()
    }

    GetChangepasswordNegativescenario(){
        cy.get('#UserOldPassword').type('Sp@9586220030')
        cy.get('#password').type('Sp@9586220030')
        cy.get('#UserConfirmPassword').type('Sp@9586220030')
        cy.get('#btn_save').click()
    }

    GetClickonMailconfiguration(){
        cy.get('.navbar-right > .dropdown > .dropdown-toggle').click()
        cy.get('.navbar-right > .dropdown > .dropdown-menu > :nth-child(4) > a').click()
        cy.get('#EmployeeHostName').type('test')
        cy.get('#EmployeePortNo').type('254566')
        cy.get('#EmployeeEmailAdd').type('skp@narola.email')
        cy.get('#EmployeePassword').type('Sp@9586220030')
    }

}
export default profile;
    