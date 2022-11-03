const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 20000,
  experimentalSessionSupport: true,
  chromeWebSecurity: false,

  e2e: {
    reporter: "reporters/custom.js",
    experimentalStudio: true,
    baseUrl: "https://www.kitkatchocolatory.com.br.integration-5ojmyuq-25ekit3rbnddg.us-2.platformsh.site/loja",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});