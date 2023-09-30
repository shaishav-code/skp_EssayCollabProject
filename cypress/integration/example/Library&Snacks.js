import library from "..//example/pageobject/library"
const lib=new library()
describe('my library testsuite',async()=>
{

    beforeEach(() => {
        cy.login('skp@narola.email', 'Sp@9586220030')
      })
    
    it('my library testcase',function()
    {
        lib.GetClickonLibraryandsnacks()
        lib.GetClickonLibrary()
        lib.GetClickonMylibrary()
        lib.GetClickonOrdersSnacks()
        lib.GetClickonMyorder()
        lib.GetClickOnFromdate()
        lib.GetClickonTodate()
        lib.GetClickonSubmit()

    })

})
