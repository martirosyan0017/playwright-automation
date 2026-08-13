import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page) {
    this.page = page;
  }

  async login(email, password) {
    await this.page.fillElement(LoginLocators.emailInput, email);
    await this.page.fillElement(LoginLocators.passwordInput, password);
    await this.page.clickElement(LoginLocators.loginButton);
  }
}
