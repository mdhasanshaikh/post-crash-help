const mongoose = require("mongoose");
const config = require("config");

const db = config.get("hostedMongoURI");

// connect to mongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to hosted mongoDB"))
  .catch((err) => console.log("Error:" + err));

module.exports = {
  mongoose,
};
