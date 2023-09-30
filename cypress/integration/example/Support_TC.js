import support from "..//example/pageobject/support"

const sup=new support()
describe('my support testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('my support testcase',function()
    {
    sup.Getclickonsupport()
    sup.GetClickonsupportTicket()
    sup.GetClickonCreatedDatefrom()
    sup.GetClickonTodate()
    sup.GetStatusClick()
    sup.GetClickonSearch()

        //---
     
        sup.GetClickonGeneralNewsupportTicket()
        sup.ClickonSupportType()
        sup.GetonClickCheckbox()
        sup. GetClickonFileupload()
        sup.GetEnterNote()
        sup.GetclickonCancel()
       
    })

})