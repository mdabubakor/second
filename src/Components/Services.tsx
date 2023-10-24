import { services } from '@/Constant/Data'
import React from 'react'
import { RiComputerLine } from 'react-icons/ri'

const Services = () => {
  return (
    <div>
       <div className=" xl:grid grid-cols-4 sm:grid-1 bg-zinc-500 pt-5   ">
            {
              services.map((item)=>(
                <div key={item.id} className=' mb-3 bg-green-400 mx-1 py-2 px-4 '>
                   <div className=''>
                   <p className=''>{item.tittle}</p>
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
