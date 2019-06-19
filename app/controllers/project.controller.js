const Project = require('../models/project');
const User = require('../models/user')
exports.create_project = (req, res) => {
    
    User.findOne({username:req.decoded.username}, (err, user)=>{
        var newProject = new Project({
            project_name: req.body.project_name,
            project_value: req.body.project_value,
            project_pictures: req.body.project_pictures,
            project_current: req.body.project_current,
            project_author: user,
            project_desc:req.body.project_desc,
            project_isOnGoing:req.body.project_isOnGoing
        });
        newProject.project_holders.push(user)
        newProject.save((err)=>{
            if(err){
                res.status(400).json({
                    success:false,
                    message:"fail to save project",
                    data:err
                }) 
            }else{
                res.status(200).json({
                    success:true,
                    message:'project saved',
                    data: newProject
                })
            }
        })
    })

}

exports.show_project = (req, res)=>{
    Project.find({},(err, docs)=>{   
    if(err){
        res.status(422).json({
            success: false,
                message: "Fail to collect data",
                data: docs
        })
    }else{
        res.status(200).json({
            success: true,
            message: "Data collected",
            data: docs
        })  
    }
    })
}

exports.delete_project = (req,res)=>{
    Project.findByIdAndDelete(req.params.id, (err)=>{
        if(!err){
            res.status(200).send({
                success:true,
                message:"project is deleted"
            })
        }else{
            res.status(500).send({
                success:false,
                message:"project is not deleted"
            })
        }
    })
}
exports.update_project=(req,res)=>{
    Project.findByIdAndUpdate(req.params.id, {$set:req.body},(err,updatedUser)=>{
        if(err){
            res.send(err)
        }else{
            res.status(201).send({
                success:true,
                message:"Project objects are sucessfully updated"
            })
        }
    })
}
exports.show_project_id = (req, res)=>{

     Project.findById(req.params.id,(err, docs)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send({
                success:true,
                data:docs
            })
        }
    })
}