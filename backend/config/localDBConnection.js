const mongoose = require("mongoose");
const config = require("config");

const db = config.get("localMongoURI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to local mongoDB"))
  .catch((err) => console.log("Error:" + err));

module.exports = { mongoose };
