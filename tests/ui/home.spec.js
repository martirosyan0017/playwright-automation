import { test } from '@playwright/test';

test('open homepage', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
});