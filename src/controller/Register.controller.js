import { RegisterMember } from "../models/register.model.js";
import { APIResponse } from "../utils/apiresponse.utils.js";
import { asyncHandler } from "../utils/asynandler.utils.js";
import { SendEmail } from "../utils/email.utils.js";
import { UploadOnCloudinary } from "../utils/uploadOnCloudinary.utils.js";


const Register = asyncHandler( async (req,res) =>{


// Register The User

//  Get Data from Frontend ;
//  Get The photo and And cnicphoto >> multer >> req.files
// Upload the cnic and photo on Cloudinary then get the URL;
//  Create Enry in DB
//  Find Register User -- if Finded Then Send Email
//  Send Res



const { formno,date,name,fname,cnic,cast,religion, contact,email,about,emergencycontact,address} = await req.body;
const photo = req.files.photo[0].path;
const cnicphoto = req.files.cnicphoto[0].path;

// console.log(formno,date,name,fname,cnic,cnicphoto,cast,religion,contact,photo,email,about,emergencycontact);



const photoURL = await UploadOnCloudinary(photo);
const cnicURL = await UploadOnCloudinary(cnicphoto);

console.log(req.url);





const UserEntry = await RegisterMember.create({


formno,
date,
name,
fname,
cast,
cnic,
religion,
contact,
email,
address,
about,
emergencycontact,
photo : photoURL,
cnicphoto:cnicURL


});


const UserConfirm = await RegisterMember.findById(UserEntry._id)
const htmlmsg= `<h1>Hello , ${name}</h1>`

if(UserConfirm){
    // console.log("USer Confirmed Created " + UserConfirm);
    // (to,subject,text,html)
    SendEmail(email,"AL-Masrroor-Royal-Hostel-Larkna" ,"" , htmlmsg )

}else{
    console.log("USer Not Created ");
    
}


res.status(200).json(
    new APIResponse( UserConfirm,"Response Success Fully" ,201))


})


export {Register}