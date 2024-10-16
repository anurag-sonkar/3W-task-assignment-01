const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        socialMediaHandle:{
            type: [String],
            required : true
        },
        images:[
            {
                public_id:{type:String , required:true},
                url : {type : String,  required: true}
            }
        ]
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
