import {
  createReducer,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";

import axios from "axios";


// FETCH ALL USER POSTS FROM SERVER ASYNC FUNCTION 
export const postsData = createAsyncThunk("posts/postsData", async (likes) => {
  const url = "http://localhost:5000/api/test/getAllPost";
  const result = await axios
    .get(url).then((res) => {
     
    return res.data;
     
    });
  return result;
});


//CREATE ASYNC FETCH DATA









//GLOBAL STATE
const initialState = {
  // ALL USER INFO STORE FROM TOKEN
  USER_TOKEN_VALUE: {},
  POST_DATA: "",
  getAllPost: [],
  isLoading: false,
};

export const customReducer = createReducer(initialState, {
  //STORING ALL USER INFO FROM JWT TOKEN ACTION
  USER_INFO_TOKEN: (state, action) => {
    state.USER_TOKEN_VALUE = action.payload;
  },
//DELETE USER INFO LOGOUT
  LOGOUT: (state, action) => {
    state.USER_TOKEN_VALUE = action.payload;
  },
// ALL USER POST AND ALSO STORE ALL CREATE POST
  GET_ALL_POST: (state, action) => {
    state.getAllPost.push(action.payload);
  },
    setIsloading : (state,action)=>{
        state.isLoading = action.payload
    },


  //TESTING FUNCTION WORK IN PROGRESS
  consoleLog : (state,action)=>{

  console.log(`hellos ggwp ${action.payload}`)
  },




  //ALL ASYNC POSTS ACTION******************************
  [postsData.fulfilled]: (state, action) => {
    state.status = "successful";
    state.getAllPost = action.payload;
  },


// CREATE POST ACTION 




});











export default customReducer;
