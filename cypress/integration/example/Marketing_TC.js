/// <reference types= "cypress" />
import marketing from "..//example/pageobject/marketing"
import project from "..//example/pageobject/marketing"
const marketingoption=new marketing()
describe('my marketing testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('Open marketing page',function()
    {
        marketingoption.Clickonmarketingmenu().click()
        marketingoption.ClickonTechnicalinquiryoption().click()
    })

    it('Click on marketing menu and select favourite',function(){
        marketingoption.Clickonmarketingmenu().click()
        marketingoption.ClickonTechnicalinquiryoption().click()
        marketingoption.ClickonFavouriteOption().click()
    })

})
