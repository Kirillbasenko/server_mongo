import mongoose from "mongoose"

const DeviceSchema = new mongoose.Schema({
   name: {type: String, require: true, unique: true},
   price: {type: Number, require: true},
   rating: {type: Number, default: 0},
   img: {type: String, require: true},
   brandId: {type: Number, require: true},
   typeId: {type: Number, require: true},
   current: {type: Number, default: 1},
   favorite: {type: Number, default: 0},
   info: {type: Array, default: []}
}, {
   timestamps: true
})

export default mongoose.model("Device", DeviceSchema )