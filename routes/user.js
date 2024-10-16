const express = require('express')
const router = express.Router()
const { handleFormSubmit } = require('../controllers/user')


router.post("/data", handleFormSubmit);

module.exports = router
