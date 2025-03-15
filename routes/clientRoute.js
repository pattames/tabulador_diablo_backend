const express = require("express");

const {
  createClient,
  getAllClients,
  getOneClient,
  deleteClient,
} = require("../controllers/client");

const app = express.Router();

app.route("/").get(getAllClients).post(createClient);
app.route("/:id").get(getOneClient).delete(deleteClient);

module.exports = app;
