import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { SignInStart, SignInFailure , SignInSuccess } from '../redux/user/userSlice';
export default function SignIn() {
  const [formData , setFormData ] =useState({});
const {loading , error: errorMessage} = useSelector(state => state.user);
const dispatch = useDispatch();
const navigate = useNavigate();
 
  const handleChange = (e) =>{
    setFormData({...formData ,[e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(SignInFailure('please fill out all required fields'));
    }
    try {
      dispatch(SignInStart());
      const res = await fetch ('/api/auth/signin' , {
        method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success=== false){
        dispatch(SignInFailure(data.message));
      }
      if(res.ok){
        dispatch(SignInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(SignInFailure(error.message));
    }
  }
  return (
    <div className='min-h-screen mt-20'>

           <div className='flex p-3 max-w-xl mx-auto flex-col md:flex-row md:items-center'>
            {/* left */}
            <div className='flex-1'>
            <Link to = "/" className=' font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-800 to-pink-600 rounded-lg text-white'><b> Ayushi's</b></span> 
           <b>Blog </b>
        </Link>
        <p className='text-sm mt-5'>
            You can SignIn with your email and password or with your Google Account.
        </p>
            </div>
            {/* right */}
            <div className='flex-1'>
              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                  <Label value ="Email"> </Label>
                  <TextInput type= "email" placeholder='name@company.com' id = 'email' onChange={handleChange}/>
                </div>

                <div>
                  <Label value ="Password"> </Label>
                  <TextInput type= "password" placeholder='********' id = 'password' onChange={handleChange}/>
                </div>
                <Button gradientDuoTone="purpleToPink" type= 'submit' disabled={loading}>{
                  loading ? (
                    <> 
                    <Spinner size ='sm'/>
                    <span className='pl-3'> Loading...</span>
                    </>
                  ) : 'Sign In'
                }
                </Button>
                      
              </form>
  <div className="flex gap-2 text-sm mt-5">
   <span>  Don't Have an Account? </span>
   <Link to='/sign-up' className='text-blue-500'> Sign Up </Link>
  </div>
  {
    errorMessage && (
      <Alert className='mt-5' color= "failure">
        {errorMessage}
      </Alert>
    )
  }
            </div>

           </div>

    </div>
  )
}


