const mongoose = require("mongoose")

const userSchema= mongoose.Schema({
    username:{
        type:String,
        minlength:4,
        required:true
    },
    password:{
        type:String,
        minlength:4
    },
    email:{
        type:String,
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    picture:{
        type:String
    },
    projects:[
        {type:mongoose.Schema.Types.ObjectId, ref:'Project'}
    ],
    posts:[
        {type:mongoose.Schema.Types.ObjectId, ref:'Post'}
    ]
})

module.exports = mongoose.model("User", userSchema)