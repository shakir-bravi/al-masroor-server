import mongoose from "mongoose";


const FeedbackModel = new mongoose.Schema({
    rating:{
        type: Number,
    },
    name:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    message:{
        type:String,
        required:true,
    }
},{timestamps:true})


export const feedback  = mongoose.model("feedback" , FeedbackModel);

