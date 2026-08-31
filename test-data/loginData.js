export const loginData = {
  valid: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },

  invalidEmail: {
    email: "invalid@email.com",
    password: process.env.PASSWORD,
  },

  invalidPassword: {
    email: process.env.EMAIL,
    password: "InvalidPassword123",
  },
  emptyFields: {
    email: "",
    password: "",
  },

  expectedError: "Your email or password is incorrect!",
  expectedValidationMessage: "Please fill out this field.",
};

module.exports = { loginData };
