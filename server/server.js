import express from "express"
import cors from "cors"
import "dotenv/config"
import multer from "multer"
import { connectDB } from "./config/connectDB.js"
import authRouter from "./Routes/authRouter.js"
import employeeRouter from "./Routes/employeeRouter.js"
const app = express()

const PORT = process.env.PORT || 4000

// * Middlewares 
app.use(cors())
app.use(express.json())
app.use(multer().none())


// * Routes
app.get("/",(req,res)=>{
    res.send("Server is runing now.....")
})
app.use("/api/auth",authRouter)
app.use("/api/employees ",employeeRouter)


// * Run DB
await connectDB()
// * Run Server

app.listen(PORT,()=>{
    console.log("Server is runing now..... on PORT " + PORT); 
})