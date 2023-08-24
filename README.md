## Cypress Test Suite for Car Configurator Web Application
![Cypress Logo](https://www.cypress.io/images/layouts/cypress-logo.svg)

## Description

#### This repository contains automated tests written in Cypress for the Car Configurator web application. The test suite is organized following the Page Object Model pattern, making it easier to maintain and extend the code.
## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)

### Pre-requisites

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine using the following command:

### Clone the repository 

`git clone https://github.com/OsmanEgretli/osman-mbio.git`

### Navigate to the project folder

`cd osman-mbio`

### Install the cypress by running

`npm install cypress --save-dev`

### To install the required packages

`npm install`

### Start Cypress Test Runner by running

`npx cypress open`


---

## Project Structure 🗂️

### Repositories 📦
- [`CarConfiguratorPageRepository.js`](path/to/file): 
  > Repositories for elements on the car configurator page. Handles Shadow DOM elements.
  
- [`HomePageRepository.js`](path/to/file): 
  > Repositories for elements on the home page. Includes menu items and agree button.

- [`ModelOverviewPageRepository.js`](path/to/file): 
  > Repositories for elements on the model overview page.
  
---
---

### Actions 🎬

- [`CarConfiguratorPageActions.js`](path/to/file): 
  > Actions like fuel type selection and price comparison.
  
- [`HomePageActions.js`](path/to/file): 
  > Actions for navigating through home page items.
  
- [`ModelOverviewPageActions.js`](path/to/file): 
  > Actions for the model overview page.
### Utilities 🔧

- Various utility files for image comparison, data generators, etc.

------------------------------

## To run the tests 🔧


## NPM Scripts 📜

Below are the NPM scripts available for running the Cypress tests:

- `npm run test`: 
  > This will run the Cypress tests in the default browser.

- `npm run chromeHeadless`: 
  > Runs the AClassTest.js in headless mode on Chrome.

- `npm run chromeHeadlessDev`: 
  > Runs the AClassTest.js in headless mode on Chrome with development environment configurations.

- `npm run firefoxHeadlessDev`: 
  > Runs the AClassTest.js in headless mode on Firefox with development environment configurations.

------------------------------------------------------------

##  Generating Test Reports 📊

 > After every test run, a detailed report is generated with a unique timestamp attached to the report name. This ensures that each test run has its own distinct log, making it easier to backtrack or compare results across multiple test runs.
------------------------------------------------------------
#### Report Directory: cypress/reports
------------------------------------------------------------
#### Report Filename: [name]-run-DD-MMMM-YYYY-HH_mm_ss

##  Car Prices Text File🚗💰
 > The saveHighestAndLowestPrices() function captures the highest and lowest car prices from the list of available options. This data is then saved in a text file with a dynamic name that includes a timestamp, ensuring each file is unique.
------------------------------------------------------------
#### File Directory: Project root directory
------------------------------------------------------------
#### File Name: car_prices_DD-MM-YYYY_HH-MM-SS.txt
