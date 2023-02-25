import ReviewsInfoModel from "../models/ReviewsInfo.js"

/*class ReviewController {
   async create(req, res, next) {
      try {
         let {deviceId, userName, positive, negative, rate, comment} = req.body
         const device = await ReviewsInfo.create({deviceId, userName, positive, negative, rate, comment});
      return res.json(device)
      } catch (e) {
         next(ApiError.badRequest(e.message))
      }
   }

   async getAll(req, res) {
      const review = await ReviewsInfo.findAll()
      return res.json(review)
   }
}

module.exports = new ReviewController()*/

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
         message: 'Не удалось создать статью',
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
         message: 'Не удалось получить статьи',
      });
   }
};