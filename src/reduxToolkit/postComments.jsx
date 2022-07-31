import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  ALL_COMMENTS: "",
  STATUS: "",
  dummyComment: { userName: "", userComment: "", commentDate: "posting..." },
  isLoading: false,
  postLoading: false,
};


export const postComments = createReducer(initialState, {
  DUMMY_COMMENT: (state, action) => {
    state.dummyComment.userName = action.payload.USER_NAME;
    state.dummyComment.userComment = action.payload.user_comments;
  },
  CLEAR_DUMMY_COMMENT: (state, action) => {
    state.dummyComment.userName = ""
    state.dummyComment.userComment = ""
  },
  POST_LOADING_TRUE: (state, action) => {
    state.postLoading = true;
  },
  POST_LOADING_FALSE: (state, action) => {
    state.postLoading = false;
  },
  SHOW_COMMENTS: (state, action) => {
    state.ALL_COMMENTS = action.payload;
  },
  POST_USER_COMMENT: (state, action) => {
    state.ALL_COMMENTS = [...state.ALL_COMMENTS, action.payload];
  },
});


