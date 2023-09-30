class badges{

    getClickonBadges(){
        cy.get(':nth-child(5) > .dropdown-toggle').click()
    }

    getClickonContribution(){
        cy.wait(2000)
        cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
    }

    getClickonEmployee()
    {
        cy.get('#badgesEmployeeId').select('546')
    }

    getClickonCatagory(){
        cy.get('#badgesCategory').select('Employee of the month')
    }

    getcalanderFrom(){
        cy.get('#from_assign_date').click()
        cy.get(':nth-child(4) > :nth-child(6) > .ui-state-default').click()
    }

    getCalanderTo(){
        cy.get('#to_assign_date').click()
        cy.get(':nth-child(5) > :nth-child(4) > .ui-state-default').click()
    }

    GetClickOnCheckbox(){
        cy.get('#contri_of').click()
    }

    GetClickOnSearchButton(){
        cy.get('.btn-success').click()
    }

    //-----------------
    GetClickOnSubBadges(){
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
    }

    GetClickonEndorse(){
        cy.get(':nth-child(5) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > :nth-child(3) > a').click()
        cy.get('#ScoreTlId').select('546')
        cy.wait(2000)
        cy.get('#ScorePmId').select('242')
        cy.get('#ScoreCategory').select('20')
        cy.get('#ScoreDescription').type('This is for only testing purpose')
        cy.get('.btn-white').click()
    }

}
export default badges;