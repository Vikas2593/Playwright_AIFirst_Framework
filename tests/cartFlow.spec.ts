import { test, expect } from '@playwright/test';

test.describe('@smoke Cart Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Add Black Heels to Cart and Verify in Cart', async ({ page }) => {
    // Navigate to Catalog
    await page.getByRole('link', { name: 'Catalog' }).click();
    await page.waitForLoadState('networkidle');

    // Click on Black Heels
    await page.getByRole('link', { name: 'Black Heels' }).click();
    await page.waitForLoadState('networkidle');

    // Add to Cart
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.waitForTimeout(1000);

    // Click on My Cart
    await page.getByRole('link', { name: 'My Cart' }).click();
    await page.waitForLoadState('networkidle');

    // Verify product is present in cart
    await expect(page.getByRole('link', { name: 'Black Heels' })).toBeVisible();
  });
});
