import mongoose from "mongoose"

const DeviceInfoSchema = new mongoose.Schema({
   title: {type: String, unique: true},
   description: {type: String,  unique: true},
})

export default mongoose.model("DeviceInfo", DeviceInfoSchema )