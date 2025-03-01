const express =require("express")
const router=express.Router()
const UserCtrl=require("../controllers/userController")


router.post("/register",UserCtrl.register)
router.post("/login",UserCtrl.login)



module.exports=router