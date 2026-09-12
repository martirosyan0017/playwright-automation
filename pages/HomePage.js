import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  async verifyHomePageLoaded() {
    await expect(this.page).toHaveTitle(/automation exercise/i);
    await expect(this.page.locator('#slider')).toBeVisible();
  }
}
