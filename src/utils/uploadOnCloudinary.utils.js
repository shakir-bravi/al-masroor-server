import { v2 as cloudinary, v2 } from "cloudinary";
import dotenv  from 'dotenv';
import { unlinkSync } from 'node:fs';
dotenv.config ({path:".env"});






// / Configuration >.>.>.>.>.>.>.>.>.>.>.>.>.>.

cloudinary.config({


cloud_name : process.env.CLOUD_NAME,
api_key:process.env.API_KEY,
api_secret:process.env.API_SECRET

});


const UploadOnCloudinary = async (path)=>{

try {

    if(!path) return;

const response = await cloudinary.uploader.upload(path)

 await unlinkSync(path);
console.log(` [--] File Uploded On Cloudinary \nName : ${response. original_filename} \nLive URL : ${response.url}`) ; 

return response.url

} catch (error) {

    console.log("File On Uploaded On cloudinary "+error);
    
    unlinkSync(path);
    return null;
}


}


export {UploadOnCloudinary}