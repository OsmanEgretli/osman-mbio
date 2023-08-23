import CarConfiguratorPageActions from "../../support/actions/CarConfiguratorPageActions";
import HomePageActions from "../../support/actions/HomePageActions";
import ModelOverviewPageActions from "../../support/actions/ModelOverviewPageActions";

const home = new HomePageActions()
const modelOverview = new ModelOverviewPageActions()
const configurator = new CarConfiguratorPageActions()
describe('Mercedes Website', () => {

    it('Validates A Class model prices', () => {
       
        home.visit()
        // cy.wait(10000)
        home.acceptCookies()
        home.openOurModels()
        home.selectOurModels("Hatchbacks")
        home.selectHatchbackModel("A-Class Hatchback")
        modelOverview.checkNavigationText("A-Class Hatchback")
        modelOverview.checkStageImageText("A-Class Hatchback")
        modelOverview.checkUrlContainsCarModelName("a-class")
        modelOverview.goToBuildYourCar()
        configurator.selectAFuelType("Diesel")
        configurator.saveHighestAndLowestPrices()
        cy.screenshot('results-screenshot', {
            capture: 'fullPage',overwrite: true
          });
          
    });
});