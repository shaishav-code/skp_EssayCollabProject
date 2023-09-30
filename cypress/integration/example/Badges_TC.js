import badges from "../example/pageobject/badges"
const badge = new badges()
describe('my badges testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('my badges testcase',function()
    {
        badge.getClickonBadges()
        badge.getClickonContribution()
        badge. getClickonEmployee()
        badge.getClickonCatagory()
        badge.getcalanderFrom()
        badge. getCalanderTo()
        badge.GetClickOnCheckbox()
        badge.GetClickOnSearchButton()
        badge. GetClickOnSubBadges()
        badge. GetClickonEndorse()

    })

})
