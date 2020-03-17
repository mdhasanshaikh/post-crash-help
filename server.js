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

const port = process.env.PORT || 5000;

app.use("/api/accidents", require("./routes/api/accidents"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/ambulances", require("./routes/api/ambulances"));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
