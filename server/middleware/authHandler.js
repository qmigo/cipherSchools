const jwt = require('jsonwebtoken')
const CustomAPIError = require('../error/index')
const {StatusCodes} = require('http-status-codes')


const authenticateUser = async (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer '))
    throw new CustomAPIError(StatusCodes.UNAUTHORIZED, 'Invalid authorization header')

    const token = authHeader.split(' ')[1]
    
    try {
        const payLoad = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { name: payLoad.name, userId: payLoad.userId }
        next()
    } catch (error) {
        throw new CustomAPIError(StatusCodes.UNAUTHORIZED, 'Authentication Invalid')
         
    }
}

module.exports = authenticateUser