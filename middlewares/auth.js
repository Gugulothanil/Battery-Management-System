const jwt =require("jsonwebtoken") 

const secret=process.env.JWT_SECRET || 'supersecret'

const verifyToken=async (req,res,next)=>{
    const token=req.headers["authorization"]?.split(" ")[1]
    if(!token){
        return res.status(401).json({
            msg: "no token provided"
        })
    }
    jwt.verify(token,secret,(err,decoded)=>{
        if(err){
            return res.status(500).json({
                msg: "Faild to authenticate token"
            })
        }
        req.user=decoded 
        next()
    })

}

module.exports={verifyToken}