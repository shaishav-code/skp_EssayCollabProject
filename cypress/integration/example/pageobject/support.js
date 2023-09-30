class support{

    Getclickonsupport(){
        cy.get(':nth-child(6) > .dropdown-toggle').click()
    }

    
    GetClickonsupportTicket(){
        cy.get('.open > .dropdown-menu > li > a').click()
    }


    GetClickonCreatedDatefrom(){
        cy.wait(2000)
        cy.get('#from_date').click()
        cy.get(':nth-child(2) > :nth-child(5) > .ui-state-default').click()
    }

    GetClickonTodate(){
        cy.get('#to_date').click()
        cy.get(':nth-child(4) > :nth-child(3) > .ui-state-default').click()
    }

    GetStatusClick(){
        cy.get('#status_id').select('1')
    }

    GetClickonSearch(){
        cy.get('.col-sm-3 > .btn').click()
    }

    //-------

    GetClickonGeneralNewsupportTicket(){
        cy.get('.flo_right > .btn').click()
    }

    ClickonSupportType(){
        cy.get('#SupportSupportTypeId').select('3')
    }

    GetonClickCheckbox(){
        cy.get('#SupportImmediateAttention').click()
    }

    GetClickonFileupload(){
        cy.get('#SupportAttachmentUrl').selectFile('D:/CypressProject/CypressEasycollab/2cf31b28cd2f4ee8933d2bd82dda37e3_page-0001 (1).jpg')
    }

    GetEnterNote(){
        cy.get('#SupportNote').type('this is only for testing purpose')
    }

    GetclickonCancel(){
        cy.get('.btn-white').click() 
    }
}
export default support;