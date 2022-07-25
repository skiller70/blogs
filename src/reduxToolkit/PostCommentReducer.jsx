import { createReducer,createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const POST_COMMENT = createAsyncThunk(
    "user/POST_COMMENT",
    async (payload) => {
      const userCommentApi = `http://localhost:5000/api/test/userComments?userId=${payload.USER_ID}&userComment=${payload.user_comments}&postId=${payload.POST_ID}`;
    
    const result = await axios
        .get(userCommentApi, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
         
      return {id: res.data._id,
            username: res.data.commentAuthor.username,
            comment: res.data.userComment,
            date: res.data.commentDate,
            POST_ID_OF_COMMENT: res.data.POST_ID_OF_COMMENT}
         
        })
        
       return result
    }
  );






const ALL_USER_COMMENTS = useSelector(state=> state.custom.getAllComment)

console.log(ALL_COMMENTS)
//INITIAL STATE
const initialState = {
    ALL_COMMENTS : ALL_USER_COMMENTS,
    STATUS : '',
    isLoading: false


}






const postCommentReducer = createReducer({initialState,

    [POST_COMMENT.fulfilled]: (state,action)=>{
        state. = [...state,action.payload]
    },
    [POST_COMMENT.fulfilled]: (state,action)=>{
        state = [...state,action.payload]
    },
    [POST_COMMENT.fulfilled]: (state,action)=>{
        state = [...state,action.payload]
    }

})


