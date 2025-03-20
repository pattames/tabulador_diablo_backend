const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  currency: {
    type: String,
  },
  netIncome: {
    type: Number,
  },
  rent: {
    type: String,
  },
  healthInsurance: {
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
