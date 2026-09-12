/**
 * Returns the credentials required by tests that authenticate a real browser
 * session. Keeping this validation in one place makes a missing CI secret
 * fail with an actionable error instead of a confusing login assertion.
 */
export function getEnvCredentials() {
  const { EMAIL: email, PASSWORD: password, USER_NAME: userName = 'myTestUsername' } = process.env;

  if (!email || !password) {
    throw new Error('EMAIL and PASSWORD must be set to run authenticated tests.');
  }

  // The demo account's displayed profile name differs from its email address.
  // CI can override the default when it uses a different account.
  return { email, password, userName };
}
