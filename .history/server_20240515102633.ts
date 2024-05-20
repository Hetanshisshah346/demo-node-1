import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mainRouter from "./src/routes/mainRoutes";
import db from  "./config/db"

dotenv.config()
const app = express()

db
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res) => {
 return res.status(200).json({status:true, message:"Project set-up done.."})
})

app.get("/", mainRouter)
app.listen(`${process.env.PORT}`, () => {
    console.log(`Server is running on this PORT:-${process.env.PORT}`)
})