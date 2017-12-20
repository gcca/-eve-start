const express = require("express");
const app = express();
const port = process.env.PORT || 8085;

app.use("/app", express.static(__dirname + "/app"));

app.get("/", (req, res) => {
  res.send("Hi Cris");
});

app.listen(port, () => {
  console.log("server running on port " + port)
});
