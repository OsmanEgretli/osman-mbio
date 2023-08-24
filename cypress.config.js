const { defineConfig } = require("cypress");
const moment = require('moment');
const currentTimestamp = moment().format('D-MMMM-YYYY-HH_mm_ss');
const reportName = `[name]-run-${currentTimestamp}`;
async function setupNodeEvents(on, config) {
  const version = config.env.version || 'local';
  config.env = require(`../osman-mbio/cypress/config/${version}.json`);
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports',
      quiet: true,
      overwrite: true,
      html: true,
      json: true,
      reportFilename:reportName
    }
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/Tests/*.js'
  },
  chromeWebSecurity: false,
  viewportHeight: 720,
  viewportWidth: 1280,
});
