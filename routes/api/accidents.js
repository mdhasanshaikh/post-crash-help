const express = require("express");
const router = express.Router();

//Model
const Accident = require("../../models/Accident");

//@route Get api/accidents
//@desc All POST
// @access Public
router.get("/", (req, res) => {
  Accident.find()
    .then((accidents) => res.json(accidents))
    .catch((err) => res.status(404).json({ getting: err }));
});

// @route POST api/ambulance
// @desc All POST
// @access Public
router.post("/", (req, res) => {
  const newAccident = new Accident({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    vehicle_id: req.body.vehicle_id,
    serve: req.body.serve,
  });

  newAccident
    .save()
    .then((accident) => res.json(accident))
    .catch((err) => res.status(404).json({ getting: err }));
});

// @route Update api/accidents
// @desc Create a POST
// @access Public
router.put("/:id", (req, res) => {
  Accident.updateOne(
    { _id: req.params.id },
    { $set: { serve: true, ambulance_id: req.body.ambulance_id } }
  )
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(400).json({ success: false, error: err }));
});

module.exports = router;
