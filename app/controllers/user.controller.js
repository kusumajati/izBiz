const   User    = require("../models/user")
const bcrypt = require("bcrypt")

exports.create_user = (req,res)=>{

    var newUser =  new User({
        username:req.body.username,
        password:bcrypt.hashSync(req.body.password, 8),
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        picture:req.body.picture
    })

    newUser.save().then((result)=>{
        res.status(201).send({
            result:{picture:result.picture,username:result.username, email:result.email, firstName:result.firstName, lastName:result.lastName}
        }).catch(err=>{
            res.send(err)
        })
    })
}

exports.show_users= (req,res)=>{
    User.find({},(err,docs)=>{
        if(err){
            res.status(422).json({
                success:false,
                message:"fail to connect",
                data:docs
            })
        }else{
            res.status(200).json({
                success:true,
                message:"data collected",
                data:docs
            })
        }
    })
}

exports.update_user=(req,res)=>{
    User.findByIdAndUpdate(req.params.id, {$set:req.body},(err,updatedUser)=>{
        if(err){
            res.send(err)
        }else{
            res.status(200).send({
                success:true,
                message:"User profile is sucessfully updated"
            })
        }
    })
}

