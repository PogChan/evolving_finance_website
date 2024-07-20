// Libs
import { defineConfig } from 'cypress'

// Tests config
export default defineConfig({
  env: {
    gqlUrl: 'http://localhost:3010/api/graphql',
  },
  defaultCommandTimeout: 5000,
  viewportWidth: 1024,
  viewportHeight: 600,
  e2e: {
    video: false,
    screenshotsFolder: false,
    screenshotOnRunFailure: false,
    supportFile: 'tests/support/e2e.ts',
    specPattern: 'tests/e2e/**/*.test.ts',
    baseUrl: 'http://localhost:3010',
  },
})
