import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test.describe('@smoke Cart Flow', () => {
  let homePage: HomePage;
  let catalogPage: CatalogPage;
  let productPage: ProductPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    catalogPage = new CatalogPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    await homePage.goto();
  });

  test('Add Black Heels to Cart and Verify in Cart', async () => {
    await homePage.navigateToCatalog();
    await catalogPage.clickBlackHeels();
    await productPage.addToCart();
    await catalogPage.navigateToCart();
    await expect(await cartPage.getProductLink('Black Heels')).toBeVisible();
  });
});
