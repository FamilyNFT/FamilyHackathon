const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB_URI = require("./db");

///Connect Database///
mongoose.connect(DB_URI, { useNewUrlParser: true }, () =>
  console.log("connected")
);

app.listen(3000, () => console.log("App is listening at port 3000"));
