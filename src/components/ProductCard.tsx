import Image, { StaticImageData } from "next/image"
import P1 from "/public/p1.webp"
import { FC } from "react"
import Link from "next/link"
function ProductCard(props: { title: string, price: number, img: StaticImageData , category:string ,id:number|string }) {

    return (
        <Link href={`/products/${props.id}`}>
        <div className="items-center  mx-auto">
            <Image src={props.img} alt="product" className=" hover:scale-110 duration-100 object-cover" width={200} height={150} />
            <h3 className="font-bold text-lg mt-3">{props.title}</h3>
            <p className="font-bold text-lg">${props.price}</p>
            <p className="font-bold text-lg">{props.category}</p>
        </div>
        </Link>
    )
}

export default ProductCard

//product kai uper click karnay sai navigation ho 