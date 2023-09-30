class marketing{

    Clickonmarketingmenu(){
       return cy.get(':nth-child(4) > .dropdown-toggle')
    }

    ClickonTechnicalinquiryoption(){
       return cy.get('.open > .dropdown-menu > li > a')
    }

    ClickonFavouriteOption(){
        return cy.get('[href="/EasyCollab/inquiries/indexviewnew?is_favorite=1"]')
    }

}
export default marketing;