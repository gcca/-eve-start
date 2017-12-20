'use strict'

const express = require("express");

const api = express.Router();

//Paths

api.get("/example/exampleJson", (req, res) => {
  res.send("Hola Cris")
});

module.exports = api;
