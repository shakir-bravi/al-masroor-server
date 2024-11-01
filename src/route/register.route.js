import { Router } from "express";
import { Register } from "../controller/Register.controller.js";
import { upload } from './../middleware/multer.middleware.js';


const RegisterRoute   = Router();

RegisterRoute.post("/register",upload.fields(
    [{name:"photo" , maxCount:1} , {name:"cnicphoto", maxCount:1}]
) ,Register)


export {RegisterRoute}