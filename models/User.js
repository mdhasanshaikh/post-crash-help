const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  vehicle_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  emergency_no: {
    type: String
  },
  blood_grp: {
    type: String
  },
  medical_condition: {
    type: String
  }
});

module.exports = User = mongoose.model("user", UserSchema);
