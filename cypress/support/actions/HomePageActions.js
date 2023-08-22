import HomePageRepository from "../repositories/HomePageRepository";

const home = new HomePageRepository()

class HomePageActions {
  
    visit() {
        cy.visit('https://www.mercedes-benz.co.uk');
    }
    acceptCookies() {
        
        home.getAgreeToAllButton().click()

    }

    openOurModels() {
        home.getHomeHeaderMenuItems("Our Models").click();
    }

    selectHatchbacksAndAClass() {
        cy.get('[Your selector for Hatchbacks]').click();
        cy.get('[Your selector for A Class]').click();
    }

}

export default HomePageActions; 