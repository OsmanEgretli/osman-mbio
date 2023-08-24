import CarConfiguratorPageActions from "../../support/actions/CarConfiguratorPageActions";
import HomePageActions from "../../support/actions/HomePageActions";
import ModelOverviewPageActions from "../../support/actions/ModelOverviewPageActions";

const home = new HomePageActions()
const modelOverview = new ModelOverviewPageActions()
const configurator = new CarConfiguratorPageActions()
describe('Validation of Mercedes Website Functionality', () => {

    it('Should Validate Pricing Information for EQE Model', () => {

        home.visit()
        home.acceptCookies()
        home.openOurModels()
        home.selectCarGroup("Saloons")
        home.selectCarModel("EQE Saloon")
        modelOverview.checkNavigationText("EQE Saloon")
        modelOverview.checkStageImageText("EQE Saloon")
        modelOverview.checkUrlContainsCarModelName("eqe")
        modelOverview.goToBuildYourCar()
        configurator.checkCarImage('EQE-Saloon')
        //configurator.selectAFuelType("Super")
        configurator.saveHighestAndLowestPrices()
        cy.screenshot('results-screenshot', {
            capture: 'fullPage',overwrite: true
        });

    });
});