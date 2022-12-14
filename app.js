const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const students = ["Elie", "Matt", "Joel", "Michael"];

app.get("/", (req, res) => {
  return res.json(students);
});

module.exports = app;
