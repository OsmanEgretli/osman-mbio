// Import the HomePageRepository, which contains element locators for the home page
import HomePageRepository from "../repositories/HomePageRepository";

// Initialize an object for the HomePageRepository
const home = new HomePageRepository()

// Class that contains actions related to the Home Page
class HomePageActions {

    // Method to visit the website and clear session storage
    visit() {
        // Store the base URL from environment variables
        const expectedUrl = Cypress.env('baseUrl');

        // Navigate to the URL and clear session storage before loading
        cy.visit(expectedUrl, {
            onBeforeLoad: win => {
                win.sessionStorage.clear();
            }
        });

        // Verify that the current URL matches the expected URL
        cy.url().should('eq', expectedUrl);
    }

    // Method to accept cookies by clicking on the 'Agree to All' button
    acceptCookies() {
        home.getAgreeToAllButton().click();
    }

    // Method to navigate to the 'Our Models' section of the home page
    openOurModels() {
        home.getHomeHeaderMenuItems(" Our models ").click();
    }

    // Method to select a car group (e.g., 'Hatchbacks', 'Sedans', etc.)
    selectCarGroup(carModel) {
        home.getCarGroup(carModel).click();
    }

    // Method to select a specific car model (e.g., 'A-Class Hatchback')
    selectCarModel(modelName) {
        home.getCarModel(modelName).click();
    }

}

// Export the HomePageActions class for use in test cases
export default HomePageActions;
