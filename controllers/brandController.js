//import ApiError from "../error/ApiError"
import BrandModel from "../models/Brand.js"

/*class BrandController {
   async create(req, res) {
      const doc = new BrandModel({
         name: req.body.name,
      });

      const brand = await doc.save();

      return res.json(brand)
   }

   async getAll(req, res) {
      const brands = await Brand.findAll()
      return res.json(brands)
   }
}*/

export const create = async (req, res) => {
   try {
      const doc = new BrandModel({
         name: req.body.name,
      });

      const post = await doc.save();

      res.json(post);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось создать статью',
      });
   }
};

export const getAll = async (req, res) => {
   try {
      const posts = await BrandModel.find();
      res.json(posts);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось получить статьи',
      });
   }
};

//module.exports = new BrandController()