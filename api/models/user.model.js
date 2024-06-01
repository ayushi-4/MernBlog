import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture: {
        type: String,
        default: "https://i.pinimg.com/1200x/4e/55/a5/4e55a5a5daa42b97dce7856b9ecb6502.jpg " ,
    },
    isAdmin:{
        type : Boolean,
        default: false,
    },
},
    {
        timestamps: true
    }
);
const User = mongoose.model('User',userSchema);

export default User;