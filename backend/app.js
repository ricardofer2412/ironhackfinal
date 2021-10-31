require("dotenv/config");

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes");

app.use("/api", allRoutes);

const index = require("./routes/index");
const productRouter = require("./routes/Product.routes");

app.use("/", index);

app.use("/api", productRouter);

require("./error_handling")(app);

module.exports = app;
