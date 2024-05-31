import { Alert, Button, TextInput } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { app } from '../firebase';
import { ref } from 'firebase/storage';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {getDownloadURL, getStorage, uploadBytesResumable} from 'firebase/storage';
export default function DashProfile() {
    const {currentUser} = useSelector(state => state.user)
    const [imageFile , setImageFile] = useState(null);
    const [imageFileUrl , setImageFileUrl] = useState(null);
    const [imageFileUploadProgress , setImageFileUploadProgress] = useState(0);
    const [imageFileUploadError , setImageFileUploadError] = useState();
    console.log(imageFileUploadProgress,imageFileUploadError)
    const filePickerRef = useRef();
    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        if(file){
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };
   useEffect(() =>{
    if(imageFile){
        uploadImage();
    }
   } , [imageFile]);
   const uploadImage = async() =>{
    // service firebase.storage {
    //     match /b/{bucket}/o {
    //       match /{allPaths=**} {
    //         allow read, 
    //         allow write: if 
    //         request.resource.size <2*1024*1024 &&
    //         request.resource.contentType.matches('image/.*')
    //       }
    //     }
    //   }
    const storage = new getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage , fileName);
    const uploadTask = uploadBytesResumable(storageRef,imageFile);
    uploadTask.on('state_changed' ,
      (snapshot) =>{
        const progress = (snapshot.bytesTransferred/ snapshot.totalBytes)*100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) =>{
        setImageFileUploadError('could not upload image(file must be less than 2MB');
      },
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
            setImageFileUrl(downloadURL)
        })
      }
    )
   }
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-5 text-center font-semibold text-3xl'>  Profile</h1>
        <form className='flex flex-col gap-4' >
<input type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden />

            <div className='w-32 h-32  self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={()=>{
                filePickerRef.current.click()
            }}> 

         { imageFile && imageFileUploadProgress > 0 && imageFileUploadProgress < 100 && ( 
            <div className='absolute inset-0 flex items-center justify-center'>
            <CircularProgressbar value = {imageFileUploadProgress} text={`${imageFileUploadProgress}%`}
            strokeWidth={5}
            styles = {{
                // root:{
                //     width:"100%" ,
                //     height:"100%",
                //     position:'absolute',
                //     top:0 ,
                //     left: 0,
                // },
                path:{
                    stroke:`rgb(62,152,199 , ${imageFileUploadProgress/100})`,
                },
                text:{
                    fill : '#f88' ,
                    fontSize: '16px'
                }
            }}
            />
            </div>
          )}

            <img src={ imageFileUrl || currentUser.profilePicture} alt ="user" 
            className='rounded-full  w-full h-full object-cover border-8 border-[lightgray]'/>
     </div>
            {imageFileUploadError && <Alert color='failure'>{imageFileUploadError} </Alert>}
            
           <TextInput type='text' id='username' placeholder='username' 
           defaultValue={currentUser.username} />
           <TextInput type='email' id='email' placeholder='email' 
           defaultValue={currentUser.email} />
           <TextInput type='password' id='password' placeholder='password' 
            />
            <Button type='submit' gradientDuoTone='purpleToPink' outline> Update </Button>
        </form>
        <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'> Delete Account </span>
        <span className='cursor-pointer'> Sign Out </span>
        </div>
    </div>
  )
}
 