import mongoose from "mongoose"

const DeviceInfoSchema = new mongoose.Schema({
   title: {type: String, required: true,},
   description: {type: String,  required: true,},
})

export default mongoose.model("DeviceInfo", DeviceInfoSchema )