const mongoose = require("mongoose");

// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/backend";
const MONGO_URI =
  "mongodb+srv://lossuperdevs:MNeeW29MjBwYwXv@cluster0.exzbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
