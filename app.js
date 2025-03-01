const express =require("express") 
const app=express() 
// const cors=require("cors")
const dotenv=require("dotenv") 
dotenv.config()
require("./config/db")
const batteryRoutes=require("./routes/batteryRoutes")
const userRoutes=require("./routes/userRoutes")

app.use(express.json()) 
// app.use(cors())
app.use('/api/user',userRoutes)
app.use("/api/battery",batteryRoutes)


const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})