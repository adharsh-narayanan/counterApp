import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside reducer key
    reducers:{
        //function to increment
        increment:(state,action)=>{
            state.value+=action.payload

        },
        //function to decrement
        decrement:(state,action)=>{
            state.value-=action.payload

        },
        //function to reset
        reset:(state)=>{
            state.value=0

        }
    }
})

// actions are used by components to access the state

export const{increment,decrement,reset}=counterSlice.actions

//required for store to change the value of state
export default counterSlice.reducer