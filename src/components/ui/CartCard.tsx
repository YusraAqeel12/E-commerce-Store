import React from 'react'
import Quantity from './Quantity'
import { TrashIcon } from 'lucide-react'

const CartCard = ({src , title , price }:{src:string , title : string , price : number }) => {
  const sizes =[
    "XS" , "SM" , "M" ,"L" , "XL"
   ]
  return (
    <div className='flex '>
        <img width={900} height={900} src={src} alt={title} className='h-[100px] w-[100px] items-center justify-center' />
        <div className='ml-5'>
            {/** NAME */}
            <h2 className=' font-bold text-base leading-none line-clamp-1'> {title}</h2>
            
            {/** SIZE */}
            <p className=' text-base mt-2 font-semibold flex items-end '>Price : $ {price}
            <TrashIcon color='red'/>
            </p>
            
            <div className=" mt-2 font-bold flex items-center ">
              <h1>Quantity:</h1>
               <Quantity/>
            </div>

            <div className=" gap-x-8 mt-3 cursor-pointer flex">
            {sizes.map((item)=>(
              <div key={item} className="h-4 w-4 flex  justify-center items-center  rounded-full  duration-300 hover:shadow-2xl shadow-inherit">
                <span className="text-[15px] text-center text-slate-600 font-bold">{item}</span>
              </div>
            ))}
            </div>


        
        

    </div>
    </div>
  )
}

export default CartCard