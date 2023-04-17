require("dotenv").config();
const env = {
  port: process.env.PORT || 3000,
  verify_token: process.env.VERIFY_TOKEN,
};

module.exports = { env };
