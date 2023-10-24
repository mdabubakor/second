import { nav } from '@/Constant/Data'
import Link from 'next/link'
import React from 'react'


const Rightbar = () => {
  return (
    <div>
      <div className='flex items-center h-10 bg-green-300 justify-center gap-3  shadow-inner shadow-green-800 rounded-2xl '>
        {
            nav.map((item)=>(
                <Link key={item.title} href={item.href}>
                    <div className='text-zinc-800 hover:text-white lg:text-xl md:text-sm font-serif  cursor-pointer duration-200 relative group overflow-hidden '>{item.title}
                    <span className='h-[1px] duration-300 w-full  bg-green-500 inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 '/>
                    </div>
                </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Rightbar
