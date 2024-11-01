import dotenv from "dotenv"
import { DBConnection } from "./db/connection.db.js";
import { app } from "./app.js";

dotenv.config({path:".env"});
let port  = process.env.PORT || 3051;


DBConnection()
.then(()=>{
    app.listen(port,()=>{
        console.log(`=> App is Listening On http://localhost:${port}`);

    })
})
.catch((err)=>console.error("ERROR On index.js 17"+err)
)