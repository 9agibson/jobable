import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        max: 50,
        validate:{
            validator:validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        min: 6,
        select: false,
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'lastName', 
    },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'my city',
    }
},
);
UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({userID: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

UserSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword,this.password)
    return isMatch
}

export default mongoose.model("User", UserSchema);