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

//@route POST api/ambulance
//@desc All POST
// @access Public
router.post("/", (req, res) => {
  const newAmbulance = new Ambulance({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    vehicle_id: req.body.vehicle_id,
    availability: req.body.availability
  });

  newAmbulance
    .save()
    .then(ambulance => res.json(ambulance))
    .catch(err => res.status(404).json({ getting: err }));
});

module.exports = router;
