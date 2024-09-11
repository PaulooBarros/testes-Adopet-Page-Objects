const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280, // Largura da viewport
    viewportHeight: 720, // Altura da viewport
  },
});
