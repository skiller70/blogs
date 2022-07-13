import { createReducer, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

export const postsData = createAsyncThunk(
  "posts/postsData",
  async (likes,{payload}) => {

  
   const url = "http://localhost:5000/api/test/getAllPost";
   const result =  await axios.get(url, {
       headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
     })
     .then((res) => {
     
       return res.data
     });
    return result
  }

  
);

const initialState = {
  USER_TOKEN_VALUE: {},
  POST_DATA: '',
  getAllPost: [],
  status: null,
};


export const customReducer = createReducer(initialState, {
  increment: (state, action) => {
    state.USER_TOKEN_VALUE = action.payload;
  },

  logout: (state, action) => {
    state.USER_TOKEN_VALUE = action.payload;
  },

  posts: (state, action) => {
    state.getAllPost.push(action.payload);
  },
  // getAllPost: (state, action) => {
  //   state.getAllPost = action.payload;
  // },

  [postsData.fulfilled] : (state, action)=>{
     
    state.status = "successful"
    
    state.getAllPost = action.payload

},
//   extraReducers: (builder) => {
//     builder.addCase(postsData.pending, (state, action) => {
      
//       state.status = "loading";
//     });

//     builder.addCase(postsData.fulfilled, (state, action) => {
//       state.status = "successful";
//       state.POST_DATA.push(action.payload)
//     });

//     builder.addCase(postsData.rejected, (state, action) => {
//       state.status = "failed";
//     });
//   },

  extraReducers : {



  
  }
});

export default customReducer;
