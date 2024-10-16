const { uploadAttachmentsToCloudinary } = require('../middleware/upload')
const User = require('../models/user')
// returning only true 
const handleFormSubmit = async (req, res) => {
    console.log("body",req.body)
    console.log("files",req.files)
    const { name, socialMediaHandles } = req.body
    if (!name) return res.status(400).json({ message: "name is required" })
    if (!socialMediaHandles) return res.status(400).json({ message: "atleast one social-media-handle is required" })

    try {
        // upload attachmentss
        let attachments;
        if (req.files) {
            attachments = await uploadAttachmentsToCloudinary(req.files);
            // console.log("attachments", attachments)
        }

        // making array of object which have public-id and url only 
        const storeAttachments = attachments.map((attachment) => {
            return {
                public_id: attachment.public_id, url: attachment.url
            }
        })
        // console.log("storeAttachments", storeAttachments)

        // check if more than one social media hanldes then split and stores as array of strings as model
        let socialMediaArray = [];
        if(socialMediaHandles.includes(' ')){
            socialMediaArray = socialMediaHandles.split(' ');
            console.log(socialMediaArray);

        }

        // now create user with its attachments
        const user = await User.create({
            name,
            socialMediaHandles: socialMediaArray?.length > 0 ? socialMediaArray : socialMediaHandles,
            attachments: storeAttachments

        })

        return res.status(201).send({message:"saved successfully"})

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }


}

module.exports = { handleFormSubmit }