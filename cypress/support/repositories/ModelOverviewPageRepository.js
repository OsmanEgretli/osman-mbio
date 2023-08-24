// Class that contains element locators for the Model Overview Page.
// Utilizing a repository pattern centralizes the management of element locators,
// making the test suite easier to maintain.
class ModelOverviewPageRepository
{
    // Method to get the stage image text from the web page. Utilizes shadow DOM for nested web components.
    getStageImageText()
    {
        return cy.get('[class="webcomponent aem-GridColumn aem-GridColumn--default--12 owc-image-stage-host"]')
            .shadow()
            .find('[class="owc-stage__text-column wb-grid-col-mq1-12 wb-grid-col-mq3-7 wb-grid-col-mq4-5"]');
    }

    // Method to get the navigation text from the web page. Uses shadow DOM for deeper selection.
    getNavigationText()
    {
        return cy.get('[class="webcomponent aem-GridColumn aem-GridColumn--default--12"]')
            .shadow()
            .find('[class="owc-subnavigation__navigation-item"]');
    }

    // Method to locate and return the 'Build your car' button from the web page. Shadow DOM is used here as well.
    getBuildYourCarButton()
    {
        return cy.get('[class="webcomponent aem-GridColumn aem-GridColumn--default--12 owc-image-stage-host"]')
            .shadow()
            .find('[class="owc-stage-cta-buttons__button wb-button wb-button--medium wb-button--large wb-button--secondary owc-stage-cta-buttons__button--secondary"]')
            .contains(' Build your car');
    }
}

// Export the class for use in test cases.
export default ModelOverviewPageRepository;
