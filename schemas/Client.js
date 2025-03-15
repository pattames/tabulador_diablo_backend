const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  netIncome: {
    type: Number,
  },
  rent: {
    type: String,
  },
  medicalInsurence: {
    type: String,
  },
  familySupport: {
    type: String,
  },
  privateClub: {
    type: String,
  },
  grade: {
    type: Number,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
