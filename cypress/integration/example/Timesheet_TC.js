import timesheet from "..//example/pageobject/timesheet"
const time=new timesheet()
describe('my timesheet testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('my timesheet testcase',function()
    {
      time.GetClickonTimesheet()
      time.GetclickonSelectTask()
      time.GetSelectWorkType()
      time.GetTypeWorkHours()
     time.GetTypeNotes()
     time.GetclickonSelectreason()
     time.ClickonOptionvalue()
     time.EnterHours()
     time.GetResonNotes()
     time.GetFromDate()
      time.GetToDate()
     time.GetProject()
      time.GetlickOnSearch()
      //time.Addbutton().click()
      // time.Getbody().contains('Please select project').then(function(){
      //   cy.log('Error Occur: Please select project')
      // })
    })

})