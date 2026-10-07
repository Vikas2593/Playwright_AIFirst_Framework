import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly sauceDemoLink: Locator;
  readonly homeLink: Locator;
  readonly catalogLink: Locator;
  readonly blogLink: Locator;
  readonly aboutUsLink: Locator;
  readonly wishListLink: Locator;
  readonly referFriendLink: Locator;
  readonly searchLink: Locator;
  readonly loginLink: Locator;
  readonly signUpLink: Locator;
  readonly mainMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.sauceDemoLink = page.getByRole('link', { name: 'Sauce Demo' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.catalogLink = page.getByRole('link', { name: 'Catalog' });
    this.blogLink = page.getByRole('link', { name: 'Blog' });
    this.aboutUsLink = page.locator('#main-menu').getByRole('link', { name: 'About Us' });
    this.wishListLink = page.getByRole('link', { name: 'Wish list' });
    this.referFriendLink = page.getByRole('link', { name: 'Refer a friend' });
    this.searchLink = page.getByRole('banner').getByRole('link', { name: 'Search' });
    this.loginLink = page.getByRole('link', { name: 'Log In' });
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
    this.mainMenu = page.locator('#main-menu');
  }

  async goto() {
    await super.goto('/');
  }

  async navigateToCatalog() {
    await this.catalogLink.click();
    await this.waitForNetworkIdle();
  }

  async navigateToHome() {
    await this.homeLink.click();
  }

  async navigateToAboutUs() {
    await this.aboutUsLink.click();
  }

  async navigateToWishList() {
    await this.wishListLink.click();
  }

  async navigateToReferFriend() {
    await this.referFriendLink.click();
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async clickSearch() {
    await this.searchLink.click();
  }

  async verifySidebarLinks() {
    await this.sauceDemoLink.isVisible();
    await this.homeLink.isVisible();
    await this.catalogLink.isVisible();
    await this.blogLink.isVisible();
    await this.aboutUsLink.isVisible();
    await this.wishListLink.isVisible();
    await this.referFriendLink.isVisible();
  }

  async verifyTopbarLinks() {
    await this.waitForNetworkIdle();
    await this.sauceDemoLink.isVisible();
    await this.searchLink.isVisible();
    await this.loginLink.isVisible();
    await this.signUpLink.isVisible();
  }
}
