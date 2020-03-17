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

module.exports = router;
