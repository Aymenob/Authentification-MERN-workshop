const express=require("express")
const app=express()
const router=require("./Routes/route")
const mongoose=require("mongoose")
const cors=require("cors")
app.use(express.json())
 require("dotenv").config({path:"./Config/.env"})
 app.use(cors({origin:"http://localhost:3000"}))
mongoose.connect(process.env.URL,()=>console.log("database is connected"))
app.use("/",router)
app.listen(8081,()=>console.log("server is running.."))

