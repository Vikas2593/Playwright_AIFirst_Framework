import { test, expect } from '@playwright/test';

test.describe('@smoke Sauce Demo homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Verify HomePage Side Bars', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Sauce Demo' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await page.getByRole('link', { name: 'Catalog' }).click();
    await expect(page.getByRole('link', { name: 'Catalog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.locator('#main-menu').getByRole('link', { name: 'About Us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Wish list' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Refer a friend' })).toBeVisible();
  });

  test('Verify HomePage Top Bars', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('link', { name: 'Sauce Demo' })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('link', { name: 'Search' })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('link', { name: 'About Us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
  });
});
