import {createReducer} from '@reduxjs/toolkit'


const initialState = {
    LOADING : false,
    AUTH_USER : false,
    USER_DATA : ""
}

const registerUser = createReducer(initialState,{
REGISTER_LOADING_TRUE:(state,action)=>{
state.LOADING = true;
},
REGISTER_LOADING_FALSE:(state,action)=>{
    state.LOADING = false;
    },
    REGISTER_USER_DATA:(state,action)=>{
        state.USER_DATA = action.payload
    },
    REGISTER_NAVIGATION:(state,action)=>{

        state.NAVIGATION = action.payload

    }

})

export default registerUser