import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  globalTimeout : 30 * 1000, // 30 seconds
  timeout: 50 * 1000, // 20 seconds
  outputDir: 'test-results/',
  workers: 1,
  reporter: [['html'],['list'], ['line']],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    baseURL: 'https://www.google.co.in/',
    headless: false,
    viewport: null,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});

