import project from "..//example/pageobject/project"
const objectsProjectPage=new project()
describe('my Project testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('Open Project Page And Get Titles Of Projects',function()
    {
        objectsProjectPage.clickProjectOnMenu().click()
        objectsProjectPage.clickProjectOnDropdownMenu().click()
        cy.get('#projNmLink_7040').then($title =>{
            const titlename = $title.text()
            cy.log(titlename)
        })
    })
    it('Open project Page And Click On Set Column Button',function(){
        objectsProjectPage.clickProjectOnMenu().click()
        objectsProjectPage.clickProjectOnDropdownMenu().click()
        objectsProjectPage.clickonSetcolumnsButton().click()
        objectsProjectPage.Clickoncalcelbutton().click()

    })

})