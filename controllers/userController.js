const bcrypt=require("bcrypt") 
const jwt=require("jsonwebtoken") 
const User=require("../models/User")

const register=async (req ,res)=>{
    try{
        const {username,email,password}=req.body 
        const hashedPassword=await bcrypt.hash(password,10) 

        const user=new User({username,email,password:hashedPassword})
        await user.save()

        res.status(201).json({
            msg: "User Registered Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            msg: err.message
        })
    }
}

const login =async (req ,res,next)=>{
    try {
        const {email,password}=req.body 
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({
                msg: "User not found"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({
                msg: "Invalid Credentials"
            })
        }

        const token=jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn:"1h"})
        res.status(200).json({
            msg: "Login Successgul",
            token
        })
        next()
    }
    catch(err){
        msg: err.message
    }
}

module.exports={register,login}