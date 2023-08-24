// Import required modules
const { defineConfig } = require("cypress");
const moment = require('moment');

// Generate a timestamp for report naming
const currentTimestamp = moment().format('D-MMMM-YYYY-HH_mm_ss');
const reportName = `[name]-run-${currentTimestamp}`;

// Function to set up node events and environment variables
async function setupNodeEvents(on, config) {
  // Get the version of the configuration, default to 'local'
  const version = config.env.version || 'local';
  config.env = require(`../osman-mbio/cypress/config/${version}.json`);
  return config;
}

// Export the Cypress configuration
module.exports = defineConfig({
  // Specify the reporter to use
  reporter: 'cypress-multi-reporters',

  // Options for the reporter
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports',
      quiet: true,
      overwrite: true,
      html: true,
      json: true,
      reportFilename: reportName
    }
  },

  // End-to-end specific configuration
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/Tests/*.js'
  },

  // Disable Chrome Web Security for testing purposes
  chromeWebSecurity: false,

  // Viewport dimensions for the tests
  viewportHeight: 720,
  viewportWidth: 1280,
});
