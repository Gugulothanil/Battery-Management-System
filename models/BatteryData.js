const mongoose=require("mongoose")

const BatterySchema = new mongoose.Schema({
    battery_id: { type: String, required: true, index: true },
    current: { type: Number, required: true },
    voltage: { type: Number, required: true },
    temperature: { type: Number, required: true },
    time: { type: Date, required: true, index: true }
});
const BatteryData=mongoose.model("BatteryData",BatterySchema)

module.exports=BatteryData