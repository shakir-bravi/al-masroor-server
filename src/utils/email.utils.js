// Import the Nodemailer package, which is used to send emails in Node.js.

import nodemailer from "nodemailer";
import dotenv from "dotenv";


dotenv.config({path:".env"})


const SendEmail = async (to,subject,text,html)=>{

try {

    var transporter = await nodemailer.createTransport({
        service: 'gmail',   // The email service to be used for sending the email (in this case, Gmail).
        auth: { // Authentication credentials required to access the email service.
          user: process.env.COMPANY_EMIAL, // The Gmail address from which the email will be sent.
          pass: process.env.APP_PASSWORD   // The app-specific password for Gmail authentication.
        }
    });
    

    var mailOptions = {
        from: 'dostmuhammadmalhoo@gmail.com', // The sender's email address (same as the authenticated user).
        to: to, // The recipient's email address.
        subject: subject, // The subject line of the email.
        text: text, // The plain-text content of the email body.
        html:html
    };    


await transporter.sendMail(mailOptions, function(error, info) {
        // This callback function handles the result of the email sending attempt.
        if (error) { // If there is an error, log it to the console.
          console.log(error);
        } else { // If the email is sent successfully, log a confirmation message.
          console.log('Email sent: ' + info.response); // 'info.response' contains the response message from the email server.
        }
    });
    
} catch (error) {

    console.log("ERROR On Emial.utils.js"+error);
    
    
}



};

export {SendEmail}

