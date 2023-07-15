import Image from "next/image"
import ProductCard from "@/components/ProductCard"
import { product } from "@/utils/mock"
const ProductList = () => {
    return (
        <div className="grid grid-cols-4 justify-evenly items-center mt-16  ">
        { product.map((product , i )=>(
            <ProductCard
            id=""
            category=""
            key={product.id}
            title={product.name} 
            img={product.image}
            price={product.price}  />))}
        </div>
    )
}

export default ProductList