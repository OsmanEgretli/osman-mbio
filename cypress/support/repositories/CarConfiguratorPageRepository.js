// Class that contains element locators for the Car Configurator Page.
// Using a repository pattern benefits us by centralizing the element locators,
// making the code easier to maintain and update.
class CarConfiguratorPageRepository
{
    // Method to get the dropdown for fuel type selection. Utilizes shadow DOM to access deeply nested elements.
    getOpenFuelTypeDropdown() {
        return cy.get('[component-id="8f90efb9b25acd626539281bf797a113"]')
            .shadow()
            .find('[class="cc-motorization-filters-primary-filters--multi-select wb-multi-select hydrated"]')
            .shadow()
            .find('[class="button"]');
    }

    // Method to get a specific fuel type item from the dropdown. Utilizes shadow DOM.
    getOpenFuelTypeItem(fuelType) {
        return cy.get('[component-id="8f90efb9b25acd626539281bf797a113"]')
            .shadow()
            .find('[class="cc-motorization-filters-primary-filters--multi-select wb-multi-select hydrated"]')
            .find('[theme="light"]')
            .shadow()
            .find(`[name=${fuelType}]`);
    }

    // Method to get the price from the car card. Utilizes shadow DOM.
    getCarPriceFromCard() {
        return cy.get('[component-id="8f90efb9b25acd626539281bf797a113"]')
            .shadow()
            .find('[class="cc-motorization-header__price cc-text ng-star-inserted wb-text hydrated"]');
    }

    // Method to get the car image element. Utilizes shadow DOM.
    getCarImageElement() {
        return cy.get('[component-id="8f90efb9b25acd626539281bf797a113"]')
            .shadow()
            .find('[class="cc-awesome-stage__exterior-view ng-tns-c2712816051-2 ng-trigger ng-trigger-inOutAnimation ng-star-inserted wb-360-viewer hydrated"]')
            .shadow()
            .find('[class="image"]');
    }
}

// Export the class for use in test cases.
export default CarConfiguratorPageRepository;
