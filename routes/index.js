import {Router} from "express"

import brandRouter from "./brandRouter.js"
//const deviceRouter = require("./deviceRouter")
//const typeRouter = require("./typeRouter")
//import userRouter from "./userRouter"
//const reviewRouter = require("./reviewRouter")

const router = new Router()

//router.use("/user", userRouter)
//router.use("/type", typeRouter)
router.use("/brand", brandRouter)
//router.use("/device", deviceRouter)
//router.use("/review", reviewRouter)

export default router