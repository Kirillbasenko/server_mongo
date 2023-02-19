import jwt from "jsonwebtoken"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from "./models/User.js"
import bcrypt from "bcrypt"
import router from "./routes/index.js"

import { validationResult } from 'express-validator';

import {registerValidation} from "./validations.js"

const PORT = process.env.PORT || 5000

mongoose
   .connect(process.env.MONGO_DB)
   .then(() =>  console.log("DB ok"))
   .catch((e) => console.log(e))


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", router)
app.post("/auth/register",  registerValidation, async (req, res) => {
   const errors = validationResult(req)
   if(!errors.isEmpty()){
      return res.status(400).json(errors.array())
   }
   const {email, password, name} = req.body

   const salt = await bcrypt.genSalt(10)
   const hashPassword = await bcrypt.hash(password, salt)

   const role = "USER"

   const doc = new UserModel({
      email,
      name,
      password: hashPassword,
      role: role
   });

   const user = await doc.save()

   const token = jwt.sign({
      
   })

   res.json(user)
})

app.get("/", (req, res) => {
   res.status(200).json({message: "Working"})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
