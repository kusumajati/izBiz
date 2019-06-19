const Post = require('../models/post')
const User = require('../models/user')

exports.create_post= (req, res)=>{
    var newPost = new Post({
        author: req.body.username,
        text: req.body.text
    })
    newPost.save(function(err){
        if(err){
            res.status(400).json({
                success:false,
                message:'fail to post',
                data: err
            })
        }else{
            User.findOne({username:newPost.author}, (err, user)=>{
                if(err){
                    res.status(400).json({
                        success:false,
                        message:"no user found",
                        data:err
                    })
                }else{
                    user.posts.push(newPost)
                    user.save((err)=>{
                        if(err){
                            res.status(400).json({
                                success:false,
                                message:"fail",
                                data:err
                            }) 
                        }else{
                            res.status(200).json({
                                success:true,
                                message:'post saved',
                                data: newPost
                            })
                        }
                    })
                }
            })
        }
    })

}

