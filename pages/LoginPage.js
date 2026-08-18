import { BasePage } from "./BasePage";
export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
  }

  async login(email, password) {
    await this.inputElement(this.emailInput, email);
    await this.inputElement(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }
}
