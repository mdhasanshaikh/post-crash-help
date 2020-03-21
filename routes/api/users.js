const express = require("express");
const router = express.Router();

const User = require("../../models/User");

//@route Get api/accidents
//@desc All POST
// @access Public
router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ getting: err }));
});

//@route POST api/user
//@desc All POST
// @access Public
router.post("/", (req, res) => {
  const newUser = new User({
    vehicle_id: req.body.vehicle_id,
    name: req.body.name,
    emergency_contact: req.body.emergency_contact,
    blood_grp: req.body.blood_grp,
    medical_condition: req.body.medical_condition
  });

  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ Error: err }));
});

module.exports = router;
