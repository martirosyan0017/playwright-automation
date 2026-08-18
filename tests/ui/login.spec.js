import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login', () => {
  let loginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('login');
  });

  test('User can login successfully', async () => {
    await loginPage.login(process.env.EMAIL,process.env.PASSWORD);
  });

  test('User cannot login with invalid email', async () => {
    await loginPage.login('invalid@email.com',process.env.PASSWORD);
  });

  test('User cannot login with invalid password', async () => {
    await loginPage.login(process.env.EMAIL,'InvalidPassword123');
  })
});