import ReviewsInfoModel from "../models/ReviewsInfo.js"

export const create = async (req, res) => {
   try {
      let {deviceId, userName, positive, negative, rate, comment} = req.body
      const doc = new ReviewsInfoModel({
         deviceId,
         userName,
         positive,
         negative,
         rate,
         comment
      });

      const reviews = await doc.save();

      res.json(reviews);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не вдалось створити відгук',
      });
   }
};

export const getAll = async (req, res) => {
   try {
      let {deviceId} = req.query
      const brands = await ReviewsInfoModel.find({deviceId});
      res.json(brands);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Не вдалось получити відгук',
      });
   }
};