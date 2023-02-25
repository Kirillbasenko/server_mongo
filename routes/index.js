import {Router} from "express"

import brandRouter from "./brandRouter.js"
import deviceRouter from "./deviceRouter.js"
import typeRouter from "./typeRouter.js"
import userRouter from "./userRouter.js"
import reviewRouter from "./reviewRouter.js"

const router = new Router()

router.use("/user", userRouter)
router.use("/type", typeRouter)
router.use("/brand", brandRouter)
router.use("/device", deviceRouter)
router.use("/review", reviewRouter)

export default router