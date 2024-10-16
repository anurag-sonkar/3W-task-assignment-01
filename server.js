const express = require('express');
const app = express();
const db = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/user')

// middleware
app.use(cors());

// routes
// currently not handling authentication and authorization 
// handling Users form submission only 
app.use('/user', userRoutes) 

// listening PORT
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
