'use client'
import React from 'react'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import {   projects, services } from '@/Constant/Data'
import Link from 'next/link'
import Image from 'next/image'
import ABS from '../Assetse/Todo (2).png'

const Projects = () => {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32'>
    <div className='col-span-12 bg-slate-900 lg:col-span-3 p-4 text-center  rounded-2xl'>
      <Sidebar /> 
    </div>
    <div className='col-span-12 bg-slate-900 lg:col-span-9  rounded-2xl'>
    <Rightbar />
   
    <div className='grid md:grid-cols-2  mt-32'>
    <div className='flex my-4 items-center justify-center ms-4 text-white shadow-inner shadow-slate-700 h-64'>
     {
     projects.map((item)=>(
      <div key={item?.name} className=''>
        <Image src={ABS} alt='todo' className='w-48  h-32'/>
        <p>{item?.name}</p>
        <p>
          {item?.description}
        </p>
      </div>
     ))
     }
      
    </div>
    <div className='flex my-4 items-center justify-center ms-4 text-white shadow-inner shadow-slate-700'></div>
  
  </div>
    </div>
   
  </div>
  )
}

export default Projects
