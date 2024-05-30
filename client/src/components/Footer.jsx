import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook , BsInstagram , BsGithub , BsTwitter ,BsLinkedin} from 'react-icons/bs';
export default function FooterCom() {
  return (
   <Footer container className='border border-t-8 border-teal-500  '>
    <div className="w-full max-w-7xl mx-auto">
     <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
        <div className="mt-5">
        <Link to = "/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-800 to-pink-600 rounded-lg text-white'><b> Ayushi's</b></span> 
        <b>Blog </b>
        </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div className="">
          <Footer.Title title = 'About'/>
          <Footer.LinkGroup col>
            <Footer.Link 
            href='https://portfolio-ayuii.netlify.app/'
            target ='_blank' 
            rel = 'noopener noreferrer' 
            >    
           <b> Portfolio </b> 
            </Footer.Link>
            <Footer.Link 
            href='/about'
            target ='_blank' 
            rel = 'noopener noreferrer' 
            >    
           <b></b> 
            </Footer.Link>
          </Footer.LinkGroup>
          </div>

          <div className="">
          <Footer.Title title = 'Legal'/>
          <Footer.LinkGroup col>
            <Footer.Link 
            href='#href'
            >    
            Terms & Conditions 
            </Footer.Link>
            <Footer.Link 
            href='#href'
            >    
            Privacy Policy
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          <div className="">
          <Footer.Title title = 'Follow us'/>
          <Footer.LinkGroup col>
            <Footer.Link 
            href='https://www.linkedin.com/in/ayushi-goyal-061633250/'
            target ='_blank' 
            rel = 'noopener noreferrer' 
            >    
           <b> Linkedin </b> 
            </Footer.Link>
            <Footer.Link 
            href='https://github.com/ayushi-4'
            target ='_blank' 
            rel = 'noopener noreferrer' 
            >    
           <b>GitHub</b> 
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
        </div>
     </div>
    <Footer.Divider/>
    <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href='#' by="ayushhiii&#9733;" year ={new Date().getFullYear()}/> 
      <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
        <Footer.Icon href='#' icon={BsFacebook}/>
        <Footer.Icon href='#' icon={BsInstagram}/>
        <Footer.Icon href='#' icon={BsTwitter}/>
        <Footer.Icon href='https://github.com/ayushi-4' icon={BsGithub}/>
        <Footer.Icon href='https://www.linkedin.com/in/ayushi-goyal-061633250/' icon={BsLinkedin}/>
        </div>  
    </div>
    </div>
      </Footer>
  )
}
