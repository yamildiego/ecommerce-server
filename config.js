const dotenv = require("dotenv").config();
module.exports = {
  STRIPE_SK: process.env.STRIPE_SK,
  DOMAIN: process.env.DOMAIN,
  SHIPPING_PRICE: process.env.SHIPPING_PRICE,
  MONGODB_CONNECTION: process.env.MONGODB_CONNECTION,
};
