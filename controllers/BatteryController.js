// controllers/batteryController.js
const BatteryData = require("../models/BatteryData");
//const { get } = require("../routes/batteryRoutes");


const  addBatteryData= async (req, res) => {
    try {
      const data = await BatteryData.create(req.body);
      //await data.save();
      res.status(201).json({ status: "Data added successfully", data });
    } catch (err) {
      res.status(500).json({ status: "Add data failed", msg: err.message });
    }
  }
  
const getBatteryDataById=async (req,res)=>{
  try{
    const data=await BatteryData.find({battery_id:req.params.id})
    res.status(200).json({
      data
    })
  }
  catch(err){
    res.status(500).json({
      msg: err.message
    })
    
  }
}

const getBatteryField = async (req, res) => {
  try {
    const { id, field } = req.params; // Get battery_id & field from URL
    const { start, end } = req.query; // Get date range from query params

    let query = { battery_id: id };

    // Add date filter if start & end dates are provided
    if (start && end) {
      query.time = { 
        $gte: new Date(start),
         $lte: new Date(end)
         };
    }

    // Fetch only the selected field + time
    const data = await BatteryData.find(query).select(field + " time");

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};


const getAllBatteryData=async (req,res)=>{
    try{
        const data=await BatteryData.find()

        if(data.length==0){
            throw new Error("No data found")
        }
        res.status(200).json({
            status : "success from get all data",
            data
        })
  }
  catch(err){
    res.status(500).json({
        status : "failure from get all data",
        msg:err.message
    })
  }
}


module.exports={addBatteryData,getAllBatteryData,getBatteryDataById,getBatteryField}

