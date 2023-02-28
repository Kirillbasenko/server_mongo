import DeviceModel from "../models/Device.js"

export const create = async (req, res) => {
   try {
      let {name, price, brandId, typeId, current, favorite, img, info} = req.body

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

   return res.json(device)
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не вдалось створити товар',
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
      return res.json(devices)
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не вдалось повернути товар',
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
         message: 'Не вдалось повернути товар',
      });
   }
};