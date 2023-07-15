import { Button } from '@/components/ui/button'
import React from 'react'
import CartCard from '@/components/ui/CartCard'

const cartpage = () => {
  return (

    <div className='flex  flex-col md:flex-row justify-center items-center'>
      {/**CART CARD */}
      <div className='flex-1 mb-3'>
        <CartCard src='flex sweatpants.png' title='Brushed Bomber ' price={900} />
      </div>
        
         {/**  ORDER SUMMARY  */}
      <div className='bg-slate-100 rounded-xl p-5 flex-1 '>
        <h2 className='tracking-widest font-bold text-xl scroll-m-20 '>ORDER SUMMARY</h2>
        <div className="divider mt-0 mb-1"></div> 

        {/**PRICING */}
        <div className='tracking-widest text-base items-center justify-between '></div>
         {/**Product Price */}
         <div className='flex items-center tracking-widest justify-between'>
          <h2>SubTotal</h2>
          <h2>8000</h2>
         </div>

         {/**Delivery Charges */}
         <div className='flex items-center tracking-widest justify-between'>
         <h2>Delivery Charges</h2>
         <h2>TBD</h2>
         </div>
       
        {/**Service Charges  */}
         <div className='flex items-center tracking-widest justify-between'>
         <h2>Sales Tax</h2>
         <h2>TBD</h2>
         </div>

        {/**Estimated Total */}
         <div className='flex  items-center justify-between tracking-widest uppercase font-extrabold text-lg'>
         <h2>Estimated total</h2>
         <h2>TBD</h2>
         </div>

         {/**Button */}
         <div className='flex justify-center items-center w-full mt-2'>
          <Button className='uppercase'>Proceed To Checkout</Button>
         </div>
         
         {/**Paragraph */}
         <div className='text-sm italic tracking-wide font-semibold text-center mt-2'>
          Delivery charges and Sales Tax will be calculated at Checkout Page 
         </div>
      
      
      
      </div>
      


    </div>
 
  )
}

export default cartpage
