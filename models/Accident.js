const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccidentSchema = new Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  vehicle_id: {
    type: String,
    required: true,
    unique: true
  },
  serve: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = Accident = mongoose.model("accident", AccidentSchema);
