const { test, expect } = require("@playwright/test");
const { AuthenticationAPI } = require("../../api/AuthenticationAPI");
const { loginData } = require("../../test-data/loginData");

let authenticationAPI;

test.beforeEach(async ({ request }) => {
  authenticationAPI = new AuthenticationAPI(request);
});

test("User can login via API", async () => {
  const response = await authenticationAPI.apiLogin(
    loginData.valid.email,
    loginData.valid.password
  );

  expect(response.responseCode).toBe(200);
  expect(response.message).toBe("User exists!");

  console.log(response);
});

test("User cannot login without email", async () => {
  const response = await authenticationAPI.apiLoginWithoutEmail(
    loginData.valid.password
  );

  expect(response.responseCode).toBe(400);
  expect(response.message).toBe(
    "Bad request, email or password parameter is missing in POST request."
  );
});

test("User cannot login with invalid details", async () => {
  const response = await authenticationAPI.apiLogin(
    loginData.invalidEmail.email,
    loginData.invalidEmail.password
  );

  expect(response.responseCode).toBe(404);
  expect(response.message).toBe("User not found!");
});