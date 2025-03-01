const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

const {DB_URL}=process.env


mongoose
.connect(DB_URL)
.then(()=>  console.log("MongoDb connected successfully!"))
.catch(err=> console.log(err))







// const connectDB=async ()=>{
//    try{
//     await mongoose.connect(DB_URL)
//     console.log("MongoDb connected successfully!")
//    }catch(err){
//     console.log(err)
//     process.exit(1);
//    }
    
// }
// module.exports=connectDB