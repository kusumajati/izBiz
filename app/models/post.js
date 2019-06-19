const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    author:{type:String, required:true},
    text:{type:String, minlength:1}
})

module.exports=mongoose.model('Post', postSchema)