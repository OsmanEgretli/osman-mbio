// Import the ModelOverviewPageRepository, which contains element locators for the Model Overview page
import ModelOverviewPageRepository from "../repositories/ModelOverviewPageRepository";

// Initialize an object for the ModelOverviewPageRepository
const modelOverview = new ModelOverviewPageRepository()

// Class that contains actions related to the Model Overview Page
class ModelOverviewPageActions {

    // Method to check the text on the stage image and verify if it matches the expected text
    checkStageImageText(expectedText) {
        modelOverview.getStageImageText().should('contain.text', expectedText);
    }

    // Method to check the text in the navigation bar and verify if it matches the expected text
    checkNavigationText(expectedText) {
        modelOverview.getNavigationText().should('contain.text', expectedText);
    }

    // Method to check if the URL contains the specified car model name
    checkUrlContainsCarModelName(carModelName) {
        cy.url().should('include', carModelName);
    }

    // Method to navigate to the "Build Your Car" section by clicking the button
    goToBuildYourCar() {
        modelOverview.getBuildYourCarButton().click({force: true});
    }

}

// Export the ModelOverviewPageActions class for use in test cases
export default ModelOverviewPageActions;
