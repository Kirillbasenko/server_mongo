import TypeModel from "../models/Type.js"
//import ApiError from "../error/ApiError"

/*class TypeController {
   async create(req, res) {
      const {name} = req.body
      const type = await Type.create({name})
      return res.json(type)
      
   }

   async getAll(req, res) {
      const types = await Type.findAll()
      return res.json(types)
   }
}*/

export const create = async (req, res) => {
   try {
      const doc = new TypeModel({
         name: req.body.name,
      });

      const type = await doc.save();

      res.json(type);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось создать статью',
      });
   }
};

export const getAll = async (req, res) => {
   try {
      const types = await TypeModel.find();
      res.json(types);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не удалось получить статьи',
      });
   }
};

//module.exports = new TypeController()