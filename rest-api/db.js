require("dotenv").config();
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_STRING = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wg9yt5i.mongodb.net/?retryWrites=true&w=majority`;

module.exports = DB_STRING;
