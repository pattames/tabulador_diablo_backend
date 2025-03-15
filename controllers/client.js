const Client = require("../schemas/Client");

//Create Client
const createClient = async (req, res) => {
  try {
    const {
      name,
      netIncome,
      rent,
      medicalInsurence,
      familySupport,
      privateClub,
      grade,
    } = req.body;
    const client = await Client.create({
      name,
      netIncome,
      rent,
      medicalInsurence,
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
      error,
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
    res.status(500).json({ error });
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
      error,
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
      error,
    });
  }
};

module.exports = {
  createClient,
  getAllClients,
  getOneClient,
  deleteClient,
};
