import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name:"user",
    initialState:{user:null},
    reducers:{
        login:(state,action)=>{
            console.log(action.payload)
            state.user=action.payload;
        }
        ,
        logout:(state)=>{
            state.user=null;
        }
    }
})


export const {login,logout}=slice.actions

export default slice.reducer;