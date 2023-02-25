//import ApiError from "../error/ApiError.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
//const {User, Basket} = require("../models/models")
import UserModel from "../models/User.js"

const generateJwt = (_id) => {
   return jwt.sign(
      {_id},
      "random_secret_key123",
      {expiresIn: '24h'}
   )
}

export const registration = async (req, res) => {
   try {
      const {email, role, name} = req.body

      if(!email || !req.body.password) {
         return res.status(404).json({message: "Некорректные данные"})
      }

      const candidate = await UserModel.findOne({email: email})
      if(candidate){
         return res.status(404).json({message: "Пользователь с таким email уже существует"})
      }

      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(req.body.password, salt)

      const doc = new UserModel({
         email,
         name,
         password: hash,
         role
      });

      const user = await doc.save()

      const token = generateJwt(user._id)

      const {password, ...userData} = user._doc

      res.json({
         ...userData,
         token
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Ошибка',
      });
   }
};

export const login = async (req, res) => {
   try {
      const {email} = req.body
      const user = await UserModel.findOne({email: email})

      if(!user){
         return res.status(404).json({message: "Пользователь не найдет"})
      }
      const comparePassword = bcrypt.compare(req.body.password, user._doc.password)
      if(!comparePassword){
         return res.status(404).json({message: "Неверный логин или пароль"})
      }

      const token = generateJwt(user._id)

      const {password, ...userData} = user._doc

      res.json({
         ...userData,
         token
      });

   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Ошибка',
      });
   }
};
