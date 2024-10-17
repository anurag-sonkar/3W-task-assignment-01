const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const URL = process.env.MONGODB_LOCAL_URL
const URL = process.env.MONGODB_URL

// Connection Options
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true, // Ensure SSL is enabled for secure connections to MongoDB Atlas
};

// Connection
mongoose.connect(URL, connectionOptions)
    .then(() => console.log('Connected to MongoDB server'))
    .catch((error) => console.log(`MongoDB connection error: ${error.message}`));

// setup listners
const db = mongoose.connection;

db.on("connected", () => console.log(`Connected To MongoDb Server`));
db.on("error", (error) => console.log(`Error connecting to MongoDB: ${error.message}`));
db.on("disconnected", () => console.log("MongoDb disconnected"));

module.exports = db;
