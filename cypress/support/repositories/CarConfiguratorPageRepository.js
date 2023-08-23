
class CarConfiguratorPageRepository
{

    getOpenFuelTypeDropdown(){

        return cy.get('[component-id="8f90efb9b25acd626539281bf797a113"]')
        .shadow()
        .find('[class="cc-motorization-filters-primary-filters--multi-select wb-multi-select hydrated"]')
        .shadow()
        .find('[class="button"]')

    }
    getOpenFuelTypeItem(fuelType){

        return cy.get('[component-id="8f90efb9b25acd626539281bf797a113"]')
        .shadow()
        .find('[class="cc-motorization-filters-primary-filters--multi-select wb-multi-select hydrated"]')
        .find('[theme="light"]')
        .shadow()
        .find(`[name=${fuelType}]`)
    

    }

    getFuelTypeDropdownArrow(){
        return cy.get('[component-id="8f90efb9b25acd626539281bf797a113"]')
        .shadow()
        .find('[class="cc-motorization-filters-primary-filters--multi-select wb-multi-select hydrated"]')
        .shadow()
        .find('[class="caret-icon wb-icon hydrated"]')
        
    }


}
export default CarConfiguratorPageRepository