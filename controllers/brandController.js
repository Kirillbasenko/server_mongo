import BrandModel from "../models/Brand.js"

export const create = async (req, res) => {
   try {
      const doc = new BrandModel({
         name: req.body.name,
      });

      const brand = await doc.save();

      res.json(brand);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не вдалось створити бренд',
      });
   }
};

export const getAll = async (req, res) => {
   try {
      const brands = await BrandModel.find();
      res.json(brands);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не вдалось получити бренд',
      });
   }
};
