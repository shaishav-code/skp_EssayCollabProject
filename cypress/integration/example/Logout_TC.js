import logout from "..//example/pageobject/logout"
import profile from "..//example/pageobject/logout"
const log = new logout()
describe('my logout testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('my logout testcase',function()
    {
        log.GetClickonLogout()
    })

})