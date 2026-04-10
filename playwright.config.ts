import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  workers: 2, // Parallel Execution -> Multiple browsers

  reporter: [['html',{open:'always'}]],  
 
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot:'on',
    headless:false,
    video:'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },

    },


  ],
});
