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
            <img src="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288870.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717286400&semt=ais_user" />
        </div>
    </div>
  )
}