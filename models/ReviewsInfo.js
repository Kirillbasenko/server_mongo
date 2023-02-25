import mongoose from "mongoose"

const ReviewsInfoSchema = new mongoose.Schema({
   deviceId: {type: Number, unique: true},
   userName: {type: String,  unique: true},
   positive: {type: String, unique: true},
   negative: {type: String, unique: true},
   rate: {type: Number, unique: true},
   comment: {type: String, unique: true},
}, {
   timestamps: true
})

export default mongoose.model("ReviewsInfo", ReviewsInfoSchema )