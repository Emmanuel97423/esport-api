const express = require("express");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");

const app = express();

//variable environment
require("dotenv").config();

//Connexion DB
mongoose
  .connect(process.env.MONGO_CONNECTION_ADMIN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !: " + error));

//Requête CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Parseur Json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routage
app.use("/api/auth", userRoute);

module.exports = app;
