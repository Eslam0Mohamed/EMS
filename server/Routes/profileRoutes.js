import {Router} from "express"
import { protect, protectAdmin } from "../middleware/authMiddleware.js"
import { getProfile, updateProfile } from "../contollers/profileController.js"
const profileRouter = Router()
profileRouter.get("/",protect,getProfile)
profileRouter.post("/",protect,updateProfile)

export default profileRouter