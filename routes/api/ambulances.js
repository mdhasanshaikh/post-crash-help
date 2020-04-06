const express = require("express");
const router = express.Router();

const Ambulance = require("../../models/Ambulance");

//@route Get api/accidents
//@desc All POST
// @access Public
router.get("/", (req, res) => {
  Ambulance.find()
    .then((ambulances) => res.json(ambulances))
    .catch((err) => res.status(404).json({ getting: err }));
});

//@route POST api/ambulance
//@desc All POST
// @access Public
router.post("/", (req, res) => {
  const newAmbulance = new Ambulance({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    vehicle_id: req.body.vehicle_id,
    availability: req.body.availability,
  });

  newAmbulance
    .save()
    .then((ambulance) => res.json(ambulance))
    .catch((err) => res.status(404).json({ getting: err }));
});

// @route Update api/ambulance
// @desc Create a PUT
// @access Public
router.get("/:id", (req, res) => {
  Ambulance.updateOne({ _id: req.params.id }, { $set: { availability: false } })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, error: err }));
});

module.exports = router;
