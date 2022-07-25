import { createReducer,createAsyncThunk,createSlice } from "@reduxjs/toolkit";
const initialState = { name : '4'}



export const asyncTest = createAsyncThunk('user/asyncTest', async(payload)=>{
    return payload
})


export const testReducer = createSlice({name :"skiller",initialState,

        reducers : {

            increment: (state,action)=>{
                state.name = '55'
            },


        }









//     checkVal : (state,action)=>{
//     state.name = action.payload
// },
// [asyncTest.fulfilled] : (state,action)=>{
//     state.name = action.payload
// }
})


export const myAction = testReducer.actions.increment 

export const  testReducers = testReducer.reducers