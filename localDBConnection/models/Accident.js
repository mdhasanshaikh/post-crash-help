const { mongoose } = require("../config/localDBConnection");
const Schema = mongoose.Schema;

const AccidentSchema = new Schema({
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  vehicle_id: {
    type: String,
    required: true,
    unique: true,
  },
  serve: {
    type: Boolean,
    required: true,
    default: false,
  },
  ambulance_id: {
    type: String,
    default: "",
  },
});

module.exports = Accident = mongoose.model("accident", AccidentSchema);
