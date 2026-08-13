import { expect } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path = "") {
    await this.page.goto(process.env.BASE_URL + path);
  }

  async waitForElement(locator) {
    await locator.waitFor();
  }

  async clickElement(locator) {
    await locator.click();
  }

  async fillElement(locator, text) {
    await locator.fill(text);
  }
}
