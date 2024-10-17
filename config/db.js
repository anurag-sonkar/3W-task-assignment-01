const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const URL = process.env.MONGODB_LOCAL_URL
const URL = process.env.MONGODB_URL
// connection
mongoose.connect(URL);

// setup listners
const db = mongoose.connection;

db.on("connected", () => console.log(`Connected To MongoDb Server`));
db.on("error", (error) => console.log(error.message));
db.on("disconnected", () => console.log("MongoDb disconnected"));

module.exports = db;
