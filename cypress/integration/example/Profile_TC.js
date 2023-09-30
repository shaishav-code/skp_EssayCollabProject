import profile from "..//example/pageobject/profile"
import support from "..//example/pageobject/profile"
const pro = new profile()
describe('my profile testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('my profile testcase',function()
    {
        pro.GetClickOnProfileIcon()
        //pro.GetChangepasswordPostiveScenario()
       // pro.GetChangepasswordNegativescenario()
       pro.GetClickonMailconfiguration()

    })

})