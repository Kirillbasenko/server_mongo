import mongoose from "mongoose"

const ReviewsInfoSchema = new mongoose.Schema({
   deviceId: {type: String, required: true,},
   userName: {type: String, required: true,},
   positive: {type: String, required: true,},
   negative: {type: String, required: true,},
   rate: {type: Number, required: true,},
   comment: {type: String, required: true,},
}, {
   timestamps: true
})

export default mongoose.model("ReviewsInfo", ReviewsInfoSchema )