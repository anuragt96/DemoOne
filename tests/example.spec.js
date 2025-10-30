import { test, expect } from '@playwright/test';
import { BASE_URL } from '../utils/url.js';


test.describe('This is the positive test suite', async () => {
  
  test.beforeEach(async ({page}) => { 
    await page.goto(BASE_URL);
  });

  test.only('Verify that a user should be able to see the google homepage', async ({ page }) => {
    var title = page.title();
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  });
  
  test('Verify that "Get started" button should be visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  });
  
  test('Veriy the user is able to click on Get started button', async ({ page }) => {

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveTitle('Installation | Playwright');

  });

});
