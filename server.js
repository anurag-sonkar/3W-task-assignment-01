const express = require('express');
const app = express();
const db = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors')
const PORT = process.env.PORT || 8000;
const BASE_URL = process.env.BASE_URL
const userRoutes = require('./routes/user')

// middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'], //  OPTIONS
}));

app.use(express.json())


// routes
// currently not handling authentication and authorization 
// handling Users form submission only 
app.use('/user', userRoutes) 

// listening PORT
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
// app.listen(PORT, () => console.log(`Server started at ${BASE_URL}:${PORT}`));
