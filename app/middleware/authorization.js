var jwt = require('jsonwebtoken')
exports.authorization = (req, res, next)=>{
    var token = req.headers.authorization
    if(token){
        jwt.verify(token, 'secret..', (err,decoded)=>{
            if(err){
                res.status(400).json({
                    success:false,
                    message: err
                })
            }else{
                console.log(decoded)
                req.decoded = decoded
                next()
            }
        });
    }else{
        res.status(400).json({
            success:false,
            message: "fail"
        })
        
    }

}