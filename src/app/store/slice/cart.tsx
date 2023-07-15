import { CounterState } from "@/utils/type";
import { createSlice } from "@reduxjs/toolkit";

//Slice
const initialState:CounterState={
    item : [],
    totalAmount:0 ,
    quantity :0
}
const cartSlice= createSlice(
    {
        name : "cart" , 
        initialState  ,
        reducers : {
            addcart(state , action){
            },
            deletecart(state){
            } ,
            removecart(state){
            }
        
        }
    }
)
export const {addcart,deletecart}=cartSlice.actions
export default cartSlice.reducer

// sab sai pehlay ham nai create slice ko export kiya 
//ab aik const liya jismai createslice ko paas kiya aur create clice mai aik object ko pass kiya hai 
//jismai hai name , initialstate aik array hai aur reducer hain
//redux ki state ko sirf reducers he change kar saktay hain 

//reducer mai ham do function/action pass karay which is add cart deletecart aur usmai do parameters
// ab in functions ko bhee export karo

// ab ismai initial state ki type cart hai aur yeh empty array hai 