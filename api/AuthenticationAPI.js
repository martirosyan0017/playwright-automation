const { BaseAPI } = require("./BaseAPI");
class AuthenticationAPI extends BaseAPI {
  async apiLogin(email, password) {
    const response = await this.postForm("/api/verifyLogin", {
      email,
      password,
    });

    return await response.json();
  }

  async apiLoginWithoutEmail(password) {
    const response = await this.postForm("/api/verifyLogin", {
      password,
    });

    return await response.json();
  }

  async apiDeleteLogin() {
    const response = await this.delete("/api/verifyLogin");

    return await response.json();
  }
}

module.exports = { AuthenticationAPI };
