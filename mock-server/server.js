const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const json = require("./routes/example");


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//app.use("/api", express.static(__dirname + "/app"));

app.use("/app", json);

app.get("/", (req, res) => {
  res.send("Hi Cris");
});

app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), () => {
  console.log("server running on port " + app.get("port"))
});

module.exports = app;
