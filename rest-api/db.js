require("dotenv").config();
const { Sequelize } = require("sequelize");
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_STRING = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const sequelize = new Sequelize(DB_STRING);
try {
  sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."));
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
