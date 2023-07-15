'use client'
import React  , {useState} from 'react'
const Quantity = () => {
  const [num , setnum]=useState(0)
  return (
    <div className='flex items-center gap-x-3 ml-5'>
      <div className='h-8 w-8 shadow-lg rounded-full bg-slate-100  items-center justify-center flex cursor-pointer' 
           onClick={()=>{setnum(num <= 0 ? 0 : num-1)}}>-</div>
      
      <span className='text-sm'>{num}</span>
      
      <div className='h-8 w-8 rounded-full items-center justify-center border-black border-2 flex cursor-pointer' 
           onClick={()=>{setnum(num+1)}}>+</div>
     </div>
  )
}

export default Quantity