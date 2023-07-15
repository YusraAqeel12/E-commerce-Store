import Image from "next/image"
import ProductCard from "@/components/ProductCard"
import { product } from "@/utils/mock"
const ProductList = () => {
    //const productChecks = product.slice(0, 3);
   // console.log(productChecks)
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-evenly items-center mt-16 space-x-5">
        { product.map((product , i )=>(
            <ProductCard
            id={product.id}
            key={product.id}
            title={product.name} 
            img={product.image}
            price={product.price} 
            category=""
            />))}
        </div>
    )
}

export default ProductList

//productcard jo aik function hai usko main product list mai call kar rahi hoon 
//ab productcard mai arg pass jo horahay hain wo props mai receive hoongy