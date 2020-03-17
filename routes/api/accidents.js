const express = require("express");
const router = express.Router();

//Model
const Accident = require("../../models/Accident");

//@route Get api/accidents
//@desc All POST
// @access Public
router.get("/", (req, res) => {
  Accident.find()
    .then(accidents => res.json(accidents))
    .catch(err => res.status(404).json({ getting: err }));
});

//@route Update api/accidents
//@desc Create a POST
// @access Private
router.put("/:id", (req, res) => {
  Accident.updateOne({ _id: req.params.id }, { $set: { serve: false } })
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
