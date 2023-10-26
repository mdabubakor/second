'use client'

import Image from 'next/image'
import React from 'react'
import AB from '../Assetse/simul.jpg'
import {AiFillGithub,AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { motion } from "framer-motion";



const Sidebar = () => {
  
  return (
      <div className=' '>
        
      <Image src={AB} alt='use abater' className='w-32 h-32 rounded-full mx-auto'/>
      <h3 className='my-4 text-3xl font-medium tracking-wider font-serif text-white shadow-inner shadow-green-600' >i<span className='text-green-dat'>
        ABS</span></h3>
        <p className='px-2 py-1 my-3 bg-gray-200 text-black rounded-full'>Web Developer</p>
        <a className='px-2 py-1 my-3 bg-gray-200 text-black rounded-full flex items-center justity-center ' href='ABUBAKAR.pdf'><GiTie className="w-6 h-6"/>Download Resume</a>
        {/* social icon */}
        <div className='flex justify-around my-5 text-green-500 w-9/12 md:w-full mx-auto'>
            <a href="">
                <AiFillGithub className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="">
                <AiFillFacebook className="w-6 h-6 cursor-pointer"/>
            </a>
            <a href="">
                <AiFillYoutube className="w-6 h-6 cursor-pointer"/>
            </a>
        </div>
        {/* Adress */}
        <div className='my-4 py-5 bg-slate-900-900 text-white' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation/>
                <span> Dhaka, Bangladesh</span>
            </div>
            <p className='my-2'>mdabubakor119@gmail.com</p>
            <p className='my-2'>+8801776784730 / +8801870213842</p>
        </div>
        {/* Email button */}
        <a href="mailto:mdabubakor119@gmail.com">
        <button  className='bg-gradient-to-r from-green-400 to-blue-400 w-8/10  rounded-full py-2 px-5 text-white my-2 font-serif'
        >Email Me</button>
        </a>
        <button   className='bg-gradient-to-r from-green-400 to-blue-400 w-8/10   rounded-full py-2 px-5 text-white my-2 font-serif'>Toggole Theme</button>
    
    </div>
  )
}

export default Sidebar
