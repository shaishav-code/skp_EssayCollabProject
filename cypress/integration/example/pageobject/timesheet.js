class timesheet{
    GetClickonTimesheet(){
        cy.get(':nth-child(7) > .dropdown-toggle').click()
        cy.get('.open > .dropdown-menu > li > a').click()
    }
   
    GetclickonSelectTask(){
        cy.get('#select_project_chosen > .chosen-single > span').click()
         cy.wait(2000)
    }

    GetSelectWorkType(){
        cy.get('[data-option-array-index="1"]').click()
    }

    GetTypeWorkHours(){
        cy.get('#tshours').type('8')
    }

    GetTypeNotes(){
        cy.get('#notes').type('This is only for testing purpose')
    }

    GetclickonSelectreason(){
        cy.get('#select_notes_chosen > .chosen-single > span').click()
    }

    ClickonOptionvalue(){
      //  cy.get('select').select(3).should('have.value','Left Early')
        cy.get('[data-option-array-index="2"]').click()
    }

    EnterHours(){
        cy.get('#leaveHours').type('4')
    }

    GetResonNotes(){
        cy.get('#reason_comment').type('For testing purpuse')
    }

    GetFromDate(){
        cy.get('#fromDate').click()
        cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click()
    }

    GetToDate(){
        cy.get('#toDate').click()
        cy.get('.ui-datepicker-current-day > .ui-state-default').click()
}

GetProject(){
    cy.get('#projectItemDropbox_chosen > .chosen-single > span').click()
    cy.get('#projectItemDropbox_chosen > .chosen-drop > .chosen-results > [data-option-array-index="1"]').click()
    
}

GetlickOnSearch(){
    cy.get('#SearchButton').click()
}

// Getbody(){
//     return cy.get('body')
// }

// Addbutton(){
//      return cy.get(':nth-child(8) > .col-sm-12 > .btn')
// }

}
export default timesheet;
