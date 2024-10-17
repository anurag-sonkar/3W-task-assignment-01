const express = require('express')
const router = express.Router()
const { handleFormSubmit, handleGetAllUsers } = require('../controllers/user');
const { upload } = require('../middleware/upload');


router.post("/user-form", upload.array('attachments', 20), handleFormSubmit);
router.get('/getallusers' , handleGetAllUsers)

module.exports = router
