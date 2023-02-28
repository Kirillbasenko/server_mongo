import Router from "express"

import {reviewController} from "../controllers/index.js"

const router = new Router()

router.get("/:id", reviewController.getAll)
router.post("/:id", reviewController.create)

export default router