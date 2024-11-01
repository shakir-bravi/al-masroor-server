

class APIResponse {

    constructor(data,message= "Success" , statuscode = 201){
        this.data = data;
        this.message = message;
        this.statuscode = statuscode;

    }
}

export{APIResponse}