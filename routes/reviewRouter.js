const Router = require("express")
const router = new Router()
const ReviewsInfo = require("../controllers/reviewController")

router.get("/:id", ReviewsInfo.getAll)
router.post("/:id", ReviewsInfo.create)

module.exports = router