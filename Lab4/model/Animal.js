const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  Zoo: { type: String, required: true },
  ScientificName: { type: String, required: true },
  CommonName: { type: String, required: true },
  GivenName: { type: String, required: true },
  Gender: { type: String, required: true },
  DateOfBirth: { type: Date, required: true },
  Age: { type: Number, required: true },
  IsTransportable: { type: Boolean, required: true }
});

module.exports = mongoose.model('Animal', animalSchema);
