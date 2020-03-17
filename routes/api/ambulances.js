const express = require("express");
const router = express.Router();

const Ambulance = require("../../models/Ambulance");

//@route Get api/accidents
//@desc All POST
// @access Public
router.get("/", (req, res) => {
  Ambulance.find()
    .then(ambulances => res.json(ambulances))
    .catch(err => res.status(404).json({ getting: err }));
});

module.exports = router;
