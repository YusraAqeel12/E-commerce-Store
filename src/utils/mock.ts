import { Product } from "./type";
import hero from "../../public/hero-img.webp"
import p from "../../public/p1.webp"
import kid from "../../public/kid.jpg"
import kidfrock from "../../public/kidsfrock.jpg"
import flexpush from "../../public/flex push button bomber.png"
import malepanttwo from "../../public/malesec.jpg"
import dress from "../../public/women dress.jpg"
import jacket from "../../public/man jacket.jpg"
import raglan from "../../public/raglan sweatshirt.png"
import litesweatpant from "../../public/lite sweatpants.png"
import pinkfleecesweat from "../../public/pink fleece sweatpants.png"
import flexsweat from "../../public/flex sweatpants.png"
export const product : Product[] =[
   
    {
        id:8 ,
        name : "Imperial Alpaca Hoodie" ,
        category : "Female" ,
        price : 900  ,
        image :p , 
        tagline : "Jackets" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]

    } ,
    {
        id:9 ,
        name : "Cameryn Sash Tie Dress" ,
        category : "Female" ,
        price : 850  ,
        image :hero, 
        tagline : "Dress" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]

    },
    {
        id:7 ,
        name : "Flex Push Button Bomber" ,
        category : "Male" ,
        price : 970  ,
        image :flexpush , 
        tagline: "Jacket" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]

    },
    {
        id:6 ,
        name : "White Pant" ,
        category : "Male" ,
        price : 850  ,
        image :malepanttwo ,
        tagline : "Pant" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]


    },
    {
        id:5 ,
        name : "Raglan SweatShirt" ,
        category : "Female" ,
        price : 550  ,
        image :raglan , 
        tagline : "Sweater" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]


    },
    {
        id:96 ,
        name : "Kids Pink " ,
        category : "Kids" ,
        price : 700  ,
        image :kidfrock , 
        tagline : "Dress" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]


    },
    {
        id:50 ,
        name : "Female Dress" ,
        category : "Female" ,
        price : 650  ,
        image :dress , 
        tagline : "Dress" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]


    } ,
    {
        id:580 ,
        name : "Lite Sweatpants" ,
        category : "Female" ,
        price : 650  ,
        image :litesweatpant , 
        tagline : "Pants" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]


    },{
        id:90 ,
        name : "Pink Fleece Sweatpants" ,
        category : "Female" ,
        price : 950  ,
        image :pinkfleecesweat ,
        tagline : "Pants" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]


    },
    {
        id:78 ,
        name : "Flex SweatPants" ,
        category : "Female" ,
        price : 600  ,
        image : flexsweat ,
        tagline : "Pants" ,
        slug : " "  ,
        size: [ " XL " , "L" , "MD" , "SM" ,"XS"]


    },

]

//products ka data mock mai hai aur uski type type.ts mai