const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity":false,
    //baseUrl:'http://zero.webappsecurity.com',
     baseUrl: 'https://www.saucedemo.com',
     supportFile:'cypress/support/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
