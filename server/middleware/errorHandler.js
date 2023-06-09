const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next)=>{
    
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something Went Wrong, Please Try Again'
    }

    if(err.name === 'ValidationError')
    {
        customError.msg = Object.values(err.errors)
        .map((item)=> item.message)
        .join(',')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    if(err.code && err.code === 11000 )
    {
        customError.msg = `Entry for ${Object.keys(
            err.keyValue
            )} field already used, please try with another email`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    
    if(err.name === 'CastError') {
        customError.msg = `No item found with id : ${err.value}`
        customError.statusCode = StatusCodes.NOT_FOUND
    }
    return res.status(customError.statusCode).json({ "msg":customError.msg })
}
 
module.exports = errorHandlerMiddleware