class HomePageRepository
{

  getHomeHeaderMenuItems(itemName)
  {
      return cy.get('[component-id="738cae9548fd09b2721cad874b486cf2"]')
          .shadow()
          .find('[class="owc-header-navigation-topic__label"]')
          .contains(`${itemName}`);

  }
  getAgreeToAllButton() {
      return cy.get('[settings-id="fph8XBqir"]')
          .shadow()
          .contains('Agree to all');
  }
      
  selectOurModels(itemName)
  {
      return cy.get('[component-id="d90117080adce2a4477e5c8c6a29d632"]')
          .shadow()
          .find('[role="menuitem"] [class="_flyout-group-item_ggfyq_47"]')
          .contains(`${itemName}`);
  }
  selectHatchbackModel(itemName)
  {
      return cy.get('[slot="seamless-vmos-flyout"]')
          .shadow()
          .find('[flyout-id="test-flyout-vmos"]')
          .shadow()
          .find('[role="menuitem"]')
          .contains(`${itemName}`);
  }
}
export default HomePageRepository