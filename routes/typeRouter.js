/*const Router = require("express")
const router = new Router()
const typeController = require("../controllers/typeController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"), typeController.create)
router.get("/",typeController.getAll)

module.exports = router*/

import {Router} from "express"

import {typeController} from "../controllers/index.js"

const router = new Router()

router.post("/", typeController.create)
router.get("/", typeController.getAll)

export default router