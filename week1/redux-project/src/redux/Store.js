import {CartSlice} from "./Slices/CartSlice"
import {configureStore} from "@reduxjs/toolkit"
export const  = configureStore({
    reducer:{
        cart : CartSlice
    }
});