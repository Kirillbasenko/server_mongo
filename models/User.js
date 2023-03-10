import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
   email: {type: String, required: true, unique: true},
   password: {type: String, required: true},
   role: {type: String, default: "USER"},
   name: {type: String, default: "Анонимус"},
}, {
   timestamps: true
})

export default mongoose.model("User", UserSchema )