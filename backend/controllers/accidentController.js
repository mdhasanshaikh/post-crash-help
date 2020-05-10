const Accident = require("../../localDBConnection/models/Accident");

const getAccidents = (req, res) => {
  res.header
  Accident.find()
    .then((accidents) => {
      res.json({
        success: true,
        message: "Accidents fetched successfully",
        accidents: accidents,
      });
    })
    .catch((err) =>
      res.status(404).json({
        success: false,
        message: "Some Error has occured.",
        error: err,
      })
    );
};

const addAccident = (req, res) => {
  const newAccident = new Accident({
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    vehicle_id: req.body.vehicle_id,
    serve: req.body.serve,
  });

  newAccident
    .save()
    .then((accident) =>
      res.json({
        success: true,
        message: "New accident successfully added",
        accident: accident,
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

const updateAccident = (req, res) => {
  Accident.updateOne(
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
  getAccidents,
  addAccident,
  updateAccident,
};
