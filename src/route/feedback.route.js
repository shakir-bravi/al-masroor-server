import { Router } from "express";
import { Feedback } from "../controller/Feedback.controoler.js";
import { upload } from './../middleware/multer.middleware.js';


const FeedbackRoute  = Router();
//  Attaching The Midldeware
FeedbackRoute.post("/feedback",upload.none(), Feedback);

export {FeedbackRoute}