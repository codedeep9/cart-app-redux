import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STATUSES={
    IDLE:'idle',
    ERROR:'error',
    LOADING:'Loading...' 
}
const productSlice={
    name:'product',

    initialState:{
        data:[],
        status:STATUSES.IDLE
    },

    extraReducers:(builder)=>{

        builder.addCase(getProducts.pending,(state,action)=>{
            state.status=STATUSES.LOADING
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.status=STATUSES.IDLE
            state.data=action.payload
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.status=STATUSES.ERROR
        })

    }


};


export const getProducts=createAsyncThunk("products/fetch",
    async()=>{
        const res=await axios.get("https://fakestoreapi.com/products")
        const data=res.data
        return data
    }
)

export default productSlice.reducer