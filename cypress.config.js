const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  viewportHeight: 768,
  viewportWidth: 1366,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
