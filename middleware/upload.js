const cloudinary = require('../config/cloudinary');
const multer = require('multer');
const streamifier = require('streamifier');

const storage = multer.memoryStorage(); // Store the file in memory buffer
const upload = multer({ storage: storage });

const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "user-attachments-3W" },  // Specifying folder 
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );
        streamifier.createReadStream(buffer).pipe(uploadStream);
    });
};

const uploadAttachmentsToCloudinary = async (files) => {
    const uploadPromises = files.map(file => {
        const fileType = file.mimetype.split('/')[0]; 

        if (fileType === 'image') resourceType = 'image';

        return uploadToCloudinary(file.buffer, resourceType); // Upload based on file type
    });

    return Promise.all(uploadPromises); // Wait for all uploads to complete
};


module.exports = { upload, uploadAttachmentsToCloudinary }