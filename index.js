import jwt from "jsonwebtoken"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from "./models/User.js"
import bcrypt from "bcrypt"
import multer from "multer"
import router from "./routes/index.js"

import { validationResult } from 'express-validator';

import {registerValidation} from "./validations.js"

const PORT = process.env.PORT || 5000

mongoose
   .connect("mongodb+srv://kirill:elizaveta@node-blog.3w2atvr.mongodb.net/shop?retryWrites=true&w=majority")
   .then(() =>  console.log("DB ok"))
   .catch((e) => console.log(e))


const app = express()

const storage = multer.diskStorage({
   destination: (_, __, cb) => {
      cb(null, "static")
   },
   filename: (_, file, cb) => {
      cb(null, file.originalname)
   }
})

const upload = multer({storage})

app.use(cors())
app.use(express.json())
app.use("/api", router)

app.post("/upload", upload.single("image"), (req, res) => {
   res.json({url: `/static/${req.file.originalname}`})
})

app.get("/", (req, res) => {
   res.status(200).json({message: "Working"})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
