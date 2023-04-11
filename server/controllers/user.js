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

    const user = await User.findByIdAndUpdate(req.query.userId, req.body,{ runValidators: true, new: true})
    res.status(StatusCodes.OK).json({msg:"success", user})
}


const updateUserInterest = async(req, res)=>{
    const {dataInterst} = req.body
    await User.findByIdAndUpdate(req.query.userId,{
        interest: dataInterst
    },{
        runValidators: true,
        new: true
    })

    res.status(StatusCodes.OK).json({success:true})
}

const addFollower = async(req, res)=>{
    const {followerId} = req.body
    const user = await User.findByIdAndUpdate(req.query.userId,{
        $addToSet: {
            'followers': followerId
        }
    },{runValidators: true, new: true})
    res.status(StatusCodes.OK).json({user})
}

const getFollowerDetails = async(req, res)=>{
    const {pageSize=5, page=1, userId} = req.query

    const skip = Number(pageSize*(page-1))
    const limit = Number(pageSize)
    
    const user = await User.findById(userId).slice('followers',[skip, limit])

    const list = await Promise.all(user.followers.map(async({_id})=>{
        return await User.findById(_id).select("-password")
    }))
    
    res.status(StatusCodes.OK).json({count:list.length,list})
      
}

const changePassword = async(req, res)=>{
    const {oldPassword, newPassword} = req.body
    
    if(!oldPassword || !newPassword)
    throw new CustomAPIError(StatusCodes.BAD_REQUEST, 'All fields are mandatory')

    const user = await User.findById(req.query.userId)
    
    if(!user)
    throw new CustomAPIError(StatusCodes.BAD_REQUEST, 'User not found')

    const isPasswordMatch = await user.validatePassword(oldPassword)
    
    if(isPasswordMatch===false)
    throw new CustomAPIError(StatusCodes.BAD_REQUEST, 'Old Password not matched')
    
    await User.findByIdAndUpdate(req.query.userId,
        {password: newPassword},
        {
            runValidators: true,
            new: true
        }
        )
    res.status(StatusCodes.OK).json({success:true})
}

const getUser = async(req, res)=>{
    if(!req.query.userId)
    throw new CustomAPIError(StatusCodes.BAD_REQUEST, 'userId is missing ')

    const user = await User.findById(req.query.userId).select("-password")
    res.status(StatusCodes.OK).json({user})
}
module.exports = {
    regsiter,
    login,
    updateUser,
    updateUserInterest,
    getFollowerDetails,
    getUser,
    addFollower,
    changePassword
}