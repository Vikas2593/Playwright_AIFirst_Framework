import { test, expect } from '../fixtures/fixtures';

test.describe('@smoke Cart Flow', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('Add Black Heels to Cart and Verify in Cart', async ({ homePage, catalogPage, productPage, cartPage }) => {
    await homePage.navigateToCatalog();
    await catalogPage.clickBlackHeels();
    await productPage.addToCart();
    await catalogPage.navigateToCart();
    await expect(await cartPage.getProductLink('Black Heels')).toBeVisible();
  });
});
