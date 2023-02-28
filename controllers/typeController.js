import TypeModel from "../models/Type.js"

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
         message: 'Не вдалось створити тип',
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
         message: 'Не вдалось получити тип',
      });
   }
};

