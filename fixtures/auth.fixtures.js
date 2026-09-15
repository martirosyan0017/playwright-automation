import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { authStateFile } from '../utils/session.js';

class Header {
  constructor(page) {
    this.page = page;
    this.logoutLink = page.locator('a[href="/logout"]');
    this.signupLoginLink = page.locator('a[href="/login"]');
  }

  loggedInIndicator() {
    return this.page.locator('a').filter({ hasText: /logged in as/i });
  }

  loggedInAs(userName) {
    return this.page.locator('a').filter({
      hasText: new RegExp(`logged in as\\s+${userName}`, 'i'),
    });
  }
}

export const test = base.extend({
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: authStateFile });
    const page = await context.newPage();

    await use(page);
    await context.close();
  },

  homePage: async ({ authenticatedPage }, use) => {
    await use(new HomePage(authenticatedPage));
  },

  header: async ({ authenticatedPage }, use) => {
    await use(new Header(authenticatedPage));
  },
});

export { expect } from '@playwright/test';
