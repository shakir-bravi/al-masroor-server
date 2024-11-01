const asyncHandler  = (fnx)=>{


    return (req,res,next)=>{

        Promise.resolve(fnx(req,res))
        .catch((err)=>next(err))
    }

}

export {asyncHandler}