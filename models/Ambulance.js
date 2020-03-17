const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AmbulanceSchema = new Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  vehicleId: {
    type: String,
    required: true, 
    unique: true
  },
  availability: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Ambulance = mongoose.model("ambulance", AmbulanceSchema);
