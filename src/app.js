import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express()


// App Configuration

app.use(express.urlencoded({limit:"200kb", extended:true}))
app.use(express.json({limit:"200kb"}))
app.use(express.static("public"))
app.use(cors())
app.use(cookieParser())

//  Route Importing 
import { FeedbackRoute } from "./route/feedback.route.js";
import { RegisterRoute } from "./route/register.route.js";

//  Route Declaration
app.use("/user",FeedbackRoute)
app.use("/user", RegisterRoute)

export {app}