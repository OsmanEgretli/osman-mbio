import ModelOverviewPageRepository from "../repositories/ModelOverviewPageRepository";

const modelOverview = new ModelOverviewPageRepository()

class ModelOverviewPageActions{


    checkStageImageText(expectedText){

        modelOverview.getStageImageText().should('contain.text', expectedText);
    
    }
    
    checkNavigationText(expectedText){
    
        modelOverview.getNavigationText().should('contain.text', expectedText);
    }
    
    checkUrlContainsCarModelName(carModelName){
        cy.url().should('include', carModelName);
    }
    
    goToBuildYourCar(){
        
        modelOverview.getBuildYourCarButton().click()
    
    }

}
export default ModelOverviewPageActions