const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB_URI = require("./db");

//middlewares//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///Routes///
const itemsRoute = require("./routes/items");
app.use("/items", itemsRoute);

app.listen(8080, () => console.log("App is listening at port 8080"));
