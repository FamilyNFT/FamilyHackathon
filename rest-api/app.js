const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB_URI = require("./db");
const itemsRoute = require("./routes/items");

///Connect Database///
app.use("/items", itemsRoute);

app.listen(3000, () => console.log("App is listening at port 3000"));
