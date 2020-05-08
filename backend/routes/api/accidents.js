const express = require("express");

// get an instance of express router
const router = express.Router();

//import controller file
const {
  getAccidents,
  addAccident,
  updateAccident,
} = require("../../controllers/accidentController");

router.route("/").get(getAccidents).post(addAccident);
router.route("/:id").put(updateAccident);

module.exports = router;
