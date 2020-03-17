const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("config");

const app = express();

//body-parser middleware
app.use(bodyParser.json());

//DB config
const db = config.get("mongoURI");

//connect to mongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log("Error:" + err));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
