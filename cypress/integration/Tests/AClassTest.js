import CarConfiguratorPageActions from "../../support/actions/CarConfiguratorPageActions";
import HomePageActions from "../../support/actions/HomePageActions";
import ModelOverviewPageActions from "../../support/actions/ModelOverviewPageActions";
// Initialize objects for each page action class
const home = new HomePageActions()
const modelOverview = new ModelOverviewPageActions()
const configurator = new CarConfiguratorPageActions()
describe('Validation of Mercedes Website Functionality', () => {

    it('Should Validate Pricing Information for A-Class Hatchback', () => {
        // Navigate to home page
        home.visit()

        // Accept cookies pop-up if present
        home.acceptCookies()

        // Navigate to "Our Models" section
        home.openOurModels()

        // Select "Hatchbacks" car group
        home.selectCarGroup("Hatchbacks")

        // Select "A-Class Hatchback" model
        home.selectCarModel("A-Class Hatchback")

        // Verify that navigation text displays "A-Class"
        modelOverview.checkNavigationText("A-Class")

        // Verify the stage image text is "A-Class"
        modelOverview.checkStageImageText("A-Class")

        // Verify that the URL contains the car model name "a-class"
        modelOverview.checkUrlContainsCarModelName("a-class")

        // Click "Build Your Car" to navigate to the configurator page
        modelOverview.goToBuildYourCar()

        // Check if the car image on configurator page shows "A-Class"
        configurator.checkCarImage('A-Class')

        // Select "Super" as fuel type
        configurator.selectAFuelType("Super")

        // Save highest and lowest car prices for later validation
        configurator.saveHighestAndLowestPrices()

        // Take a screenshot and save it with overwriting enabled
        cy.screenshot('results-screenshot', {
            capture: 'fullPage',
            overwrite: true
        });

    });

});