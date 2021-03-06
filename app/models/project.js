const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        project_name: {
            type: String,
            required:true
        },
        project_pictures:[
            {type:String}
        ],
        project_value:{
            type: Number,
            minimum: 1000000,
            required:true
        },
        project_current:{
            type:Number
        },
        project_author:
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            },
        
        project_holders:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        ],
        project_desc: {
            type: String
        },
        project_isOnGoing: {
            type: Boolean,
            default:true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Poject', projectSchema)