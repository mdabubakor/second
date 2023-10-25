import React, { FunctionComponent } from 'react'
import { Iskill } from '@/Constant/Type'

const Bar:FunctionComponent <{
    data:Iskill
}>=({data:{Icon,level,name}})=>{
    
  return (
   <div className='my-2 text-white bg-gray-300 rounded-full'>
      <div className='px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-dat to-blue-400'
      style={{width:level}}
      >
        <Icon className='mr-3'/>
        {name}
      </div>
   </div>
  ) 
}

export default Bar
