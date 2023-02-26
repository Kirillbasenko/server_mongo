import DeviceModel from "../models/Device.js"
import DeviceInfoModel from "../models/DeviceInfo.js"
import { v4 as uuidv4 } from 'uuid';
import path from "path"


/*class DeviceController {
   async create(req, res, next) {
      try {
         let {name, price, brandId, typeId, current, favorite, info} = req.body
         const {img} = req.files
         let fileName = uuid.v4() + ".jpg"
         img.mv(path.resolve(__dirname, '..', 'static', fileName))
         const device = await Device.create({name, price, brandId, typeId, img: fileName, current, favorite});
         if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
               DeviceInfo.create({
                  title: i.title,
                  description: i.description,
                  deviceId: device.id
               })
            )
      }
      return res.json(device)
      } catch (e) {
         next(ApiError.badRequest(e.message))
      }
   }

   async getAll(req, res) {
      let {brandId, typeId, limit, page} = req.query
      page = page || 1
      limit = limit || 9
      let offset = page * limit - limit
      let devices
      if(!brandId && !typeId){
         devices = await Device.findAndCountAll({limit, offset})
      }
      if(brandId && !typeId){
         devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
      }
      if(!brandId && typeId){
         devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
      }
      if(brandId && typeId){
         devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
      }
      return res.json(devices)
      
   }

   async getOne(req, res) {
      const {id} = req.params
      const device = await Device.findOne(
         {where: {id},
         include: [{model: DeviceInfo, as: "info"}],
         }
      )
      return res.json(device)
   }
}

module.exports = new DeviceController()*/

export const create = async (req, res) => {
   try {
      let {name, price, brandId, typeId, current, favorite, img, info} = req.body
      /*const {img} = req.files
      let fileName = uuidv4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))*/
      const doc = new DeviceModel({
         name,
         price,
         brandId,
         typeId,
         current,
         favorite,
         img,
         info
      });

      const device = await doc.save()
      /*if (info) {
         info = JSON.parse(info)
         let arr = info.map(i =>
            new DeviceInfoModel({
               title: i.title,
               description: i.description,
               deviceId: device._id
            })
         )
         const infos = await arr.save()
      }*/
   return res.json(device)
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось создать товар',
      });
   }
};

export const getAll = async (req, res) => {
   try {
      let {brandId, typeId, limit, page} = req.query
      page = page || 1
      limit = limit || 9
      let offset = page * limit - limit
      let devices
      let query = await (DeviceModel.find()).length
      if(!brandId && !typeId){
         devices = await DeviceModel.find().limit(limit).skip(offset).exec()
      }
      if(brandId && !typeId){
         devices = await DeviceModel.find({brandId, limit, offset}).limit(limit).skip(offset).exec()
      }
      if(!brandId && typeId){
         devices = await DeviceModel.find({typeId, limit, offset}).limit(limit).skip(offset).exec()
      }
      if(brandId && typeId){
         devices = await DeviceModel.find({typeId, brandId, limit, offset}).limit(limit).skip(offset).exec()
      }
      return res.json({devices, query})
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось вернуть товар',
      });
   }
};

export const getOne = async (req, res) => {
   try {
      const {id} = req.params
      const device = await DeviceModel.findOne({_id: id})
      return res.json(device)
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось вернуть товар',
      });
   }
};