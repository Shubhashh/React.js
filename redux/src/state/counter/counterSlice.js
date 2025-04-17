import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit'

interface counterState{
value:number;
}
const initialState:counterState ={
    value:0,
}

const counterSlice=createSlice ({
    name:"counter",
    initialState,
    reducers:{
increment:(state) =>{
    state.value +=1
    },
    decrement:(state) =>{
        state.value -=1
        },
        incrementByAmount:(state,action:PayloadAction<{value:number}> )=>{
            state.value += action.payload
        }
    
    },

    })


export const {increment,decrement,incrementByAmount} = counterSlice.actions

export default counterSlice.reducer