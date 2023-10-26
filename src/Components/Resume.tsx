'use client'
import React from 'react'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import { language, tools } from '@/Constant/Data'
import { Iskill } from '@/Constant/Type'
import { BsCircleFill } from 'react-icons/bs'
import Bar from './Bar'


const Resume = () => {
    
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32 font-serif'>
    <div className='col-span-12 bg-slate-900 lg:col-span-3 p-4 text-center  rounded-2xl'>
      <Sidebar /> 
    </div>
    <div className='col-span-12 bg-slate-900 text-white lg:col-span-9  rounded-2xl'>
    <Rightbar />
    <div className='p-4'>
      {/* Education & Ex */}

    <div className='grid md:grid-cols-2 gap-6'>
    <div className=''>
    <h5 className='my-3 text-2xl font-bold '>Education</h5>
    <div>
        <h6 className='my-2 text-xl font-bold'>
            Computer Science Engineering
        </h6>
        <p className='font-semibold'>Barisal polytechnic institute(2019-2023)</p>
        <p className='my-3'>I am currrently pursuing B.tech in computer science engineering from Barisal polytechnic institute </p>
    </div>
    </div>
    <div className=''>
        {/* change */}
    <h5 className='my-3 text-2xl font-bold '>Experiece</h5>
    <div>
        <h6 className='my-2 text-xl font-bold'>
            MERN Developer jr.
        </h6>
        <p className='font-semibold'>Peoplentach(2023-on)</p>
        <p className='my-3'>I dont know why i am doing this job  </p>
    </div>
    </div>
    </div>


      {/* languase & tools */}
    <div className='grid md:grid-cols-2 gap-6'>
        <div>
            <h5 className='text-2xl my-3 font-bold shadow-inner shadow-zinc-700'>Languages & Frameworks</h5>
            <div className='my-2'>
            
                  {
                    language.map(language=><Bar data={language} key={language.name}/>)
                  }
                
            </div>
        </div>
        <div>
            <h5 className='text-2xl my-3 font-bold'>Tools & Software</h5>
            <div className='my-2'>
                {
                  tools.map(tools=><Bar data={tools} key={tools.name}/>)
                }
            </div>
        </div>
    </div>
    </div>
      
    </div>
  </div>





  
  )
}

export default Resume
