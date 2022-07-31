import {
  createReducer,
  createAsyncThunk,
  PayloadAction,
  current
} from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import AllUsersComments from "../components/helpComponents/AllUsersComments";

// FETCH ALL USER POSTS FROM SERVER ASYNC FUNCTION
export const postsData = createAsyncThunk("posts/postsData", async (likes) => {
  const url = "http://localhost:5000/api/test/getAllPost";
  const result = axios.get(url).then((res) => {
    return res.data;
  });
  return result;
});

//CREATE ASYNC POST COMMENT

export const ALL_USER_COMMENTS = createAsyncThunk(
  "USERS/ALL_USER_COMMENTS",
  async (payload) => {
    const link = "http://localhost:5000/api/test/showAllComments";
    const ALL_COMMENTS = await axios.get(link).then((res) => {
      const FILTER_COMMENTS = res.data.map((item) => {
        return {  
          id: item._id,
          name: item.commentAuthor.name,
          username: item.commentAuthor.username,
          comment: item.userComment,
          date: item.commentDate,
          POST_ID_OF_COMMENT : item.POST_ID_OF_COMMENT
        };
      });

      return FILTER_COMMENTS;
    });

   
    return ALL_COMMENTS;

  }
);

//POST COMMENT



//GLOBAL STATE
const initialState = {
  // ALL USER INFO STORE FROM TOKEN
  USER_TOKEN_VALUE: {},
  POST_DATA: "2",
  getAllPost: [],
  getAllComment: '',
  isLoading: false,
  status: "",
  reduxTest : [{name : 'rahul'} ]
};

console.log(initialState.getAllComment)
const customReducer = createReducer(initialState, {
  //STORING ALL USER INFO FROM JWT TOKEN ACTION
  USER_INFO_TOKEN: (state, action) => {
    state.USER_TOKEN_VALUE = action.payload;
  },
  //DELETE USER INFO LOGOUT
  LOGOUT: (state, action) => {
    state.USER_TOKEN_VALUE = action.payload;
  },
  REDUX_TEST : (state,action)=>{
    state.POST_DATA = action.payload
  },
  // ALL USER POST AND ALSO STORE ALL CREATE POST
  GET_ALL_POST: (state, action) => {
     state.getAllPost.push(action.payload);
  },
  setIsloading: (state, action) => {
    state.isLoading = action.payload;
  },

  //TESTING FUNCTION WORK IN PROGRESS
  consoleLog: (state, action) => {
    console.log(`hellos ggwp ${action.payload}`);
  },

  //ALL ASYNC POSTS ACTION******************************
  [postsData.pending]: (state, action) => {
    state.isLoading = false;
    state.status = "pending";
  },
  [postsData.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.status = "successful";
    state.getAllPost = action.payload;
  },
  [postsData.rejected]: (state, action) => {
    state.isLoading = false;
    state.status = "failed";
  },
  //SHOW COMMENT ASYNC ACTION
  // [ALL_USER_COMMENTS.pending]: (state, action) => {
  //   state.isLoading = true;
  // },
  // [ALL_USER_COMMENTS.rejected]: (state, action) => {
  //   state.isLoading = false;
  //   state.status = "failed";
  // },
  // [ALL_USER_COMMENTS.fulfilled]: (state, action) => {
  //   state.isLoading = false;
  //   state.status = "successful";
  //   state.getAllComment = action.payload
   
    
  // },
  //POST COMMENT ACTION



  // CREATE POST ACTION
});



// export const SHOW_ALL_COMMENT = (COMMENT_INITIAL_STATE,commentID)=>{

//   return COMMENT_INITIAL_STATE.find((item)=>item.POST_ID_OF_COMMENT == commentID )

// }

export default customReducer;
