class AuthenticationAPI {
  constructor(request) {
    this.request = request;
  }

  async apiLogin(email, password) {
    const response = await this.request.post('/login', {
      data: {email, password}
    });

    if (!response.ok()) {
      throw new Error(
        `Login failed: ${response.status()} ${await response.text()}`
      );
    }

    const responseBody = await response.json();

    return responseBody;
  }
}

module.exports = { AuthenticationAPI };