class CarConfiguratorPageRepository
{

    getHomeHeaderMenuItems()
    {
        return cy.get('[class="owc-header-main-navigation__desktop-wrapper"] [class="owc-header-navigation-topic__label"]')
    }



}
export default CarConfiguratorPageRepository