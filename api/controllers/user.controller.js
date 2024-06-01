import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';


export const test =(req,res)=>{
    res.json({message:"api is working"})
};
export const updateUser = async(req,res, next) =>{
    // console.log(req.user);
   if(req.user.id != req.params.userId){
    return next(errorHandler(403,"you are not allowed to update the user"));
   }
    if(req.body.password){
        if(req.body.password.length< 6){
            return next(errorHandler(400,'password mut be atleast 6 characters'));
             
        }
        req.body.password = bcryptjs.hashSync(req.body.password , 10);
    }
    if(req.body.username){
        if(req.body.username.length<7 || req.body.username.length>20){
            return next(errorHandler(400,"username must be between 7 and 20 characters"));
        }
        if(req.body.username != req.body.username.toLowerCase()){
            return next(errorHandler(400,"username must be lowercase"));
        }
        if(!req.body.username.match(/^[a-zA-Z0-9+$]/)){
              return next(errorHandler(400,'username can only be letters and numbers'));
        }
    }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId , {
                $set : {
                    username : req.body.username ,
                    email : req.body.email ,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                },
            } , { new : true });
            const {password , ...rest} = updatedUser._doc;
            res.status(200).json(rest);
        } catch (error) {
            next(error);
        }
    
};

export const deleteUser = async(req,res,next) =>{
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403,'you are not allowed to delete this user id'));
    }
    try {
        await User.findByIdAndDelete(req.params.useId);
        res.status(200).json('user deleted successfully');
    } catch (error) {
        next(error);
    }
};
export const signout = ( req,res,next) =>{
      try {
        res.clearCookie('access_token').status(200).json("user has been signed out");
      } catch (error) {
        next(error);
      }
};