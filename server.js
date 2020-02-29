const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_ACCIDENTS_QUERY = "SELECT * FROM accident";

const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  connectTimeout: 10000,
  user: "root",
  password: "root",
  database: "post_crash_db"
});

connection.connect(err => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Connected to the MySQL server");
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello, its working bro..!!");
});

app.get("/accidents", (req, res) => {
  connection.query(SELECT_ALL_ACCIDENTS_QUERY, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        data: results
      });
    }
  });
});

app.get("/accidents/add", (req, res) => {
  const { name, location, license, date, served } = req.query;
  const INSERT_ACCIDENTS_QUERY = `INSERT INTO accident(name,location,license_no, medical_cond, date, served) VALUES(${name}, ${location}, ${license}, 'Good', ${date}, ${served})`;

  connection.query(INSERT_ACCIDENTS_QUERY, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully added");
    }
  });
});

app.get("/accidents/update", (req, res) => {
  const { accident_id, status } = req.query;
  const UPDATE_ACCIDENT_QUERY = `UPDATE accident SET served=${status} WHERE id=${accident_id}`;

  connection.query(UPDATE_ACCIDENT_QUERY, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully Updated");
    }
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
