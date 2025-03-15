const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./dbinit");
require("dotenv").config();
const clientRoute = require("./routes/clientRoute");

connectDB();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/client", clientRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Diablo Con Vestido's Tabulador API");
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
