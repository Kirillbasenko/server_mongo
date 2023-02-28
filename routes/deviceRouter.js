import {Router} from "express"

import {deviceController} from "../controllers/index.js"
import { deviceCreateValidation } from "../validations.js"

const router = new Router()

router.post("/", deviceCreateValidation, deviceController.create)
router.get("/", deviceController.getAll)
router.get("/:id", deviceController.getOne)

export default router