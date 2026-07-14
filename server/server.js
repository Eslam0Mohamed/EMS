import express from "express"
import cors from "cors"
import "dotenv/config"
import multer from "multer"
import { connectDB } from "./config/connectDB.js"
const app = express()
//  ! 6:47
const PORT = process.env.PORT || 4000

// * Middlewares 
app.use(cors())
app.use(express.json())
app.use(multer().none())


// * Routes
app.get("/",(req,res)=>{
    res.send("Server is runing now.....")
})


// * Run DB
await connectDB()
// * Run Server

app.listen(PORT,()=>{
    console.log("Server is runing now..... on PORT " + PORT); 
})