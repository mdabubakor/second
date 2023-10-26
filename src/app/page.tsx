'use client'
import Rightbar from '@/Components/Rightbar'
import Sidebar from '@/Components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'


export default function Home() {
  return (
    <>
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20  md:px-32'>
    <div className='col-span-12  bg-slate-500 lg:col-span-3 p-4 text-center  rounded-2xl'>
      <Sidebar/> 
    </div>
    <div className='col-span-12 bg-zinc-200 lg:col-span-9  rounded-2xl'>
    <Rightbar/>
      
    </div>
  </div>
   
  
    
    </>
  )
}
