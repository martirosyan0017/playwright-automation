import { expect } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path) {
    await this.page.goto(process.env.BASE_URL + path);
  }

  async waitForElement(selector) {
    await this.page.waitForElement(selector);
  }
  async clickElement(selector) {
    await this.page.clickElement(selector);
  }
  async fillElement(selector,text){
    await this.page.fillElement(selector,text);
  }
}
