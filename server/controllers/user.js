const CustomAPIError = require('../error/index')
const {StatusCodes} = require('http-status-codes')
const User = require('../model/User')

const regsiter = async(req, res)=>{

    const { firstName, lastName, email, password, phone } = req.body
    if(!firstName || !lastName || !email || !password)
    throw new CustomAPIError(StatusCodes.BAD_REQUEST, "first name, last name, email and password are required fields")

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        phone
    })

    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res)=>{
    const {email, password} = req.body

    if(!email || !password)
    throw new CustomAPIError(StatusCodes.BAD_REQUEST, "email and password are required fields")

    const user = await User.findOne({email})

    if(!user)
    throw new CustomAPIError(StatusCodes.NOT_FOUND, "User not exists")

    const isPasswordMatch = await user.validatePassword(password)
    
    if(isPasswordMatch===false)
    throw new CustomAPIError(StatusCodes.UNAUTHORIZED, 'Password not matched')
    
    const token = await user.createJWT()
    res.status(StatusCodes.OK).json({token})
    
    
}

const updateUser = async(req, res)=>{

}

const updatePassword = async(req, res)=>{

}

const updateUserInterest = async(req, res)=>{

}

const getFollowerDetails = async(req, res)=>{

}

module.exports = {
    regsiter,
    login,
    updateUser,
    updatePassword,
    updateUserInterest,
    getFollowerDetails
}