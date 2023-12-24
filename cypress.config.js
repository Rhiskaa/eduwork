const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on,config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  modifyObstructiveCode : false,
  chromeWebSecurity:false,
  pageLoadTimeout :10000,
  video:false,
  defaultCommandTimeout:5000,
  e2e: {
   // baseUrl:"http://zero.webappsecurity.com",
    specPattern:"**/*.feature",
    //supportFile:false,
    nonGlobalStepDefinitions: true,
    setupNodeEvents,
  },
  
});
