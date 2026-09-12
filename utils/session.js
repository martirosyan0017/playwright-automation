const path = require('path');

// This directory is already ignored by Git through .gitignore.
const authStateFile = path.resolve(__dirname, '../playwright/.auth/user.json');

module.exports = { authStateFile };
