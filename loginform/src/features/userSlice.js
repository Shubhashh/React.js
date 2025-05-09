import { createSlice } from "@reduxjs/toolkit";
import Login from "../Components/Login";
import { act } from "react";
import Logout from "../Components/Logout";


export const userSlice=createSlice({
name:"user",
initialState:{
    user:null
},
reducers:{
    login:(state,action)=>{
        state.user=action.payload;
    },
    logout:(state)=>{
        state.user=null;    
    },
},
})
export const{login,logout} =userSlice.actions
export const selectUser=(state)=>state.user.user
export default userSlice.reducer