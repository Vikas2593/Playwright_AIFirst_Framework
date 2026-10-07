import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CatalogPage extends BasePage {
  readonly blackHeelsLink: Locator;
  readonly myCartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.blackHeelsLink = page.getByRole('link', { name: 'Black Heels' });
    this.myCartLink = page.getByRole('link', { name: 'My Cart' });
  }

  async clickProductByName(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
    await this.waitForNetworkIdle();
  }

  async clickBlackHeels() {
    await this.blackHeelsLink.click();
    await this.waitForNetworkIdle();
  }

  async navigateToCart() {
    await this.myCartLink.click();
    await this.waitForNetworkIdle();
  }
}
