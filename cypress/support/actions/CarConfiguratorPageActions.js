import CarConfiguratorPageRepository from "../repositories/CarConfiguratorPageRepository"

// Importing a constant set of car images for verification
const carImages = require('../../utils/imageConstants');

// Initialize CarConfiguratorPageRepository
const carConfigurator = new CarConfiguratorPageRepository()

// This class contains actions that can be performed on the Car Configurator Page

class CarConfiguratorPageActions {

    // Method to select a fuel type from a dropdown
selectAFuelType(fuelType){
    // Scroll into view and open the fuel type dropdown
    carConfigurator.getOpenFuelTypeDropdown()
        .scrollIntoView({ block: 'center', inline: 'center' }) // This centers the element
    .click({force: true});
    // Select the fuel type from the dropdown
    carConfigurator.getOpenFuelTypeItem(fuelType).click({force: true})
    cy.wait(500)
    // Close the dropdown
    carConfigurator.getOpenFuelTypeDropdown().click({force: true})
    carConfigurator.getOpenFuelTypeDropdown().click({force: true})
}

// Method to save the highest and lowest prices of the car
    saveHighestAndLowestPrices() {
        // Invoke the 'text' property of the car price cards to extract their text content
        carConfigurator.getCarPriceFromCard().invoke('text').then((text) => {
            // Split the text by spaces and filter out elements that start with the £ symbol
            const pricesText = text.split(/\s+/).filter(t => t.startsWith('£'));

            // Log the extracted prices for debugging
            cy.log('Prices Text:', pricesText);

            // Convert the string prices to numerical values for comparison
            const prices = pricesText.map(price => {
                // Remove the £ symbol and comma, then parse it as a float
                const parsedPrice = parseFloat(price.trim().replace('£', '').replace(',', ''));

                // Log the conversion for debugging
                cy.log(`Converted ${price} to ${parsedPrice}`);

                return parsedPrice;
            });

            // Find the highest and lowest prices
            const highestPrice = Math.max(...prices);
            const lowestPrice = Math.min(...prices);

            // Log these values for debugging
            cy.log('Highest Price:', highestPrice);
            cy.log('Lowest Price:', lowestPrice);

            // Create the text content for the file
            const content = `Highest Price: £${highestPrice.toLocaleString()}\nLowest Price: £${lowestPrice.toLocaleString()}`;

            // Create a timestamp for the filename
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            const timestamp = `${day}-${month}-${year}_${hours}-${minutes}-${seconds}`;

            // Write the highest and lowest prices to a text file, including the timestamp in the filename
            cy.writeFile(`car_prices_${timestamp}.txt`, content);
        });
    }


    checkCarImage(carClass) {
        // Fetch the expected image URL from constants
        const expectedImageUrl = carImages[carClass];

        // Throw error if no matching URL found
        if (!expectedImageUrl) {
            throw new Error(`No image URL found for car class: ${carClass}`);
        }

        // Assert to check if the car image matches the expected image URL
        carConfigurator.getCarImageElement()
            .should('have.attr', 'style')
            .and('include', expectedImageUrl);
    }

}
export default CarConfiguratorPageActions