import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    //reducer is a predefined key  that is an object that  can hold more than one reducer as key:Value pairs  
    reducer:{
        counter:counterSlice
    }
})