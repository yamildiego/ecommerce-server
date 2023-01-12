const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routesApi = require("./src/routes/api");
const routesProducts = require("./src/routes/products");
const config = require("./config");

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGODB_CONNECTION, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(express.json());
  app.use(session({ secret: "8JyLd{C7fk]JFDD>", saveUninitialized: true, resave: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", config.DOMAIN);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });

  app.use(`/`, routesApi);
  app.use(`/products`, routesProducts);

  const port = process.env.port || 5000;

  app.listen(port, () => {
    console.log("Server has started!");
  });
});
