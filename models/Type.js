import mongoose from "mongoose"

const TypeSchema = new mongoose.Schema({
   name: {type: String, required: true, unique: true},
}, {
   timestamps: true
})

export default mongoose.model("Type", TypeSchema )