const express = require("express");

// get an instance of express router
const router = express.Router();

//import controller file
const {
  getAmbulances,
  addAmbulance,
  updateAmbulance,
} = require("../../controllers/ambulanceController");

router.route("/").get(getAmbulances).post(addAmbulance);

router.route("/:id").put(updateAmbulance);

module.exports = router;
