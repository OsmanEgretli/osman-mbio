import HomePageRepository from "../repositories/HomePageRepository";

const home = new HomePageRepository()

class HomePageActions {

    visit() {
        cy.visit('https://www.mercedes-benz.co.uk');
        cy.intercept({resourceType: /xhr|fetch/}, {log: false});
    }

    acceptCookies() {

        home.getAgreeToAllButton().click()

    }

    openOurModels() {
        home.getHomeHeaderMenuItems(" Our models ").click();
    }

    selectOurModels(carModel) {
        home.selectOurModels(carModel).click();
    }

    selectHatchbackModel(modelName) {
        home.selectHatchbackModel(modelName).click();
    }

}

export default HomePageActions; 