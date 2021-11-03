require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

const session = require("express-session");

const passport = require("passport");

app.use(
  session({
    secret: "some secret goes here",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

require("./config")(app);

const allRoutes = require("./routes");

app.use("/api", allRoutes);

const index = require("./routes/index");
const productRouter = require("./routes/Product.routes");

app.use("/", index);

app.use("/api", productRouter);

require("./error_handling")(app);

const authRouter = require("./routes/auth.routes");

app.use("/api", authRouter);

module.exports = app;
