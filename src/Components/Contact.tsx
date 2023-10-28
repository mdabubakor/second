'use client'
import React from 'react'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsTelephoneForward, BsYoutube } from 'react-icons/bs'

import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div 

    className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32'>
    <div className='col-span-12 bg-slate-900 lg:col-span-3 p-4 text-center  rounded-2xl'>
      <Sidebar /> 
    </div>
    <div className='col-span-12 bg-slate-900 lg:col-span-9  rounded-2xl'>
    <Rightbar />
    <div  className='    '>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [1, 1, 1, 1.01]
            
          }}
        className='md:grid-1 lg:grid grid-cols-2  text-white items-center  '>
            
            <div className='flex flex-col items-center justify-center '>
                <h4 className='text-4xl'>CONTACT INFO</h4>
                <div className='flex mt-10 text-xl items-center  space-x-2'>
                    <CiLocationOn/>
                    <h3 className=''>A.R.B Model School, Kazipara</h3>
                </div>
                <div className='flex text-xl gap-4 mt-8'>
                    <div className='mt-1'>
                    <HiOutlineMail  />
                    </div>
                    <h3 className=''>mdabubakor119@gmail.com</h3>
                </div>
                <div className='flex text-xl gap-4  mt-8 '>
                    <BsTelephoneForward/>
                    <h4>+8801776784730</h4>
                </div>
                <div>
                <div className=" ms-0 ">
    
          <div className="flex text-lg  mt-14 gap-10 ">
          <a className=" " target="_blank" href="http://www.facebook.com/mdabubakor13"><AiFillFacebook/> </a>

          <a target="_blank" href="http://www.instagram.com/abu_bakar460/"><FaInstagramSquare /></a>
          <a target="_blank" href="http://github.com/mdabubakor"><BsGithub /></a>
          <a target="_blank" href="http://www.youtube.com/@iabs4203/videos"><BsYoutube /></a>
          </div>
        </div>
                </div>
            </div>
      
    <div className='r'>
    <motion.div  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 3}} className=' flex flex-col  min-h-screen items-center justify-center '>
      <div className='text-white text-4xl font-semibold m-5 '>
        <h2 >SEND a MESSAGE</h2>
      </div>
        <h6 className='text-white text-sm mb-5  '>I&apos;ll BE GLAD TO ANSWER YOUR QUESTION!</h6>
      <div className='flex flex-col w-64 gap-4 text-black '>
        <input className='m-2 ps-2 rounded-md h-8' type="text"  placeholder='Name'/>
        <div className='relative flex'>
        <HiOutlineMail className="absolute bottom-4 bg-  text-black text-lg start-3" />
        <input className='m-2 ps-6 rounded-md h-8 w-64 ' type="email" placeholder='Email address'/>
        </div>
        <input className='m-2 ps-2 rounded-md h-8' type="text" placeholder='Subject'/>
        <input type="text" className='m-2 h-24 ps-3 rounded-md' placeholder='Your Message'/>

      </div>
      <div className='text-white'>
        <button className='m-2 bg-zinc-800 hover:bg-zinc-600 h-8 w-32 rounded-md'>Send Message</button>
      </div>
    </motion.div>
    </div>
        </motion.div>
    </div>
      
    </div>
  </div>
  )
}

export default Contact
