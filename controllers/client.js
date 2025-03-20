const Client = require("../schemas/Client");

//Create Client
const createClient = async (req, res) => {
  try {
    const {
      name,
      currency,
      netIncome,
      rent,
      healthInsurance,
      familySupport,
      privateClub,
      grade,
    } = req.body;
    const client = await Client.create({
      name,
      currency,
      netIncome,
      rent,
      healthInsurance,
      familySupport,
      privateClub,
      grade,
    });
    res.status(201).json({
      message: "Client created successfully!",
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create client",
      error: error.message,
    });
  }
};

//Get all clients
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    if (!clients.length) {
      res.status(200).json({
        message: "No clients in the DB",
      });
    } else {
      res.status(200).json({ data: clients });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve clients",
      error: error.message,
    });
  }
};

//Get one client
const getOneClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    if (!client) {
      res.status(404).json({ message: "I don't know that client" });
    } else {
      res.status(200).json({ data: client });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve client",
      error: error.message,
    });
  }
};

//Delete client
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);
    if (!client) {
      res.status(404).json({
        message: "I don't know that client",
      });
    } else {
      res.status(200).json({ message: "Client deleted" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete client",
      error: error.message,
    });
  }
};

module.exports = {
  createClient,
  getAllClients,
  getOneClient,
  deleteClient,
};
