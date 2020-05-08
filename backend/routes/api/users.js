const express = require("express");

// get an instance of express router
const router = express.Router();

//import controller file
const { getUsers, addUser } = require("../../controllers/userController");

router.route("/").get(getUsers).post(addUser);

module.exports = router;
