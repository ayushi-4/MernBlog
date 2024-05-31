import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
export default function Signup() {
  const [formData , setFormData ] =useState({});
const [errorMessage , setErrorMessage] = useState(null);
const [loading , setLoading] = useState(false);

const navigate = useNavigate();
 
  const handleChange = (e) =>{
    setFormData({...formData ,[e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("please fill out all required fields")
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch ('/api/auth/signup' , {
        method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success=== false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
            You can SignUp with your email and password or with your Google Account.
        </p>
            </div>
            {/* right */}
            <div className='flex-1'>
              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                  <Label value ="Username"> </Label>
                  <TextInput type= "text" placeholder=' enter your username ' id = 'username' onChange={handleChange}/>
                </div>

                <div>
                  <Label value ="Email"> </Label>
                  <TextInput type= "email" placeholder='name@company.com' id = 'email' onChange={handleChange}/>
                </div>

                <div>
                  <Label value ="Password"> </Label>
                  <TextInput type= "password" placeholder='enter password ' id = 'password' onChange={handleChange}/>
                </div>
                <Button gradientDuoTone="purpleToPink" type= 'submit' disabled={loading}>{
                  loading ? (
                    <> 
                    <Spinner size ='sm'/>
                    <span className='pl-3'> Loading...</span>
                    </>
                  ) : 'Sign Up'
                }
                </Button>
                <OAuth/>  
              </form>
  <div className="flex gap-2 text-sm mt-5">
   <span>  Already Have an Account? </span>
   <Link to='/sign-in' className='text-blue-500'> Sign In </Link>
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

