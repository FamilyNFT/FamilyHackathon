const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

//middlewares//
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///Routes///
const itemsRoute = require("./routes/items");
app.use("/items", itemsRoute);

app.listen(8080, () => console.log("App is listening at port 8080"));
