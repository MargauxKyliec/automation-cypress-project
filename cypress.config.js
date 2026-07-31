import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    demoUrl: "https://opensource-demo.orangehrmlive.com",
    homepageUrl:
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  },

  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
