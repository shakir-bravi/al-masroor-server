import mongoose from "mongoose";



const RegisterSchema = new mongoose.Schema({
formno:{
    type:Number
},
date :{
    // type:Date
    type:String
},
name:{
    type:String
},
fname :{
    type:String
},
cnic:{
    type:String
},
cast:{
    type:String
},
religion:{
    type:String
},
contact:{
    type:Number
},
photo:{
    type:String
},
cnicphoto:{
    type:String
},
email:{
    type:String
},
about:{
    type:String
},
emergencycontact:{
    type:Number
},
address:{
    type:String
}






},{timestamps:true})

export const RegisterMember  = mongoose.model("RegisterMember",RegisterSchema);




