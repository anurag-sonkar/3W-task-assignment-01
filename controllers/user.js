const User = require('../models/user')
// returning only true 
const handleFormSubmit = async(req,res)=>{
    console.log(req.body)
    res.send("true")

}

module.exports = { handleFormSubmit }