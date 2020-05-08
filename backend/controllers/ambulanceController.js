const Ambulance = require("../models/Ambulance");

const getAmbulances = (req, res) => {
  Ambulance.find()
    .then((ambulances) =>
      res.json({
        success: true,
        message: "Accidents fetched successfully",
        ambulances: ambulances,
      })
    )
    .catch((err) =>
      res.status(404).json({
        success: false,
        message: "Some Error has occured.",
        error: err,
      })
    );
};

const addAmbulance = (req, res) => {
  const newAmbulance = new Ambulance({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    vehicle_id: req.body.vehicle_id,
    serve: req.body.serve,
  });

  newAmbulance
    .save()
    .then((ambulance) =>
      res.json({
        success: true,
        message: "New accident successfully added",
        ambulance: ambulance,
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

const updateAmbulance = (req, res) => {
  Ambulance.updateOne(
    { _id: req.params.id },
    { $set: { serve: true, ambulance_id: req.body.ambulance_id } }
  )
    .then(() =>
      res.json({
        success: true,
        message: "Accident updated successfully added",
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
  getAmbulances,
  addAmbulance,
  updateAmbulance,
};
