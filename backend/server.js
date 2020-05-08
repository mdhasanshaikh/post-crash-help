const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const logger = require("morgan");
const socket = require("socket.io");

// create app instance using express
const app = express();

// initialize server socket
const server = http.createServer(app);
const io = socket(server);

//  accident
const Accident = require("./models/Accident");
const accidentChangeStream = Accident.watch();

// Listening to accident collecion
accidentChangeStream.on("change", (change) => {
  let result = {};
  if (change.fullDocument !== undefined) {
    result = {
      success: true,
      message: "Users fetched successfully",
      accident: change.fullDocument,
    };
  } else {
    result = {
      success: false,
      message: "Some Error has occured.",
      error: "Failed to listen the Accident collection changes.",
    };
  }

  io.emit("listenToAccidentCollectionChanges", result);
});

// create socket connection
io.on("connection", () => {
  console.log("Connected to Socket");
});

// allow-cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// configure app
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// all routes
app.use("/api/accidents", require("./routes/api/accidents"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/ambulances", require("./routes/api/ambulances"));

const port = process.env.PORT || 5000;

// start the server
server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

// https://medium.com/@vipinswarnkar1989/socket-io-in-mern-todo-app-5fd9ca732242
