const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Enter a first name'],
        min: 2,
        max: 12
    },
    lastName:{
        type: String,
        required: [true, 'Enter a last name'],
        min: 2,
        max: 12
    },
    email:{
        type: String,
        required: [true, 'Enter an email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid email'],
        unique: true
    },
    phone:{
        type: Number,
    },
    password:{
        type: String,
        required: [true, 'Enter a password'],
        minlength: 6,
    },
    followers:{
        type: [ mongoose.Types.ObjectId ],
        ref: 'user'
    }
},{timestamps: true})

userSchema.pre('save', async function(){
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
})

userSchema.methods.validatePassword = async function(password){
    console.log(password, this.password)
    const result = await bcryptjs.compare(password, this.password)
    return result
}

userSchema.methods.createJWT = async function(){
    return jwt.sign({
        userId: this._id,
        firstName: this.firstName
    },process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}


module.exports = mongoose.model('User', userSchema)