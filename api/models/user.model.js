import mongoose from "mongoose";

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
        default: "https://i.pinimg.com/736x/f0/d3/28/f0d328d2f116501a495f7981376a8d3f.jpg " ,
    }
},
    {
        timestamps: true
    }
);
const User = mongoose.model('User',userSchema);

export default User;