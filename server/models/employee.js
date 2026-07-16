import mongoose from "mongoose"
import { DEPARTMENTS } from "../constants/departments.js"

const employeeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String, required: true ,},
    basicSalary: { type: Number, required: true,default:0 },
    allowances: { type: Number, required: true ,default:0},
    deductions: { type: Number, required: true ,default:0},
    employmentStatus: { type: String, required: true ,enum:["ACTIVE","INACTIVE"],default:"ACTIVE" },
    joinDate: { type: Date, required: true ,},
    isDeleted: { type: Boolean, required: true ,},
    bio: { type: String, default:""},
    departments:{type:String,required:true,enum:DEPARTMENTS}
}, { timestamps: true })


const employeeModel = mongoose.model("Employee", employeeSchema)
export default employeeModel