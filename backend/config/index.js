const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");

const session = require("express-session");

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser("super hyper secret key"));
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "super hyper secret key",
      resave: true,
      saveUninitialized: true,
    })
  );
};
