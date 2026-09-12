import { test, expect } from '@playwright/test';

test('a fresh browser context has no authenticated session', async ({ browser }) => {
  const context = await browser.newContext();

  try {
    const page = await context.newPage();
    await page.goto('/');

    await expect(page.locator('a[href="/login"]')).toBeVisible();
    await expect(page.getByRole('link', { name: /logged in as/i })).toHaveCount(0);
  } finally {
    await context.close();
  }
});
