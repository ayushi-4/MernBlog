import { FileInput, TextInput , Button } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import React from 'react'

export default function CreatePost() {
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
        <FileInput type='file' accept='image/*'/>
        <Button type='button' gradientDueTone='purpleToBlue' size = 'sm' outline> Upload Image</Button>
    </div>
    <ReactQuill theme="snow" placeholder='Write something...' className='h-72 mb-12' required />
    <Button type='submit' gradientDuoTone='purpleToBlue'>Publish </Button>
</form>
    </div>
  )
}
