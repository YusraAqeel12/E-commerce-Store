import { StaticImageData } from "next/image"

export type Product = {
    id : number ,
    name : string ,
    price : number ,
    image :  StaticImageData ,
    category : string , 
    tagline : string , 
    slug : string , 
    size : string[ ]
}
export type CounterState = {
    item : Array<any> ,
    totalAmount : number ,
    quantity:number
    

}

//product ki type declare ki hai 