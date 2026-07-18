import { Router } from "express"
import { protect } from "../middleware/authMiddleware.js"
import { clockInOut, getAttendance } from "../contollers/attendanceController.js"
const attendanceRouter = Router()
attendanceRouter.post("/", protect, clockInOut)
attendanceRouter.get("/", protect, getAttendance)
export default attendanceRouter