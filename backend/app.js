require("dotenv/config");

require("./db");
require("./config/passport");
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");

const MongoStore = require("connect-mongo");
const MONGO_URI = require("./utils/consts");

app.use(
  session({
    secret: "some secret goes here",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
    }),
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
