class ModelOverviewPageRepository
{

    getStageImageText()
    {
        return cy.get('[component-id="cea4a4a51557a29073a51c4f3fc4d9e3"]')
        .shadow()
        .find('[class="owc-stage__text-column wb-grid-col-mq1-12 wb-grid-col-mq3-7 wb-grid-col-mq4-5"]')

    }
    getNavigationText()
    {
        return cy.get('[component-id="4d99e76223ed90b40d4311fc642479be"]')
        .shadow()
        .find('[class="owc-subnavigation__navigation-item"]')

    }
    getBuildYourCarButton(){
        return cy.get('[component-id="cea4a4a51557a29073a51c4f3fc4d9e3"]')
        .shadow()
        .find('[class="owc-stage-cta-buttons__button wb-button wb-button--medium wb-button--large wb-button--secondary owc-stage-cta-buttons__button--secondary"]')

    }


}
export default ModelOverviewPageRepository