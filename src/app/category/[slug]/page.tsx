'use client'
import Image from "next/image"
import ProductCard from "@/components/ProductCard"
import { product } from "@/utils/mock"
import { useAppSelector } from "@/app/store/hooks"

//const getProductByCategory = (category : string) => {
//  return product.filter((Product)=> Product.category===category)}

export default function Page({ params }: { params: { slug : string } }) {
    const consoleProduct=useAppSelector((state)=>state.productArray)
    const result=product.filter((val)=>val.category === params.slug )
    console.log("These are Products " ,  )
   // const result= getProductByCategory(params.slug)
    return <div className="flex flex-wrap justify-evenly items-center mt-16 ">
        { 
            result.length> 0 ? result.map((product , i )=>(
            <ProductCard  
            id=""
            key={product.id}
            title={product.name} 
            img={product.image}
            price={product.price} 
            category={product.category}
            />)) : <p>No Products Found</p>}
        </div>
  }

//array filter
//hamnay data filter out karna hai product mai sai jo mock mai hai jis ki category barabar hai category jo ham nai paas kiya hai 
//agar product ki lenght greater than zero hai jiska matlab products hoon toh map karo warna return para kai no products found