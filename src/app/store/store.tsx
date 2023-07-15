
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../../app/store/slice/product"
import cartSlice from "../../app/store/slice/cart"
export const store = configureStore(
    {
        reducer:{
            //defining state or data 
            //state data hai ji kai product array hai
            productArray : productSlice ,
            cartArray : cartSlice
        }
    }
)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch




//aik store hai jismai configure kiya hai and object pass kiya hai reducer ka productslice ab aik state hai jo kai aik array of object hai  
