const ApiError = require("../error/ApiError")
const {ReviewsInfo} = require("../models/models")

class ReviewController {
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

module.exports = new ReviewController()