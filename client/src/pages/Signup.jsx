import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';
export default function Signup() {
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
              <form className='flex flex-col gap-4'>
                <div>
                  <Label value ="Username"> </Label>
                  <TextInput type= "text" placeholder=' enter your username ' id = 'username'/>
                </div>

                <div>
                  <Label value ="Email"> </Label>
                  <TextInput type= "text" placeholder='name@company.com' id = 'email'/>
                </div>

                <div>
                  <Label value ="Password"> </Label>
                  <TextInput type= "text" placeholder='enter password ' id = 'password'/>
                </div>
                <Button gradientDuoTone="purpleToPink" type= 'submit'>Sign Up</Button>
                      
              </form>
  <div className="flex gap-2 text-sm mt-5">
   <span>  Already Have an Account? </span>
   <Link to='/sign-in' className='text-blue-500'> Sign In </Link>
  </div>
            </div>

           </div>

    </div>
  )
}

