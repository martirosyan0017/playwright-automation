import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');

    this.errorMessage = page.locator(
      'p').filter({
        hasText: 'Your email or password is incorrect!'
      }
    );
  }

  async login(email, password) {
    await this.inputElement(this.emailInput, email);
    await this.inputElement(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  async assertLoginError(expectedMessage) {
    await this.assertErrorMessage(
      this.errorMessage,
      expectedMessage
    );
  }

  async assertEmptyFields(expectedMessage) {
    await expect(this.emailInput).toHaveJSProperty(
      'validationMessage',
      expectedMessage
    );
  }
}