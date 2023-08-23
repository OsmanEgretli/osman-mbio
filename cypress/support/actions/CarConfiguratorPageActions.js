import CarConfiguratorPageRepository from "../repositories/CarConfiguratorPageRepository"


const carConfigurator = new CarConfiguratorPageRepository()

class CarConfiguratorPageActions {

selectAFuelType(fuelType){

    carConfigurator.getOpenFuelTypeDropdown()
    .scrollIntoView({ block: 'center', inline: 'center' }) // This centers the element
    .click({force: true});
    carConfigurator.getOpenFuelTypeItem(fuelType).click({force: true})
    cy.wait(500)
    carConfigurator.getOpenFuelTypeDropdown().click({force: true})
}


}
export default CarConfiguratorPageActions