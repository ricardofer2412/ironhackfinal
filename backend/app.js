require("dotenv/config");
require("./db");
const session = require("express-session");
const passport = require("passport");
const express = require("express");
require("./config/passport");
const app = express();
app.use(
  session({
    secret: "some secret goes here",
    resave: true,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./config")(app);
const allRoutes = require("./routes");
app.use("/api", allRoutes);
const index = require("./routes/index");
const productRouter = require("./routes/Product.routes");
app.use("/", index);
app.use("/api", productRouter);

const authRouter = require("./routes/auth.routes");
app.use("/api", authRouter);

require("./error_handling")(app);

module.exports = app;
