import { product } from "@/utils/mock";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/utils/type";
//Slice

const initialState = {
    product
}
const productSlice= createSlice(
    {
        name : "product" , 
        initialState ,
        reducers : {
            addProduct(state,action){},
            deleteProduct(state,action){}}
    }
)
export const {addProduct,deleteProduct}=productSlice.actions
export default productSlice.reducer

// sab sai pehlay ham nai create slice ko export kiya 
//ab aik const liya jismai createslice ko paas kiya aur create clice mai aik object ko pass kiya hai 
//jismai hai name , initialstate aik array hai aur reducer hain
//redux ki state ko sirf reducers he change kar saktay hain 

//reducer mai ham do function/action pass karay which is add product and delete product aur usmai do parameters
// ab in functions ko bhee export karo

//initial state ham nai product ko di hai jo hamara mock data hai 
