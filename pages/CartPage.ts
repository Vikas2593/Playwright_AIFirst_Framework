import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getProductLink(productName: string): Promise<Locator> {
    return this.page.getByRole('link', { name: productName });
  }

  async isProductInCart(productName: string): Promise<boolean> {
    const productLink = await this.getProductLink(productName);
    return productLink.isVisible();
  }
}
