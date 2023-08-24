## Cypress Test Suite for Car Configurator Web Application
![Cypress Logo](https://www.cypress.io/images/layouts/cypress-logo.svg)

## Description

#### This repository contains automated tests written in Cypress for the Car Configurator web application. The test suite is organized following the Page Object Model pattern, making it easier to maintain and extend the code.
## Table of Contents
- [Project Structure]
- [Installation]
- [Running Tests]

### Installation

- Make sure you have Node.js installed on your machine.
- Clone this repository to your local machine:

`git clone https://github.com/OsmanEgretli/osman-mbio.git`

### Navigate to the project folder:

`cd osman-mbio`

### Install Cypress:

`npm install cypress --save-dev`

### Install required packages

`npm install`

### Start Cypress Test Runner

`npx cypress open`


---

## Project Structure 🗂️

### Repositories 📦
- [`CarConfiguratorPageRepository.js`]: 
  > Repositories for elements on the car configurator page. Handles Shadow DOM elements.
  
- [`HomePageRepository.js`]: 
  > Repositories for elements on the home page. Includes menu items and agree button.

- [`ModelOverviewPageRepository.js`]: 
  > Repositories for elements on the model overview page.
  
---
---

### Actions 🎬

- [`CarConfiguratorPageActions.js`]: 
  > Actions like fuel type selection and price comparison.
  
- [`HomePageActions.js`]: 
  > Actions for navigating through home page items.
  
- [`ModelOverviewPageActions.js`]: 
  > Actions for the model overview page.
### Utilities 🔧

- Various utility files for image comparison, data generators, etc.

------------------------------

## To run the tests 🔧


## NPM Scripts 📜

Below are the NPM scripts available for running the Cypress tests:
- `npm run test`: Run Cypress tests in the default browser.
- `npm run chromeHeadless`: Run tests in headless mode on Chrome.
- `npm run chromeHeadlessDev`: Run tests in headless mode on Chrome with dev configurations.
- `npm run firefoxHeadlessDev`: Run tests in headless mode on Firefox with dev configurations.

------------------------------------------------------------

##  Generating Test Reports 📊

After each test run, a detailed report is generated with a timestamp attached to the report name. This ensures distinct logs for each test run, aiding result comparison and analysis.

- Report Directory: cypress/reports
- Report Filename: [name]-run-DD-MMMM-YYYY-HH_mm_ss
------------------------------------------------------------
#### Report Directory: cypress/reports
------------------------------------------------------------
#### Report Filename: [name]-run-DD-MMMM-YYYY-HH_mm_ss

##  Car Prices Text File🚗💰
The `saveHighestAndLowestPrices()` function captures the highest and lowest car prices from available options. This data is saved in a text file with a dynamic name containing a timestamp, ensuring uniqueness.

- File Directory: Project root directory
- File Name: car_prices_DD-MM-YYYY_HH-MM-SS.txt
------------------------------------------------------------
#### File Directory: Project root directory
------------------------------------------------------------
#### File Name: car_prices_DD-MM-YYYY_HH-MM-SS.txt
