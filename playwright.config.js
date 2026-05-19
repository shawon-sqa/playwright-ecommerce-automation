// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail build if test.only exists
  forbidOnly: !!process.env.CI,

  // Retry on CI
  retries: process.env.CI ? 2 : 0,

  // Workers on CI
  workers: process.env.CI ? 1 : undefined,

  // HTML report
  reporter: 'html',

  // Shared settings
  use: {

    // browser visible
    headless: false,

    // slow motion
    launchOptions: {
      slowMo: 500,
    },

    // screenshot on failure
    screenshot: 'only-on-failure',

    // video recording
    video: 'retain-on-failure',

    // trace for debugging
    trace: 'on-first-retry',

  },

  // Browser projects
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});