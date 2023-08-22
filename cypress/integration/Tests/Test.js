import HomePageActions from "../../support/actions/HomePageActions";


const home = new HomePageActions()
describe('Mercedes Website', () => {

    it('Validates A Class model prices', () => {
       
        home.visit()
        // cy.wait(10000)
        home.acceptCookies()
        home.openOurModels()
        
    });
});