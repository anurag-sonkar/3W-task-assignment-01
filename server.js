const express = require('express');
const app = express();
const db = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors')
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());

// routes
app.get('/' , async(req,res)=>{
    res.send("H550")
})

// listening PORT
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
