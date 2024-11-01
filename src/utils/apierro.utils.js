class APIError extends Error {
    constructor(message = "Something Went Wrong :)", statusCode = 500, error = null) {
        super(message); 
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.error = error; // Optional, to store the original error if needed
    }
}

export { APIError };
