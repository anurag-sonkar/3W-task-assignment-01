const express = require('express')
const router = express.Router()
const { handleFormSubmit } = require('../controllers/user');
const { upload } = require('../middleware/upload');


router.post("/user-form", upload.array('attachments', 5), handleFormSubmit);

module.exports = router
