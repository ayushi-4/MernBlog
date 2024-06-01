import { FileInput, TextInput , Button, Alert } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import {getDownloadURL, getStorage, uploadBytesResumable} from 'firebase/storage';
import {app} from '../firebase.js';
import { ref } from 'firebase/storage';
export default function CreatePost() {
    const[file , setFile] = useState(null);
    const[imageUploadProgress , setImageUploadProgress] = useState(null);
    const[imageUploadError , setImageUploadError] = useState(null);
    const [formData , setFormData] = useState ({});
    const handleUploadImage = async() =>{
        try {
            if(!file){
                setImageUploadError('please select an image');
                return ;
            }
            setImageUploadError(null);
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage,fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot)=>{
                    const progress =
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                    setImageUploadProgress(progress.toFixed(0));
                },
                (error) =>{
                    setImageUploadError('image upload failed');
                },
                ()=>{
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                        setImageUploadProgress(null);
                        setImageUploadError(null);
                        setFormData({...formData , image:downloadURL});
                    })
                }
            )
        } catch (error) {
            setImageUploadError('image upload failed');
            setImageUploadProgress(null);
            console.log(error);
        }
    };
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>

    <h1 className='text-center text-3xl my-7 font-semibold'><b>Create a Post</b></h1>
<form className='flex flex-col gap-4'>
<div className='flex flex-col gap-4 sm:flex-row justify-between'>

    <TextInput type='text' placeholder='Title' required id='title'
    className='flex-1'/>
    <select>
        <option value ="uncategorized">Select a Category</option>
        <option value ="Cosmetics">Cosmetics</option>
        <option value ="Sports">Sports</option>
        <option value ="Education">Education</option>
        <option value ="Other">Others</option>
    </select>
</div>
    <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-double p-3">
        <FileInput type='file' accept='image/*' onChange={(e)=>setFile(e.target.files[0])}/>
        <Button type='button' gradientDueTone='purpleToBlue' size = 'sm' outline onClick={handleUploadImage}> Upload Image</Button>
    </div>
    {imageUploadError && <Alert color='failure'>{imageUploadError} </Alert>}
    {formData.image && (
        <img src={formData.image}
        alt='upload'
        className='w-full h-72 object-cover'/>
    )}
    <ReactQuill theme="snow" placeholder='Write something...' className='h-72 mb-12' required />
    <Button type='submit' gradientDuoTone='purpleToBlue'>Publish </Button>
</form>
    </div>
  )
}
