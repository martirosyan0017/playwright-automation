import { test as setup, expect } from '@playwright/test';
import { getEnvCredentials } from '../../utils/helpers.js';
import fs from 'fs/promises';
import path from 'path';
import { authStateFile } from '../../utils/session.js';

setup('authenticate and save browser state', async ({ page }) => {
  const { email, password } = getEnvCredentials();

  await page.goto('/login');
  await page.locator('[data-qa="login-email"]').fill(email);
  await page.locator('[data-qa="login-password"]').fill(password);
  await page.locator('[data-qa="login-button"]').click();
  await expect(page).not.toHaveURL(/login/);

  await fs.mkdir(path.dirname(authStateFile), { recursive: true });
  await page.context().storageState({ path: authStateFile });
});
