import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to Know more about me?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout this!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://portfolio-ayuii.netlify.app/" target='_blank' rel='noopener noreferrer'>
                    portfolio
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://lh4.googleusercontent.com/proxy/pJDXvYwTROD8MS49jqQOw8BXn2O0upVrf99WnTXEUF1Pb5y9kYE_XYAo4Ye8KQiRTdT0hc_5INGfxYW7kL8c0yO7VkQ9MLdtFbT6QA4kpogNQ0s9n8hveEVnYTNvsO54MWZdQ_c" />
        </div>
    </div>
  )
}