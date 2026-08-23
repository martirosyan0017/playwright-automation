import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { loginData } from "../../test-data/loginData";

test.describe("Login", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo("login");
  });

  test("User can login successfully", async () => {
    await loginPage.login(loginData.valid.email, loginData.valid.password);
    await expect(loginPage.page).not.toHaveURL(/login/);
  });

  test("User cannot login with invalid email", async () => {
    await loginPage.login(
      loginData.invalidEmail.email,
      loginData.invalidEmail.password,
    );
    await loginPage.assertLoginError(loginData.expectedError);
  });

  test("User cannot login with invalid password", async () => {
    await loginPage.login(
      loginData.invalidPassword.email,
      loginData.invalidPassword.password,
    );

    await loginPage.assertLoginError(loginData.expectedError);
  });

  test("User cannot login with empty fields", async () => {
    await loginPage.login(
      loginData.emptyFields.email,
      loginData.emptyFields.password,
    );
    await loginPage.assertEmptyFields(loginData.expectedValidationMessage);
  });
});
