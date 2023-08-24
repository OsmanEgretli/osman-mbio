import CarConfiguratorPageRepository from "../repositories/CarConfiguratorPageRepository"


const carConfigurator = new CarConfiguratorPageRepository()

class CarConfiguratorPageActions {

    selectAFuelType(fuelType) {

        carConfigurator.getOpenFuelTypeDropdown()
            .scrollIntoView({block: 'center', inline: 'center'}) // This centers the element
            .click({force: true});
        carConfigurator.getOpenFuelTypeItem(fuelType).click({force: true})
        cy.wait(500)
        carConfigurator.getOpenFuelTypeDropdown().click({force: true})
        carConfigurator.getOpenFuelTypeDropdown().click({force: true})
    }

    saveHighestAndLowestPrices() {
        // Using the function to get all car prices
        carConfigurator.getCarPriceFromCard().invoke('text').then((text) => {
            // Splitting prices based on spaces
            const pricesText = text.split(/\s+/).filter(t => t.startsWith('£'));
            cy.log('Prices Text:', pricesText);
            const prices = pricesText.map(price => {
                const parsedPrice = parseFloat(price.trim().replace('£', '').replace(',', ''));
                cy.log(`Converted ${price} to ${parsedPrice}`); // Log each conversion
                return parsedPrice;
            });
            const highestPrice = Math.max(...prices);
            const lowestPrice = Math.min(...prices);
            cy.log('Highest Price:', highestPrice);
            cy.log('Lowest Price:', lowestPrice);
            const content = `Highest Price: £${highestPrice.toLocaleString()}\nLowest Price: £${lowestPrice.toLocaleString()}`;
            cy.writeFile('car_prices.txt', content);
        });
    }
}

export default CarConfiguratorPageActions