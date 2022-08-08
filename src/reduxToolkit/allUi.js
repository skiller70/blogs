import { createReducer } from "@reduxjs/toolkit";


const initialState = {
NAVBAR_TOGGLE : false


}
const ALL_UI = createReducer(initialState,{
    navToggle : (state,action)=>{

    state.NAVBAR_TOGGLE = !state.NAVBAR_TOGGLE

    }
})

export default ALL_UI