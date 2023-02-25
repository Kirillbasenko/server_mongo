import mongoose from "mongoose"

const DeviceSchema = new mongoose.Schema({
   name: {type: String, require: true, unique: true},
   price: {type: Number, require: true},
   rating: {type: Number, default: 0},
   img: {type: String, require: true},
   brandId: {type: String, require: true},
   typeId: {type: String, require: true},
   current: {type: Number, default: 1},
   favorite: {type: Number, default: 0},
   info: {type: Array, default: []}
}, {
   timestamps: true
})

export default mongoose.model("Device", DeviceSchema )