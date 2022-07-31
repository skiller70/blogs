import { createReducer } from "@reduxjs/toolkit";

const myState = {
   posts: "rahul",

}



const ggReducer = createReducer(myState,{

    changeName : (state,action)=>{
        state.posts = 'raju'
     }
}



)


export default ggReducer;