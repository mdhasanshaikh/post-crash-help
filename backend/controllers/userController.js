const User = require("../models/User");

const getUsers = (req, res) => {
  User.find()
    .then((users) =>
      res.json({
        success: true,
        message: "Users fetched successfully",
        users: users,
      })
    )
    .catch((err) => {
      res.status(400).json({
        success: false,
        message: "Some Error has occured.",
        error: err,
      });
    });
};

const addUser = (req, res) => {
  const newUser = new User({
    vehicle_id: req.body.vehicle_id,
    name: req.body.name,
    emergency_contact: req.body.emergency_contact,
    blood_grp: req.body.blood_grp,
    medical_condition: req.body.medical_condition,
  });

  newUser
    .save()
    .then((user) =>
      res.json({
        success: true,
        message: "New user successfully added",
        user: user,
      })
    )
    .catch((err) =>
      res.status(400).json({
        success: false,
        message: "Some Error has occured.",
        error: err,
      })
    );
};

module.exports = {
  getUsers,
  addUser,
};

// (users) => {
//   let result = {
//     success: true,
//     message: "Users fetched successfully",
//     users: users,
//   };
//   io.emit("getUsers", result);
// }
