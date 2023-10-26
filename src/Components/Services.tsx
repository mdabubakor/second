'use client'

import { services } from '@/Constant/Data'
import React from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { AiFillDatabase } from 'react-icons/ai'
import { motion } from "framer-motion";


const Services = () => {
 
  return (
    <div>
       <motion.div  className=" xl:grid grid-cols-2 sm:grid-1   justify-center   ">
            {
              services.map((item)=>(
                <div key={item.id}  className=' my-5 bg-slate-900 shadow-inner shadow-slate-700 mx-1 py-2 px-5 rounded-lg '>
                   <motion.div whileHover={{ scale:2.0 }} whileTap={{ scale: 1 }} className=' hover:bg-zinc-900 hover:items-center hover:px-2'>
                   <p className='flex items-center text-xl font-bold'>{item.tittle}</p>
                  
                    <p className=''>{item.discrib}</p>
                   </motion.div>
 
                </div>
              ))
            }
          </motion.div>
    </div>
  )
}

export default Services
