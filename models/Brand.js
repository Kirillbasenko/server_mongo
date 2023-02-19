import mongoose from "mongoose"

const BrandSchema = new mongoose.Schema({
   name: {type: String, required: true, unique: true},
}, {
   timestamps: true
})

export default mongoose.model("Brand", BrandSchema )