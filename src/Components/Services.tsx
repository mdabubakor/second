

import { services } from '@/Constant/Data'
import React from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { AiFillDatabase } from 'react-icons/ai'


const Services = () => {
 
  return (
    <div>
       <div className=" xl:grid grid-cols-2 sm:grid-1   justify-center   ">
            {
              services.map((item)=>(
                <div key={item.id} className=' my-5 bg-zinc-400 mx-1 py-2 px-5 rounded-lg '>
                   <div className=''>
                   <p className='flex items-center text-xl font-bold'>{item.tittle}</p>
                  
                    <p className=''>{item.discrib}</p>
                   </div>
                   
                   
                   
                   
                </div>
              ))
            }
          </div>
    </div>
  )
}

export default Services
