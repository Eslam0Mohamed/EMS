import {Router} from "express"
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from "../contollers/employeeController.js"
import { protect, protectAdmin } from "../middleware/authMiddleware.js"
const employeeRouter = Router()


employeeRouter.get("/",protect,protectAdmin,getEmployees)
employeeRouter.delete("/:id",protect,protectAdmin,deleteEmployee)
employeeRouter.put("/:id",protect,protectAdmin,updateEmployee)
employeeRouter.post("/",protect,protectAdmin,createEmployee)
export default employeeRouter