
import Quantity from "@/components/ui/Quantity";
import { Button } from "@/components/ui/button";
import { product } from "@/utils/mock";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { client } from "../../../lib/sanityclient";
import { useState } from "react";
const getProductsDetail = (id: number | string ) => {
  return product.filter((Product) => Product.id == id);
};

// ** To fetch data from sanity and the map karo name same honi chaiyae schema mai product aur name product ki tarah
export const getProductData =async()=>{
  const res = await client.fetch(`*[_type==product]`)
  return res
}
  const data = await getProductData()
  console.log(data)
// **



export default function Page({ params }: { params: { id : string } }) {
  const result = getProductsDetail(params.id);
  const sizes =[
   "XS" , "SM" , "M" ,"L" , "XL"
  ]
  
  
  

 
  
  return (
    <div className="flex  ">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between ">
         
          {/**RIGHT CONTENT */}
           <div className="flex-1">
            <Image src={product.image} alt={product.name} />
          </div>
          
          {/**LEFT CONTENT */}
          <div className=" ml-10 flex-1">  
            <h1 className="text-2xl tracking-widest font-normal"> {product.name}</h1>
            <p className="text-slate-400 font-semibold text-lg">{product.tagline}</p>
            <p className=" mt-5 text-sm font-bold">SELECT SIZE</p>

            {/**Sizes (pehlay div mai height waghira set karo then span mai text set karo) */}
            <div className="flex gap-x-8 mt-3 cursor-pointer">
            {sizes.map((item)=>(
              <div key={item} className="h-4 w-4 flex  justify-center items-center  rounded-full  duration-300 hover:shadow-2xl shadow-inherit">
                <span className="text-[15px] text-center text-slate-600 font-bold">{item}</span>
              </div>
            ))}
            </div>
             
             {/**Quantity and its +- button  */}
            <div className="flex mt-8 font-bold ">
              <h1>Quantity:</h1>
              <Quantity/>
              
            </div>

            <div className="flex items-center mt-5 gap-x-4">
                <h2 className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </h2>
                <Button className="bg-black h-12 px-8 mt-4" >Add to Cart</Button>


            </div>

            
          </div>
        </div>
      ))}
    </div>
  );
}