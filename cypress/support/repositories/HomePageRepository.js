// Class that contains element locators for the Home Page.
// Utilizing a repository pattern provides centralized management of element locators,
// thus making the test suite easier to maintain.
class HomePageRepository
{
    // Method to get header menu items by name. Shadow DOM is used for nested web components.
    getHomeHeaderMenuItems(itemName) {
        return cy.get('[component-id="738cae9548fd09b2721cad874b486cf2"]')
            .shadow()
            .find('[class="owc-header-navigation-topic__label"]')
            .contains(`${itemName}`);
    }

    // Method to locate and return the 'Agree to all' button for cookie acceptance. Utilizes shadow DOM.
    getAgreeToAllButton() {
        return cy.get('[settings-id="fph8XBqir"]')
            .shadow()
            .contains('Agree to all');
    }

    // Method to get car group items by name. Shadow DOM is used for deeper selection.
    getCarGroup(itemName) {
        return cy.get('[component-id="d90117080adce2a4477e5c8c6a29d632"]')
            .shadow()
            .find('[role="menuitem"] [class="_flyout-group-item_ggfyq_47"]')
            .contains(`${itemName}`);
    }

    // Method to get car model by name. Shadow DOM is used here as well.
    getCarModel(itemName) {
        return cy.get('[slot="seamless-vmos-flyout"]')
            .shadow()
            .find('[class="_flyout-group-item_ggfyq_47"]')
            .contains(`${itemName}`);
    }
}

// Export the class for use in test cases.
export default HomePageRepository;
