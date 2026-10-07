import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('@smoke Sauce Demo homepage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Verify HomePage Side Bars', async () => {
    await expect(homePage.sauceDemoLink).toBeVisible();
    await expect(homePage.homeLink).toBeVisible();
    await homePage.navigateToCatalog();
    await expect(homePage.catalogLink).toBeVisible();
    await expect(homePage.blogLink).toBeVisible();
    await expect(homePage.aboutUsLink).toBeVisible();
    await expect(homePage.wishListLink).toBeVisible();
    await expect(homePage.referFriendLink).toBeVisible();
  });

  test('Verify HomePage Top Bars', async () => {
    await homePage.waitForNetworkIdle();
    await expect(homePage.sauceDemoLink).toBeVisible();
    await expect(homePage.searchLink).toBeVisible();
    await expect(homePage.aboutUsLink).toBeVisible();
    await expect(homePage.loginLink).toBeVisible();
    await expect(homePage.signUpLink).toBeVisible();
  });
});
