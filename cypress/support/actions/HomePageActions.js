import HomePageRepository from "../repositories/HomePageRepository";

const home = new HomePageRepository()

class HomePageActions {
  
    visit() {
        cy.visit('https://www.mercedes-benz.co.uk');
        cy.intercept({ resourceType: /xhr|fetch/}, {log: false });
    }
    acceptCookies() {
        
        home.getAgreeToAllButton().click()

    }

    openOurModels() {
        home.getHomeHeaderMenuItems(" Our models ").click();
    }

    selectOurModels() {
        home.selectOurModels("Hatchbacks").click();
    }
    selectHatchbackModel() {
        home.selectHatchbackModel("B-Class Hatchback ").click();
    }
    
    // selectHatchbacksAndAClass() {
    //     cy.get('[Your selector for Hatchbacks]').click();
    //     cy.get('[Your selector for A Class]').click();
    // }

}

export default HomePageActions; 