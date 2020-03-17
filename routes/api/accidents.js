const express = require("express");
const router = express.Router();

//Item model
const Accident = require("../../models/Accident");

//@route Get api/items
//@desc All POST
// @access Public
router.get("/", (req, res) => {
  Accident.find()
    .sort({ date: -1 })
    .then(accidents => res.json(accidents));
});

//@route POST api/items
//@desc Create a POST
// @access Private
router.post("/", auth, (req, res) => {
  const NewItem = new Item({ name: req.body.name });
  NewItem.save().then(item => res.json(item));
});

//@route DELETE api/items
//@desc Delete a POST
// @access Private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: true }));
});

module.exports = router;
