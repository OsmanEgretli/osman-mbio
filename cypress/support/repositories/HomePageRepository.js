class HomePageRepository
{

    getHomeHeaderMenuItems(itemName)
    {
        return cy.get(`[class="owc-header-main-navigation__desktop-wrapper"] [class="owc-header-navigation-topic__label"]:contains("${itemName}")`).shadow()
    }
    getAgreeToAllButton() {
        const element = document.querySelector("slot[shub-ins='1']");
        return cy.wrap(element);
}
      


}
export default HomePageRepository