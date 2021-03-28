"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.urlencoded({ extended: false })); // for parsing html form x-www-form-urlencoded
// and/or app.use(express.json()); // for parsing application/json
app.use("/cat", require("./routes/catRoute"));

db.on("connected", () => {
  app.listen(3000, () => {
    console.log("express server started on port 3000");
  });
});
