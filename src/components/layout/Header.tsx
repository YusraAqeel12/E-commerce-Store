import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Search } from "lucide-react"
import { useSelector } from "react-redux"

const Header = () => {
    return (
        <div className="flex justify-between items-center py-6 px-8">
            <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-40" />
            </Link>
            <ul className="flex gap-x-10">
                <li className="text-lg">
                    <Link href={"category/Female"}>
                        Female
                    </Link>
                </li>
                <li className="text-lg">
                    <Link href={"category/Male"}>
                        Male
                    </Link></li>
                <li className="text-lg">
                    <Link href={"category/Kids"}>
                        Kids
                    </Link>
                </li>
                <li className="text-lg">
                    <Link href={"/products"}>
                        All Products
                    </Link>
                </li>

                <li className="text-lg">
                    <Link href={"category/Sports"}>
                        Sports
                    </Link>
                </li>
            </ul>
            <div className="flex ">
            <Search/>
            <input placeholder=" What are you looking for" /> 
            </div>

            
            <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
            <span className="absolute top-0 right-1 bg-red-400 rounded-full h-4 w-4 items-center justify-center text-[10px] text-white ">5</span>
            <Link href={"/cart"}>   <ShoppingCart className="h-6 w-6" /> </Link> 
            </div>
           
        </div>
    )
}

export default Header