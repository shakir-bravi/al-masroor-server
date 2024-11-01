import { feedback } from "../models/feedback.model.js";
import { APIError } from "../utils/apierro.utils.js";
import { APIResponse } from "../utils/apiresponse.utils.js";
import { asyncHandler } from "../utils/asynandler.utils.js";
import { SendEmail } from "../utils/email.utils.js";



const Feedback = asyncHandler( async (req,res) =>{
    console.log(req.url);


//  Accepting THe FeedBack 
//  1) Acccess All Required Fileds  -- If any not the send APIError;
//  2) Entry in DB
//  3) findById if document is success fully Created then send the Email From Client -- Foe Thanks
//  4) send Res

let  {rating,name,email,message} = req.body;

console.log(rating,name,email,message);

let requiredFields = ["rating", "name", "email", "message"];

for (let field of requiredFields) {
    if (!req.body[field]) {
// res.status(400);
throw new APIError(` Please Write a ${field}`,401);


        // return res.status(400).json({

        //     success: false,
        //     message: `The field ${field} is required`
        // });
    }
}


const FeedbackDB  =await feedback.create({
    rating,
    name,
    email,
    message
})
// console.log(FeedbackDB);

const FindFeedback = await feedback.findById(FeedbackDB._id);

const emailmesssage = `<html>

<body style="height: 100vh;width: 100%; padding: 10px ;background-color:#0A0308 ; color: ivory;">
    <center><img  style="width: 200px; height: 200px; border-radius: 100%;" src ="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729226000/Al-Masroor-Royal-Hostel/qg2sqa8qzkxkckixd6i2.jpg" alt=""></center>
<center>
    <h1 style="color: #edb64a;">AL-Masroor Royal Hostel Larkana</h1>
</center>
<h2>Dear ${name}</h2>

<p>We sincerely appreciate your <b style="color: #edb64a;">feedback!</b>  Thank you for taking the time to share your thoughts with us.</p>
<p>Your input is invaluable in helping us enhance our services. If you have any further suggestions, please don’t hesitate to reach out.</p>
<b style="text-decoration:  underline 1px solid #edb64a ; text-underline-offset: 5px;">Warm Regards : </b>

<div style="line-height: 1px;">
<h3>
 MR : Engr Masroor Sodhar <br> 
</h3>
<h5 style="color: #edb64a; padding-left: 50px;" >(Managing Director) </h5>

</div>

<div style="line-height: 1px; padding-bottom: 20px;">
    <h3>
       Dost Muhammad <br> 
    </h3>
    <h5 style="color: #edb64a; padding-left: 50px;" >(Incharge )</h5>
    <a style="color: white; text-decoration: underline 1px solid yellow;" href="">almasroohstl.com</a>
    
    </div>
</body>

</html>`;


if(FindFeedback){
    console.log("Feed Back Seccess Fully");
    // (to,subject,text,html)
    SendEmail(email,"Al-Masroor-Royal-Hostel-Larkana","Masror sodhar",emailmesssage)
}
else{
    console.log("FeedBack not Succs Full :)");
    // SendEmail("5678","Al-Masroor-Royal-Hostel-Larkana","lll",`<h1>Thanks For Feedback Us.</h1>`)

    
}
























res.status(200).json(
    new APIResponse("Hello Feed Back Section !!" ,"Feed Back Success Fully !!", 200)
)




})


export {Feedback}