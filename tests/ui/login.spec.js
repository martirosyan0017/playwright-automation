import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo('login');
  await loginPage.login(process.env.EMAIL,process.env.PASSWORD);
});